import { APP_STORE_URL, BOOK_CALL_URL, PLAY_STORE_URL, SIGNUP_URL, TRIAL_DAYS } from '@/lib/site'
import { Button, Container } from './ui'

export default function CtaBand({
  title = 'Try it on tomorrow’s jobs.',
  body = `Free for ${TRIAL_DAYS} days. No card. If it’s not easier than what you do now, keep doing what you do now.`,
  secondary = 'Book a setup call',
  stores = true,
}: {
  title?: string
  body?: string
  secondary?: string
  stores?: boolean
}) {
  return (
    <section className="bg-brand-600 text-white">
      <Container className="flex flex-wrap items-center justify-between gap-8 py-16 sm:py-[88px]">
        <div className="flex max-w-[620px] flex-col gap-3">
          <h2 className="text-[32px] font-extrabold leading-[1.08] tracking-[-1px] sm:text-[44px] sm:tracking-[-1.2px]">{title}</h2>
          <p className="text-[17px] leading-relaxed text-brand-100 sm:text-lg">{body}</p>
        </div>
        <div className="flex w-full flex-col items-start gap-3 sm:w-auto">
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button href={SIGNUP_URL} variant="white">Start free</Button>
            <Button href={BOOK_CALL_URL} variant="ghostLight">{secondary}</Button>
          </div>
          {stores && (
            <div className="flex gap-2.5">
              <a href={APP_STORE_URL} className="rounded-[9px] bg-ink px-3.5 py-2.5 text-[13px] font-bold text-white hover:bg-black">App Store</a>
              <a href={PLAY_STORE_URL} className="rounded-[9px] bg-ink px-3.5 py-2.5 text-[13px] font-bold text-white hover:bg-black">Google Play</a>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
