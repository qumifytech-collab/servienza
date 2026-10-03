'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Pre-chat form + launcher for the marketing site.
 *
 * Crisp's own bubble is hidden (see layout.tsx). This button replaces it so that nobody reaches
 * the chat anonymously: we collect name, email, phone and a first question, hand them to Crisp as
 * the visitor's profile, and send them as the opening message, so the inbox shows who is writing
 * and what they want before anyone replies.
 *
 * Returning visitors skip the form — the details are remembered in this browser and Crisp keeps
 * the conversation.
 */

const STORAGE_KEY = 'servienza_chat_lead'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Crisp = unknown[][]
declare global {
  interface Window {
    $crisp?: Crisp
  }
}

function push(...command: unknown[]) {
  if (typeof window === 'undefined') return
  window.$crisp = window.$crisp ?? []
  window.$crisp.push(command)
}

function hasLead(): boolean {
  try {
    return !!localStorage.getItem(STORAGE_KEY)
  } catch {
    return false
  }
}

function openChat() {
  push('do', 'chat:show')
  push('do', 'chat:open')
}

export default function ChatLauncher() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [question, setQuestion] = useState('')
  const [website, setWebsite] = useState('') // honeypot — real people never see or fill this
  const [error, setError] = useState<string | null>(null)
  const firstField = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!open) return
    firstField.current?.focus()
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const onLauncherClick = () => {
    if (hasLead()) openChat()
    else setOpen((o) => !o)
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const n = name.trim()
    const em = email.trim()
    const ph = phone.trim()
    const q = question.trim()

    if (website) return // bot
    if (!n) return setError('Please enter your name.')
    if (!EMAIL_RE.test(em)) return setError('Please enter a valid email address.')
    // Phone is optional, but if it is given it has to be dialable.
    if (ph && ph.replace(/\D/g, '').length < 10) return setError('That phone number looks too short. Leave it blank if you prefer.')
    if (q.length < 5) return setError('Tell us a little about what you need help with.')

    // Who they are — shows in the Crisp sidebar and lets replies go by email if they leave.
    push('set', 'user:nickname', [n])
    push('set', 'user:email', [em])
    if (ph) push('set', 'user:phone', [ph])
    push('set', 'session:data', [[['platform', 'marketing'], ...(ph ? [['phone', ph]] : [])]])
    push('set', 'session:segments', [['prospect']])

    // The opening message, so the first thing in the inbox is the whole picture.
    push('do', 'message:send', [
      'text',
      `Name: ${n}\nEmail: ${em}${ph ? `\nPhone: ${ph}` : ''}\n\n${q.slice(0, 1000)}`,
    ])
    openChat()

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ name: n, email: em }))
    } catch {
      /* private mode: they will see the form again next visit, nothing breaks */
    }
    setOpen(false)
    setQuestion('')
    setError(null)
  }

  const field =
    'w-full rounded-lg border border-[var(--border-2)] bg-[var(--bg)] px-3 py-2 text-sm text-[var(--text)] placeholder:text-[var(--text-3)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-line)]'

  return (
    <>
      {open && (
        <form
          onSubmit={submit}
          role="dialog"
          aria-label="Chat with Servienza"
          className="fixed bottom-24 right-4 z-[60] w-[min(360px,calc(100vw-2rem))] rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-5 shadow-[var(--shadow-lg)]"
        >
          <div className="mb-3 flex items-start justify-between gap-3">
            <div>
              <h2 className="font-display text-base font-bold text-[var(--text)]">Chat with us</h2>
              <p className="mt-0.5 text-xs text-[var(--text-2)]">
                A real person replies, usually within minutes in business hours.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="-mr-1 -mt-1 rounded-md p-1 text-[var(--text-3)] hover:bg-[var(--bg-2)]"
            >
              ✕
            </button>
          </div>

          <div className="space-y-2.5">
            <input ref={firstField} className={field} placeholder="Your name" autoComplete="name"
                   value={name} onChange={(e) => setName(e.target.value)} />
            <input className={field} type="email" placeholder="Email address" autoComplete="email"
                   value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className={field} type="tel" placeholder="Phone number (optional)" autoComplete="tel"
                   value={phone} onChange={(e) => setPhone(e.target.value)} />
            <textarea className={`${field} resize-none`} rows={3} maxLength={1000}
                      placeholder="What can we help you with?"
                      value={question} onChange={(e) => setQuestion(e.target.value)} />
            {/* Honeypot: hidden from people and assistive tech, bots fill it in. */}
            <input tabIndex={-1} autoComplete="off" aria-hidden="true" value={website}
                   onChange={(e) => setWebsite(e.target.value)}
                   className="absolute left-[-9999px] h-0 w-0 opacity-0" name="website" />
          </div>

          {error && <p role="alert" className="mt-2 text-xs text-red-600">{error}</p>}

          <button type="submit" className="btn btn-accent mt-3 w-full justify-center">
            Start chat
          </button>
          <p className="mt-2 text-[11px] leading-snug text-[var(--text-3)]">
            We only use your details to answer you. See our{' '}
            <a href="/privacy" className="underline">privacy policy</a>.
          </p>
        </form>
      )}

      <button
        type="button"
        onClick={onLauncherClick}
        aria-label="Chat with us"
        aria-expanded={open}
        className="fixed bottom-5 right-4 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--on-accent)] shadow-[var(--shadow)] transition hover:bg-[var(--accent-2)]"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
             strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.6 8.6 0 0 1-3.6-.8L3 21l1.9-5.4A8.4 8.4 0 1 1 21 11.5z" />
        </svg>
      </button>
    </>
  )
}
