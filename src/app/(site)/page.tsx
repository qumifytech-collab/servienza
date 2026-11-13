import Link from 'next/link'
import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import { MiniButton, MiniCard, MiniPhone } from '@/components/home/Mocks'
import PricingPlans from '@/components/PricingPlans'
import CtaBand from '@/components/CtaBand'
import { Button, CheckList, Container, Eyebrow, Faq, H2, Lead, Screenshot, StepNumber } from '@/components/ui'
import { TRADES } from '@/content/trades'
import { FEATURE_CHIPS } from '@/content/features'
import { BOOK_CALL_URL, SITE_NAME, SITE_TAGLINE, SUPPORT_HOURS, TRIAL_DAYS } from '@/lib/site'
import { faqJsonLd, jsonLdString, pageMetadata, softwareAppJsonLd } from '@/lib/seo'
import { MOBILE, WEB, screen } from '@/lib/screens'

export const metadata: Metadata = pageMetadata({
  title: `${SITE_NAME} — Scheduling, estimates & invoicing for small service businesses`,
  description: SITE_TAGLINE,
  path: '/',
})

const HOME_FAQ = [
  { q: "I'm not good with technology. Will I manage?", a: 'If you can text and use Maps, you can use Servienza. The phone app has four buttons. And you don’t set it up — we do, with you, on a call.' },
  { q: 'Do I need a computer?', a: 'No. Everything works from the phone app. The web version is there if someone helps you from a desk.' },
  { q: 'Do my customers have to download anything?', a: 'No. They get normal texts and emails with a link to approve, sign or pay. No app, no account.' },
  { q: 'I already have customers in a spreadsheet or another app. What happens to them?', a: 'Send it to us in whatever shape it’s in. We load it for you for free before your first day.' },
  { q: 'What does it cost to take card payments?', a: 'Only the card processor’s standard rate (Stripe). Servienza doesn’t add a fee on top.' },
  { q: 'How long is the free trial?', a: `${TRIAL_DAYS} days, with everything switched on and no credit card. Long enough to run two full billing months on it.` },
  { q: 'What if I want to leave?', a: 'Cancel from the app any time. Download your customers, jobs and invoices with one click. No calls to a retention team.' },
]

