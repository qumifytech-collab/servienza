import type { Metadata } from 'next'
import Link from 'next/link'
import SupportChatButton from './SupportChatButton'

export const metadata: Metadata = {
  title: 'Support — Servienza',
  description:
    'Get help with Servienza: chat with our team, email support, account and billing questions, and answers to common questions.',
  robots: { index: true, follow: true },
}

// Keep in sync with the legal pages and the Twilio/Auth0 support settings.
const SUPPORT_EMAIL = 'at@servienza.com'
const SUPPORT_HOURS = 'Monday–Friday, 8am–6pm ET'
const LEGAL_ENTITY = 'Qumify Technologies Inc.'

const FAQS: { q: string; a: React.ReactNode }[] = [
  {
    q: "I didn't get my verification email or text.",
    a: (
      <>
        Check your spam or junk folder for a message from Servienza. In the app, open{' '}
        <strong>Profile</strong> and tap <strong>Resend</strong>. Codes expire after a few minutes,
        so request a fresh one if it has been a while. Still nothing? Chat with us and we will verify
        you manually.
      </>
    ),
  },
  {
    q: 'I forgot my password or cannot sign in.',
    a: (
      <>
        Use <strong>Forgot password</strong> on the sign-in screen. If you signed in by phone, choose{' '}
        <strong>Text me a code</strong> instead. If your account was created by your company admin,
        ask them to resend your invitation.
      </>
    ),
  },
  {
    q: 'How do I add a technician or change their access?',
    a: (
      <>
        Go to <strong>Technicians</strong> in the web app, add their name, phone and email, and they
        get an invite by text. Admins can change roles or deactivate a technician from the same page.
      </>
    ),
  },
  {
    q: 'A customer says they did not receive an estimate, invoice or payment link.',
    a: (
      <>
        Open the estimate or invoice and check <strong>Delivery</strong> — it shows whether the email
        or text was delivered, opened or bounced. You can resend from there or copy the public link
        and send it yourself.
      </>
    ),
  },
  {
    q: 'How do billing and plan changes work?',
    a: (
      <>
        Your subscription is managed under <strong>Billing</strong> in the web app, where you can
        update your card, change plans or download receipts. See{' '}
        <Link href="/pricing" className="text-brand-700 underline">
          pricing
        </Link>{' '}
        for what each plan includes.
      </>
    ),
  },
  {
    q: 'How do I export or delete my data?',
    a: (
      <>
        Customers, jobs and invoices can be exported as CSV from each list. To close your account and
        have your data deleted, email us from the address on the account and we will confirm within
        two business days. Details are in our{' '}
        <Link href="/privacy" className="text-brand-700 underline">
          privacy policy
        </Link>
        .
      </>
    ),
  },
  {
    q: 'How do I stop text messages from Servienza?',
    a: (
      <>
        Reply <strong>STOP</strong> to any message. See the{' '}
        <Link href="/sms-opt-in" className="text-brand-700 underline">
          SMS policy
        </Link>{' '}
        for what we send and how consent works.
      </>
    ),
  },
]

function Card({
  title,
  children,
  action,
}: {
  title: string
  children: React.ReactNode
  action?: React.ReactNode
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900 font-display">{title}</h2>
      <div className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{children}</div>
      {action && <div className="mt-5">{action}</div>}
    </div>
  )
}

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <div className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
        {/* Header */}
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600 text-lg font-bold text-white">
            S
          </span>
          <span className="text-lg font-semibold text-slate-900">Servienza</span>
        </Link>

        <h1 className="mt-8 text-3xl font-bold text-slate-900 font-display sm:text-4xl">
          How can we help?
        </h1>
        <p className="mt-3 text-slate-600">
          You talk to the people who build Servienza — not a ticket queue. Chat is fastest during
          business hours; email works any time.
        </p>

        {/* Contact options */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Card
            title="Chat with us"
            action={<SupportChatButton />}
          >
            Live during {SUPPORT_HOURS}. Outside those hours, leave a message and we reply by email
            first thing.
          </Card>
          <Card
            title="Email support"
            action={
              <a
                href={`mailto:${SUPPORT_EMAIL}?subject=Servienza%20support`}
                className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                {SUPPORT_EMAIL}
              </a>
            }
          >
            Best for account changes, billing questions and anything with screenshots. We answer
            within one business day.
          </Card>
        </div>

        {/* Urgent */}
        <div className="mt-4 rounded-2xl border border-brand-200 bg-brand-50 p-5">
          <h2 className="text-base font-semibold text-brand-800">Something is down?</h2>
          <p className="mt-2 text-sm leading-relaxed text-brand-900/80">
            If your crew cannot sign in or see today&apos;s schedule, start a chat and put{' '}
            <strong>URGENT</strong> in the first line. Those go straight to the on-call engineer.
          </p>
        </div>

        {/* What to include */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-brand-800 font-display">
            What helps us fix it faster
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700 leading-relaxed">
            <li>The email or phone number on your Servienza account.</li>
            <li>Whether you were on the web app or the mobile app (iPhone or Android).</li>
            <li>The customer, job or invoice it concerns — a link from the app is perfect.</li>
            <li>A screenshot of any error message.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-brand-800 font-display">Common questions</h2>
          <div className="mt-4 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {FAQS.map(({ q, a }) => (
              <details key={q} className="group px-5 py-4">
                <summary className="cursor-pointer list-none text-base font-medium text-slate-900 marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {q}
                    <span className="text-slate-400 transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <div className="mt-2 text-sm leading-relaxed text-slate-600">{a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* Setup & onboarding */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-brand-800 font-display">
            New here? Setup is done with you
          </h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            We migrate your customers and pricing, connect QuickBooks and payments, and train your
            crew on the phone and screen-to-screen.{' '}
            <Link href="/#setup" className="text-brand-700 underline">
              See what&apos;s included
            </Link>{' '}
            or{' '}
            <Link href="/#contact" className="text-brand-700 underline">
              book a free setup call
            </Link>
            .
          </p>
        </section>

        {/* Footer */}
        <div className="mt-12 border-t border-slate-200 pt-6 text-sm text-slate-500">
          <p>
            Servienza is operated by {LEGAL_ENTITY}.{' '}
            <Link href="/terms" className="underline">
              Terms
            </Link>{' '}
            ·{' '}
            <Link href="/privacy" className="underline">
              Privacy
            </Link>{' '}
            ·{' '}
            <Link href="/sms-opt-in" className="underline">
              SMS policy
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
