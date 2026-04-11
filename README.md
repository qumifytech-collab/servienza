# Servienza — Landing Page

Built with **Next.js 14** + **Tailwind CSS** + **TypeScript**.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev
# → Open http://localhost:3000

# 3. Build for production
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, fonts (Syne + DM Sans)
│   ├── globals.css       # Base styles, animations, utilities
│   └── page.tsx          # Main page — assembles all sections
└── components/
    ├── Navbar.tsx         # Sticky nav with mobile menu
    ├── Hero.tsx           # Full-screen hero + dashboard mockup
    ├── EarlyAdopters.tsx  # Scrolling ticker of early companies
    ├── Industries.tsx     # 8-industry card grid
    ├── Features.tsx       # 6 core feature cards
    ├── HowItWorks.tsx     # 3-step visual flow
    ├── MobileApp.tsx      # App section + phone mockup
    ├── Integrations.tsx   # QuickBooks, Stripe, GPS, etc.
    ├── SocialProof.tsx    # Stats + 3 testimonials
    ├── Pricing.tsx        # 4-tier pricing (Growth highlighted)
    ├── FAQ.tsx            # Accordion FAQ
    └── Footer.tsx         # Final CTA + full footer
```

## Customization

### Colors
Defined in `tailwind.config.js`:
- `navy-950` — primary background `#050d1a`
- `navy-900` — card background `#0a1628`
- `amber-400` — primary accent `#fbbf24`

### Fonts
Set in `src/app/layout.tsx`:
- **Syne** (700, 800) — display/headlines
- **DM Sans** — body text

Both loaded from Google Fonts via `next/font/google`.

### Content
Each section is its own component. Edit the data arrays at the top of each file:
- Industries → `src/components/Industries.tsx`
- Features → `src/components/Features.tsx`
- Pricing tiers → `src/components/Pricing.tsx`
- Testimonials → `src/components/SocialProof.tsx`
- FAQ → `src/components/FAQ.tsx`
- Early adopters → `src/components/EarlyAdopters.tsx`

## Deployment

### Vercel (recommended — free)
```bash
npm install -g vercel
vercel
# Follow prompts — it auto-detects Next.js
```
Then add your custom domain `servianza.com` in the Vercel dashboard under **Settings → Domains**.

### Netlify
```bash
npm run build
# Upload the `.next` folder to Netlify, or connect your GitHub repo
```

### Self-hosted (VPS / DigitalOcean)
```bash
npm run build
npm start        # runs on port 3000
# Use nginx as a reverse proxy in front of it
```

## Next Steps

- [ ] Add real logo SVG to `/public/logo.svg` and update `Navbar.tsx` + `Footer.tsx`
- [ ] Replace placeholder testimonials with real customer quotes
- [ ] Connect CTA buttons to your signup/booking flow
- [ ] Add Google Analytics or PostHog for tracking
- [ ] Set up `next-sitemap` for SEO
- [ ] Add meta OG image to `src/app/layout.tsx`
- [ ] Create individual industry landing pages under `/src/app/industries/[slug]/`

## Logo Recommendation

Until you have a final logo, the current implementation uses an inline SVG triangle/pin glyph
in amber on navy. When you have a final logo file:

1. Export as SVG + PNG (transparent background)
2. Save to `/public/logo.svg`
3. Replace the inline SVG in `Navbar.tsx` and `Footer.tsx` with:
   ```tsx
   <Image src="/logo.svg" alt="Servienza" width={120} height={32} />
   ```

**Suggested logo concept**: A sharp upward-pointing triangle (route pin + upward motion)
with a small circle cutout at center. Bold, geometric, works at any size.
Recommended: hire a designer on 99designs ($200–500) or Looka ($65 AI-generated) to execute it.
