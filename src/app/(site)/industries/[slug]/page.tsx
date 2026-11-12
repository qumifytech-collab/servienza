import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import CtaBand from '@/components/CtaBand'
import { Breadcrumbs, Button, Container, Eyebrow, Faq, H2, Screenshot } from '@/components/ui'
import { TRADES, TRADE_BY_SLUG } from '@/content/trades'
import { FEATURE_BY_ID } from '@/content/features'
import { BOOK_CALL_URL, SIGNUP_URL, TRIAL_DAYS } from '@/lib/site'
import { breadcrumbJsonLd, faqJsonLd, jsonLdString, pageMetadata } from '@/lib/seo'
import { MOBILE, screen } from '@/lib/screens'

export function generateStaticParams() {
  return TRADES.map((t) => ({ slug: t.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const t = TRADE_BY_SLUG[params.slug]
  if (!t) return {}
  return pageMetadata({
    title: `${t.name} software for small businesses — scheduling, estimates & invoicing`,
    description: t.answer,
    path: `/industries/${t.slug}`,
  })
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const t = TRADE_BY_SLUG[params.slug]
  if (!t) notFound()
  const lead = t.leadFeatures.map((id) => FEATURE_BY_ID[id]).filter(Boolean)
  const faq = [{ q: `Is Servienza good for a ${t.name.toLowerCase()} business?`, a: t.answer }, ...t.faq]
  const others = TRADES.filter((x) => x.slug !== t.slug).slice(0, 6)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(faqJsonLd(faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Your trade', path: '/industries' }, { name: t.name, path: `/industries/${t.slug}` }])) }} />

      {/* Hero */}
      <section>
        <Container className="flex flex-wrap items-center gap-12 pb-12 pt-10 sm:pt-16">
          <div className="flex min-w-0 flex-1 basis-[460px] flex-col gap-5">
            <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Your trade', href: '/industries' }, { name: t.name }]} />
            <h1 className="text-[38px] font-extrabold leading-[1.05] tracking-[-1.2px] sm:text-[54px] sm:tracking-[-1.6px]">{t.headline}</h1>
            <p className="max-w-[540px] text-[17px] leading-relaxed text-muted sm:text-[19px]">{t.sub}</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap [&>a]:whitespace-nowrap">
              <Button href={`${SIGNUP_URL}?trade=${t.slug}`}>Start free — no card needed</Button>
              <Button href={BOOK_CALL_URL} variant="secondary">Talk to a human</Button>
            </div>
            <p className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-faint">
              <span>✓ Set up with you on a 20-minute call</span>
              <span>✓ We move your customer list</span>
              <span>✓ Cancel anytime</span>
            </p>
          </div>
          <div className="flex min-w-0 flex-1 basis-[460px] flex-wrap items-end justify-center gap-5">
            <Screenshot kind="phone" label={`Mobile — My Day with ${t.jobTypes[0]} jobs`} src={screen(MOBILE.myDay)} alt="Servienza mobile app: My Day" />
            <Screenshot label="Web — schedule board" src="/screens/web-schedule-timeline.jpg" alt="Servienza web app: the schedule board in timeline view" className="w-full min-w-0 flex-1 basis-[300px]" />
          </div>
        </Container>
      </section>

      {/* The answer block — question heading + direct answer, for people and for answer engines */}
      <section className="border-y border-line bg-white py-14 sm:py-16">
        <Container className="flex flex-col gap-4">
          <Eyebrow>Straight answer</Eyebrow>
          <h2 className="text-[26px] font-extrabold leading-[1.15] tracking-[-0.6px] sm:text-[30px]">Is Servienza good for a {t.name.toLowerCase()} business?</h2>
          <p className="max-w-[820px] text-[17px] font-semibold leading-relaxed">{t.answer}</p>
          <p className="text-[15px] text-muted">
            Typical jobs you&rsquo;ll set up on day one: {t.jobTypes.join(' · ')}.
          </p>
        </Container>
      </section>

      {/* Pains */}
      <section className="py-16 sm:py-[88px]">
        <Container className="flex flex-col gap-10">
          <div className="flex max-w-[680px] flex-col gap-3">
            <Eyebrow>Made for {t.short.toLowerCase()}</Eyebrow>
            <H2 className="sm:text-[40px]">The parts of {t.short.toLowerCase()} that software usually gets wrong.</H2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {t.pains.map((p) => (
              <div key={p.title} className="flex flex-col gap-2.5 rounded-2xl border border-line bg-white p-7">
                <h3 className="text-xl font-extrabold">{p.title}</h3>
                <p className="text-base leading-relaxed text-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* A day */}
      <section className="border-y border-line bg-white py-16 sm:py-[88px]">
        <Container className="flex flex-col gap-10">
          <div className="flex max-w-[640px] flex-col gap-3">
            <Eyebrow>A normal day</Eyebrow>
            <H2 className="sm:text-[40px]">What it looks like on the route.</H2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.day.map((d) => (
              <div key={d.title} className="flex flex-col gap-2.5 rounded-2xl border border-line bg-ground p-6">
                <span className="text-[13px] font-extrabold text-brand-700">{d.time}</span>
                <h3 className="text-lg font-extrabold">{d.title}</h3>
                <p className="text-[15px] leading-relaxed text-muted">{d.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Lead features */}
      <section className="py-16 sm:py-[88px]">
        <Container className="flex flex-col gap-10">
          <div className="flex max-w-[680px] flex-col gap-3">
            <Eyebrow>What {t.short.toLowerCase()} businesses use most</Eyebrow>
            <H2 className="sm:text-[40px]">The four features that matter most for your trade.</H2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {lead.map((f) => (
              <Link key={f.id} href={`/features#${f.id}`} className="flex flex-col gap-2.5 rounded-2xl border border-line bg-white p-7 transition-colors hover:border-brand-300">
                <Eyebrow>{f.eyebrow}</Eyebrow>
                <h3 className="text-xl font-extrabold">{f.question}</h3>
                <p className="text-[15px] leading-relaxed text-muted">{f.answer}</p>
                <span className="mt-1 text-sm font-bold text-brand-700">See how it works →</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Switching */}
      <section className="bg-ink text-ground">
        <Container className="flex flex-wrap items-center justify-between gap-12 py-16 sm:py-[88px]">
          <div className="flex flex-1 basis-[480px] flex-col gap-3.5">
            <Eyebrow light>Coming from {t.switchingFrom}?</Eyebrow>
            <H2 className="sm:text-[40px]">We move your customers over. You don&rsquo;t lift a finger.</H2>
            <p className="text-[17px] leading-relaxed text-[#B8B6AD]">Export from your old app (we&rsquo;ll show you where the button is) or photograph your notebook. We load it, set up your {t.jobTypes[0].toLowerCase()} schedules, and check it with you on the call.</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-[380px]">
            <Button href={BOOK_CALL_URL} variant="white">Book a free setup call</Button>
            <Button href={`${SIGNUP_URL}?trade=${t.slug}`} variant="ghostLight">Start free on my own</Button>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-[88px]">
        <Container className="flex flex-wrap gap-14">
          <div className="flex flex-1 basis-[320px] flex-col gap-3">
            <Eyebrow>{t.short} businesses ask</Eyebrow>
            <H2 className="sm:text-[40px]">Good questions.</H2>
          </div>
          <div className="flex-[2] basis-[560px]">
            <Faq items={t.faq} />
          </div>
        </Container>
      </section>

      <CtaBand title={`Try it on next week’s ${t.jobTypes[0].toLowerCase()} jobs. Free for ${TRIAL_DAYS} days.`} body="No card. We import your customers for the trial, so you see it with real names, not demo data." secondary="Talk to a human" />

      <section className="border-t border-line bg-white py-10">
        <Container className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <span className="font-bold text-faint">Other trades:</span>
          {others.map((o) => (
            <Link key={o.slug} href={`/industries/${o.slug}`} className="font-bold text-ink hover:text-brand-700">{o.short}</Link>
          ))}
          <Link href="/industries" className="font-bold text-brand-700">All trades →</Link>
        </Container>
      </section>
    </>
  )
}

