import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SMS Messaging & Opt-In Policy — Servienza',
  description:
    'How Servienza collects consent for SMS/text messages, the types of messages we send, message frequency, opt-out instructions, and our commitment to your privacy.',
  robots: { index: true, follow: true },
}

// Last reviewed/updated — keep in sync when the consent flow changes.
const LAST_UPDATED = 'June 25, 2026'

// Business contact details shown to carriers/Twilio reviewers.
const SUPPORT_EMAIL = 'at@servienza.com'
const BUSINESS_NAME = 'Servienza'
// Registered legal entity behind the Servienza brand (matches Twilio business profile).
const LEGAL_ENTITY = 'Qumify Technologies Inc.'

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold text-brand-800 font-display">{title}</h2>
      <div className="mt-3 space-y-3 text-slate-700 leading-relaxed">{children}</div>
    </section>
  )
}

export default function SmsOptInPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <div className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
        {/* Header */}
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600 text-lg font-bold text-white">
            S
          </span>
          <span className="text-lg font-semibold text-slate-900">Servienza</span>
        </div>

        <h1 className="mt-8 text-3xl font-bold text-slate-900 font-display sm:text-4xl">
          SMS Messaging &amp; Opt-In Policy
        </h1>
        <p className="mt-3 text-slate-600">
          This page explains how {BUSINESS_NAME} obtains consent before sending SMS/text
          messages, what messages we send, and how recipients can stop them at any time.
        </p>
        <p className="mt-1 text-sm text-slate-400">Last updated: {LAST_UPDATED}</p>

        {/* Privacy commitment — highlighted */}
        <div className="mt-8 rounded-2xl border border-brand-200 bg-brand-50 p-5">
          <h2 className="text-base font-semibold text-brand-800">
            We respect your right to privacy
          </h2>
          <p className="mt-2 text-sm text-brand-900/80 leading-relaxed">
            {BUSINESS_NAME} does not send text messages to anyone who has not explicitly
            opted in. We never send unsolicited marketing texts, and we never sell, rent,
            or share your phone number or SMS opt-in data with third parties or affiliates
            for their own marketing purposes. Mobile information is used solely to deliver
            the service communications you asked for.
          </p>
        </div>

        <Section title="About our business">
          <p>
            {BUSINESS_NAME} is a product of {LEGAL_ENTITY}, the registered business behind
            this messaging program. {BUSINESS_NAME} is field service management software used by home- and
            commercial-service businesses (HVAC, plumbing, pool service, pest control,
            landscaping, and similar trades) to schedule jobs, dispatch technicians, and
            keep customers informed. SMS is used to send service- and account-related
            notifications to people who have agreed to receive them.
          </p>
        </Section>

        <Section title="How recipients opt in (consent)">
          <p>
            Consent is collected directly inside the {BUSINESS_NAME} application. SMS is{' '}
            <strong>never enabled by default</strong>. A person must affirmatively check an
            unchecked consent box before any text message is sent to their number. We
            collect consent in two places:
          </p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              <strong>Customer contact creation</strong> — when a business adds a customer,
              the staff member confirms the customer agreed to receive service/scheduling
              texts at the number provided (shown below, left).
            </li>
            <li>
              <strong>Account / technician sign-up</strong> — when a user creates their own
              account, they may opt in to account, scheduling, and service notifications at
              their own number (shown below, right).
            </li>
          </ol>

          <p className="pt-1">
            In both flows the consent checkbox is <strong>unchecked by default</strong> and
            includes message frequency, rate disclosures, and STOP/HELP instructions:
          </p>

          {/* Exact consent language quoted */}
          <div className="space-y-3">
            <blockquote className="rounded-lg border-l-4 border-brand-400 bg-white p-4 text-sm italic text-slate-700">
              “This contact agreed to receive SMS/text messages about scheduling and
              service at the number above. Message frequency varies. Message &amp; data
              rates may apply. They can reply STOP to opt out, HELP for help.”
            </blockquote>
            <blockquote className="rounded-lg border-l-4 border-brand-400 bg-white p-4 text-sm italic text-slate-700">
              “I agree to receive SMS/text messages about my account, scheduling, and
              service notifications at the number above. Message frequency varies. Message
              &amp; data rates may apply. Reply STOP to opt out, HELP for help.”
            </blockquote>
          </div>
        </Section>

        <Section title="Screenshots of the opt-in form">
          <p>
            The screenshots below show the live consent checkboxes presented to users
            inside the {BUSINESS_NAME} application.
          </p>
          <div className="mt-4 space-y-12">
            <figure className="mx-auto max-w-xl">
              <img
                src="/legal/sms-optin-add-customer.jpg"
                alt="Add customer form showing the unchecked SMS consent checkbox with disclosure text"
                className="w-full rounded-xl border border-slate-200 shadow-sm"
                loading="lazy"
              />
              <figcaption className="mt-3 text-center text-sm text-slate-500">
                Screenshot 1 — Customer contact form: SMS consent checkbox (unchecked by default)
              </figcaption>
            </figure>
            <figure className="mx-auto max-w-xl">
              <img
                src="/legal/sms-optin-signup.jpg"
                alt="Account sign-up form showing the unchecked SMS consent checkbox with disclosure text"
                className="w-full rounded-xl border border-slate-200 shadow-sm"
                loading="lazy"
              />
              <figcaption className="mt-3 text-center text-sm text-slate-500">
                Screenshot 2 — Account sign-up: SMS consent checkbox (unchecked by default)
              </figcaption>
            </figure>
          </div>
        </Section>

        <Section title="Types of messages we send">
          <p>Messages are transactional and service-related. Examples include:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Appointment confirmations, reminders, and scheduling updates</li>
            <li>“Technician is on the way” / arrival-window notifications</li>
            <li>Job status, completion, and follow-up messages</li>
            <li>Invoice, payment, and receipt notifications</li>
            <li>Account and security notifications</li>
          </ul>
        </Section>

        <Section title="Sample messages">
          <div className="space-y-2 text-sm">
            <p className="rounded-lg bg-white p-3 ring-1 ring-slate-200">
              “Servienza: Hi John, your pool service is confirmed for Thu Jun 26, 9–11am.
              Reply STOP to opt out, HELP for help.”
            </p>
            <p className="rounded-lg bg-white p-3 ring-1 ring-slate-200">
              “Servienza: Your technician Mike is on the way and will arrive in ~20 min.
              Reply STOP to opt out.”
            </p>
          </div>
        </Section>

        <Section title="Message frequency">
          <p>
            Message frequency varies based on your service schedule and account activity.
            Most recipients receive only a handful of messages per service visit.
          </p>
        </Section>

        <Section title="Message &amp; data rates">
          <p>
            Message and data rates may apply, depending on your mobile carrier and plan.
            {' '}{BUSINESS_NAME} does not charge for receiving these messages.
          </p>
        </Section>

        <Section title="How to opt out or get help">
          <p>
            Recipients can opt out at any time by replying <strong>STOP</strong> to any
            message; we immediately stop sending further texts to that number. Replying{' '}
            <strong>HELP</strong> returns support contact information. For assistance you
            can also email{' '}
            <a className="text-brand-700 underline" href={`mailto:${SUPPORT_EMAIL}`}>
              {SUPPORT_EMAIL}
            </a>
            .
          </p>
        </Section>

        <Section title="Privacy">
          <p>
            We respect everybody’s right to privacy. We do not send text messages unless
            the recipient has opted in. We do not sell, rent, or share phone numbers or SMS
            consent data with third parties for marketing, and SMS opt-in data is never
            shared with third parties or affiliates for their marketing purposes. See our
            full{' '}
            <a className="text-brand-700 underline" href="/privacy">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a className="text-brand-700 underline" href="/terms">
              Terms of Service
            </a>
            .
          </p>
        </Section>

        <Section title="Contact">
          <p>
            {LEGAL_ENTITY} (operating as {BUSINESS_NAME}) —{' '}
            <a className="text-brand-700 underline" href={`mailto:${SUPPORT_EMAIL}`}>
              {SUPPORT_EMAIL}
            </a>
          </p>
        </Section>

        <footer className="mt-14 border-t border-slate-200 pt-6 text-sm text-slate-400">
          © 2026 {LEGAL_ENTITY}. {BUSINESS_NAME} is a trademark of {LEGAL_ENTITY}. All
          rights reserved.
        </footer>
      </div>
    </main>
  )
}
