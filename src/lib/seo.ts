import type { Metadata } from 'next'
import { SITE_NAME, SITE_TAGLINE, SITE_URL, SUPPORT_EMAIL, LEGAL_ENTITY } from './site'
import { FREE_PLAN_LIVE, PLANS } from '@/content/plans'

/** Per-page metadata with canonical + OG/Twitter filled in. */
export function pageMetadata(opts: { title: string; description: string; path: string; noIndex?: boolean }): Metadata {
  const url = `${SITE_URL}${opts.path}`
  const title = opts.title.includes(SITE_NAME) ? opts.title : `${opts.title} — ${SITE_NAME}`
  return {
    title,
    description: opts.description,
    alternates: { canonical: url },
    robots: opts.noIndex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      title,
      description: opts.description,
      url,
      siteName: SITE_NAME,
      type: 'website',
      images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: { card: 'summary_large_image', title, description: opts.description, images: [`${SITE_URL}/og-image.png`] },
  }
}

export type FaqItem = { q: string; a: string }

export function faqJsonLd(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  }
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  }
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    legalName: LEGAL_ENTITY,
    url: SITE_URL,
    logo: `${SITE_URL}/og-image.png`,
    description: SITE_TAGLINE,
    email: SUPPORT_EMAIL,
    contactPoint: [{ '@type': 'ContactPoint', contactType: 'customer support', email: SUPPORT_EMAIL, availableLanguage: ['English'] }],
  }
}

/** SoftwareApplication with Offers — offers are only emitted for plans with a final price. */
export function softwareAppJsonLd() {
  const offers = PLANS.filter((p) => p.monthly > 0 || FREE_PLAN_LIVE).map((p) => ({
    '@type': 'Offer',
    name: `${p.name} plan`,
    price: String(p.monthly),
    priceCurrency: 'USD',
    description: `${p.seatsLabel}. ${p.includes.slice(0, 3).join(', ')}.`,
    url: `${SITE_URL}/pricing`,
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: String(p.monthly),
      priceCurrency: 'USD',
      billingDuration: 'P1M',
      unitText: 'month',
    },
  }))
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE_NAME,
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Field service management',
    operatingSystem: 'iOS, Android, Web',
    url: SITE_URL,
    description: SITE_TAGLINE,
    featureList: [
      'Scheduling and repeat jobs',
      'Drag-and-drop schedule board with double-booking warnings',
      'Best-route planning',
      'Technician phone app with checklists and photos',
      'Missed-call text-back and voicemail-to-text',
      'Estimates with e-signature and deposits',
      'Invoicing with pay links (Stripe) and automatic reminders',
      'Service agreements with e-signature',
      'Customer records and documents',
      'Live technician map',
      'QuickBooks Online sync',
    ],
    ...(offers.length ? { offers } : {}),
  }
}

/** Render JSON-LD safely inside a server component. */
export function jsonLdString(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}
