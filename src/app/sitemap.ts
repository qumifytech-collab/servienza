import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'
import { TRADES } from '@/content/trades'
import { COMPETITORS } from '@/content/competitors'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const page = (path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] = 'monthly') => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  })
  return [
    page('/', 1, 'weekly'),
    page('/features', 0.9),
    page('/pricing', 0.9),
    page('/industries', 0.8),
    ...TRADES.map((t) => page(`/industries/${t.slug}`, 0.8)),
    ...COMPETITORS.map((c) => page(`/compare/${c.slug}`, 0.6)),
    page('/book-a-call', 0.7),
    page('/support', 0.5),
    page('/privacy', 0.2, 'yearly'),
    page('/terms', 0.2, 'yearly'),
    page('/sms-opt-in', 0.2, 'yearly'),
  ]
}
