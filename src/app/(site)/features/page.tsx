import type { Metadata } from 'next'
import { FEATURES } from '@/content/features'
import { Breadcrumbs, Button, CheckList, Container, Eyebrow, Screenshot } from '@/components/ui'
import { SIGNUP_URL, TRIAL_DAYS } from '@/lib/site'
import { breadcrumbJsonLd, faqJsonLd, jsonLdString, pageMetadata } from '@/lib/seo'
import { screen } from '@/lib/screens'

export const metadata: Metadata = pageMetadata({
  title: 'Features — everything Servienza does, in plain English',
  description:
    'Scheduling with double-booking warnings, best-route planning, a technician phone app, missed-call text-back, estimates with e-sign and deposits, invoices with pay links and automatic reminders, QuickBooks sync and more — every feature on every plan.',
  path: '/features',
})

export default function FeaturesPage() {
  const faq = FEATURES.map((f) => ({ q: f.question, a: f.answer }))
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(faqJsonLd(faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Features', path: '/features' }])) }} />

      <section>
        <Container className="flex flex-col gap-7 pb-10 pt-10 sm:pt-16">
          <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Features' }]} />
          <h1 className="max-w-[820px] text-[38px] font-extrabold leading-[1.05] tracking-[-1.2px] sm:text-[54px] sm:tracking-[-1.6px]">
            Everything Servienza does, explained in plain English.
          </h1>
          <p className="max-w-[680px] text-[17px] leading-relaxed text-muted sm:text-[19px]">
            Servienza is scheduling, estimates, invoicing and payments for service businesses with 1 to 10 people, on a phone app and a web app. Below is each part, what it does for you, and what it looks like.
          </p>
          <nav aria-label="On this page" className="flex flex-wrap gap-2">
            {FEATURES.map((f) => (
              <a key={f.id} href={`#${f.id}`} className="rounded-full border border-line bg-white px-3.5 py-2 text-sm font-bold text-ink hover:bg-ground">
                {f.eyebrow}
              </a>
            ))}
          </nav>
        </Container>
      </section>

      <Container className="flex flex-col gap-8 pb-20 pt-6">
        {FEATURES.map((f, i) => {
          const flip = i % 2 === 1
          const dark = !!f.dark
          return (
            <section
              key={f.id}
              id={f.id}
              className={`flex flex-wrap items-center gap-10 rounded-[20px] p-6 sm:p-10 ${dark ? 'bg-ink text-ground' : 'border border-line bg-white'} ${flip ? 'flex-wrap-reverse' : ''}`}
            >
              {flip && <Shots f={f} />}
              <div className="flex flex-1 basis-[420px] flex-col gap-3.5">
                <Eyebrow light={dark}>{f.eyebrow}</Eyebrow>
                <h2 className="text-[26px] font-extrabold leading-[1.15] tracking-[-0.6px] sm:text-[30px]">{f.question}</h2>
                <p className={`text-[17px] font-semibold leading-relaxed ${dark ? 'text-ground' : 'text-ink'}`}>{f.answer}</p>
                <CheckList items={f.bullets} light={dark} />
              </div>
              {!flip && <Shots f={f} />}
            </section>
          )
        })}
      </Container>

      <section className="bg-brand-600 text-white">
        <Container className="flex flex-wrap items-center justify-between gap-6 py-16 sm:py-[72px]">
          <div className="flex max-w-[620px] flex-col gap-2">
            <h2 className="text-[30px] font-extrabold leading-[1.1] tracking-[-1px] sm:text-[36px]">Try all of it free for {TRIAL_DAYS} days.</h2>
            <p className="text-[17px] text-brand-100">One flat monthly price after that, for up to two technicians. No credit card to start.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={SIGNUP_URL} variant="white">Start free</Button>
            <Button href="/pricing" variant="ghostLight">See pricing</Button>
          </div>
        </Container>
      </section>
    </>
  )
}

function Shots({ f }: { f: (typeof FEATURES)[number] }) {
  const phones = f.shots.filter((s) => s.kind === 'phone')
  const webs = f.shots.filter((s) => s.kind === 'web')
  return (
    <div className="flex flex-1 basis-[460px] flex-wrap items-center justify-center gap-4">
      {webs.map((s) => (
        <Screenshot key={s.label} label={s.label} src={screen(s.src)} alt={s.alt} className="w-full min-w-0 flex-1 basis-[260px]" />
      ))}
      {phones.map((s) => (
        <Screenshot key={s.label} kind="phone" label={s.label} src={screen(s.src)} alt={s.alt} />
      ))}
      {f.id === 'invoices' && (
        <div className="flex w-full flex-col gap-1.5 rounded-[14px] border border-white/15 bg-[#252420] p-4 text-[13px]">
          <span className="text-[11px] font-bold text-[#B8B6AD]">TEXT TO CUSTOMER — SENT AUTOMATICALLY</span>
          <span>
            Hi Dana, today&rsquo;s service at Green Valley is done. Invoice #1042 for $63.00 — pay here: <span className="text-brand-300">pay.servienza.com/8k2</span>
          </span>
        </div>
      )}
    </div>
  )
}
