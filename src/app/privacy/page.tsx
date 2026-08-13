import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Servienza',
  description:
    'How Servienza (Qumify Technologies Inc.) collects, uses, and protects your information, including SMS/text messaging data.',
  robots: { index: true, follow: true },
}

const LAST_UPDATED = 'August 13, 2026'
const SUPPORT_EMAIL = 'at@servienza.com'
const BUSINESS_NAME = 'Servienza'
const LEGAL_ENTITY = 'Qumify Technologies Inc.'
// Public account-deletion request page. Submit the absolute form of this URL
// (https://servienza.com/delete-account) in Play Console.
const DELETION_REQUEST_URL = '/delete-account'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold text-brand-800 font-display">{title}</h2>
      <div className="mt-3 space-y-3 text-slate-700 leading-relaxed">{children}</div>
    </section>
  )
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <div className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600 text-lg font-bold text-white">
            S
          </span>
          <span className="text-lg font-semibold text-slate-900">Servienza</span>
        </div>

        <h1 className="mt-8 text-3xl font-bold text-slate-900 font-display sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-slate-600">
          {BUSINESS_NAME} is operated by {LEGAL_ENTITY} (“{BUSINESS_NAME},” “we,” “us”).
          This policy explains what we collect, how we use it, and the choices you have.
        </p>
        <p className="mt-1 text-sm text-slate-400">Last updated: {LAST_UPDATED}</p>

        <Section title="Information we collect">
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong>Contact details</strong> — name, email address, phone number, and
              service/billing addresses you or your service provider enter.
            </li>
            <li>
              <strong>Account &amp; usage data</strong> — jobs, schedules, invoices, and
              activity needed to operate the service.
            </li>
            <li>
              <strong>Messaging consent</strong> — whether you opted in to SMS, and the
              date/source of that consent.
            </li>
            <li>
              <strong>Technical data</strong> — device, log, and cookie data used to
              secure and improve the product.
            </li>
            <li>
              <strong>Precise location (technicians only)</strong> — we collect the precise
              location of a technician&rsquo;s device for two purposes. First, while a
              technician is signed in to our mobile app during your organisation&rsquo;s
              configured working hours, we record their location periodically so their
              employer has a record of work carried out during the working day. Second, when
              a technician is en route to a job, we track the journey so that your
              organisation can follow progress and estimated arrival. Both continue while the
              app is in the background, and the app shows a persistent notification whenever
              tracking is active. Tracking stops outside configured working hours. We do not
              collect precise location from customers, and we do not make technician
              location available to customers or any other outside party. The service
              providers listed under &ldquo;How we share information&rdquo; — including our
              mapping provider, which calculates routes and arrival estimates — process this
              data only on our behalf and under contract.
            </li>
            <li>
              <strong>Photos</strong> — before and after service photos that technicians
              take with the device camera or select from the device photo library, uploaded
              to our servers.
            </li>
            <li>
              <strong>Customer signatures</strong> — signatures captured on the device
              screen to confirm that work was completed, uploaded to our servers.
            </li>
            <li>
              <strong>Push notification token</strong> — a device identifier used to
              deliver job and schedule alerts to the mobile app.
            </li>
            <li>
              <strong>Crash &amp; diagnostic data</strong> — crash reports, which may
              include the state of the app at the time of an error.
            </li>
          </ul>
        </Section>

        <Section title="How we use information">
          <p>
            We use information to provide and operate the service, schedule and complete
            jobs, send the communications you requested, process payments, provide support,
            and meet legal obligations.
          </p>
        </Section>

        <Section title="SMS / text messaging">
          <p>
            We only send text messages to people who have explicitly opted in. Message
            frequency varies; message and data rates may apply. You can reply{' '}
            <strong>STOP</strong> at any time to opt out, or <strong>HELP</strong> for
            help. Full details are on our{' '}
            <a className="text-brand-700 underline" href="/sms-opt-in">
              SMS Messaging &amp; Opt-In Policy
            </a>{' '}
            page.
          </p>
          <p className="rounded-xl border border-brand-200 bg-brand-50 p-4 text-sm text-brand-900/80">
            <strong>No sharing of mobile data:</strong> We do not sell, rent, or share
            mobile phone numbers or SMS opt-in/consent information with third parties or
            affiliates for their marketing purposes. Text-messaging consent is never shared
            with third parties.
          </p>
        </Section>

        <Section title="How we share information">
          <p>
            We share information only with service providers who help us operate, under
            contractual confidentiality obligations, or when required by law. We do not sell
            your personal information. These providers are:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong>Google Maps Platform</strong> — we send customer addresses and
              coordinates to Google to convert addresses into map locations and to
              calculate routes and travel times.
            </li>
            <li>
              <strong>Auth0 (Okta)</strong> — account sign-in and authentication.
            </li>
            <li>
              <strong>OneSignal</strong> — delivery of push notifications.
            </li>
            <li>
              <strong>Sentry</strong> — crash and error reporting.
            </li>
            <li>
              <strong>Twilio</strong> — SMS and text messaging.
            </li>
            <li>
              <strong>Cloud hosting and payment processing providers</strong> — the
              infrastructure we run on and the processing of payments.
            </li>
          </ul>
        </Section>

        <Section title="Data retention &amp; security">
          <p>
            We retain information for as long as needed to provide the service and meet
            legal requirements, and we apply administrative, technical, and physical
            safeguards to protect it.
          </p>
        </Section>

        <Section title="Your choices">
          <p>
            You may opt out of SMS by replying STOP, unsubscribe from emails, or request
            access to your information by contacting us. To delete your account and its
            associated data, see &ldquo;Deleting your account and data&rdquo; below. We will
            respond consistent with applicable law.
          </p>
        </Section>

        <Section title="Deleting your account and data">
          <p>
            You can request deletion of your {BUSINESS_NAME} account and its associated
            data in two ways: from inside the {BUSINESS_NAME} mobile app, or from a
            publicly available request page on our website. You do not need to install the
            app to make a deletion request.
          </p>
          {DELETION_REQUEST_URL ? (
            <p>
              <a className="text-brand-700 underline" href={DELETION_REQUEST_URL}>
                Request account deletion
              </a>
            </p>
          ) : null}
          {/*
            TODO (blocks Google Play submission): describe what deletion actually does —
            which data is permanently erased, and which data (if any) is retained or
            de-identified for accounting and tax purposes, and for how long. Google Play
            requires the policy to state this, and the Data Safety declaration must match
            it. Left unwritten deliberately: the erase-everything and anonymise-and-retain
            wordings are mutually exclusive and this has not been decided yet.
          */}
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
          © 2026 {LEGAL_ENTITY}. All rights reserved.
        </footer>
      </div>
    </main>
  )
}
