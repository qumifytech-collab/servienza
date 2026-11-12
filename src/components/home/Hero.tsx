'use client'

import { useEffect, useState } from 'react'
import { PICKER_ORDER, TRADE_BY_SLUG } from '@/content/trades'
import { BOOK_CALL_URL, SIGNUP_URL, TRIAL_DAYS } from '@/lib/site'
import { Button } from '@/components/ui'
import { BrowserMock, BrowserShot, PhoneMock, PhoneShot } from './Mocks'

const STORAGE_KEY = 'servienza_trade'
const DEFAULT = 'pool-service'

/**
 * Hero with the trade picker. The headline and body are static HTML (crawlers and answer engines
 * see the full default page); picking a trade only swaps the example job names in the mock
 * screens and the sign-up link's ?trade= hint. The choice is remembered in this browser.
 */
export default function Hero({ webSrc, phoneSrc }: { webSrc?: string; phoneSrc?: string }) {
  const [slug, setSlug] = useState(DEFAULT)
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved && TRADE_BY_SLUG[saved]) setSlug(saved)
    } catch {}
  }, [])
  const pick = (s: string) => {
    setSlug(s)
    try {
      localStorage.setItem(STORAGE_KEY, s)
    } catch {}
  }
  const trade = TRADE_BY_SLUG[slug] ?? TRADE_BY_SLUG[DEFAULT]
  const chips = [...PICKER_ORDER.map((s) => TRADE_BY_SLUG[s]), { slug: 'other', short: 'Something else', jobTypes: [] as string[] }]

  return (
    <section id="top" className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-12 px-4 pb-10 pt-10 sm:px-8 sm:pt-16">
      <div className="flex min-w-0 flex-1 basis-[460px] flex-col gap-6">
        <span className="inline-flex items-center gap-2 self-start rounded-full bg-brand-50 px-3 py-1.5 text-[13px] font-bold text-brand-700">
          <span className="inline-block h-2 w-2 rounded-full bg-brand-600" aria-hidden="true" />
          Built for one-truck businesses and small crews
        </span>
        <h1 className="text-[38px] font-extrabold leading-[1.05] tracking-[-1.2px] sm:text-[60px] sm:tracking-[-1.8px]">
          Run your service business from your phone.
        </h1>
        <p className="max-w-[540px] text-[17px] leading-relaxed text-muted sm:text-xl">
          Book jobs, send estimates, and get paid — without the paperwork at the kitchen table. Servienza does the office work so you can do the real work.
        </p>

        <div className="flex flex-col gap-2.5">
          <span className="text-[13px] font-bold uppercase tracking-[0.6px] text-faint">I run a…</span>
          <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0" role="group" aria-label="Pick your trade">
            {chips.map((c) => {
              const active = c.slug === slug || (c.slug === 'other' && !PICKER_ORDER.includes(slug))
              return (
                <button
                  key={c.slug}
                  type="button"
                  aria-pressed={active}
                  onClick={() => pick(c.slug === 'other' ? 'handyman' : c.slug)}
                  className={`flex-none rounded-full border px-3.5 py-2.5 text-sm font-bold transition-colors ${
                    active ? 'border-brand-600 bg-brand-600 text-white' : 'border-line bg-white text-ink/80 hover:bg-ground'
                  }`}
                >
                  {c.short}
                </button>
              )
            })}
          </div>
        </div>

        <div className="mt-1 flex flex-col gap-3 sm:flex-row sm:flex-wrap [&>a]:whitespace-nowrap">
          <Button href={`${SIGNUP_URL}?trade=${encodeURIComponent(slug)}`}>
            Start free — no card needed
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </Button>
          <Button href={BOOK_CALL_URL} variant="secondary">
            <PhoneIcon />
            Talk to a human
          </Button>
        </div>
        <p className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-faint">
          <span>✓ {TRIAL_DAYS}-day free trial</span>
          <span>✓ We move your customer list for you</span>
          <span>✓ Cancel anytime</span>
        </p>
      </div>

      {/* Visual: browser + phone. On phones only the phone shows. */}
      <div className="relative hidden h-[560px] min-w-0 flex-1 basis-[520px] md:block">
        <div className="absolute left-[60px] top-0 w-[600px] max-w-[calc(100%-60px)]">
          {webSrc ? <BrowserShot src={webSrc} /> : <BrowserMock jobs={trade.jobTypes} />}
        </div>
        <div className="absolute left-0 top-[140px]">
          {phoneSrc ? <PhoneShot src={phoneSrc} /> : <PhoneMock jobs={trade.jobTypes} />}
        </div>
      </div>
      <div className="flex w-full justify-center md:hidden">
        {phoneSrc ? <PhoneShot src={phoneSrc} /> : <PhoneMock jobs={trade.jobTypes} />}
      </div>
    </section>
  )
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
    </svg>
  )
}
