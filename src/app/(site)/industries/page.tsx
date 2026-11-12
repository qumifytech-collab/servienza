import type { Metadata } from 'next'
import Link from 'next/link'
import CtaBand from '@/components/CtaBand'
import { Breadcrumbs, Container, Eyebrow } from '@/components/ui'
import { TRADES } from '@/content/trades'
import { BOOK_CALL_URL } from '@/lib/site'
import { breadcrumbJsonLd, jsonLdString, pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Your trade — field service software by industry',
  description: `Servienza for ${TRADES.map((t) => t.short.toLowerCase()).join(', ')}: the same simple scheduling, estimates, invoicing and payments, set up for how your kind of business works.`,
  path: '/industries',
})

export default function IndustriesIndex() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Your trade', path: '/industries' }])) }} />
      <section>
        <Container className="flex flex-col gap-5 pb-12 pt-10 sm:pt-16">
          <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Your trade' }]} />
          <Eyebrow>Your trade</Eyebrow>
          <h1 className="max-w-[820px] text-[38px] font-extrabold leading-[1.05] tracking-[-1.2px] sm:text-[54px] sm:tracking-[-1.6px]">Set up for how your kind of business actually works.</h1>
          <p className="max-w-[680px] text-[17px] leading-relaxed text-muted sm:text-[19px]">Pick your trade and you start with the right job types, checklists and wording. Same app underneath — a pool route is just not a plumbing call.</p>
        </Container>
      </section>
      <section className="pb-20">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TRADES.map((t) => (
              <Link key={t.slug} href={`/industries/${t.slug}`} className="flex flex-col gap-2 rounded-2xl border border-line bg-white p-6 transition-colors hover:border-brand-300 hover:bg-brand-50/40">
                <span className="text-xl font-extrabold">{t.name}</span>
                <span className="text-sm font-semibold text-faint">{t.hook}</span>
                <span className="text-[15px] leading-relaxed text-muted">{t.sub}</span>
                <span className="mt-1 text-sm font-bold text-brand-700">See how it works for {t.short.toLowerCase()} →</span>
              </Link>
            ))}
            <Link href={BOOK_CALL_URL} className="flex flex-col gap-2 rounded-2xl border border-brand-200 bg-brand-50 p-6 text-brand-800 hover:bg-brand-100">
              <span className="text-xl font-extrabold">Something else?</span>
              <span className="text-[15px] leading-relaxed">Window cleaning, pressure washing, locksmiths, appliance repair, mobile mechanics — if you drive to the customer, it fits. Tell us and we&rsquo;ll set it up with you.</span>
            </Link>
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  )
}
