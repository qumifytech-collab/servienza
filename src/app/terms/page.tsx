import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — Servienza',
  description:
    'The terms governing use of Servienza, operated by Qumify Technologies Inc., including SMS messaging terms.',
  robots: { index: true, follow: true },
}

const LAST_UPDATED = 'June 25, 2026'
const SUPPORT_EMAIL = 'at@servienza.com'
const BUSINESS_NAME = 'Servienza'
const LEGAL_ENTITY = 'Qumify Technologies Inc.'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold text-brand-800 font-display">{title}</h2>
      <div className="mt-3 space-y-3 text-slate-700 leading-relaxed">{children}</div>
    </section>
  )
}

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="mt-3 text-slate-600">
          These terms govern your use of {BUSINESS_NAME}, a service operated by{' '}
          {LEGAL_ENTITY} (“{BUSINESS_NAME},” “we,” “us”). By using the service you agree to
          these terms.
        </p>
        <p className="mt-1 text-sm text-slate-400">Last updated: {LAST_UPDATED}</p>

        <Section title="Use of the service">
          <p>
            You may use {BUSINESS_NAME} only in compliance with these terms and applicable
            law. You are responsible for the accuracy of information you enter and for
            maintaining the confidentiality of your account credentials.
          </p>
        </Section>

        <Section title="Customer contact data &amp; consent">
          <p>
            If you use {BUSINESS_NAME} to communicate with your own customers, you are
            responsible for obtaining all required consents before sending messages, and for
            complying with applicable laws and carrier/messaging rules (including the TCPA
            and CTIA guidelines). You must only add contacts who have agreed to be
            contacted.
          </p>
        </Section>

        <Section title="SMS / text messaging terms">
          <p>
            By opting in, you agree to receive account, scheduling, and service text
            messages at the number you provide. Message frequency varies; message and data
            rates may apply. Reply <strong>STOP</strong> to opt out and <strong>HELP</strong>{' '}
            for help. See our{' '}
            <a className="text-brand-700 underline" href="/sms-opt-in">
              SMS Messaging &amp; Opt-In Policy
            </a>{' '}
            and{' '}
            <a className="text-brand-700 underline" href="/privacy">
              Privacy Policy
            </a>
            .
          </p>
        </Section>

        <Section title="Acceptable use">
          <p>
            You agree not to use {BUSINESS_NAME} to send unlawful, unsolicited, abusive, or
            deceptive messages, or to violate the rights of others. We may suspend accounts
            that violate these terms.
          </p>
        </Section>

        <Section title="Disclaimers &amp; liability">
          <p>
            The service is provided “as is” without warranties of any kind to the fullest
            extent permitted by law. To the extent permitted by law, {LEGAL_ENTITY} is not
            liable for indirect, incidental, or consequential damages arising from your use
            of the service.
          </p>
        </Section>

        <Section title="Changes">
          <p>
            We may update these terms from time to time. Continued use of the service after
            changes take effect constitutes acceptance of the updated terms.
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
          © 2026 {LEGAL_ENTITY}. All rights reserved.
        </footer>
      </div>
    </main>
  )
}
