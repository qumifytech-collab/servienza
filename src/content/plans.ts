/**
 * Pricing — the ONLY place prices and limits live. Pages, JSON-LD and llms.txt read from here.
 * Decisions as of 12 Nov 2026 (plan-costing handoff), all confirmed: Free owner-only plan (not built
 * yet — see FREE_PLAN_LIVE), $100/mo for two technicians with every feature, $25/mo per extra seat,
 * 60-day trial, trial that ends unpaid drops to Free. No email ceiling is advertised.
 */

export const TRIAL_DAYS = 60

/** Set false to show the Free card as "Coming soon" (no sign-up button, kept out of structured data). True once the backend Free tier is deployed. */
export const FREE_PLAN_LIVE = true

/** Extra technician seat, per month (confirmed 12 Nov 2026). null would hide the number and say "talk to us". */
export const EXTRA_SEAT_MONTHLY: number | null = 25

export type PlanId = 'free' | 'paid'

export type Plan = {
  id: PlanId
  name: string
  tagline: string
  /** USD per month; 0 = free. */
  monthly: number
  /** Technicians / users included. */
  seats: number
  seatsLabel: string
  featured?: boolean
  /** Headline bullets on the card. */
  includes: string[]
  /** Shown greyed with a lock on the Free card. */
  locked?: string[]
  /** Usage limits, paid plan only. */
  limits?: string[]
  footnote?: string
}

export const PLANS: Plan[] = [
  {
    id: 'free',
    name: 'Free',
    tagline: 'Just you, running the business from your phone.',
    monthly: 0,
    seats: 1,
    seatsLabel: 'Owner only (1 user)',
    includes: [
      'Unlimited customers',
      'Scheduling and repeat jobs',
      'Estimates customers approve and sign online',
      'Invoices with pay links (Stripe)',
      'QuickBooks Online sync',
      'Customer records, agreements and documents — kept forever',
      'Phone app + web app',
    ],
    locked: ['Missed-call voicemail and text-back', 'Customer text messages', 'Best-route planning and drive times', 'Live technician map'],
    footnote: 'Free forever. Invoices, agreements and estimates are never deleted. Storage of service photos and reports on the Free plan may be limited in future; nothing is removed today.',
  },
  {
    id: 'paid',
    name: 'Team',
    tagline: 'You plus a technician, with the phone and texting features on.',
    monthly: 100,
    seats: 2,
    seatsLabel: '2 technicians included',
    featured: true,
    includes: [
      'Everything in Free',
      'Missed-call catcher: text-back + voicemail as text',
      'Customer texts: reminders, on-the-way, invoice and pay links',
      'Best-route planning and drive-time warnings',
      'Live technician map',
      'Priority chat support',
    ],
    limits: ['50 voicemail transcripts a month — voicemails are still recorded and listed after that, just without the transcript', '300 text messages a month — after that pay links go by email and staff alerts by push and email; login codes are never counted'],
    footnote: `Limits reset on the 1st. Hitting one only tells you; nothing is cut off and nothing is upsold.`,
  },
]

export const PAID = PLANS[1]
export const FREE = PLANS[0]

export function formatPrice(n: number): string {
  return n === 0 ? '$0' : `$${n}`
}
