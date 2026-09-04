# Servienza — marketing site (Next.js 14, App Router)

This is the redesigned marketing site, structured to match your existing repo
(`src/app` + `src/components`, Tailwind, TypeScript, DM Sans + Plus Jakarta Sans,
emerald `brand` palette).

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Structure

```
src/
  app/
    layout.tsx                  Fonts (DM Sans + Plus Jakarta Sans) + globals
    globals.css                 Tailwind base + the redesign's design system
    page.tsx                    Homepage — composes the section components
    industries/[slug]/page.tsx  11 SEO industry pages (statically generated)
    compare/[slug]/page.tsx     3 competitor comparison pages
  components/
    Navbar, Hero, SavingsCalculator, WhiteGloveSetup, Pricing, Footer, …
    ClientInit.tsx              Mounts the small runtime (icons + interactions)
  lib/
    clientInit.ts               SVG icon injection, nav, FAQ, pricing toggle, calculator
  content/
    industries.ts               Per-trade page markup (data-driven routes)
    competitors.ts              Per-competitor page markup
public/
  image-slot.js                 Drag-and-drop screenshot placeholder web component
```

## How the design is wired

The whole visual system lives in **`src/app/globals.css`** (appended after Tailwind's
base). Each section component renders the reviewed, pixel-final markup. Interactions
(scroll state, FAQ accordion, pricing toggle, the savings calculator) and the inline
SVG icon set are handled by **`ClientInit`** / `lib/clientInit.ts`, which runs once per
page mount.

### Refactoring to idiomatic JSX (optional)
Section components currently embed their reviewed HTML so the design is locked in and
verifiable. To convert a section to hand-authored JSX, lift its markup out of the
`dangerouslySetInnerHTML` string into normal JSX (swap `class`→`className`,
`style="…"`→`style={{…}}`) — the CSS classes in `globals.css` stay the same, so you can
do this one component at a time without visual change.

## Notes
- **Brand:** emerald (`brand-600` = `#059669`), matching `tailwind.config.js`.
- **Fonts:** DM Sans (body) + Plus Jakarta Sans (display) via `next/font`.
- **Tweaks panel** from the design exploration is intentionally omitted — it was a
  design-review tool, not a production feature.
- Images in the app cards use `<image-slot>` placeholders; swap them for real
  `<img>`/`next/image` screenshots when you have them.
