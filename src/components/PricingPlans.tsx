import { EXTRA_SEAT_MONTHLY, FREE_PLAN_LIVE, PLANS, TRIAL_DAYS, formatPrice } from '@/content/plans'
import { BOOK_CALL_URL, SIGNUP_URL } from '@/lib/site'
import { CheckList } from './ui'

/** The two plan cards. Used on the homepage and /pricing. Server component — no toggle, prices are flat monthly. */
export default function PricingPlans({ headingLevel = 'h3' }: { headingLevel?: 'h2' | 'h3' }) {
  const H = headingLevel
  return (
    <div className="flex w-full flex-col items-center gap-8">
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
                <span className="text-[44px] font-extrabold tracking-[-1.5px]">{formatPrice(p.monthly)}</span>
                <span className="text-[15px] text-faint">{isFree ? 'forever' : '/month'}</span>
              </div>
              <p className="-mt-3 text-sm font-bold text-ink/80">{p.seatsLabel}</p>
              {comingSoon ? (
                <a href={SIGNUP_URL} className="block rounded-xl border border-line py-3.5 text-center text-base font-bold text-ink hover:bg-ground">
                  Start the {TRIAL_DAYS}-day trial instead
                </a>
              ) : (
                <a
                  href={`${SIGNUP_URL}?plan=${p.id}`}
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
          <>Need more than two technicians? Add seats for ${EXTRA_SEAT_MONTHLY}/month each. </>
        ) : (
          <>More than two technicians? <a href={BOOK_CALL_URL} className="font-bold text-brand-700 hover:text-brand-800">Talk to us</a> — we&rsquo;ll price the extra seats for you. </>
        )}
        No contract. Cancel any time and take your data with you.
      </p>
    </div>
  )
}
