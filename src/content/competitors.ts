/**
 * /compare/[slug]. Keep competitor facts here only, with the date and source they were checked
 * against. The page prints `lastChecked`; re-check and bump the date when you touch this file.
 *
 * Servienza's own prices come from plans.ts so the two never drift.
 */
export type Competitor = {
  slug: string
  name: string
  /** Legal owner for the trademark footnote. */
  owner: string
  website: string
  /** ISO date the numbers were checked. */
  lastChecked: string
  /** Where the numbers came from. Prefer the competitor's own pricing page. */
  sources: { label: string; url: string }[]
  verdict: string
  rows: { label: string; ours: string; theirs: string }[]
  pickUsIf: string[]
  pickThemIf: string[]
  switching: string
  exportHint: string
  faq: { q: string; a: string }[]
}

export const COMPETITORS: Competitor[] = [
  {
    slug: 'jobber',
    name: 'Jobber',
    owner: 'Octopusapp Inc.',
    website: 'https://www.getjobber.com',
    lastChecked: '2026-11-08',
    sources: [
      { label: 'getjobber.com/pricing', url: 'https://www.getjobber.com/pricing/' },
      { label: 'OneCrew — Jobber pricing (Oct 2026)', url: 'https://www.getonecrew.com/post/jobber-pricing' },
    ],
    verdict:
      'Jobber is a bigger, older product with more add-ons; Servienza is simpler, charges one flat price for a two-technician business with no per-user add-ons, and sets you up on a call instead of leaving you to do it. If you have fewer than ten people and you\'d rather talk to a person than watch tutorials, Servienza is the better fit. If you want a large marketplace of integrations or built-in marketing tools, look at Jobber.',
    rows: [
      { label: 'Price for one person', ours: 'Free plan (owner only; no texting or missed-call features) or the $100/mo Team plan', theirs: 'Core $49/mo ($29 billed yearly), 1 user — automated reminders and QuickBooks sync are not on Core' },
      { label: 'Price for two technicians', ours: '$100/mo flat, everything included', theirs: 'Connect Team $199/mo ($149 yearly), 5 users; extra users $29/mo on eligible plans' },
      { label: 'Features held back to upper plans', ours: 'Two plans only: Free runs the business; the $100 plan adds texting, missed-call capture, routing and the live map', theirs: 'Yes — automated reminders and QuickBooks sync start on Connect; AI Receptionist is a $29/mo add-on except on Plus' },
      { label: 'Setup', ours: 'A 20-minute call with a person; we import your customers', theirs: 'Self-serve with help articles and onboarding resources' },
      { label: 'Card payments', ours: 'Pay link sent automatically with every invoice (Stripe). No Servienza fee on top of Stripe\'s rate', theirs: 'Jobber Payments; processing rates on their pricing page' },
      { label: 'Missed-call text-back & voicemail-to-text', ours: 'Included', theirs: 'AI Receptionist add-on, $29/mo (included on Plus)' },
      { label: 'One monthly invoice for repeat customers', ours: 'Included — per visit or flat monthly', theirs: 'Batch invoicing available; check your plan' },
      { label: 'QuickBooks Online sync', ours: 'Included on both plans, Free too', theirs: 'From Connect up' },
      { label: 'Contract', ours: 'None; cancel in the app; export everything', theirs: 'Monthly or annual billing' },
      { label: 'Built for', ours: 'Owner-operators and two-person shops; extra seats $25/mo', theirs: 'Small businesses scaling to larger teams; 15+ users quoted by sales' },
    ],
    pickUsIf: [
      'You\'re 1–10 people and you do the work yourself',
      'You\'d rather have a person set it up than figure it out',
      'You don\'t want to count which plan a feature is on',
      'Missed calls and slow payments are your real problems',
      'You bill repeat customers monthly',
    ],
    pickThemIf: [
      'You want built-in marketing tools (email campaigns, review requests)',
      'You need a large marketplace of third-party integrations',
      'You\'re planning to grow well past 10–15 people soon',
      'You want a long track record and a big user community',
    ],
    switching:
      'Export your clients from Jobber (we\'ll show you the button), send us the file, and we load customers, addresses and open invoices before your setup call. Most switches are done in one call. Your history in Jobber stays readable there until you close that account.',
    exportHint: 'Jobber → Clients → Export (CSV)',
    faq: [
      { q: 'Is Servienza cheaper than Jobber?', a: 'For a one- or two-technician business, yes: $100 flat covers two technicians with texting, missed-call capture and routing included, and the owner-only Free plan costs nothing. Compare the exact numbers in the table — they\'re dated.' },
      { q: 'Will my customers notice the switch?', a: 'They\'ll get texts and invoices from your business name, as before. The pay link looks different; that\'s all.' },
      { q: 'Can I try Servienza while still on Jobber?', a: 'Yes — the 60-day trial needs no card. Run one technician for a full month on it and compare.' },
    ],
  },
  {
    slug: 'housecall-pro',
    name: 'Housecall Pro',
    owner: 'Codefied Inc.',
    website: 'https://www.housecallpro.com',
    lastChecked: '2026-11-08',
    sources: [
      { label: 'housecallpro.com/pricing', url: 'https://www.housecallpro.com/pricing/' },
      { label: 'SchedulingKit — Housecall Pro pricing (Oct 2026)', url: 'https://schedulingkit.com/pricing-guides/housecall-pro-pricing' },
    ],
    verdict:
      'Housecall Pro is a full-featured platform aimed at home-service companies that want online booking, marketing and financing in one place; Servienza is the simpler tool for a one-truck business or a small crew that mainly needs scheduling, estimates, invoices and payments to just work, with a person to set it up. Under ten people and not a "computer person"? Servienza. Want consumer financing and a booking widget on your website today? Housecall Pro.',
    rows: [
      { label: 'Price for one person', ours: 'Free plan (owner only; no texting or missed-call features) or the $100/mo Team plan', theirs: 'Basic $79/mo ($59 billed yearly), 1 user — no QuickBooks sync on Basic' },
      { label: 'Price for two technicians', ours: '$100/mo flat, everything included', theirs: 'Essentials $189/mo ($149 yearly), up to 5 users' },
      { label: 'Features held back to upper plans', ours: 'Two plans only: Free runs the business; the $100 plan adds texting, missed-call capture, routing and the live map', theirs: 'Yes — QuickBooks sync from Essentials; advanced reporting and escalated support on MAX; sales proposals an add-on below MAX' },
      { label: 'Setup', ours: 'A 20-minute call with a person; we import your customers', theirs: 'Self-serve; onboarding specialist on MAX' },
      { label: 'Card payments', ours: 'Pay link sent automatically with every invoice (Stripe). No Servienza fee on top of Stripe\'s rate', theirs: 'HCP Payments: 2.99% customer-entered online, 2.59% card reader, 3.49% keyed/Amex' },
      { label: 'Missed-call text-back & voicemail-to-text', ours: 'Included', theirs: 'Voice / HCP Assist add-ons, priced separately' },
      { label: 'One monthly invoice for repeat customers', ours: 'Included — per visit or flat monthly', theirs: 'Recurring service plans available; check your plan' },
      { label: 'QuickBooks sync', ours: 'QuickBooks Online, on both plans', theirs: 'Online and Desktop, from Essentials up' },
      { label: 'Contract', ours: 'None; cancel in the app; export everything', theirs: 'Monthly or annual billing' },
      { label: 'Built for', ours: 'Owner-operators and two-person shops; extra seats $25/mo', theirs: 'Home-service companies of all sizes; extra users $35/mo on MAX' },
    ],
    pickUsIf: [
      'You\'re 1–10 people and you do the work yourself',
      'You want QuickBooks sync without moving up a tier — it is on our Free plan',
      'You\'d rather a person set it up than a help center',
      'You bill repeat customers once a month',
    ],
    pickThemIf: [
      'You want online booking embedded on your website today',
      'You want to offer customers financing at checkout',
      'You want built-in marketing (postcards, email, review automation)',
      'You run QuickBooks Desktop rather than Online',
    ],
    switching:
      'Export your customers from Housecall Pro, send us the file, and we load customers, addresses and open invoices before your setup call. Your old account stays readable until you close it.',
    exportHint: 'Housecall Pro → Customers → Export',
    faq: [
      { q: 'Is Servienza cheaper than Housecall Pro?', a: 'For a one- or two-technician business, yes: $100 flat for two technicians, and QuickBooks sync even on the Free plan. Numbers in the table are dated.' },
      { q: 'Does Servienza have online booking?', a: 'Not yet. Customers request by text or call and you confirm from the app. If a booking widget is essential today, Housecall Pro has one.' },
      { q: 'Can I try Servienza while still on Housecall Pro?', a: 'Yes — the 60-day trial needs no card.' },
    ],
  },
]

export const COMPETITOR_BY_SLUG: Record<string, Competitor> = Object.fromEntries(COMPETITORS.map((c) => [c.slug, c]))
