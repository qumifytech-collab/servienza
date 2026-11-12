import type { Metadata } from 'next'
import BookCallForm from '@/components/BookCallForm'
import { Breadcrumbs, Container, Eyebrow, StepNumber } from '@/components/ui'
import { SIGNUP_URL, SUPPORT_EMAIL, SUPPORT_HOURS, TRIAL_DAYS } from '@/lib/site'
import { breadcrumbJsonLd, jsonLdString, pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Book a free setup call',
  description: 'Tell us when to call. A real person sets Servienza up with you in about 20 minutes — we import your customers and prices so you’re running by the end of the call. Free, no card.',
  path: '/book-a-call',
})

export default function BookCallPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Book a setup call', path: '/book-a-call' }])) }} />
      <section>
        <Container className="flex flex-wrap items-start gap-12 pb-20 pt-10 sm:pt-16">
          <div className="flex flex-1 basis-[380px] flex-col gap-5">
            <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Book a setup call' }]} />
            <Eyebrow>Talk to a human</Eyebrow>
            <h1 className="text-[38px] font-extrabold leading-[1.05] tracking-[-1.2px] sm:text-[50px] sm:tracking-[-1.5px]">Tell us when to call. We&rsquo;ll set it up with you.</h1>
            <p className="text-[17px] leading-relaxed text-muted sm:text-lg">Twenty minutes on the phone with a person who builds Servienza. We put your customers and prices in while we talk, and you leave with tomorrow&rsquo;s jobs already in the app.</p>
            <ol className="flex flex-col gap-3">
              {[
                ['You fill in the form', 'Name, number, and when to call. Thirty seconds.'],
                ['We call you', `At the time you picked, ${SUPPORT_HOURS}.`],
                ['You’re running', 'Customers imported, prices set, text wording yours. Free trial starts when you say so.'],
              ].map(([t, b], i) => (
                <li key={t} className="flex gap-4">
                  <StepNumber n={i + 1} filled={false} />
                  <div>
                    <b className="text-base">{t}</b>
                    <p className="text-[15px] leading-relaxed text-muted">{b}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="rounded-2xl border border-line bg-white p-5 text-[15px] leading-relaxed text-muted">
              Prefer to poke around first? <a href={SIGNUP_URL} className="font-bold text-brand-700">Start the {TRIAL_DAYS}-day free trial</a> — no card — and book the call whenever. Or email <a href={`mailto:${SUPPORT_EMAIL}`} className="font-bold text-brand-700">{SUPPORT_EMAIL}</a>.
            </div>
          </div>
          <div className="w-full flex-1 basis-[460px]">
            <BookCallForm />
          </div>
        </Container>
      </section>
    </>
  )
}
