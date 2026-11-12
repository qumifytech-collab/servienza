import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

/**
 * Everyone may crawl. AI search crawlers are named explicitly so there is no doubt we want to be
 * cited by ChatGPT, Claude, Gemini and Perplexity (an unnamed bot still falls under '*').
 */
const AI_BOTS = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'anthropic-ai', 'Google-Extended', 'PerplexityBot', 'Applebot-Extended', 'Bingbot', 'CCBot']

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/'] },
      ...AI_BOTS.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
