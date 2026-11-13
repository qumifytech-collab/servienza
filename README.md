# Servienza — marketing site (Next.js 14, App Router)

Rebuilt November 2026 around the owner-operator buyer: plain-language copy, one story on the
homepage, and supporting pages written answer-first so search and AI answer engines can quote them.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

Env vars: `SERVIENZA_API_URL` (backend base URL, e.g. `https://api.servienza.com/api`) stores setup-call
requests; `NEXT_PUBLIC_CRISP_WEBSITE_ID` turns on the chat launcher; `CRISP_IDENTIFIER`/`CRISP_KEY`
and/or `RESEND_API_KEY` add notifications for `/book-a-call` (see below).

## Where things live

```
src/lib/site.ts            Site-wide facts: URLs, support email/hours, trial length, nav
src/lib/seo.ts             pageMetadata(), JSON-LD builders (Organization, SoftwareApplication+Offers, FAQPage, BreadcrumbList)
src/content/plans.ts       Pricing — the ONLY place prices live (pages, JSON-LD and llms.txt read it)
src/content/trades.ts      11 industry pages' content (one object per trade)
src/content/features.ts    /features sections + homepage chips
src/content/competitors.ts /compare pages — competitor facts with lastChecked date and sources
src/app/(site)/            Pages with the shared nav + footer: /, /features, /pricing, /industries, /industries/[slug], /compare/[slug]
src/app/{support,privacy,terms,sms-opt-in}  Standalone legal/support pages (unchanged)
src/app/robots.ts, sitemap.ts, llms.txt/route.ts   Crawler plumbing (AI bots allowed explicitly)
src/components/ui.tsx      Primitives: Container, Button, Faq, Screenshot (placeholder until a src is given), …
src/components/home/       Hero (trade picker) and the HTML app mockups
```

Analytics: `@vercel/analytics` (`<Analytics />` in `src/app/layout.tsx`) — cookieless page views, free within
Vercel's included allowance; turn it on once under the project's **Analytics** tab in the Vercel dashboard.
Sign-up attribution (which trade page a customer came from) is in the web app at Admin → Sign-ups by trade.

Fonts are self-hosted (`@fontsource-variable/manrope`) — no Google Fonts request. Palette and type
match the web app so site and product look like one thing.

## Before launch — things only you can fill in

1. **Pricing** — `src/content/plans.ts` holds the two plans (Free owner-only; Team $100/mo for two
   technicians, $25/seat after), the 60-day trial and the usage limits. `FREE_PLAN_LIVE` must stay
   `true` only while the backend's Free tier is deployed; set it `false` to show "Coming soon".
2. **Screenshots** — nine real web captures are in `public/screens/` (sandbox demo company, light theme;
   missed calls, customer detail and live map were staged in the browser with realistic data). The
   phone shots are HTML renders built from the mobile app's code: `node scripts/phone-mocks/build.js`
   then `node scripts/phone-mocks/shoot.js public/screens` (needs lucide-static, @fontsource-variable/jetbrains-mono
   and Playwright). Replace any of them with a real simulator capture of the same filename.
   Still a placeholder: QuickBooks. Drop captures in `public/screens/` and set `src` on the `shots` in
   `src/content/features.ts` (and swap `<Screenshot label=…>` on the homepage / industry pages).
   Needed: web (light theme, demo company) — schedule board, routes builder, missed calls, estimate,
   invoices, customer detail, live map, agreements, QuickBooks, dashboard; mobile — My Day,
   job checklist, service detail with map, estimate approve page.
3. **Setup-call requests** — `/book-a-call` posts to `src/app/api/book-call/route.ts`, which stores
   the request in the backend (`SERVIENZA_API_URL` → `POST /v1/cta/setup-call`, table
   `setup_call_requests`; worklist at web app Admin → Setup calls) and optionally also notifies via
   Crisp (`CRISP_IDENTIFIER` + `CRISP_KEY` plugin token, with the existing
   `NEXT_PUBLIC_CRISP_WEBSITE_ID`) and/or Resend (`RESEND_API_KEY`, optional `BOOK_CALL_TO`,
   `BOOK_CALL_FROM`). With neither set, requests are only logged.
4. **App store links** — `APP_STORE_URL`, `PLAY_STORE_URL` in `src/lib/site.ts`.
5. **Competitor facts** — `src/content/competitors.ts` was checked 2026-11-08 against third-party
   pricing guides; confirm against getjobber.com/pricing and housecallpro.com/pricing and bump
   `lastChecked`. Re-check quarterly; the date prints on the page.
6. **Claims to confirm in copy** (search the content files for them): "No Servienza fee on top of
   Stripe's rate"; texts included with no cap; data kept after an unpaid trial; "we give you a
   starting template" for agreements; trade pages mention features like "skip a stop with a reason"
   and "pause recurring jobs" — make sure each exists as described.
7. **Signup query params** — links pass `?trade=<slug>` and `?plan=<id>` to `app.servienza.com/signup`.
   Harmless if ignored; useful if onboarding reads them.

## SEO / AEO checklist (done in code)

- One `<h1>` per page, unique `<title>` + description, canonical, OG/Twitter tags.
- JSON-LD on every page; `FAQPage` wherever there is an FAQ; `SoftwareApplication` + `Offer` on / and /pricing.
- Question-style headings followed by a direct answer on /features, /pricing, /industries/*, /compare/*.
- `robots.txt` allows GPTBot, OAI-SearchBot, ClaudeBot, Google-Extended, PerplexityBot, Bingbot, CCBot.
- `sitemap.xml` and `/llms.txt` generated from the content files.
- Old URLs redirected (`/compare/servienza-vs-*`, `/compare`).
- Static HTML for everything; the trade picker only personalises on top of the default content.

Still to do off-site: Google Search Console + Bing Webmaster Tools, a Google Business Profile,
Capterra/G2 listings with the same one-line description, and App Store / Play Store listings that
match this site's wording.
