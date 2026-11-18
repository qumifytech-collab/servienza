import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — Servienza',
  description:
    'What Servienza (Qumify Technologies Inc.) collects from business users and from their customers, how it is used and shared, how long it is kept, and your rights.',
  robots: { index: true, follow: true },
}

/*
 * DRAFT — 17 Nov 2026, facts confirmed by the owner (providers, retention periods). Awaiting
 * lawyer review before the DRAFT label comes off. Retention periods are enforced by
 * wonderpool-api DataRetentionWorker; change both together. The same text is served to the apps
 * from wonderpool-api resources/legal/privacy.md — keep the two in step.
 */
const LAST_UPDATED = 'November 17, 2026'
const SUPPORT_EMAIL = 'at@servienza.com'
const PRIVACY_EMAIL = 'at@servienza.com'
const BUSINESS_NAME = 'Servienza'
const LEGAL_ENTITY = 'Qumify Technologies Inc.'
const MAILING_ADDRESS = '2 Burning Tree Ln, Boca Raton, FL 33431, USA'

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mt-10 scroll-mt-6">
      <h2 className="text-xl font-semibold text-brand-800 font-display">{title}</h2>
      <div className="mt-3 space-y-3 text-slate-700 leading-relaxed">{children}</div>
    </section>
  )
}

