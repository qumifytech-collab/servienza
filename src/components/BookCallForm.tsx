'use client'

import { useState } from 'react'
import { TRADES } from '@/content/trades'
import { SUPPORT_EMAIL, SUPPORT_HOURS } from '@/lib/site'

type Status = 'idle' | 'sending' | 'done' | 'error'

const TIMES = ['Morning (8–11am)', 'Midday (11am–2pm)', 'Afternoon (2–6pm)', 'Any time — just call']
const SIZES = ['Just me', '2–3 people', '4–10 people', 'More than 10']

export default function BookCallForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string>('')
  const [firstName, setFirstName] = useState('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>
    data.page = typeof window !== 'undefined' ? window.location.href : ''
    setStatus('sending')
    setError('')
    try {
      const res = await fetch('/api/book-call', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string }
      if (!res.ok || !json.ok) throw new Error(json.error || 'Something went wrong.')
      setFirstName(data.name.split(' ')[0])
      // If the chat is on the page, make the visitor known to it so a follow-up chat is seamless.
      try {
        const crisp = (window as unknown as { $crisp?: unknown[][] }).$crisp
        if (crisp) {
          if (data.email) crisp.push(['set', 'user:email', [data.email]])
          crisp.push(['set', 'user:nickname', [data.name]])
          if (data.phone) crisp.push(['set', 'user:phone', [data.phone]])
        }
      } catch {}
      setStatus('done')
      form.reset()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div className="flex flex-col gap-4 rounded-[20px] border border-brand-200 bg-brand-50 p-7 sm:p-8" role="status" aria-live="polite">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7" /></svg>
        </span>
        <h2 className="text-2xl font-extrabold text-brand-800">Got it{firstName ? `, ${firstName}` : ''}. We&rsquo;ll call you.</h2>
        <p className="text-base leading-relaxed text-ink/80">
          A real person will call at the time you picked — usually the same or next business day ({SUPPORT_HOURS}). If you&rsquo;d rather not wait, hit the chat bubble or email{' '}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="font-bold text-brand-700">{SUPPORT_EMAIL}</a>.
        </p>
        <p className="text-sm text-muted">Have your customer list handy (any format — spreadsheet, old app export, photos of a notebook). We&rsquo;ll load it during the call.</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5 rounded-[20px] border border-line bg-white p-6 sm:p-8" noValidate>
      {/* Honeypot — hidden from people, filled by bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" name="name" required autoComplete="name" placeholder="Maria Alvarez" />
        <Field label="Business name" name="business" autoComplete="organization" placeholder="Blue Wave Pools" hint="Optional" />
        <Field label="Phone" name="phone" type="tel" required autoComplete="tel" placeholder="(555) 555-0142" hint="We call this number" />
        <Field label="Email" name="email" type="email" autoComplete="email" placeholder="you@example.com" hint="Optional — for the confirmation" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Select label="What kind of work do you do?" name="trade" options={[...TRADES.map((t) => t.name), 'Something else']} />
        <Select label="How many people, including you?" name="teamSize" options={SIZES} />
      </div>

      <fieldset className="grid gap-2">
        <legend className="text-sm font-bold text-ink">Best time to call</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {TIMES.map((t, i) => (
            <label key={t} className="flex cursor-pointer items-center gap-3 rounded-xl border border-line px-4 py-3 text-[15px] has-[:checked]:border-brand-600 has-[:checked]:bg-brand-50">
              <input type="radio" name="bestTime" value={t} defaultChecked={i === TIMES.length - 1} className="h-4 w-4 accent-brand-600" />
              {t}
            </label>
          ))}
        </div>
        <span className="text-xs text-faint">Times are Eastern. Tell us your time zone in the note if it&rsquo;s different.</span>
      </fieldset>

      <Field label="What do you use today?" name="currentTool" placeholder="Paper and texts, a spreadsheet, Jobber, Housecall Pro…" hint="Optional — helps us bring your customers over" />

      <div className="grid gap-2">
        <label htmlFor="note" className="text-sm font-bold text-ink">Anything you want us to know?</label>
        <textarea id="note" name="note" rows={3} className={inputCls} placeholder="e.g. I have about 60 weekly customers and I'm tired of chasing invoices." />
      </div>

      {status === 'error' && (
        <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[15px] text-red-800">
          {error} You can also email <a href={`mailto:${SUPPORT_EMAIL}`} className="font-bold underline">{SUPPORT_EMAIL}</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex items-center justify-center rounded-xl bg-brand-600 px-6 py-4 text-[17px] font-bold text-white hover:bg-brand-700 disabled:cursor-wait disabled:opacity-70"
      >
        {status === 'sending' ? 'Sending…' : 'Request my setup call'}
      </button>
      <p className="text-center text-xs text-faint">Free, no card, no obligation. We only use this to call you back — see our <a href="/privacy" className="underline">privacy policy</a>.</p>
    </form>
  )
}

const inputCls = 'w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] text-ink placeholder:text-faint/70 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/30'

function Field({ label, name, type = 'text', required, autoComplete, placeholder, hint }: { label: string; name: string; type?: string; required?: boolean; autoComplete?: string; placeholder?: string; hint?: string }) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="text-sm font-bold text-ink">
        {label} {required && <span className="text-brand-700" aria-hidden="true">*</span>}
      </label>
      <input id={name} name={name} type={type} required={required} autoComplete={autoComplete} placeholder={placeholder} className={inputCls} />
      {hint && <span className="text-xs text-faint">{hint}</span>}
    </div>
  )
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="text-sm font-bold text-ink">{label}</label>
      <select id={name} name={name} className={inputCls} defaultValue="">
        <option value="">Choose one…</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  )
}
