/**
 * /features content. Each entry is a question in the buyer's words, a direct answer (the block
 * answer engines quote), then detail. `shots` are screenshot slots: give each a `src` under
 * /public/screens/ when the real captures exist and the placeholder goes away.
 */
export type Shot = { label: string; kind: 'web' | 'phone'; src?: string; alt?: string }

export type Feature = {
  id: string
  eyebrow: string
  question: string
  answer: string
  bullets: string[]
  shots: Shot[]
  dark?: boolean
}

export const FEATURES: Feature[] = [
  {
    id: 'schedule',
    eyebrow: 'Scheduling',
    question: 'How do I schedule jobs and keep my week straight?',
    answer:
      'You put a job on a day and a person; Servienza does the rest. Repeat jobs ("every Tuesday", "every other week") schedule themselves, and if two jobs collide or there isn\'t time to drive between them, the board warns you before the customer finds out.',
    bullets: [
      'Drag a job to another person or day',
      'Repeat jobs, weekly or monthly, with a pause button for vacations',
      'Double-booking and travel-time warnings on the board',
      'Day, 5-day and timeline views; works on the phone too',
    ],
    shots: [{ label: 'Web — schedule board, timeline view, one conflict flagged', kind: 'web', src: '/screens/web-schedule-timeline.jpg', alt: 'Servienza schedule board in timeline view showing each technician\'s stops for the day, travel time between stops and a flagged conflict' }],
  },
  {
    id: 'routes',
    eyebrow: 'Best-route planning',
    question: 'Can it put my stops in the best driving order?',
    answer:
      'Yes. Tap Optimize and the day\'s stops are re-ordered to cut driving, using real Google Maps travel times. It tells you how many miles you saved. The order respects fixed appointment times and each technician\'s working hours.',
    bullets: [
      'One tap per day, or per technician',
      'Keeps timed appointments where they are',
      'Directions open in Apple or Google Maps from the phone',
    ],
    shots: [{ label: 'Web — routes builder', kind: 'web', src: '/screens/web-routes-builder.jpg', alt: 'Servienza routes builder listing each technician\'s weekly routes with stop counts and capacity warnings' }],
  },
  {
    id: 'field',
    eyebrow: 'The phone app',
    question: 'What does the technician see in the field?',
    answer:
      'Four buttons: My Day, Dispatch, Service, Menu. My Day lists today\'s stops in order with directions, the customer\'s phone number and gate code. On each job there\'s a checklist for that job type, a camera for before-and-after photos, and a Done button that closes the job and starts the invoice.',
    bullets: [
      'iPhone and Android',
      'Checklists you set per job type (chemical readings, filter checks, room-by-room…)',
      'Photos and notes save to the customer\'s record',
      'Technicians see only their own jobs',
    ],
    shots: [
      { label: 'Mobile — My Day', kind: 'phone', src: '/screens/mobile-my-day.png', alt: 'Servienza phone app, My Day: today\'s stops in order with drive times, status and live tracking' },
      { label: 'Mobile — job checklist and photos', kind: 'phone', src: '/screens/mobile-checklist.png', alt: 'Servienza phone app: job checklist with readings, toggles, before and after photos and a Mark Job Complete button' },
    ],
  },
  {
    id: 'calls',
    eyebrow: 'Missed-call catcher',
    question: 'What happens when I can\'t answer the phone?',
    answer:
      'The caller hears your greeting and leaves a voicemail. Within a minute it shows up in the app as text you can read between stops, matched to the customer who called — or flagged as a new number you can turn into a customer in one tap. Nobody goes to voicemail-nowhere: you see every missed call, in one list, and call back when you can.',
    bullets: ['Your own business number, with a greeting you record once', 'Voicemail as text, in the app and by notification', 'Caller matched to the customer automatically; new numbers become leads', 'Mark each one handled so nothing slips'],
    shots: [{ label: 'Web — missed calls with transcribed voicemail and matched customer', kind: 'web', src: '/screens/web-missed-calls.jpg' }],
  },
  {
    id: 'estimates',
    eyebrow: 'Estimates',
    question: 'How do customers approve a price?',
    answer:
      'You build the estimate on your phone from your price list, add photos, and send it by text or email. The customer opens a link, types their name as their signature and taps Approve — no app, no account. If you ask for a deposit, they pay it right there. The approved estimate becomes the job, and later the invoice.',
    bullets: [
      'Your products and services with saved prices',
      'Optional deposit (a set amount or a percentage)',
      'Approver\'s name and approval time kept with the estimate',
      'Tax pre-filled from your settings',
    ],
    shots: [
      { label: 'Web — estimates', kind: 'web', src: '/screens/web-estimates.jpg', alt: 'Servienza estimates list showing draft, approved and expired estimates with deposits and totals' },
      { label: 'Customer\'s phone — approve and sign page', kind: 'phone', src: '/screens/customer-approve-estimate.png', alt: 'The estimate page a customer opens from a text: line items, deposit, their typed name and an Approve button' },
    ],
  },
  {
    id: 'invoices',
    eyebrow: 'Invoices & payments',
    question: 'How do I get paid without chasing anyone?',
    answer:
      'When a job is marked Done, the invoice is built from what was done and sent by text and email with a secure pay link (powered by Stripe). The customer pays by card on their phone; the money goes to your bank. If they don\'t pay by the due date, reminders go out on their own. Repeat customers get one invoice a month instead of one per visit.',
    bullets: [
      'Pay link sent automatically with every invoice',
      'Automatic reminders before and after the due date',
      'One monthly invoice for recurring work — per visit or a flat monthly price',
      'Deposits from estimates are credited automatically',
      'No Servienza fee on top of Stripe\'s card rate',
      'Record cash and check payments too',
    ],
    shots: [{ label: 'Web — invoices list', kind: 'web', src: '/screens/web-invoices.jpg', alt: 'Servienza invoices list with customer, due date and status: draft, emailed, overdue' }],
    dark: true,
  },
  {
    id: 'texts',
    eyebrow: 'Customer texts & emails',
    question: 'Will my customers know when I\'m coming?',
    answer:
      'Yes, without you typing anything. When the technician taps Start Trip, the customer gets a text that they\'re on the way — with a live map link when the visit is tracked. When the job is marked done they get a text saying so, the service report by email, and the invoice with its pay link. Only customers who opted in get texts.',
    bullets: [
      'On the way · Job done · Invoice with pay link · Service report',
      'Sent from your business number, in your business name',
      'Each one can be switched off in settings; customers can opt out any time (we handle the SMS consent rules)',
    ],
    shots: [
      { label: 'Customer\'s phone — on the way, done, invoice', kind: 'phone', src: '/screens/customer-texts.png', alt: 'Text thread a customer receives: technician on the way with a live map link, visit finished, invoice with pay link' },
      { label: 'Customer\'s phone — live map link', kind: 'phone', src: '/screens/customer-track-page.png', alt: 'The live map page a customer opens from the on-the-way text, showing the technician driving to their address' },
    ],
  },
  {
    id: 'agreements',
    eyebrow: 'Service agreements',
    question: 'Can customers sign a service contract on their phone?',
    answer:
      'Yes. Write your agreement once (we give you a starting template), send it, and the customer signs on any device by typing their name. The signed PDF is stored on their record with the time and name, and a copy goes to them automatically.',
    bullets: ['Templates with your terms', 'Signed PDF kept with the customer', 'Recurring visits can schedule from the agreement'],
    shots: [{ label: 'Web — agreements', kind: 'web', src: '/screens/web-agreements.jpg', alt: 'Servienza agreements page with drafts, signed count, sign rate and each agreement\'s status' }],
  },
  {
    id: 'customers',
    eyebrow: 'Customer records & documents',
    question: 'Where does everything about a customer live?',
    answer:
      'In one place: every address they have (a customer can have several locations), gate codes and access notes, every visit with its photos and checklist, every estimate, invoice and payment, and any document — permits, warranties, the signed agreement. Searchable from the truck.',
    bullets: [
      'Multiple service locations per customer (HOAs, property managers)',
      'Upload documents from phone or computer',
      'Import your list from a spreadsheet or your old app',
    ],
    shots: [{ label: 'Web — customer detail with locations, history and documents', kind: 'web', src: '/screens/web-customer-detail.jpg' }],
  },
  {
    id: 'map',
    eyebrow: 'Live technician map',
    question: 'Can I see where my people are?',
    answer:
      'During working hours, yes — a map with each technician\'s location and which stop they\'re on, so "where\'s Dev?" takes one glance and the on-the-way text is accurate. Tracking only runs within the hours you set, and technicians can see that it\'s on.',
    bullets: ['Working hours per technician', 'Current stop and next stop on the pin', 'Off outside working hours'],
    shots: [{ label: 'Web — live map with technician pins', kind: 'web', src: '/screens/web-live-map.jpg' }],
  },
  {
    id: 'quickbooks',
    eyebrow: 'QuickBooks',
    question: 'Does it work with QuickBooks?',
    answer:
      'Yes — QuickBooks Online. Connect it once and customers, invoices and payments sync over, so your bookkeeper sees the same numbers you do. Tax rates can come from QuickBooks too.',
    bullets: ['Customers, invoices and payments', 'Tax rates from QuickBooks', 'Connect in two clicks'],
    shots: [{ label: 'Web — QuickBooks connection page', kind: 'web', src: '/screens/web-quickbooks.jpg' }],
  },
  {
    id: 'reports',
    eyebrow: 'Dashboard & reports',
    question: 'How do I know how the business is doing?',
    answer:
      'One screen: what you\'re owed, what you collected this month, jobs completed, new customers, and who\'s gone quiet. No spreadsheet.',
    bullets: ['Outstanding and collected', 'Jobs completed per day', 'New and inactive customers'],
    shots: [{ label: 'Web — dashboard', kind: 'web', src: '/screens/web-dashboard.jpg', alt: 'Servienza dashboard with total outstanding, collected this year, active customers and services completed' }],
  },
]

export const FEATURE_BY_ID: Record<string, Feature> = Object.fromEntries(FEATURES.map((f) => [f.id, f]))

/** Short chips for the homepage "Also included" row. */
export const FEATURE_CHIPS: { label: string; id: string }[] = [
  { label: 'Pay link sent with every invoice', id: 'invoices' },
  { label: 'Payment reminders that send themselves', id: 'invoices' },
  { label: 'Best-route planning', id: 'routes' },
  { label: 'Double-booking warnings', id: 'schedule' },
  { label: 'Live technician map', id: 'map' },
  { label: 'Agreements with e-sign', id: 'agreements' },
  { label: 'On-the-way & job-done texts', id: 'texts' },
  { label: 'Documents & reports', id: 'customers' },
]