function Table({ rows }: { rows: [string, string, string][] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
      <table className="w-full min-w-[560px] border-collapse text-[15px]">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
            <th className="px-4 py-2.5">What</th>
            <th className="px-4 py-2.5">Where it comes from</th>
            <th className="px-4 py-2.5">Why we have it</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([a, b, c]) => (
            <tr key={a} className="border-b border-slate-100 last:border-0 align-top">
              <td className="px-4 py-2.5 font-medium text-slate-800">{a}</td>
              <td className="px-4 py-2.5 text-slate-600">{b}</td>
              <td className="px-4 py-2.5 text-slate-600">{c}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
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
          {BUSINESS_NAME} is operated by {LEGAL_ENTITY} (“{BUSINESS_NAME},” “we,” “us”). This policy
          explains what we collect, why, who we share it with, how long we keep it, and the choices you
          have. It covers servienza.com, the web app and the {BUSINESS_NAME} mobile apps.
        </p>
        <p className="mt-1 text-sm text-slate-400">Last updated: {LAST_UPDATED}</p>

        <div className="mt-8 rounded-2xl border border-brand-200 bg-brand-50 p-5">
          <p className="text-sm font-bold uppercase tracking-wide text-brand-800">The short version</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[15px] text-slate-700">
            <li>We collect what a service business needs to run: your account, your team, your customers’ contact details, jobs, photos, estimates, invoices and payments.</li>
            <li>On the Team plan we also handle voicemails left on your business number (recorded and transcribed) and technicians’ location during working hours.</li>
            <li>We never see full card numbers; Stripe does. We never sell personal information, and we never share phone numbers or texting consent for anyone else’s marketing.</li>
            <li>Your customers’ data is yours: we process it on your instructions and send their requests to you.</li>
            <li>The marketing site uses cookieless analytics; the chat widget sets a cookie only if you open it.</li>
          </ul>
        </div>

        <Section id="roles" title="1. Two kinds of people, two roles">
          <p>
            <strong>Business users</strong> — owners, technicians and staff with a {BUSINESS_NAME} login.
            For your information we are the “controller” (or “business” under California law): we decide
            how it is used, as described here.
          </p>
          <p>
            <strong>Your customers</strong> — the people whose jobs you schedule and who receive your
            estimates, invoices, texts and tracking links. They have no account with us. For their
            information we are a “processor” (“service provider”): we handle it only to provide the
            Service to you and on your instructions. If one of your customers asks us about their
            information we will point them to you and help you respond.
          </p>
        </Section>

        <Section id="collect" title="2. What we collect">
          <p className="font-semibold text-slate-800">From business users</p>
          <Table
            rows={[
              ['Account details', 'You, at sign-up and in settings', 'Name, email, phone, company name, address, business type, logo; to run your account and contact you'],
              ['Login and security data', 'Automatically', 'Login codes sent by text or email, session tokens, device type, IP address, time of login; to keep accounts secure'],
              ['Billing details', 'You, via Stripe', 'Plan, billing period, Stripe customer ID, last four digits and card brand, invoices and receipts. Full card numbers go to Stripe and never reach us'],
              ['Technician location', 'The mobile app, Team plan only', 'GPS position during the working hours the company sets, while the technician is signed in and tracking is on; to show the live map, drive times and the customer tracking link'],
              ['Usage and diagnostics', 'Automatically', 'Which screens and features are used, crash and error reports, app version; to fix problems and improve the product'],
              ['Support conversations', 'You', 'Chat, email and setup-call requests, including anything you send us; to help you'],
              ['Website visits', 'servienza.com', 'Page views counted by Vercel Web Analytics, without cookies or identifiers; the trade and plan you clicked before signing up, so we know which pages are useful'],
            ]}
          />
          <p className="mt-4 font-semibold text-slate-800">About your customers (entered by you or your team)</p>
          <Table
            rows={[
              ['Contact and property details', 'You, your team, or a spreadsheet import', 'Name, phone, email, service and billing addresses, gate codes and access notes; to schedule and complete jobs'],
              ['Texting consent', 'You, recorded when the customer opts in', 'Whether they agreed to texts, when, and how; required by carrier rules and the TCPA before any text is sent'],
              ['Job history', 'Your team, in the field', 'Visits, checklists, readings, notes, before-and-after photos, service reports'],
              ['Estimates, agreements and invoices', 'You; the customer when they approve or sign', 'Line items, totals, the name they typed to approve or sign, the time, their IP address, payment status'],
              ['Payments', 'Stripe', 'Amount, date, method, Stripe payment reference. Card numbers stay with Stripe'],
              ['Voicemails', 'Callers to your business number, Team plan only', 'The caller’s number, the recording, an automated transcript, duration and time; matched to the customer record when the number is known'],
              ['Documents', 'You', 'Permits, warranties, signed agreements and other files you upload to a customer'],
            ]}
          />
        </Section>

        <Section id="use" title="3. How we use it">
          <ul className="list-disc space-y-1.5 pl-5">
            <li>To provide the Service: scheduling, routing, estimates, invoicing, payments, agreements, texts and emails you ask us to send, QuickBooks sync, the live map.</li>
            <li>To send the messages you choose: pay links, on-the-way and job-done texts, service reports, reminders — only to customers who have opted in, and in your business name.</li>
            <li>To keep accounts secure and prevent abuse, including fraud and spam checks on messaging.</li>
            <li>To bill you and keep the records tax and payment rules require.</li>
            <li>To support you and tell you about changes to the Service, your plan or these policies.</li>
            <li>To improve the product using aggregated, de-identified usage data.</li>
            <li>To comply with the law and enforce our terms.</li>
          </ul>
          <p>
            We do not use your customers’ information to market to them, and we do not use Company Data
            to train artificial-intelligence models. Voicemail transcription is automated (Twilio’s transcription service) and the transcript
            is used only to show you the message.
          </p>
        </Section>

        <Section id="sms" title="4. Text messaging">
          <p>
            We only send text messages to people who have opted in: business users who gave us their
            number, and your customers whose consent you recorded. Message frequency varies with the
            work; message and data rates may apply. Anyone can reply <strong>STOP</strong> to stop and{' '}
            <strong>HELP</strong> for help, and we honour STOP automatically.
          </p>
          <p>
            <strong>No sharing of mobile information.</strong> We do not sell, rent or share mobile phone
            numbers or texting opt-in information with third parties or affiliates for their marketing.
            Texting consent is never shared with third parties. Our text-delivery provider receives the
            number and the message only to deliver it.
          </p>
          <p>
            Full details are on the{' '}
            <Link className="text-brand-700 underline" href="/sms-opt-in">
              SMS Messaging &amp; Opt-In Policy
            </Link>{' '}
            page.
          </p>
        </Section>

        <Section id="share" title="5. Who we share it with">
          <p>We share personal information only as follows, and we never sell it:</p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>
              <strong>Service providers</strong> who process it for us under contracts that limit them to
              our instructions: Akamai Linode (servers and database, United States) and Google Cloud
              Storage (photos and documents); Stripe (subscription billing and your customers’ card
              payments); Twilio (business phone numbers, voicemail recording and transcription);
              Pingram (text and email delivery); Auth0 (sign-in); OneSignal, Apple and Google (push
              notifications and app distribution); Google (Maps, routing and address lookup); Crisp
              (support chat); Vercel (website hosting and analytics); Sentry (error reporting).
            </li>
            <li>
              <strong>Your own integrations</strong>, when you connect them: Intuit QuickBooks receives
              customers, invoices and payments you choose to sync; Stripe operates your payment account.
              Their privacy policies govern what they do with it.
            </li>
            <li>
              <strong>Your customers</strong>, in the messages and pages you send them: the technician’s
              first name and, while a tracked visit is under way, their position on a map.
            </li>
            <li>
              <strong>People you add to your account</strong> — owners can see everything in the Company;
              technicians see their own jobs and the customers on them.
            </li>
            <li>
              <strong>Law and safety</strong>: when required by law, a court order or a lawful request, or
              to protect the rights and safety of users, the public or {BUSINESS_NAME}.
            </li>
            <li>
              <strong>A change of ownership</strong>: if {LEGAL_ENTITY} is acquired or merges, your
              information moves with the business, under this policy, and we will tell you.
            </li>
          </ul>
        </Section>

        <Section id="location" title="6. Location, photos and device permissions">
          <p>
            <strong>Technician location</strong> is collected by the mobile app only on the Team plan,
            only during the working hours the company sets, and only while the technician is signed in
            and tracking is on. The app shows a status line whenever it is reporting location, and
            technicians can see their company’s working-hours settings. Positions are used for the live
            map, drive-time estimates and the customer tracking page, and are deleted after 90 days.
            We never use location for advertising.
          </p>
          <p>
            <strong>Camera and photos</strong> are used only when a technician takes or attaches a job
            photo; photos are stored with the job and customer. <strong>Contacts</strong> are not
            accessed. <strong>Background location</strong> is requested only to keep tracking working
            while the app is in the background during working hours; you can revoke it in your device
            settings at any time, which turns tracking off.
          </p>
        </Section>

        <Section id="cookies" title="7. Cookies and analytics">
          <p>
            <strong>servienza.com</strong> sets no cookies of its own. We count page views with Vercel Web
            Analytics, which does not use cookies or identify visitors. If you open the chat widget,
            Crisp sets a cookie so your conversation survives a page reload.
          </p>
          <p>
            <strong>The web app</strong> uses cookies and local storage only to keep you signed in,
            remember your preferences and keep the app secure. We do not run advertising trackers and
            do not share app usage with ad networks.
          </p>
        </Section>

        <Section id="retention" title="8. How long we keep it">
          <ul className="list-disc space-y-1.5 pl-5">
            <li><strong>Account and Company Data</strong> — for as long as your account exists, on any plan. Moving to the Free plan deletes nothing.</li>
            <li><strong>After you delete your account</strong> — removed from live systems within 30 days and from backups within 90, except records we must keep.</li>
            <li><strong>Invoice, payment and tax records</strong> — 7 years, as accounting law requires.</li>
            <li><strong>Texting consent and opt-out records</strong> — while the customer record exists.</li>
            <li><strong>Voicemail recordings and transcripts</strong> — 12 months, then deleted; the record that a call was missed, from which number and when, stays in the customer’s history.</li>
            <li><strong>Technician location history</strong> — 90 days.</li>
            <li><strong>Login and security logs</strong> — 12 months.</li>
            <li><strong>Business phone numbers</strong> — released 30 days after a Company leaves the Team plan.</li>
          </ul>
        </Section>

        <Section id="security" title="9. Security">
          <p>
            Data is encrypted in transit and at rest, access inside {BUSINESS_NAME} is limited to people
            who need it to run or support the Service, logins use one-time codes rather than passwords,
            and we keep audit logs of sensitive actions. No system is perfectly secure; if we learn of a
            breach affecting your information we will tell you and the authorities as the law requires.
          </p>
        </Section>

        <Section id="rights" title="10. Your choices and rights">
          <p>
            <strong>Business users</strong> can see and change most of their information in the app, export
            Company Data at any time, turn tracking off with the working-hours settings, and delete the
            account by emailing us from the owner’s address. You can opt out of texts by replying STOP
            and of non-essential emails by the unsubscribe link; security and billing messages still go
            out because the Service cannot run without them.
          </p>
          <p>
            <strong>Residents of California and other states with privacy laws</strong> have the right to
            know what personal information we hold about them, to get a copy, to correct or delete it,
            and not to be discriminated against for exercising those rights. We do not sell personal
            information or share it for cross-context behavioural advertising, so there is nothing to opt
            out of. To exercise a right, email {PRIVACY_EMAIL}; we will verify you are the account holder
            and respond within the time the law allows (45 days in California). You may authorise someone
            to make a request for you.
          </p>
          <p>
            <strong>Your customers</strong> should contact the business that serves them. If a customer
            contacts us directly we will forward the request to that business and help it respond.
          </p>
        </Section>

        <Section id="children" title="11. Children">
          <p>
            The Service is for businesses and is not directed at anyone under 18. We do not knowingly
            collect information from children; if you believe a child has given us information, email us
            and we will delete it.
          </p>
        </Section>

        <Section id="transfers" title="12. Where data is stored">
          <p>
            We are a U.S. company and store and process data in the United States. If you use the Service
            from elsewhere, you are sending information to the United States, where privacy law may
            differ from your country’s.
          </p>
        </Section>

        <Section id="changes" title="13. Changes to this policy">
          <p>
            We will post any changes here and update the date at the top. For material changes we will
            email the Company owner and show a notice in the app at least 30 days before they take
            effect.
          </p>
        </Section>

        <Section id="contact" title="14. Contact">
          <p>
            {LEGAL_ENTITY} (operating as {BUSINESS_NAME})
            <br />
            {MAILING_ADDRESS}
            <br />
            <a className="text-brand-700 underline" href={`mailto:${SUPPORT_EMAIL}`}>
              {SUPPORT_EMAIL}
            </a>
          </p>
          <p>
            See also the{' '}
            <Link className="text-brand-700 underline" href="/terms">
              Terms of Service
            </Link>{' '}
            and the{' '}
            <Link className="text-brand-700 underline" href="/sms-opt-in">
              SMS Messaging &amp; Opt-In Policy
            </Link>
            .
          </p>
        </Section>

        <footer className="mt-14 border-t border-slate-200 pt-6 text-sm text-slate-400">
          © 2026 {LEGAL_ENTITY}. All rights reserved.
        </footer>
      </div>
    </main>
  )
}
