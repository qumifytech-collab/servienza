import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Delete your Servienza account — Servienza',
  description:
    'How to delete your Servienza account and the data that goes with it, from the app or by request, and what is kept afterwards.',
  robots: { index: true, follow: true },
}

/*
 * The account-deletion page Google Play and Apple require for any app that lets people create an
 * account: it must name the app and developer, say how to request deletion, and say what is
 * deleted and what is kept. Linked from the Play Data safety form ("Delete account URL") and from
 * the footer. Keep it in step with Privacy Policy §8 (retention) and Terms §5.
 */
const SUPPORT_EMAIL = 'at@servienza.com'
const BUSINESS_NAME = 'Servienza'
const LEGAL_ENTITY = 'Qumify Technologies Inc.'
const SUBJECT = encodeURIComponent('Delete my Servienza account')
const BODY = encodeURIComponent(
  'Please delete my Servienza account and its data.\n\nAccount email or phone: \nCompany name (if you are the owner): \n\nI understand this cannot be undone.',
)

export default function DeleteAccountPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <div className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600 text-lg font-bold text-white">S</span>
          <span className="text-lg font-semibold text-slate-900">Servienza</span>
        </div>

        <h1 className="mt-8 text-3xl font-bold text-slate-900 font-display sm:text-4xl">Delete your account</h1>
        <p className="mt-3 text-slate-600">
          This page is for people with a {BUSINESS_NAME} login — owners, technicians and staff. The app
          is published by {LEGAL_ENTITY}. Deleting your account cannot be undone.
        </p>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-brand-800 font-display">Two ways to delete</h2>
          <ol className="mt-3 list-decimal space-y-4 pl-5 leading-relaxed text-slate-700">
            <li>
              <strong>In the app.</strong> Open <em>More → Settings → General</em> and tap{' '}
              <em>Delete account</em>, then confirm. (On the web app: <em>Menu → Settings → General</em>.)
            </li>
            <li>
              <strong>By email.</strong> Send a request to{' '}
              <a className="text-brand-700 underline" href={`mailto:${SUPPORT_EMAIL}?subject=${SUBJECT}&body=${BODY}`}>
                {SUPPORT_EMAIL}
              </a>{' '}
              from the email address on your account, or include the phone number you sign in with. We
              reply to confirm it is you, then delete the account. You do not need to be able to sign in
              to use this route.
            </li>
          </ol>
          <p className="mt-4 text-slate-700">
            Either way, deletion is completed within <strong>30 days</strong> of the request and we email you
            when it is done.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-brand-800 font-display">What is deleted</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed text-slate-700">
            <li>Your login, name, email address, phone number and profile photo.</li>
            <li>Your location history, device identifiers and push-notification registration.</li>
            <li>
              If you are the <strong>owner of a company</strong> and the only user on it: the company and
              everything in it — customers, jobs, estimates, invoices, agreements, documents, photos,
              voicemails — and the company's business phone number is released.
            </li>
          </ul>
          <p className="mt-3 text-slate-700">
            Removed from live systems within 30 days and from backups within 90.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-brand-800 font-display">What is kept, and why</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed text-slate-700">
            <li>
              <strong>Invoice, payment and tax records</strong> of a company — for 7 years, as accounting
              law requires. They no longer carry your personal details beyond what the invoice itself
              shows.
            </li>
            <li>
              <strong>Records of your legal acceptances</strong> (which version of the Terms you accepted
              and when) — kept as the evidence of the agreement.
            </li>
            <li>
              <strong>If you are a technician or staff member</strong>, the jobs, checklists and service
              reports you filed stay with the company you worked for, attributed to your name, because
              they are the company's business records — the same as a paper job sheet. Your login and
              personal data are still deleted.
            </li>
            <li>
              <strong>If you are an owner with other users on the company</strong>, deleting your own
              account does not delete the company; transfer ownership first or ask us to delete the
              company as well in your request.
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-brand-800 font-display">Delete some data without closing your account</h2>
          <p className="mt-3 leading-relaxed text-slate-700">
            You can also ask us to delete particular data and keep your login — for example your location
            history, a voicemail recording, job photos, or a customer record. Email{' '}
            <a className="text-brand-700 underline" href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('Delete some of my Servienza data')}`}>
              {SUPPORT_EMAIL}
            </a>{' '}
            from the address on your account and say what to delete; we confirm it is you and do it
            within 30 days. Technicians can also turn off location reporting at any time in the phone&rsquo;s
            settings. Requests about a customer&rsquo;s data should go to the business that serves them;
            if a customer writes to us we forward the request and help the business respond.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-brand-800 font-display">Not sure you want to delete?</h2>
          <p className="mt-3 leading-relaxed text-slate-700">
            To stop paying but keep your data, cancel the Team plan from the billing page — your
            company moves to the Free plan and nothing is removed. To stop texts, reply STOP. To
            leave a company you no longer work for without deleting your account, use{' '}
            <em>Settings → Leave company</em>.
          </p>
        </section>

        <section className="mt-10 text-slate-700">
          <p>
            More detail is in the{' '}
            <Link className="text-brand-700 underline" href="/privacy#retention">Privacy Policy</Link> and the{' '}
            <Link className="text-brand-700 underline" href="/terms#cancel">Terms of Service</Link>.
          </p>
          <p className="mt-2">
            {LEGAL_ENTITY} (operating as {BUSINESS_NAME}) · 2 Burning Tree Ln, Boca Raton, FL 33431, USA ·{' '}
            <a className="text-brand-700 underline" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          </p>
        </section>

        <footer className="mt-14 border-t border-slate-200 pt-6 text-sm text-slate-400">© 2026 {LEGAL_ENTITY}. All rights reserved.</footer>
      </div>
    </main>
  )
}
