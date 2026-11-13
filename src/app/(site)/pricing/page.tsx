import type { Metadata } from 'next'
import Link from 'next/link'
import PricingPlans from '@/components/PricingPlans'
import CtaBand from '@/components/CtaBand'
import { Container, Faq, H2, Lead } from '@/components/ui'
import { EXTRA_SEAT_MONTHLY, FREE, FREE_PLAN_LIVE, PAID, TRIAL_DAYS, formatPrice } from '@/content/plans'
import { COMPETITORS } from '@/content/competitors'
import { breadcrumbJsonLd, faqJsonLd, jsonLdString, pageMetadata, softwareAppJsonLd } from '@/lib/seo'

const PRICE = formatPrice(PAID.monthly)

export const metadata: Metadata = pageMetadata({
  title: `Pricing — ${PRICE}/month for two technicians, ${TRIAL_DAYS}-day free trial`,
  description: `Servienza costs ${PRICE} a month for a business with up to two technicians, with missed-call voicemail-to-text, customer texting, route planning and live tracking included. ${FREE_PLAN_LIVE ? 'A free owner-only plan covers scheduling, estimates, invoicing and QuickBooks. ' : ''}${TRIAL_DAYS}-day free trial, no card, no contract.`,
  path: '/pricing',
})

const PRICING_FAQ = [
  { q: 'What counts as a technician?', a: 'Anyone who logs in and works jobs — including you. Customers never need a login, so they don’t count.' },
  { q: 'What happens when the trial ends?', a: `After ${TRIAL_DAYS} days you add a card to stay on the Team plan. If you don’t, your account moves to the Free plan — nothing is deleted and you keep working; the texting, missed-call and routing features switch off until you upgrade.` },
  { q: 'I only want the Free plan. Do I still get the trial?', a: `Yes — every account starts with ${TRIAL_DAYS} days of Team so you can see the texting and missed-call features with your own customers. If they aren’t for you, do nothing: you move to Free automatically, with everything you entered intact.` },
  { q: 'What happens if I hit the text or voicemail limit?', a: 'You get a notice, and that’s all. Voicemails are still recorded and listed, just without the typed-out transcript. Pay links switch to email, and alerts to your team go by push and email. Login codes are never counted or blocked. Limits reset on the 1st.' },
  { q: 'Why have limits at all?', a: 'Texts and transcription cost us per message. The limits are set well above what a two-person business uses in a normal month; they exist so one unusual month doesn’t change the flat price for everyone.' },
  { q: 'Is there a contract?', a: 'No. Monthly billing, cancel any time from the app.' },
  { q: 'If I leave, can I take my data?', a: 'Yes — customers, jobs, invoices and payments export to spreadsheets with one click, before or after you cancel.' },
]

