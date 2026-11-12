import { SITE_NAME, SITE_TAGLINE, SITE_URL, SUPPORT_EMAIL } from '@/lib/site'
import { FREE_PLAN_LIVE, PLANS, TRIAL_DAYS, formatPrice } from '@/content/plans'
import { TRADES } from '@/content/trades'
import { FEATURES } from '@/content/features'
import { COMPETITORS } from '@/content/competitors'

export const dynamic = 'force-static'

/**
 * /llms.txt — a plain-text summary for AI assistants and answer engines, generated from the same
 * content files as the pages so it never goes stale. See https://llmstxt.org.
 */
export function GET() {
  const plans = PLANS.filter((p) => p.monthly > 0 || FREE_PLAN_LIVE)
    .map((p) => `- ${p.name}: ${p.monthly === 0 ? 'free forever' : `${formatPrice(p.monthly)}/month`} — ${p.seatsLabel}. Includes: ${p.includes.join('; ')}.${p.limits ? ' Fair-use limits: ' + p.limits.join('; ') + '.' : ''}`)
    .join('\n')
  const trades = TRADES.map((t) => `- [${t.name}](${SITE_URL}/industries/${t.slug}): ${t.hook}`).join('\n')
  const features = FEATURES.map((f) => `- **${f.eyebrow}** — ${f.answer}`).join('\n')
  const compares = COMPETITORS.map((c) => `- [Servienza vs ${c.name}](${SITE_URL}/compare/${c.slug})`).join('\n')

  const body = `# ${SITE_NAME}

> ${SITE_TAGLINE}

Servienza is field-service software for owner-operators and small crews (1–10 people): pool service, landscaping, pet grooming, handyman, HVAC, plumbing, cleaning, pest control, electrical, painting and in-home beauty. It is a phone app (iPhone and Android) for the field and a web app for the office. Customers never need an app: they approve estimates, sign agreements and pay invoices from a text or email link. Setup is done with the customer on a call, including importing their customer list. ${TRIAL_DAYS}-day free trial, no credit card, cancel any time, export everything.

## Pricing
${plans}
Card payments go through Stripe pay links; Servienza adds no fee on top of Stripe's rate. No contract. Extra technician seats on the paid plan: $25/month each. When a trial ends without payment the account moves to the Free plan; nothing is deleted.

## What it does
${features}

## Trades
${trades}

## Comparisons
${compares}

## Key pages
- [Home](${SITE_URL}/)
- [Features](${SITE_URL}/features)
- [Pricing](${SITE_URL}/pricing)
- [Support](${SITE_URL}/support)
- [Privacy](${SITE_URL}/privacy) · [Terms](${SITE_URL}/terms) · [SMS policy](${SITE_URL}/sms-opt-in)

## Contact
- Email: ${SUPPORT_EMAIL}
- App: https://app.servienza.com
`
  return new Response(body, { headers: { 'content-type': 'text/plain; charset=utf-8' } })
}
