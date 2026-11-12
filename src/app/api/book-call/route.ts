import { NextResponse } from 'next/server'
import { SUPPORT_EMAIL } from '@/lib/site'

export const runtime = 'nodejs'

/**
 * Setup-call requests from /book-a-call.
 *
 * The record of truth is the backend: POST {SERVIENZA_API_URL}/v1/cta/setup-call stores the
 * request in the setup_call_requests table (wonderpool-api V66) and emails the lead inbox; the
 * web app's Admin → Setup calls page is the worklist. Set SERVIENZA_API_URL (e.g.
 * https://api.servienza.com/api). The visitor's IP is forwarded so the stored row has it.
 *
 * Optional extra notifications, each controlled by env vars:
 *  1. Crisp — creates a conversation in the same inbox the chat uses, with the person's name,
 *     email and phone set, so you reply from where you already work.
 *     Needs NEXT_PUBLIC_CRISP_WEBSITE_ID + CRISP_IDENTIFIER + CRISP_KEY (a Crisp "plugin" token
 *     from the Crisp Marketplace → your private plugin → Tokens; scope: website:conversation:*).
 *  2. Email via Resend — needs RESEND_API_KEY (+ optional BOOK_CALL_FROM, BOOK_CALL_TO).
 *
 * If the backend is unreachable and no notification channel is configured, the request is only
 * logged and the visitor still sees a confirmation; check your deploy logs.
 */

const API_URL = (process.env.SERVIENZA_API_URL ?? '').replace(/\/$/, '')
const CRISP_WEBSITE_ID = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID
const CRISP_IDENTIFIER = process.env.CRISP_IDENTIFIER
const CRISP_KEY = process.env.CRISP_KEY
const RESEND_API_KEY = process.env.RESEND_API_KEY
const BOOK_CALL_TO = process.env.BOOK_CALL_TO ?? SUPPORT_EMAIL
const BOOK_CALL_FROM = process.env.BOOK_CALL_FROM ?? 'Servienza website <no-reply@servienza.com>'

type Lead = {
  name: string
  business: string
  trade: string
  phone: string
  email: string
  teamSize: string
  bestTime: string
  currentTool: string
  note: string
  page: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const str = (v: unknown, max = 500) => (typeof v === 'string' ? v.trim().slice(0, max) : '')

export async function POST(req: Request) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Bad request' }, { status: 400 })
  }

  // Honeypot: real people never fill this.
  if (str(body.website)) return NextResponse.json({ ok: true }, { status: 202 })

  const lead: Lead = {
    name: str(body.name, 120),
    business: str(body.business, 160),
    trade: str(body.trade, 60),
    phone: str(body.phone, 40),
    email: str(body.email, 160),
    teamSize: str(body.teamSize, 40),
    bestTime: str(body.bestTime, 120),
    currentTool: str(body.currentTool, 120),
    note: str(body.note, 2000),
    page: str(body.page, 300),
  }

  if (!lead.name || !lead.phone) {
    return NextResponse.json({ ok: false, error: 'Name and phone are required.' }, { status: 422 })
  }
  if (lead.email && !EMAIL_RE.test(lead.email)) {
    return NextResponse.json({ ok: false, error: 'That email address does not look right.' }, { status: 422 })
  }

  const summary = formatLead(lead)
  const results: string[] = []

  if (API_URL) {
    try {
      await sendToBackend(lead, req)
      results.push('backend')
    } catch (e) {
      console.error('[book-call] Backend delivery failed', e)
    }
  } else {
    console.warn('[book-call] SERVIENZA_API_URL is not set; request not stored in the backend')
  }

  if (CRISP_WEBSITE_ID && CRISP_IDENTIFIER && CRISP_KEY) {
    try {
      await sendToCrisp(lead, summary)
      results.push('crisp')
    } catch (e) {
      console.error('[book-call] Crisp delivery failed', e)
    }
  }
  if (RESEND_API_KEY) {
    try {
      await sendEmail(lead, summary)
      results.push('email')
    } catch (e) {
      console.error('[book-call] Email delivery failed', e)
    }
  }
  if (results.length === 0) {
    console.warn('[book-call] No delivery channel configured or all failed. Lead:\n' + summary)
  }

  return NextResponse.json({ ok: true, delivered: results }, { status: 202 })
}

