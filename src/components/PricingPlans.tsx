'use client'

import { useState } from 'react'
import { ANNUAL_SAVING_PCT, EXTRA_SEAT_ANNUAL, EXTRA_SEAT_MONTHLY, FREE_PLAN_LIVE, PLANS, TRIAL_DAYS, annualPerMonth, formatPrice } from '@/content/plans'
import { BOOK_CALL_URL, SIGNUP_URL } from '@/lib/site'
import { CheckList } from './ui'

type Interval = 'month' | 'year'

/** The two plan cards with a Monthly / Annual toggle. Used on the homepage and /pricing. The monthly price is what renders on the server, so crawlers see it. */
export default function PricingPlans({ headingLevel = 'h3' }: { headingLevel?: 'h2' | 'h3' }) {
  const H = headingLevel
  const [interval, setInterval_] = useState<Interval>('month')
  const yearly = interval === 'year'
  return (
    <div className="flex w-full flex-col items-center gap-8">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <span className="text-[15px] font-semibold text-muted">Billing</span>
        <div role="radiogroup" aria-label="Billing period" className="inline-flex rounded-xl bg-ground p-1">
          {(['month', 'year'] as const).map((i) => (
            <button
              key={i}
              type="button"
              role="radio"
              aria-checked={interval === i}
              onClick={() => setInterval_(i)}
              className={`rounded-lg px-4 py-2 text-[15px] font-bold transition-colors ${interval === i ? 'bg-ink text-white' : 'text-ink hover:bg-white'}`}
            >
              {i === 'month' ? 'Monthly' : 'Annual'}
            </button>
          ))}
        </div>
        <span className="text-[15px] font-bold text-brand-700 underline decoration-brand-300 decoration-[3px] underline-offset-4">Save {ANNUAL_SAVING_PCT}% with annual billing</span>
      </div>
      <div className="grid w-full max-w-[900px] gap-5 md:grid-cols-2">
        {PLANS.map((p) => {
          const isFree = p.id === 'free'
          const comingSoon = isFree && !FREE_PLAN_LIVE
          return (
            <div key={p.id} className={`relative flex flex-col gap-5 rounded-[20px] bg-white p-6 sm:p-8 ${p.featured ? 'border-2 border-brand-600' : 'border border-line'}`}>
              {p.featured && <span className="absolute -top-3.5 left-6 rounded-full bg-brand-600 px-3 py-1 text-xs font-extrabold text-white sm:left-8">{TRIAL_DAYS}-day free trial</span>}
              {comingSoon && <span className="absolute -top-3.5 left-6 rounded-full bg-ink px-3 py-1 text-xs font-extrabold text-white sm:left-8">Coming soon</span>}
              <div>
                <H className="text-[22px] font-extrabold">{p.name}</H>
                <p className="mt-1 text-[15px] text-muted">{p.tagline}</p>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-[44px] font-extrabold tracking-[-1.5px]">{isFree ? formatPrice(0) : yearly && p.annual ? annualPerMonth(p.annual) : formatPrice(p.monthly)}</span>
                <span className="text-[15px] text-faint">{isFree ? 'forever' : '/month'}</span>
              </div>
              <p className="-mt-3 text-sm font-bold text-ink/80">
                {p.seatsLabel}
                {!isFree && p.annual && (
                  <span className="block font-semibold text-faint">{yearly ? `Billed ${formatPrice(p.annual)} a year` : `or ${formatPrice(p.annual)} a year (${annualPerMonth(p.annual)}/mo)`}</span>
                )}
              </p>
              {comingSoon ? (
                <a href={SIGNUP_URL} className="block rounded-xl border border-line py-3.5 text-center text-base font-bold text-ink hover:bg-ground">
                  Start the {TRIAL_DAYS}-day trial instead
                </a>
              ) : (
                <a
                  href={`${SIGNUP_URL}?plan=${p.id}${!isFree && yearly ? '&billing=year' : ''}`}
                  className={`block rounded-xl py-3.5 text-center text-base font-bold ${p.featured ? 'bg-brand-600 text-white hover:bg-brand-700' : 'border border-line text-ink hover:bg-ground'}`}
                >
                  {isFree ? 'Start free' : `Start ${TRIAL_DAYS}-day free trial`}
                </a>
              )}
              {isFree && FREE_PLAN_LIVE && (
                <p className="-mt-2 text-xs leading-relaxed text-faint">
                  Every new account starts with {TRIAL_DAYS} days of the Team plan switched on. Never add a card and you simply stay on Free — nothing to cancel.
                </p>
              )}
              <CheckList items={p.includes} />
              {p.locked && (
                <ul className="space-y-2 border-t border-line pt-4 text-[15px] text-faint">
                  {p.locked.map((l) => (
                    <li key={l} className="flex gap-2.5">
                      <svg className="mt-[3px] h-4 w-4 flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
                      <span>{l} <span className="text-xs">(Team plan)</span></span>
                    </li>
                  ))}
                </ul>
              )}
              {p.limits && (
                <div className="rounded-xl bg-ground p-4 text-sm leading-relaxed text-muted">
                  <b className="text-ink">Fair-use limits, so the price can stay flat:</b>
                  <ul className="mt-1.5 list-disc space-y-1 pl-5">
                    {p.limits.map((l) => (<li key={l}>{l}</li>))}
                  </ul>
                </div>
              )}
              {p.footnote && <p className="text-xs leading-relaxed text-faint">{p.footnote}</p>}
            </div>
          )
        })}
      </div>
      <p className="max-w-[720px] text-center text-[15px] leading-relaxed text-muted">
        {EXTRA_SEAT_MONTHLY !== null ? (
          <>Need more than two technicians? Add seats for {yearly ? `$${EXTRA_SEAT_ANNUAL} a year` : `$${EXTRA_SEAT_MONTHLY}/month`} each. </>
        ) : (
          <>More than two technicians? <a href={BOOK_CALL_URL} className="font-bold text-brand-700 hover:text-brand-800">Talk to us</a> — we&rsquo;ll price the extra seats for you. </>
        )}
        {yearly ? 'Annual plans are paid up front and run for the year; cancel and you drop to Free when it ends.' : 'No contract. Cancel any time and take your data with you.'} Take your data with you whenever you leave.
      </p>
    </div>
  )
}
