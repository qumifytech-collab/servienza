import fs from 'fs'
import path from 'path'

/**
 * Server-only: resolve a screenshot path under /public to itself when the file exists at build
 * time, else undefined. Pages pass the result to <Screenshot src=…> (and the hero), so a slot
 * shows the real capture as soon as the file is dropped into public/screens/ and a labelled
 * placeholder (or the HTML drawing) until then. Never ships a broken <img>.
 */
export function screen(src: string | undefined): string | undefined {
  if (!src) return undefined
  try {
    return fs.existsSync(path.join(process.cwd(), 'public', src)) ? src : undefined
  } catch {
    return undefined
  }
}

/** The mobile captures the site expects (iPhone simulator, light theme, demo company). */
export const MOBILE = {
  myDay: '/screens/mobile-my-day.png',
  checklist: '/screens/mobile-checklist.png',
  invoiceSent: '/screens/mobile-invoice-sent.png',
  money: '/screens/mobile-money.png',
  serviceDetail: '/screens/mobile-service-detail.png',
  dispatch: '/screens/mobile-dispatch.png',
  approvePage: '/screens/customer-approve-estimate.png',
} as const

export const WEB = {
  schedule: '/screens/web-schedule-timeline.jpg',
  scheduleHero: '/screens/web-schedule-hero.jpg',
} as const