function formatLead(l: Lead) {
  return [
    `Setup call request`,
    `Name: ${l.name}`,
    l.business && `Business: ${l.business}`,
    l.trade && `Trade: ${l.trade}`,
    `Phone: ${l.phone}`,
    l.email && `Email: ${l.email}`,
    l.teamSize && `Team size: ${l.teamSize}`,
    l.bestTime && `Best time to call: ${l.bestTime}`,
    l.currentTool && `Using today: ${l.currentTool}`,
    l.note && `Note: ${l.note}`,
    l.page && `From page: ${l.page}`,
  ]
    .filter(Boolean)
    .join('\n')
}

/** Store the request in wonderpool-api (setup_call_requests). 422 from the backend is a validation error we surface. */
async function sendToBackend(l: Lead, req: Request) {
  const visitorIp = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? ''
  const res = await fetch(`${API_URL}/v1/cta/setup-call`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(visitorIp ? { 'X-Forwarded-For': visitorIp } : {}),
      'User-Agent': req.headers.get('user-agent') ?? 'servienza.com',
    },
    body: JSON.stringify({
      name: l.name,
      businessName: l.business,
      trade: l.trade,
      phone: l.phone,
      email: l.email,
      teamSize: l.teamSize,
      bestTime: l.bestTime,
      currentTool: l.currentTool,
      note: l.note,
      sourcePage: l.page,
    }),
    signal: AbortSignal.timeout(8000),
  })
  if (!res.ok) throw new Error(`backend ${res.status}: ${await res.text()}`)
}

async function crisp(path: string, method: string, payload?: unknown) {
  const auth = Buffer.from(`${CRISP_IDENTIFIER}:${CRISP_KEY}`).toString('base64')
  const res = await fetch(`https://api.crisp.chat/v1/website/${CRISP_WEBSITE_ID}${path}`, {
    method,
    headers: { Authorization: `Basic ${auth}`, 'X-Crisp-Tier': 'plugin', 'Content-Type': 'application/json' },
    body: payload ? JSON.stringify(payload) : undefined,
  })
  const json = (await res.json().catch(() => ({}))) as { error?: boolean; reason?: string; data?: { session_id?: string } }
  if (!res.ok || json.error) throw new Error(`Crisp ${method} ${path}: ${res.status} ${json.reason ?? ''}`)
  return json
}

async function sendToCrisp(l: Lead, summary: string) {
  const created = await crisp('/conversation', 'POST')
  const sessionId = created.data?.session_id
  if (!sessionId) throw new Error('Crisp: no session_id')
  await crisp(`/conversation/${sessionId}/meta`, 'PATCH', {
    nickname: l.business ? `${l.name} (${l.business})` : l.name,
    ...(l.email ? { email: l.email } : {}),
    phone: l.phone,
    segments: ['setup-call', 'prospect', ...(l.trade ? [l.trade.toLowerCase().replace(/[^a-z0-9]+/g, '-')] : [])],
    data: { source: 'book-a-call', trade: l.trade, team_size: l.teamSize, best_time: l.bestTime, current_tool: l.currentTool },
  })
  await crisp(`/conversation/${sessionId}/message`, 'POST', { type: 'text', from: 'user', origin: 'chat', content: summary })
}

async function sendEmail(l: Lead, summary: string) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: BOOK_CALL_FROM,
      to: [BOOK_CALL_TO],
      ...(l.email ? { reply_to: l.email } : {}),
      subject: `Setup call: ${l.name}${l.business ? ` — ${l.business}` : ''}${l.trade ? ` (${l.trade})` : ''}`,
      text: summary,
    }),
  })
  if (!res.ok) throw new Error(`Resend: ${res.status} ${await res.text()}`)
}
