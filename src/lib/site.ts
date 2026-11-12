/**
 * Single source of truth for site-wide facts. Change a number here, it changes everywhere
 * (pages, JSON-LD, llms.txt).
 */
export const SITE_URL = 'https://servienza.com'
export const SITE_NAME = 'Servienza'
export const LEGAL_ENTITY = 'Qumify Technologies Inc.'

export const APP_URL = 'https://app.servienza.com'
export const SIGNUP_URL = `${APP_URL}/signup`
export const LOGIN_URL = `${APP_URL}/login`

/** Where "Talk to a human" / "Book a setup call" go — the in-house request form. */
export const BOOK_CALL_URL = '/book-a-call'

export const SUPPORT_EMAIL = 'at@servienza.com'
export const SUPPORT_HOURS = 'Monday–Friday, 8am–6pm ET'

export const APP_STORE_URL = '#app-store' // TODO: real App Store link after review
export const PLAY_STORE_URL = '#google-play' // TODO: real Play Store link after review

export { TRIAL_DAYS } from '@/content/plans'

/** One-line description reused in metadata, Organization JSON-LD and llms.txt. */
export const SITE_TAGLINE =
  'Scheduling, estimates, invoicing and payments for service businesses with 1–10 people — a phone app for the field and a web app for the office, set up with you by a real person.'

export const NAV = [
  { href: '/#how', label: 'How it works' },
  { href: '/features', label: 'Features' },
  { href: '/industries', label: 'Your trade' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/support', label: 'Setup & support' },
] as const
