'use client'

import { useEffect, useState } from 'react'

const SUPPORT_EMAIL = 'at@servienza.com'
const OTP_LENGTH = 6
const RESEND_SECONDS = 30

type Step = 'email' | 'otp' | 'confirm' | 'done'

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())

const labelClass = 'block text-sm font-semibold text-slate-900'
const inputClass =
  'mt-2 block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 ' +
  'placeholder:text-slate-400 focus:border-brand-600 focus:outline-none focus:ring-2 ' +
  'focus:ring-brand-600/20 disabled:bg-slate-100 disabled:text-slate-500'
const primaryButtonClass =
  'mt-6 w-full rounded-xl bg-brand-600 px-4 py-3 font-semibold text-white transition ' +
  'hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-600/30 ' +
  'disabled:cursor-not-allowed disabled:bg-slate-300'

export default function DeleteAccountForm() {
  const [step, setStep] = useState<Step>('email')
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)
  const [cooldown, setCooldown] = useState(0)

  useEffect(() => {
    if (cooldown <= 0) return
    const id = setInterval(() => setCooldown((s) => (s <= 1 ? 0 : s - 1)), 1000)
    return () => clearInterval(id)
  }, [cooldown])

  async function handleSendCode(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    if (!isValidEmail(email)) {
      setError('Enter the email address on your Servienza account.')
      return
    }

    setBusy(true)
    // TODO: POST { email } to the deletion-request endpoint to send the verification code.
    // Front end only for now — this just advances the step.
    await new Promise((r) => setTimeout(r, 400))
    setBusy(false)
    setOtp('')
    setCooldown(RESEND_SECONDS)
    setStep('otp')
  }

  async function handleVerify(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    if (otp.length !== OTP_LENGTH) {
      setError(`Enter the ${OTP_LENGTH}-digit code we sent to ${email}.`)
      return
    }

    setBusy(true)
    // TODO: POST { email, otp } to verify the code. Front end only for now.
    await new Promise((r) => setTimeout(r, 400))
    setBusy(false)
    setStep('confirm')
  }

  async function handleConfirmDelete() {
    setBusy(true)
    // TODO: POST { email } to record the confirmed deletion request.
    // Front end only for now — this does not delete anything.
    await new Promise((r) => setTimeout(r, 400))
    setBusy(false)
    setStep('done')
  }

  async function handleResend() {
    if (cooldown > 0 || busy) return
    setError(null)
    setBusy(true)
    // TODO: POST { email } to re-send the verification code.
    await new Promise((r) => setTimeout(r, 400))
    setBusy(false)
    setCooldown(RESEND_SECONDS)
  }

  function handleStartOver() {
    setStep('email')
    setOtp('')
    setError(null)
    setCooldown(0)
  }

  return (
    <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      {step === 'email' && (
        <form onSubmit={handleSendCode} noValidate>
          <label className={labelClass} htmlFor="email">
            Account email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={inputClass}
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-describedby={error ? 'form-error' : 'email-hint'}
            aria-invalid={error ? true : undefined}
            disabled={busy}
          />
          <p id="email-hint" className="mt-2 text-sm text-slate-500">
            We will send a {OTP_LENGTH}-digit verification code to this address to confirm
            the request is really from you.
          </p>

          {error && (
            <p id="form-error" className="mt-3 text-sm text-red-600" role="alert">
              {error}
            </p>
          )}

          <button type="submit" className={primaryButtonClass} disabled={busy}>
            {busy ? 'Sending code…' : 'Send verification code'}
          </button>
        </form>
      )}

      {step === 'otp' && (
        <form onSubmit={handleVerify} noValidate>
          <label className={labelClass} htmlFor="otp">
            Verification code
          </label>
          <input
            id="otp"
            name="otp"
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            maxLength={OTP_LENGTH}
            className={`${inputClass} text-center text-2xl font-semibold tracking-[0.5em]`}
            placeholder="000000"
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, OTP_LENGTH))}
            aria-describedby={error ? 'form-error' : 'otp-hint'}
            aria-invalid={error ? true : undefined}
            disabled={busy}
          />
          <p id="otp-hint" className="mt-2 text-sm text-slate-500">
            Enter the {OTP_LENGTH}-digit code sent to{' '}
            <strong className="text-slate-700">{email}</strong>.
          </p>

          {error && (
            <p id="form-error" className="mt-3 text-sm text-red-600" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            className={primaryButtonClass}
            disabled={busy || otp.length !== OTP_LENGTH}
          >
            {busy ? 'Verifying…' : 'Verify and submit request'}
          </button>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm">
            <button
              type="button"
              onClick={handleResend}
              className="font-semibold text-brand-700 underline disabled:text-slate-400 disabled:no-underline"
              disabled={cooldown > 0 || busy}
            >
              {cooldown > 0 ? `Resend code in ${cooldown}s` : 'Resend code'}
            </button>
            <button
              type="button"
              onClick={handleStartOver}
              className="text-slate-500 underline"
              disabled={busy}
            >
              Use a different email
            </button>
          </div>
        </form>
      )}

      {step === 'confirm' && (
        <div>
          <h2 className="text-xl font-semibold text-slate-900 font-display">
            Are you sure you want to delete your account?
          </h2>
          {/* <p className="mt-3 text-slate-700 leading-relaxed">
            This submits a deletion request for{' '}
            <strong className="text-slate-900">{email}</strong>. We will email you to
            confirm once it has been processed.
          </p> */}

          {/*
            Loss framing, part of the confirm-shaming treatment. Deliberately phrased as
            loss of ACCESS, not as erasure — that stays true whether deletion ends up
            erasing records or anonymising them, so it does not pre-empt the open
            erase-vs-anonymise decision. Do not add data-fate wording here.
          */}
          <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            <p className="font-semibold">You will lose access to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Your jobs, schedules, and dispatch history</li>
              <li>Invoices and payment records</li>
              <li>Before and after service photos, and signed job confirmations</li>
              <li>Customer profiles and service history</li>
            </ul>
          </div>

          {/*
            Confirm-shaming, added on request. This is a dark pattern: the delete label is
            written in the first person so choosing it reads as an admission about
            yourself, rather than stating the action neutrally. Google Play's
            account-deletion policy requires the flow not be obstructed, and CPRA / DSA
            Art. 25 name this pattern directly. To revert, restore the neutral label:
            "Yes, delete my account".
          */}
          {/*
            Retention off-ramps. Only options backed by things that actually exist are
            listed — the three published plans, and support email. Do not add "pause your
            account" or "export your data" here unless those features ship; offering a
            remedy that does not exist is worse than offering none.
          */}
          <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-900">What if&hellip;</p>
            <ul className="mt-2 space-y-2">
              <li>
                <strong className="text-slate-800">&hellip;it&rsquo;s the price?</strong>{' '}
                Moving to a smaller plan keeps everything above intact.{' '}
                <a className="text-brand-700 underline" href="/#pricing">
                  See plans
                </a>
              </li>
              <li>
                <strong className="text-slate-800">
                  &hellip;something isn&rsquo;t working?
                </strong>{' '}
                Tell us what went wrong and we will look at it with you.{' '}
                <a className="text-brand-700 underline" href={`mailto:${SUPPORT_EMAIL}`}>
                  Email support
                </a>
              </li>
            </ul>
          </div>

          <button
            type="button"
            onClick={handleConfirmDelete}
            className={primaryButtonClass}
            disabled={busy}
          >
            {busy ? 'Submitting…' : "Yes, I'd rather chase paperwork"}
          </button>

          <button
            type="button"
            onClick={handleStartOver}
            className="mt-3 w-full rounded-xl px-4 py-3 text-sm text-slate-500 underline"
            disabled={busy}
          >
            Never mind, keep my account
          </button>
        </div>
      )}

      {step === 'done' && (
        <div role="status" aria-live="polite">
          <h2 className="text-xl font-semibold text-brand-800 font-display">
            Request received
          </h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            We have recorded a deletion request for{' '}
            <strong className="text-slate-900">{email}</strong>. We will email you at that
            address to confirm once the request has been processed.
          </p>
          <p className="mt-3 text-slate-700 leading-relaxed">
            If you did not mean to make this request, contact us at{' '}
            <a className="text-brand-700 underline" href={`mailto:${SUPPORT_EMAIL}`}>
              {SUPPORT_EMAIL}
            </a>
            .
          </p>
          <button type="button" onClick={handleStartOver} className={primaryButtonClass}>
            Submit another request
          </button>
        </div>
      )}
    </div>
  )
}