const MONEY_QUESTIONS = [
  { q: 'What does it cost to take card payments?', a: 'Only Stripe’s standard card rate, charged by Stripe. Servienza adds no fee of its own on payments. Cash and check payments are free to record.' },
  { q: 'Is there a setup or onboarding fee?', a: 'No. The setup call and moving your customer list in are free.' },
  { q: 'Can I add a third technician?', a: `Yes. Extra technician seats are $${EXTRA_SEAT_MONTHLY}/month each on the Team plan, added from the billing page whenever you hire.` },
]

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(softwareAppJsonLd()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(faqJsonLd([...MONEY_QUESTIONS, ...PRICING_FAQ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Pricing', path: '/pricing' }])) }} />

      <section>
        <Container className="flex flex-col items-center gap-5 pb-8 pt-10 text-center sm:pt-16">
          <h1 className="max-w-[760px] text-[38px] font-extrabold leading-[1.05] tracking-[-1.2px] sm:text-[54px] sm:tracking-[-1.6px]">How much does Servienza cost?</h1>
          <p className="max-w-[780px] text-[17px] font-semibold leading-relaxed sm:text-[19px]">
            Servienza costs <b>{PRICE} a month for up to two technicians</b>, with missed-call voicemail-to-text, customer texting, route planning and live tracking included.
            {FREE_PLAN_LIVE ? (
              <> If it&rsquo;s just you, the <b>Free plan</b> covers scheduling, estimates, invoicing and QuickBooks at no cost, forever.</>
            ) : (
              <> A free owner-only plan is coming.</>
            )}{' '}
            Every new account starts with a <b>{TRIAL_DAYS}-day free trial</b> of the full product — no credit card, no contract.
          </p>
        </Container>
      </section>

      <section>
        <Container className="pb-16 pt-6">
          <PricingPlans headingLevel="h2" />
        </Container>
      </section>

      <section className="border-y border-line bg-white py-16 sm:py-[72px]">
        <Container className="flex flex-col gap-7">
          <div className="flex max-w-[680px] flex-col gap-2.5">
            <H2 className="sm:text-[34px]">What&rsquo;s the difference?</H2>
            <Lead>The {FREE.name} plan runs the business; the {PAID.name} plan adds the things that cost us per use — phone and text — plus routing and the live map.</Lead>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[640px] border-collapse text-[15px]">
              <thead>
                <tr className="border-b border-line bg-ground">
                  <th scope="col" className="px-5 py-4 text-left text-[13px] font-extrabold uppercase tracking-[0.8px] text-faint">Included</th>
                  <th scope="col" className="px-5 py-4 text-left font-extrabold">{FREE.name}{FREE_PLAN_LIVE ? '' : ' (coming)'}</th>
                  <th scope="col" className="bg-brand-50 px-5 py-4 text-left font-extrabold text-brand-700">{PAID.name} · {PRICE}/mo</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['People who can log in', '1 (the owner)', `2 technicians · +$${EXTRA_SEAT_MONTHLY}/mo each after`],
                  ['Customers, jobs, estimates, invoices', 'Unlimited', 'Unlimited'],
                  ['Phone app + web app', '✓', '✓'],
                  ['Pay links on invoices (Stripe)', '✓', '✓'],
                  ['QuickBooks Online sync', '✓', '✓'],
                  ['Agreements with e-sign, documents', '✓', '✓'],
                  ['Missed calls: your own number, voicemail as text', '—', '✓ · 50 transcripts/mo'],
                  ['Customer text messages', '—', '✓ · 300/mo'],
                  ['Best-route planning and drive times', '—', '✓'],
                  ['Live technician map', '—', '✓'],
                  ['Setup call and data import', '✓', '✓'],
                ].map(([f, a, b]) => (
                  <tr key={f} className="border-b border-line last:border-0">
                    <th scope="row" className="px-5 py-3.5 text-left font-semibold">{f}</th>
                    <td className="px-5 py-3.5 text-muted">{a}</td>
                    <td className="bg-[#F7FDF9] px-5 py-3.5">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-[72px]">
        <Container className="grid gap-5 md:grid-cols-3">
          {MONEY_QUESTIONS.map((m) => (
            <div key={m.q} className="flex flex-col gap-2.5 rounded-2xl border border-line bg-white p-7">
              <h2 className="text-xl font-extrabold">{m.q}</h2>
              <p className="text-[15px] leading-relaxed text-muted">{m.a}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="bg-ink text-ground">
        <Container className="flex flex-wrap items-center justify-between gap-8 py-14 sm:py-16">
          <div className="flex max-w-[640px] flex-col gap-2">
            <h2 className="text-[26px] font-extrabold leading-[1.12] tracking-[-0.6px] sm:text-[30px]">How does that compare with {COMPETITORS.map((c) => c.name).join(' or ')}?</h2>
            <p className="text-base leading-relaxed text-[#B8B6AD]">Those tools charge per user on top of a base plan and hold some features back to higher tiers; we put the numbers side by side, with the date we checked them.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {COMPETITORS.map((c, i) => (
              <Link key={c.slug} href={`/compare/${c.slug}`} className={`rounded-xl px-5 py-3.5 text-[15px] font-bold ${i === 0 ? 'bg-white text-ink hover:bg-ground' : 'border-[1.5px] border-white/40 text-white hover:bg-white/10'}`}>
                Servienza vs {c.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-[72px]">
        <Container className="flex flex-wrap gap-14">
          <div className="flex-1 basis-[320px]">
            <H2 className="sm:text-[34px]">Pricing questions</H2>
          </div>
          <div className="flex-[2] basis-[560px]">
            <Faq items={PRICING_FAQ} />
          </div>
        </Container>
      </section>

      <CtaBand title={`Try everything free for ${TRIAL_DAYS} days. No card.`} body="Keep the Team plan at the end, or drop to Free. Either way nothing you entered is lost." secondary="Talk to a human" stores={false} />
    </>
  )
}
