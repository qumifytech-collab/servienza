import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CtaBand from '@/components/CtaBand'
import { Breadcrumbs, Container, Faq, H2, StepNumber } from '@/components/ui'
import { COMPETITORS, COMPETITOR_BY_SLUG } from '@/content/competitors'
import { SITE_NAME, TRIAL_DAYS } from '@/lib/site'
import { breadcrumbJsonLd, faqJsonLd, jsonLdString, pageMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return COMPETITORS.map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = COMPETITOR_BY_SLUG[params.slug]
  if (!c) return {}
  return pageMetadata({
    title: `Servienza vs ${c.name} for a 1–10 person service business`,
    description: `${c.name} compared with Servienza on price, users included, features held back to upper plans, setup help, payments and QuickBooks — with the date we checked. Plus how to switch.`,
    path: `/compare/${c.slug}`,
  })
}

function fmtDate(iso: string) {
  return new Date(iso + 'T12:00:00Z').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function ComparePage({ params }: { params: { slug: string } }) {
  const c = COMPETITOR_BY_SLUG[params.slug]
  if (!c) notFound()
  const checked = fmtDate(c.lastChecked)
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(faqJsonLd(c.faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Compare', path: '/pricing' }, { name: c.name, path: `/compare/${c.slug}` }])) }} />

      <section>
        <Container className="flex flex-col gap-5 pb-10 pt-10 sm:pt-16">
          <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Pricing', href: '/pricing' }, { name: `vs ${c.name}` }]} />
          <h1 className="max-w-[860px] text-[36px] font-extrabold leading-[1.06] tracking-[-1.2px] sm:text-[50px] sm:tracking-[-1.5px]">
            Servienza vs {c.name} for a 1–10 person service business
          </h1>
          <p className="max-w-[820px] text-[17px] font-semibold leading-relaxed sm:text-[19px]">
            <span className="text-faint">Short version:</span> {c.verdict}
          </p>
          <p className="text-[13px] text-faint">
            {c.name}&rsquo;s prices and features below were checked on <b>{checked}</b> against{' '}
            {c.sources.map((s, i) => (
              <span key={s.url}>
                {i > 0 && ' and '}
                <a href={s.url} rel="nofollow noopener" target="_blank" className="underline hover:text-ink">{s.label}</a>
              </span>
            ))}
            . Spot something out of date? Tell us and we&rsquo;ll fix it.
          </p>
        </Container>
      </section>

      <section>
        <Container className="pb-16 sm:pb-[72px]">
          <div className="overflow-x-auto rounded-[20px] border border-line bg-white">
            <table className="w-full min-w-[720px] border-collapse text-[15px]">
              <thead>
                <tr className="border-b border-line">
                  <th scope="col" className="w-[34%] px-6 py-5 text-left text-[13px] font-extrabold uppercase tracking-[0.8px] text-faint">What matters to a small shop</th>
                  <th scope="col" className="w-[33%] bg-brand-50 px-6 py-5 text-left text-base font-extrabold text-brand-700">{SITE_NAME}</th>
                  <th scope="col" className="w-[33%] px-6 py-5 text-left text-base font-extrabold">{c.name}</th>
                </tr>
              </thead>
              <tbody>
                {c.rows.map((r) => (
                  <tr key={r.label} className="border-b border-line last:border-0">
                    <th scope="row" className="px-6 py-4 text-left font-bold">{r.label}</th>
                    <td className="bg-[#F7FDF9] px-6 py-4">{r.ours}</td>
                    <td className="px-6 py-4 text-muted">{r.theirs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-white py-16 sm:py-[72px]">
        <Container className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-3.5 rounded-[20px] border border-brand-200 bg-brand-50 p-8">
            <h2 className="text-[26px] font-extrabold leading-[1.15] tracking-[-0.5px] text-brand-800">Pick Servienza if…</h2>
            <ul className="space-y-2.5 text-base leading-relaxed">
              {c.pickUsIf.map((t) => (<li key={t} className="flex gap-2.5"><span className="font-extrabold text-brand-600">✓</span>{t}</li>))}
            </ul>
          </div>
          <div className="flex flex-col gap-3.5 rounded-[20px] border border-line bg-ground p-8">
            <h2 className="text-[26px] font-extrabold leading-[1.15] tracking-[-0.5px]">{c.name} may suit you better if…</h2>
            <ul className="space-y-2.5 text-base leading-relaxed">
              {c.pickThemIf.map((t) => (<li key={t} className="flex gap-2.5"><span aria-hidden="true">•</span>{t}</li>))}
            </ul>
            <p className="mt-1 text-sm text-faint">We&rsquo;d rather you pick the right tool than pick us and leave.</p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-[72px]">
        <Container className="flex flex-wrap items-center gap-12">
          <div className="flex flex-1 basis-[440px] flex-col gap-3.5">
            <H2 className="sm:text-[34px]">How do I switch from {c.name} to Servienza?</H2>
            <p className="text-[17px] font-semibold leading-relaxed">{c.switching}</p>
          </div>
          <ol className="flex flex-1 basis-[420px] flex-col gap-3">
            {[
              <><b>Export</b> customers and invoices from {c.name} ({c.exportHint}).</>,
              <><b>Send it to us</b> — we import it and set up your repeat schedules.</>,
              <><b>Run next week in Servienza.</b> Cancel {c.name} when you&rsquo;re comfortable.</>,
            ].map((node, i) => (
              <li key={i} className="flex gap-4 rounded-[14px] border border-line bg-white p-[18px]">
                <StepNumber n={i + 1} filled={false} />
                <span className="text-[15px] leading-relaxed">{node}</span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-line bg-white py-16 sm:py-[72px]">
        <Container className="flex flex-wrap gap-14">
          <div className="flex-1 basis-[320px]">
            <H2 className="sm:text-[34px]">People switching from {c.name} ask</H2>
          </div>
          <div className="flex-[2] basis-[560px]">
            <Faq items={c.faq} />
          </div>
        </Container>
      </section>

      <CtaBand title="See it with your own customers. We’ll import them for the trial." body={`${TRIAL_DAYS}-day free trial, no card. Keep ${c.name} running alongside until you’re sure.`} secondary="Book a switch call" stores={false} />

      <div className="bg-ink px-4 pb-2 pt-8 text-center text-[13px] leading-relaxed text-[#8E8C84]">
        <Container>
          {c.name} is a trademark of {c.owner}. Servienza is not affiliated with {c.name}. Comparison based on publicly available information as of {checked}.
        </Container>
      </div>
    </>
  )
}

