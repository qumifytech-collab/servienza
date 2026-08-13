import type { Metadata } from 'next'
import DeleteAccountForm from '@/components/DeleteAccountForm'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Delete Your Account — Servienza',
  description:
    'Request deletion of your Servienza account and associated data. No app install required.',
  robots: { index: true, follow: true },
}

const SUPPORT_EMAIL = 'at@servienza.com'
const BUSINESS_NAME = 'Servienza'
const LEGAL_ENTITY = 'Qumify Technologies Inc.'

export default function DeleteAccountPage() {
  return (
    <>
    <Navbar />
        <main className="min-h-screen bg-slate-50 text-slate-800">

          <div className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
        <h1 className="h-display text-center">
          Delete your account
        </h1>
        <DeleteAccountForm />
        {/*
          TODO (blocks Google Play submission): once it is decided whether deletion erases
          everything or anonymises the person while retaining job and invoice records, state
          that here and keep the wording identical to the Privacy Policy and the Play Data
          Safety declaration. Deliberately unwritten — the two versions are mutually
          exclusive and guessing would create exactly the policy mismatch Play penalises.
        */}

        <p className="mt-8 text-sm text-slate-500">
          Questions about a request? Email{' '}
          <a className="text-brand-700 underline" href={`mailto:${SUPPORT_EMAIL}`}>
            {SUPPORT_EMAIL}
          </a>
          . For details on what we collect and how we handle it, see our{' '}
          <a className="text-brand-700 underline" href="/privacy">
            Privacy Policy
          </a>
          .
        </p>

        <footer className="mt-14 border-t border-slate-200 pt-6 text-sm text-slate-400">
          © 2026 {LEGAL_ENTITY}. All rights reserved.
        </footer>
      </div>
    </main>
    </>
  )
}