export default function HomePage() {
  const steps = [screen(MOBILE.myDay), screen(MOBILE.checklist), screen(MOBILE.invoiceSent), screen(MOBILE.money)]
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(softwareAppJsonLd()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(faqJsonLd(HOME_FAQ)) }} />

      <Hero webSrc={screen(WEB.scheduleHero)} phoneSrc={screen(MOBILE.myDay)} />

      {/* Trades strip */}
      <div className="border-y border-line bg-white">
        <Container className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 py-4 text-sm font-bold text-faint">
          <span className="text-ink">Used by</span>
          {TRADES.map((t) => (
            <Link key={t.slug} href={`/industries/${t.slug}`} className="hover:text-ink">
              {t.short}
            </Link>
          ))}
        </Container>
      </div>

      {/* Sound familiar */}
      <section className="py-16 sm:py-24">
        <Container className="flex flex-col gap-10">
          <div className="flex max-w-[640px] flex-col gap-3">
            <Eyebrow>Sound familiar?</Eyebrow>
            <H2>You didn&rsquo;t start a business to do paperwork at 9pm.</H2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { t: "Missed calls while you're on a job", b: 'A new customer calls, you’re elbow-deep in a pump. They call the next guy. Servienza takes the voicemail, turns it into words you can read between stops, and saves them as a lead so you call back the moment you\u2019re free.', i: 'phone' },
              { t: 'Chasing people to get paid', b: 'The job’s done, the invoice is “in the truck.” With Servienza the invoice goes out when you tap Done, and customers pay from a text. Reminders go out on their own.', i: 'card' },
              { t: 'Notes on napkins, photos in your camera roll', b: '“Which gate code was that?” Every customer gets one record: address, gate code, photos, what you did last time, what they owe. On your phone, always.', i: 'doc' },
            ].map((c) => (
              <div key={c.t} className="flex flex-col gap-3.5 rounded-2xl border border-line bg-white p-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                  <PainIcon kind={c.i} />
                </span>
                <h3 className="text-xl font-extrabold">{c.t}</h3>
                <p className="text-base leading-relaxed text-muted">{c.b}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* A normal day */}
      <section id="how" className="border-y border-line bg-white py-16 sm:py-24">
        <Container className="flex flex-col gap-12">
          <div className="flex max-w-[640px] flex-col gap-3">
            <Eyebrow>How it works</Eyebrow>
            <H2>A normal day, with Servienza.</H2>
            <Lead>Four taps between &ldquo;good morning&rdquo; and &ldquo;paid.&rdquo; Nothing to learn that you don&rsquo;t already do.</Lead>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <Step n={1} shot={steps[0]} title="7:00 am — See your day" body="Today's stops, in the best driving order. Tap one for directions.">
              <MiniPhone>
                <div className="text-xs font-extrabold">Good morning, Maria</div>
                <div className="text-[8px] text-faint">7 stops · 42 miles · best route ready</div>
                <MiniCard><b>8:00</b> Oakwood HOA<br /><span className="text-faint">Weekly service</span></MiniCard>
                <MiniCard><b>9:30</b> Marina Club<br /><span className="text-faint">Filter service</span></MiniCard>
                <MiniCard><b>11:15</b> Green Valley<br /><span className="text-faint">Repair · Follow-up</span></MiniCard>
                <MiniButton>Start my route</MiniButton>
              </MiniPhone>
            </Step>
            <Step n={2} shot={steps[1]} title="On site — Tick the list, snap photos" body="Your checklist for that job type. Photos and notes save to the customer, not your camera roll.">
              <MiniPhone>
                <div className="text-xs font-extrabold">Green Valley — checklist</div>
                {['Arrived & checked in', 'Work completed'].map((t) => (
                  <div key={t} className="flex items-center gap-1.5"><span className="inline-flex h-3.5 w-3.5 items-center justify-center rounded bg-brand-600 text-[9px] text-white">✓</span>{t}</div>
                ))}
                <div className="flex items-center gap-1.5"><span className="inline-block h-3.5 w-3.5 rounded border-[1.5px] border-[#B8B6AD]" />Site left clean</div>
                <div className="mt-1 grid grid-cols-3 gap-1"><span className="h-10 rounded-md bg-[#CFE8DC]" /><span className="h-10 rounded-md bg-[#BFDCCB]" /><span className="inline-flex h-10 items-center justify-center rounded-md border-[1.5px] border-dashed border-[#B8B6AD] text-sm text-faint">+</span></div>
                <div className="text-[8px] text-faint">Photos attach to the customer&rsquo;s record</div>
                <MiniButton>Mark done</MiniButton>
              </MiniPhone>
            </Step>
            <Step n={3} shot={steps[2]} title="Tap Done — the invoice sends itself" body="What you ticked becomes the invoice. The customer gets a text with a pay link. No typing twice.">
              <MiniPhone>
                <div className="text-xs font-extrabold">Invoice #1042 — sent ✓</div>
                <MiniCard className="flex flex-col gap-1">
                  <div className="flex justify-between"><span>Service visit</span><b>$45.00</b></div>
                  <div className="flex justify-between"><span>Materials</span><b>$18.00</b></div>
                  <div className="flex justify-between border-t border-line pt-1"><span>Total</span><b>$63.00</b></div>
                </MiniCard>
                <div className="rounded-lg bg-[#DBEAFE] p-2 text-[8px] text-[#1E3A8A]"><b>Text to customer:</b> Hi Dana, today&rsquo;s service at Green Valley is done. Pay here → pay.servienza.com/8k2</div>
                <div className="text-[8px] text-faint">Due in 15 days · reminder set</div>
              </MiniPhone>
            </Step>
            <Step n={4} shot={steps[3]} title="Get paid — by card, from a text" body="Money lands in your bank. You see who's paid and who hasn't, without a spreadsheet.">
              <MiniPhone>
                <div className="text-xs font-extrabold">Money</div>
                <div className="rounded-[10px] bg-brand-600 p-2.5 text-white"><div className="text-[8px] opacity-80">Collected this week</div><div className="text-lg font-extrabold">$2,340</div></div>
                <MiniCard className="flex justify-between"><span>Dana R. — #1042</span><b className="text-brand-700">Paid</b></MiniCard>
                <MiniCard className="flex justify-between"><span>Oakwood HOA — #1038</span><b className="text-brand-700">Paid</b></MiniCard>
                <MiniCard className="flex justify-between"><span>Torres — #1036</span><b className="text-amber-700">Due Fri</b></MiniCard>
                <div className="text-[8px] text-faint">Synced to QuickBooks ✓</div>
              </MiniPhone>
            </Step>
          </div>
        </Container>
      </section>

      {/* Two apps */}
      <section className="py-16 sm:py-24">
        <Container className="flex flex-col gap-10">
          <div className="flex max-w-[680px] flex-col gap-3">
            <Eyebrow>Two apps, one business</Eyebrow>
            <H2>You, on your phone. Whoever helps you, on the computer.</H2>
            <Lead>Just you? The phone app is all you need. Got a spouse, a helper, or a few technicians? The web app runs the office — same customers, same jobs, live.</Lead>
          </div>
          <div className="grid gap-5 lg:grid-cols-[1fr_1.6fr]">
            <div className="flex flex-col gap-4 rounded-[20px] border border-line bg-white p-7">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-[0.8px] text-faint">iPhone &amp; Android</span>
                <h3 className="mt-1 text-2xl font-extrabold">In the truck</h3>
              </div>
              <div className="flex justify-center py-2">
                <Screenshot kind="phone" label="Mobile — service detail with map" src={screen(MOBILE.serviceDetail)} alt="Servienza mobile app: service detail with map" />
              </div>
              <CheckList items={['See today’s jobs and drive to them', 'Checklists, photos, notes per job', 'Send estimates and invoices on the spot', 'Technicians see only their own jobs']} />
            </div>
            <div className="flex flex-col gap-4 rounded-[20px] border border-line bg-white p-7">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-[0.8px] text-faint">Any computer — nothing to install</span>
                <h3 className="mt-1 text-2xl font-extrabold">At the desk</h3>
              </div>
              <Screenshot label="Web — schedule board" src="/screens/web-schedule-timeline.jpg" alt="Servienza web app: the schedule board in timeline view" />
              <ul className="grid gap-2.5 text-[15px] text-ink/80 sm:grid-cols-2">
                {['Drag jobs between people and days', 'See where everyone is on a map', 'Answer missed calls and new leads', 'Invoices, payments, QuickBooks'].map((t) => (
                  <li key={t} className="flex gap-2.5"><span className="font-extrabold text-brand-600">✓</span>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Included */}
      <section className="bg-ink py-16 text-ground sm:py-24">
        <Container className="flex flex-col gap-12">
          <div className="flex max-w-[640px] flex-col gap-3">
            <Eyebrow light>What&rsquo;s included</Eyebrow>
            <H2>Everything a small shop needs. Nothing it doesn&rsquo;t.</H2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ['Scheduling & reminders', 'One-time and repeat jobs. Customers get a text when you’re on the way and when the job is done.', '/features#schedule'],
              ['Estimates customers sign on their phone', 'Send a price, they tap Approve, pay a deposit if you ask. It turns into the job and the invoice.', '/features#estimates'],
              ['Invoices & card payments', 'A pay link goes out with every invoice automatically, reminders follow, one monthly invoice for repeat customers. No platform fee on top of card processing.', '/features#invoices'],
              ['One record per customer', 'Address, gate code, photos, every visit, every payment. Search it from the truck.', '/features#customers'],
              ['Missed-call catcher', 'Can’t pick up? The voicemail shows up as text within a minute, matched to the customer, so you call back between jobs.', '/features#calls'],
              ['Plays nice with QuickBooks', 'Invoices and payments sync over. Your bookkeeper won’t notice anything changed, except fewer questions.', '/features#quickbooks'],
            ].map(([t, b, href]) => (
              <Link key={t} href={href} className="flex flex-col gap-2.5 rounded-2xl border border-white/15 p-6 transition-colors hover:border-brand-300/60 hover:bg-white/5">
                <h3 className="text-lg font-extrabold text-white">{t}</h3>
                <p className="text-[15px] leading-relaxed text-[#B8B6AD]">{b}</p>
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[13px] font-extrabold uppercase tracking-[0.8px] text-[#B8B6AD]">Also included</span>
            <div className="flex flex-wrap gap-2">
              {FEATURE_CHIPS.map((c) => (
                <Link key={c.label} href={`/features#${c.id}`} className="rounded-full border border-white/30 px-3.5 py-2 text-sm font-bold text-white hover:bg-white/10">
                  {c.label}
                </Link>
              ))}
              <Link href="/features" className="px-3.5 py-2 text-sm font-bold text-brand-300 hover:text-brand-200">
                See every feature explained →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Trades */}
      <section id="trades" className="py-16 sm:py-24">
        <Container className="flex flex-col gap-10">
          <div className="flex max-w-[640px] flex-col gap-3">
            <Eyebrow>Your trade</Eyebrow>
            <H2>Set up for how your kind of business actually works.</H2>
            <Lead>Pick your trade and you start with the right job types, checklists and wording — a pool route is not a plumbing call.</Lead>
          </div>
          <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {TRADES.map((t) => (
              <Link key={t.slug} href={`/industries/${t.slug}`} className="flex flex-col gap-1 rounded-[14px] border border-line bg-white px-5 py-4 text-ink transition-colors hover:border-brand-300 hover:bg-brand-50/40">
                <span className="text-[17px] font-extrabold">{t.name}</span>
                <span className="text-sm text-faint">{t.hook}</span>
              </Link>
            ))}
            <Link href={BOOK_CALL_URL} className="flex flex-col gap-1 rounded-[14px] border border-brand-200 bg-brand-50 px-5 py-4 text-brand-800 hover:bg-brand-100">
              <span className="text-[17px] font-extrabold">Something else?</span>
              <span className="text-sm">Tell us — we&rsquo;ll set it up with you →</span>
            </Link>
          </div>
        </Container>
      </section>

      {/* Setup */}
      <section id="setup" className="border-y border-line bg-white py-16 sm:py-24">
        <Container className="flex flex-wrap items-start gap-14">
          <div className="flex flex-1 basis-[420px] flex-col gap-4">
            <Eyebrow>Setup &amp; support</Eyebrow>
            <H2>Not a &ldquo;computer person&rdquo;? Good. We set it up with you.</H2>
            <Lead>You don&rsquo;t import anything or watch a tutorial. You get on a 20-minute call with a real person, we put your customers and prices in, and you&rsquo;re running by the end of it.</Lead>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <Button href={BOOK_CALL_URL} variant="dark" size="md">Book a free setup call</Button>
              <Link href="/support" className="inline-flex items-center px-2.5 py-3 text-base font-bold text-ink hover:text-brand-700">
                Or chat with us now →
              </Link>
            </div>
            <div className="mt-4 flex items-start gap-4 rounded-2xl border border-line bg-ground p-5">
              <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-full bg-brand-600 font-extrabold text-white">S</span>
              <p className="text-[15px] leading-relaxed text-ink/80">
                <b className="text-ink">We&rsquo;re a small team, like you.</b> When you message us, you reach the people who build Servienza — not a ticket queue. {SUPPORT_HOURS}.
              </p>
            </div>
          </div>
          <ol className="flex flex-1 basis-[420px] flex-col gap-3.5">
            {[
              ['Day 1 — A call, not a course', 'Send us your customer list however you have it — spreadsheet, old app, photos of a notebook. We load it.'],
              ['Week 1 — Run tomorrow’s jobs in it', 'Your prices, your job types, your text wording. We check in after your first few days.'],
              ['Ongoing — Chat whenever', 'A chat button in the app and on this site. Adding a helper later? Takes two minutes.'],
            ].map(([t, b], i) => (
              <li key={t} className="flex gap-4 rounded-2xl border border-line bg-ground p-5">
                <StepNumber n={i + 1} filled={false} />
                <div>
                  <h3 className="text-lg font-extrabold">{t}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-muted">{b}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-10">
          <div className="flex max-w-[640px] flex-col items-center gap-3 text-center">
            <Eyebrow>Pricing</Eyebrow>
            <H2>One flat price. No per-user surprises.</H2>
            <Lead>Unlimited customers and jobs, both apps and a setup call on every plan. The paid plan adds the phone, texting and routing features for a flat monthly price.</Lead>
          </div>
          <PricingPlans />
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-line bg-white py-16 sm:py-24">
        <Container className="flex flex-wrap gap-14">
          <div className="flex flex-1 basis-[320px] flex-col gap-3">
            <Eyebrow>Questions</Eyebrow>
            <H2>The things people ask us first.</H2>
            <Lead className="text-base">Something else? Hit the chat bubble — a person answers.</Lead>
          </div>
          <div className="flex-[2] basis-[560px]">
            <Faq items={HOME_FAQ} />
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}

function Step({ n, title, body, shot, children }: { n: number; title: string; body: string; shot?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      {shot ? (
        <div className="flex h-[380px] justify-center overflow-hidden rounded-2xl border border-line bg-ground px-4 pt-4">
          <div className="w-full max-w-[268px] rounded-t-[30px] bg-ink px-2 pt-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={shot} alt={title} className="h-[356px] w-full rounded-t-[22px] object-cover object-top" />
          </div>
        </div>
      ) : (
        children
      )}
      <div className="flex gap-3">
        <StepNumber n={n} />
        <div>
          <h3 className="text-lg font-extrabold">{title}</h3>
          <p className="mt-1 text-[15px] leading-relaxed text-muted">{body}</p>
        </div>
      </div>
    </div>
  )
}

function PainIcon({ kind }: { kind: string }) {
  const common = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true }
  if (kind === 'phone')
    return (
      <svg {...common}><path d="M10.7 5.8A2 2 0 0 1 8.7 4H5a2 2 0 0 0-2 2 18 18 0 0 0 18 18 2 2 0 0 0 2-2v-3.7a2 2 0 0 0-1.8-2l-3-.4a2 2 0 0 0-2 1.2l-.6 1.3a14 14 0 0 1-6-6l1.3-.6a2 2 0 0 0 1.2-2z" /><path d="M15 3l6 6M21 3l-6 6" /></svg>
    )
  if (kind === 'card')
    return (
      <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18M7 15h4" /></svg>
    )
  return (
    <svg {...common}><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><path d="M14 3v6h6M8 13h8M8 17h5" /></svg>
  )
}
