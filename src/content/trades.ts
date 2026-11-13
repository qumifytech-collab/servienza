/**
 * One entry per trade. Drives /industries/[slug], the homepage trade picker and grid, the
 * footer, sitemap and llms.txt. Copy is written for the owner, not the software buyer:
 * question-style headings with a direct answer first, so AI search engines can quote it.
 */
export type Trade = {
  slug: string
  name: string
  /** Short label for chips and grids. */
  short: string
  /** One-line hook used in grids ("Weekly routes, chemical logs"). */
  hook: string
  /** Picture in /public (optional). */
  image?: string
  /** Hero. */
  headline: string
  sub: string
  /** Direct answer to "Is Servienza good for a <trade> business?" — the AEO block. */
  answer: string
  /** Example job types shown in mock screens and copy. */
  jobTypes: string[]
  /** 4 cards: "the parts of <trade> software usually gets wrong". */
  pains: { title: string; body: string }[]
  /** 4 beats of a day. */
  day: { time: string; title: string; body: string }[]
  /** Trade-specific FAQ. */
  faq: { q: string; a: string }[]
  /** Which features to lead with (ids from features.ts). */
  leadFeatures: string[]
  /** Who tends to switch from (for the compare line). */
  switchingFrom: string
}

export const TRADES: Trade[] = [
  {
    slug: 'pool-service',
    name: 'Pool service',
    short: 'Pool service',
    hook: 'Weekly routes, chemical logs',
    image: '/industry_pool.webp',
    headline: 'Your whole pool route, in your pocket.',
    sub: 'Servienza runs your weekly route, logs chemical readings with photos, and bills every pool once a month — from a phone app that works at the equipment pad.',
    answer:
      'Yes. Servienza was built for pool service first: recurring weekly or bi-weekly stops, a chemical and equipment checklist on every visit, photos saved to the pool, best-route ordering for the day, and one monthly invoice per customer with a pay link. Repairs and filter cleans go on the same calendar as the route.',
    jobTypes: ['Weekly clean', 'Chem balance', 'Filter clean', 'Pump repair', 'Green-to-clean'],
    pains: [
      { title: 'Routes that repeat without re-entering them', body: 'Set a pool to "every Tuesday" once. The route repeats, reorders itself for the fewest miles, and skips a stop when the customer is away.' },
      { title: 'Chemical readings people can actually find later', body: 'Chlorine, pH, alkalinity and what you added, logged per visit with photos. When a customer asks why the pool turned, you have the answer in ten seconds.' },
      { title: 'One monthly invoice, not twenty', body: 'Four visits become one bill at month end, per visit or a flat monthly price, with repairs and chemicals on the same invoice. Sent by text with a pay link.' },
      { title: 'Repairs beside the route', body: 'A pump replacement is an estimate the customer approves on their phone, a job on the calendar and a line on the next invoice — not a separate spreadsheet.' },
    ],
    day: [
      { time: '6:30 AM', title: '18 pools, best order', body: 'Your route for the day with gate codes and dog warnings on each stop.' },
      { time: '10:40 AM', title: 'Cloudy pool at the Garcias', body: 'Readings and photos logged. The customer gets a text with what you did and found.' },
      { time: '1:15 PM', title: 'Filter estimate from the truck', body: 'Photos, a price, Send. Approved before your next stop.' },
      { time: 'Month end', title: 'Invoices go out on their own', body: 'Every pool gets one bill. You watch the Paid column fill up.' },
    ],
    faq: [
      { q: 'Can I bill a flat monthly rate for weekly service?', a: 'Yes. Each recurring pool can be priced per visit or as a flat monthly amount; the monthly invoice lists the visits either way, with repairs and chemicals added.' },
      { q: 'Does it track chemical readings?', a: 'Yes. Your visit checklist can include readings (chlorine, pH, alkalinity, salt, and so on) and chemicals added. They are stored per visit with photos.' },
      { q: 'What if a customer is away or the gate is locked?', a: 'Skip the stop from the phone with a reason; the customer is notified and the visit is not billed unless you want it to be.' },
      { q: 'Can my technicians see each other\'s routes?', a: 'Technicians see only their own stops. You see everyone on the schedule board and the live map.' },
    ],
    leadFeatures: ['routes', 'invoices', 'field', 'texts'],
    switchingFrom: 'paper route sheets, Skimmer or Jobber',
  },
  {
    slug: 'landscaping',
    name: 'Landscaping & lawn care',
    short: 'Landscaping',
    hook: 'Mowing routes, seasonal jobs',
    image: '/industry_landscaping.webp',
    headline: 'Mow, trim, invoice, done — before you\'ve washed the truck.',
    sub: 'Servienza runs your mowing route, your one-off cleanups and your spring/fall jobs from one phone app. Customers get texted, invoices send themselves, and your week is planned before Monday.',
    answer:
      'Yes. Servienza handles weekly and bi-weekly mowing routes, one-off jobs like cleanups and mulch with photo estimates and deposits, rain-day rescheduling with automatic customer texts, and one monthly invoice per recurring customer. It is built for crews of one to ten.',
    jobTypes: ['Weekly mow', 'Spring cleanup', 'Mulch install', 'Hedge trim', 'Fall leaf removal'],
    pains: [
      { title: 'Weekly and bi-weekly routes that don\'t drift', body: 'Set a customer to "every Tuesday" or "every other week" once. Rain day? Push the whole route a day and everyone gets a text.' },
      { title: 'One monthly invoice for repeat customers', body: 'Four mows become one bill at month end — per visit or a flat monthly price, your choice. They pay from a text; it syncs to QuickBooks.' },
      { title: 'Estimates with photos, deposits for big jobs', body: 'Walk the yard, snap photos, send the price from the driveway. For a $4,000 patio, ask for a deposit before you order pavers.' },
      { title: 'Before-and-after photos, saved to the customer', body: 'Proof the gate was closed and the beds were edged. Handy when the "you never came" text arrives.' },
    ],
    day: [
      { time: '6:45 AM', title: '11 yards, best order', body: 'Your route for the day, planned to save miles. Gate codes on each stop.' },
      { time: '9:20 AM', title: 'New customer calls', body: 'You\'re on the mower. The voicemail is waiting as text, matched to their number.' },
      { time: '2:10 PM', title: 'Mulch estimate from the driveway', body: 'Photos, a price, Send. The customer approves on her phone before you\'re home.' },
      { time: 'End of month', title: 'Invoices go out on their own', body: 'Every repeat customer gets one bill. You watch the Paid column fill up.' },
    ],
    faq: [
      { q: 'Can I charge a flat monthly price instead of per mow?', a: 'Yes. Each repeat customer can be per-visit or a flat monthly amount; the monthly invoice shows the visits either way.' },
      { q: 'What happens when it rains?', a: 'Move the day\'s route to tomorrow in one tap. Every customer gets a text with the new day.' },
      { q: 'Does it do seasonal work — cleanups, aeration, snow?', a: 'Yes. One-off jobs with estimates and deposits sit alongside your weekly route on the same calendar.' },
      { q: 'Can my crew use it without the office?', a: 'The crew view is four buttons: today\'s stops, directions, the checklist, Done. Nothing else to learn.' },
    ],
    leadFeatures: ['schedule', 'invoices', 'estimates', 'routes'],
    switchingFrom: 'a notebook, Jobber or Yardbook',
  },
  {
    slug: 'pet-grooming',
    name: 'Pet grooming',
    short: 'Pet grooming',
    hook: 'Mobile & in-home visits',
    image: '/industry_grooming.webp',
    headline: 'Book the groom, drive the route, get paid at the door.',
    sub: 'For mobile and in-home groomers: appointments with travel time, pet notes and photos on every customer, reminders that cut no-shows, and payment by text before you pull away.',
    answer:
      'Yes. Servienza schedules grooming appointments with travel time between homes, keeps each pet\'s notes, photos and vaccination records on the customer, texts customers when you\'re on the way and when the groom is done, and takes card payment by text link before you pull away.',
    jobTypes: ['Full groom', 'Bath & brush', 'Nail trim', 'De-shed', 'Puppy intro'],
    pains: [
      { title: 'Appointments that respect driving time', body: 'The schedule warns you when two homes are too far apart for the gap between them, and orders the day to save miles.' },
      { title: 'Every pet remembered', body: 'Temperament notes, the clip they liked last time, vaccination dates and photos — on the customer\'s record, on your phone.' },
      { title: 'Customers ready when you arrive', body: 'A text when you\'re on the way, with a live map link, and another when the groom is done.' },
      { title: 'Paid before you leave the driveway', body: 'Tap Done, the invoice texts over with a pay link, and most people pay while you\'re loading the van.' },
    ],
    day: [
      { time: '7:30 AM', title: 'Six grooms, best order', body: 'Today\'s route with each pet\'s notes a tap away.' },
      { time: '9:00 AM', title: 'Biscuit, full groom', body: 'Before-and-after photos saved and texted to the owner.' },
      { time: '11:40 AM', title: 'Missed a call mid-groom', body: 'The voicemail is text you read between stops, matched to the customer.' },
      { time: '4:30 PM', title: 'All paid', body: 'Every invoice went out with a pay link. Nothing to chase tonight.' },
    ],
    faq: [
      { q: 'Can I store vaccination records and pet notes?', a: 'Yes. Upload documents and photos to the customer, and keep notes per pet that show on every appointment.' },
      { q: 'Can customers book online?', a: 'Not yet — customers request by text or call and you confirm from the app. Online booking is on our list; tell us if it matters to you.' },
      { q: 'Does it work for a salon as well as mobile?', a: 'Yes. Turn off travel-time features and use the same appointment calendar, reminders and pay links.' },
      { q: 'Can I charge a deposit for new clients?', a: 'Yes. Send an estimate with a deposit; the customer pays it when they approve.' },
    ],
    leadFeatures: ['texts', 'customers', 'invoices', 'schedule'],
    switchingFrom: 'a paper diary, Square Appointments or MoeGo',
  },
  {
    slug: 'handyman',
    name: 'Handyman',
    short: 'Handyman',
    hook: 'Estimates, odd jobs, deposits',
    image: '/industry_handyman.webp',
    headline: 'Quote it on the spot. Get paid the same day.',
    sub: 'For handyman businesses: photo estimates the customer approves on their phone, deposits for materials, a calendar that fits odd jobs between big ones, and invoices that send themselves.',
    answer:
      'Yes. Servienza is a good fit for a handyman business because every job is different: build an estimate from your price list with photos, let the customer approve and sign on their phone, take a deposit for materials, and turn the approved estimate into the job and then the invoice with no retyping.',
    jobTypes: ['Estimate visit', 'Drywall repair', 'Fixture install', 'Deck repair', 'Punch list'],
    pains: [
      { title: 'Estimates in five minutes, not that evening', body: 'Pick items from your price list, add photos of the problem, send. The customer approves and signs on their phone.' },
      { title: 'Deposits before you buy materials', body: 'Ask for a set amount or a percentage on the estimate. It\'s credited on the final invoice automatically.' },
      { title: 'Small jobs that fit around big ones', body: 'Drag a two-hour job into Thursday afternoon; the board warns you if it collides with something else.' },
      { title: 'Calls you can\'t answer from a ladder', body: 'Callers reach your greeting; their voicemail arrives as text you can read when you\'re down.' },
    ],
    day: [
      { time: '8:00 AM', title: 'Three jobs, two estimates', body: 'Today in order, with addresses and what you quoted.' },
      { time: '10:30 AM', title: 'Deck repair estimate', body: 'Photos and a price from the backyard. Approved with a deposit by lunch.' },
      { time: '2:00 PM', title: 'Fixture swap done', body: 'Tap Done. Invoice texted with a pay link.' },
      { time: '5:30 PM', title: 'Tomorrow is already planned', body: 'The approved deck job is on the calendar. Materials list in the notes.' },
    ],
    faq: [
      { q: 'Can I quote by the hour and by the item?', a: 'Yes. Your price list can hold hourly rates, flat-price items and materials, and you can edit any line on the estimate.' },
      { q: 'Can the customer approve part of an estimate?', a: 'Send options as separate line items; they approve the estimate, and you can adjust before it becomes the job.' },
      { q: 'Do I need the web app?', a: 'No. Everything a solo handyman needs is in the phone app. The web app is there if someone helps you in the office.' },
      { q: 'What does it cost to take card payments?', a: 'Only Stripe\'s standard card rate. Servienza adds no fee on top.' },
    ],
    leadFeatures: ['estimates', 'invoices', 'calls', 'schedule'],
    switchingFrom: 'texts and a notebook, or Jobber',
  },
  {
    slug: 'hvac',
    name: 'HVAC',
    short: 'HVAC',
    hook: 'Repairs, maintenance plans',
    image: '/industry_hvac.webp',
    headline: 'Dispatch the day, finish the job, send the invoice from the attic.',
    sub: 'For HVAC companies with one to ten technicians: a schedule board that catches double-bookings, maintenance agreements that renew, estimates with options, and invoices that go out when the job closes.',
    answer:
      'Yes. Servienza gives an HVAC company a drag-and-drop schedule board with double-booking and travel-time warnings, maintenance agreements customers sign on their phone, estimates with good/better/best options and deposits, a technician app with checklists and photos, and automatic invoicing with pay links and QuickBooks sync.',
    jobTypes: ['AC repair', 'Seasonal tune-up', 'Duct cleaning', 'System replacement', 'No-cool call'],
    pains: [
      { title: 'A schedule board that catches overlaps', body: 'Every tech, every job, on one board. Two jobs that collide or leave no drive time are flagged before the customer finds out.' },
      { title: 'Maintenance plans that run themselves', body: 'Spring and fall tune-ups schedule from the agreement. Customers sign the agreement on their phone.' },
      { title: 'Estimates with options', body: 'Repair vs. replace as separate estimates or line items, with photos of the unit, approved and signed on the customer\'s phone.' },
      { title: 'Invoices that don\'t wait for the office', body: 'The tech taps Done, the invoice builds from the checklist and parts used, and the customer gets a pay link by text.' },
    ],
    day: [
      { time: '7:00 AM', title: 'Three techs, fourteen calls', body: 'The board is set; each tech sees only their day on the phone.' },
      { time: '9:15 AM', title: 'No-cool call comes in', body: 'The voicemail lands as text; the office drops it onto the nearest tech\'s route.' },
      { time: '1:30 PM', title: 'Replace estimate on site', body: 'Two options, photos of the old unit, deposit on approval.' },
      { time: '5:00 PM', title: 'Every job invoiced', body: 'Nothing left in the trucks. Payments sync to QuickBooks.' },
    ],
    faq: [
      { q: 'Can I see where my technicians are?', a: 'Yes. During working hours the live map shows each technician\'s location and current job.' },
      { q: 'Does it handle maintenance agreements?', a: 'Yes. Service agreements are signed electronically and stored on the customer; recurring visits schedule from them.' },
      { q: 'Can technicians add parts to the invoice?', a: 'Yes. Parts and services come from your product library and can be added from the phone before tapping Done.' },
      { q: 'Does it sync with QuickBooks?', a: 'Yes — QuickBooks Online. Customers, invoices and payments sync over.' },
    ],
    leadFeatures: ['schedule', 'agreements', 'estimates', 'map'],
    switchingFrom: 'a whiteboard, Housecall Pro or ServiceTitan',
  },
  {
    slug: 'plumbing',
    name: 'Plumbing',
    short: 'Plumbing',
    hook: 'Same-day calls, parts',
    image: '/industry_plumbing.webp',
    headline: 'Catch the emergency call. Get paid before you leave.',
    sub: 'For plumbing companies: missed-call voicemail-to-text so the emergency doesn\'t go to the next plumber, a board that finds who\'s closest, and invoices with parts that send themselves.',
    answer:
      'Yes. Servienza helps a small plumbing company answer every call (every missed call lands as a transcribed voicemail, matched to the customer), dispatch the nearest technician from a live map, build estimates and invoices with parts from a price list, and get paid by text link before the truck leaves.',
    jobTypes: ['Leak repair', 'Drain clear', 'Water heater install', 'Fixture install', 'Camera inspection'],
    pains: [
      { title: 'Emergency calls you\'re too busy to answer', body: 'A burst pipe at 2pm calls while you\'re under a sink. They get a text in seconds; the voicemail is text you read in a minute.' },
      { title: 'Who\'s closest?', body: 'The live map shows every tech. Drop the call onto the nearest one and they get it on their phone.' },
      { title: 'Parts on the invoice without a phone call to the office', body: 'The tech adds parts from your price list, taps Done, and the invoice goes out with a pay link.' },
      { title: 'Photos of what was behind the wall', body: 'Before-and-after photos on every job, saved to the customer, texted to them with the invoice.' },
    ],
    day: [
      { time: '7:30 AM', title: 'Two techs, nine calls', body: 'Each tech sees their day; the office sees everyone.' },
      { time: '11:05 AM', title: 'Water heater estimate', body: 'Options with photos, approved with a deposit on the customer\'s phone.' },
      { time: '2:20 PM', title: 'Burst pipe call missed', body: 'Voicemail as text within a minute. Dispatched to the nearest tech from the map.' },
      { time: '6:00 PM', title: 'Paid', body: 'Every invoice went out with a pay link when the job closed.' },
    ],
    faq: [
      { q: 'Can I add a same-day job while techs are out?', a: 'Yes. Drop it on the board and the technician\'s phone updates immediately.' },
      { q: 'Can I quote flat-rate from a price book?', a: 'Yes. Your product library holds flat-rate items, hourly rates and parts.' },
      { q: 'Does it store permits and inspection documents?', a: 'Yes. Documents upload to the customer and are searchable later.' },
      { q: 'What about after-hours calls?', a: 'Your number takes voicemail around the clock, and every message is transcribed and listed for the morning — or the moment your phone buzzes.' },
    ],
    leadFeatures: ['calls', 'map', 'invoices', 'estimates'],
    switchingFrom: 'a cell phone and invoice pads, or Housecall Pro',
  },
  {
    slug: 'cleaning',
    name: 'Cleaning',
    short: 'Cleaning',
    hook: 'Recurring homes & offices',
    image: '/industry_cleaning.webp',
    headline: 'Recurring cleans, happy clients, invoices that send themselves.',
    sub: 'For residential and commercial cleaning companies: weekly and bi-weekly schedules, room-by-room checklists with photos, reminders that cut lockouts, and one invoice a month per client.',
    answer:
      'Yes. Servienza schedules recurring residential and commercial cleans, gives each cleaner a room-by-room checklist with photos, texts clients when the team is on the way, and bills recurring clients once a month with a pay link — with the office seeing every team on one board.',
    jobTypes: ['Weekly clean', 'Deep clean', 'Move-out clean', 'Office nightly', 'Post-construction'],
    pains: [
      { title: 'Recurring schedules that stay recurring', body: 'Weekly, bi-weekly, monthly — set once. Pause for a vacation, resume with a tap.' },
      { title: 'Checklists so every clean is the same clean', body: 'Room-by-room lists per client with photos when done. New team member? Same result.' },
      { title: 'Fewer lockouts', body: 'A text when the team is on the way. Alarm codes and key notes on the job.' },
      { title: 'Monthly invoices for commercial clients', body: 'Twenty nightly cleans become one invoice with a pay link, synced to QuickBooks.' },
    ],
    day: [
      { time: '7:00 AM', title: 'Three teams, twelve homes', body: 'Each team\'s phone shows their homes, codes and checklists.' },
      { time: '9:45 AM', title: 'Lockout avoided', body: 'The client replied to yesterday\'s reminder with the new code.' },
      { time: '1:00 PM', title: 'Move-out estimate', body: 'Photos, a price, approved on the customer\'s phone.' },
      { time: 'Month end', title: 'Commercial invoices go out', body: 'One bill per client. Reminders handle the slow payers.' },
    ],
    faq: [
      { q: 'Can I assign a team instead of one person?', a: 'Yes. Assign one or more cleaners to a job; each sees it on their phone.' },
      { q: 'Can clients see who is coming?', a: 'The on-the-way text includes the business name and can include the cleaner\'s first name.' },
      { q: 'Can I price by the hour or flat?', a: 'Both. Flat-price recurring cleans and hourly one-offs can live on the same invoice.' },
      { q: 'Do I need a computer?', a: 'No. Owners run everything from the phone; the web app helps if someone schedules from a desk.' },
    ],
    leadFeatures: ['schedule', 'field', 'texts', 'invoices'],
    switchingFrom: 'a shared calendar and texts, or ZenMaid',
  },
  {
    slug: 'pest-control',
    name: 'Pest control',
    short: 'Pest control',
    hook: 'Quarterly treatments',
    image: '/industry_pest.webp',
    headline: 'Quarterlies that schedule themselves. Agreements that renew.',
    sub: 'For pest control operators: recurring treatment schedules, signed service agreements, treatment notes and photos per visit, and invoices with pay links the day of service.',
    answer:
      'Yes. Servienza schedules recurring monthly or quarterly pest treatments from a signed service agreement, logs products and areas treated with photos on each visit, texts customers before arrival, and invoices automatically with a pay link — with one monthly invoice for commercial accounts.',
    jobTypes: ['Quarterly treatment', 'Initial service', 'Termite inspection', 'Rodent follow-up', 'Mosquito monthly'],
    pains: [
      { title: 'Recurring treatments without a spreadsheet', body: 'Quarterly, monthly, bi-monthly — set from the agreement. Follow-ups slot in between.' },
      { title: 'Agreements signed on the phone', body: 'Your service agreement, signed on their phone, stored on the customer with the date.' },
      { title: 'Treatment records that hold up', body: 'Product, amount, areas treated, photos — per visit, per property.' },
      { title: 'Commercial accounts billed monthly', body: 'Restaurants and property managers get one invoice a month with a pay link.' },
    ],
    day: [
      { time: '7:15 AM', title: 'Fourteen stops, best order', body: 'Quarterlies and two initial services, routed to save miles.' },
      { time: '10:00 AM', title: 'Initial service', body: 'Agreement signed on the porch. Next three visits scheduled automatically.' },
      { time: '12:30 PM', title: 'Missed a call', body: 'The voicemail lands as text; it\'s a new rodent job by 1pm.' },
      { time: '4:45 PM', title: 'Invoices out', body: 'Residential paid by text; commercial on the monthly bill.' },
    ],
    faq: [
      { q: 'Can I record products and amounts used?', a: 'Yes. Add fields to your visit checklist for product, amount and areas; they are stored with each visit.' },
      { q: 'Can agreements auto-renew?', a: 'Recurring visits continue until you stop them; renewal reminders are on our list — tell us how you handle renewals.' },
      { q: 'Can customers see their treatment history?', a: 'You can text or email any visit summary with photos; a customer portal is not yet available.' },
      { q: 'Does it work for one truck?', a: 'Yes. Solo operators run everything from the phone app.' },
    ],
    leadFeatures: ['agreements', 'schedule', 'field', 'invoices'],
    switchingFrom: 'paper service tickets or PestPac',
  },
  {
    slug: 'electrical',
    name: 'Electrical',
    short: 'Electrical',
    hook: 'Quotes, permits, photos',
    image: '/industry_electrical.webp',
    headline: 'Quote it, schedule it, document it, get paid.',
    sub: 'For electrical contractors with small crews: estimates with options and deposits, permits and inspection documents on the customer, photos of every panel, and invoices that send themselves.',
    answer:
      'Yes. Servienza gives a small electrical contractor estimates with options that customers approve and sign on their phone, deposits for materials, a schedule board with conflict warnings, photo documentation of every job, document storage for permits and inspections, and automatic invoicing with pay links.',
    jobTypes: ['Panel upgrade', 'EV charger install', 'Troubleshoot', 'Lighting install', 'Inspection fix'],
    pains: [
      { title: 'Estimates with options, signed on the phone', body: 'Standard vs. upgraded panel as separate lines or estimates, with photos. Approved and signed before you leave.' },
      { title: 'Permits and inspection paperwork in one place', body: 'Upload the permit, the inspection card, the photos. On the customer, searchable from the truck.' },
      { title: 'Multi-day jobs on the board', body: 'A three-day install blocks the calendar and flags anything that collides.' },
      { title: 'Deposits for materials', body: 'Ask for a deposit on approval; it\'s credited on the final invoice.' },
    ],
    day: [
      { time: '7:30 AM', title: 'Two crews, five jobs', body: 'Each crew sees their day; the board shows both.' },
      { time: '10:00 AM', title: 'EV charger estimate', body: 'Photos of the panel, two options, approved with a deposit.' },
      { time: '3:00 PM', title: 'Inspection passed', body: 'Card photographed and filed to the customer.' },
      { time: '5:30 PM', title: 'Invoice out', body: 'Deposit credited, pay link texted.' },
    ],
    faq: [
      { q: 'Can I attach permits and inspection documents?', a: 'Yes. Documents upload from the phone or computer to the customer\'s record.' },
      { q: 'Can I schedule a job across several days?', a: 'Yes. Multi-day jobs block the schedule and show on each day.' },
      { q: 'Can I take a deposit?', a: 'Yes. Set a deposit amount or percentage on the estimate; the customer pays it when they approve.' },
      { q: 'Does it sync with QuickBooks?', a: 'Yes — QuickBooks Online, for customers, invoices and payments.' },
    ],
    leadFeatures: ['estimates', 'customers', 'schedule', 'invoices'],
    switchingFrom: 'spreadsheets and texts, or Jobber',
  },
  {
    slug: 'painting',
    name: 'Painting',
    short: 'Painting',
    hook: 'Multi-day jobs, deposits',
    image: '/industry_painting.webp',
    headline: 'From walkthrough to final coat, without the paperwork.',
    sub: 'For painting contractors: photo estimates approved on the phone, deposits before you buy paint, multi-day jobs on a clear calendar, and progress photos that keep customers calm.',
    answer:
      'Yes. Servienza lets a painting contractor send photo estimates that customers approve and sign on their phone, collect a deposit before buying materials, block multi-day jobs on the calendar with crew assignments, share progress photos by text, and invoice automatically with the deposit credited.',
    jobTypes: ['Interior repaint', 'Exterior repaint', 'Cabinet refinish', 'Deck stain', 'Color consult'],
    pains: [
      { title: 'Estimates the same day as the walkthrough', body: 'Rooms, photos, prep notes, price. The customer approves and signs on their phone.' },
      { title: 'Deposits before you buy paint', body: 'A percentage on approval, credited on the final invoice automatically.' },
      { title: 'Multi-day jobs with the right crew', body: 'Block Monday to Thursday, assign the crew, and the board warns you about overlaps.' },
      { title: 'Progress photos that keep customers calm', body: 'End-of-day photos texted from the phone. Fewer "how\'s it going?" calls.' },
    ],
    day: [
      { time: '7:00 AM', title: 'Crew to the Nguyen job, day 2 of 3', body: 'Scope, colors and prep notes on the phone.' },
      { time: '12:00 PM', title: 'Walkthrough across town', body: 'Photos and a price sent from the driveway.' },
      { time: '4:30 PM', title: 'Progress photos texted', body: 'Customer replies with a thumbs-up instead of a call.' },
      { time: 'Day 3', title: 'Final invoice', body: 'Deposit credited, pay link texted when the crew taps Done.' },
    ],
    faq: [
      { q: 'Can I split a job into milestones?', a: 'Take a deposit on approval and invoice the balance on completion; additional progress invoices can be sent manually.' },
      { q: 'Can I store color and sheen details?', a: 'Yes. Job notes and documents live on the customer, so a touch-up two years later has the formula.' },
      { q: 'Can I assign several painters to one job?', a: 'Yes. Assign the crew; each sees the job on their phone.' },
      { q: 'Does it work from the phone only?', a: 'Yes. Owners run estimates, scheduling and invoicing from the phone app.' },
    ],
    leadFeatures: ['estimates', 'schedule', 'texts', 'invoices'],
    switchingFrom: 'paper quotes and texts, or Jobber',
  },
  {
    slug: 'home-beauty',
    name: 'In-home beauty',
    short: 'In-home beauty',
    hook: 'Appointments, travel time',
    image: '/industry_beauty.webp',
    headline: 'Appointments, travel time and payment — handled between clients.',
    sub: 'For mobile hair, nails, lashes and massage: a schedule that accounts for driving, client notes and photos, reminders that cut no-shows, and payment by text the moment you finish.',
    answer:
      'Yes. Servienza schedules in-home beauty appointments with travel time between clients, keeps each client\'s preferences, photos and consent forms on their record, texts clients when you\'re on the way and when you\'re done, and takes card payment by text link when the appointment ends.',
    jobTypes: ['Bridal hair', 'Lash fill', 'Gel manicure', 'Massage 60', 'Color & cut'],
    pains: [
      { title: 'A day that accounts for driving', body: 'The schedule warns you when two appointments are too far apart and orders the day to save miles.' },
      { title: 'Every client\'s preferences remembered', body: 'Formulas, allergies you\'ve been told about, photos of last time, signed consent forms — on the client\'s record.' },
      { title: 'Clients ready when you arrive', body: 'An on-the-way text with a live map link, and a done text when you finish.' },
      { title: 'Paid before you pack up', body: 'Tap Done, the invoice texts over with a pay link; tips can be added on the invoice.' },
    ],
    day: [
      { time: '8:00 AM', title: 'Five clients, best order', body: 'Today\'s route with each client\'s notes a tap away.' },
      { time: '10:30 AM', title: 'Bridal trial', body: 'Photos saved and texted; the wedding date booked with a deposit.' },
      { time: '1:00 PM', title: 'Missed call between clients', body: 'The voicemail is text on your phone; you call back when you\'re free.' },
      { time: '6:00 PM', title: 'All paid', body: 'Every invoice went out with a pay link. Nothing to chase.' },
    ],
    faq: [
      { q: 'Can I take a deposit for bridal or group bookings?', a: 'Yes. Send an estimate with a deposit; the client pays it when they approve.' },
      { q: 'Can I store consent forms?', a: 'Yes. Upload signed forms as documents or send them as agreements to sign electronically.' },
      { q: 'Can clients book online?', a: 'Not yet — clients request by text or call and you confirm from the app. Tell us if online booking matters to you.' },
      { q: 'Does it work for a salon too?', a: 'Yes. Turn off travel-time features and use the same calendar, reminders and pay links.' },
    ],
    leadFeatures: ['texts', 'customers', 'invoices', 'schedule'],
    switchingFrom: 'a paper diary, Square Appointments or GlossGenius',
  },
]

export const TRADE_BY_SLUG: Record<string, Trade> = Object.fromEntries(TRADES.map((t) => [t.slug, t]))

/** Order shown in the homepage trade picker (most common first). */
export const PICKER_ORDER = ['pool-service', 'landscaping', 'pet-grooming', 'handyman', 'hvac', 'cleaning', 'plumbing']
