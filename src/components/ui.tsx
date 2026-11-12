import Link from 'next/link'
import type { ReactNode } from 'react'

/** Small shared primitives. Tokens live in tailwind.config.js (ink/muted/line/ground/brand). */

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-8 ${className}`}>{children}</div>
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span className={`text-[13px] font-extrabold uppercase tracking-[1px] ${light ? 'text-brand-200' : 'text-brand-700'}`}>
      {children}
    </span>
  )
}

export function H2({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <h2 className={`text-[30px] font-extrabold leading-[1.1] tracking-[-0.8px] sm:text-[42px] sm:tracking-[-1px] ${className}`}>{children}</h2>
}

export function Lead({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`text-[17px] leading-relaxed text-muted sm:text-lg ${className}`}>{children}</p>
}

type BtnProps = { href: string; children: ReactNode; variant?: 'primary' | 'secondary' | 'dark' | 'white' | 'ghostLight' | 'outline'; size?: 'md' | 'lg'; className?: string; external?: boolean }

export function Button({ href, children, variant = 'primary', size = 'lg', className = '', external }: BtnProps) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-xl font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2'
  const sizes = size === 'lg' ? 'px-6 py-4 text-[17px]' : 'px-[18px] py-3 text-[15px]'
  const variants: Record<NonNullable<BtnProps['variant']>, string> = {
    primary: 'bg-brand-600 text-white hover:bg-brand-700',
    secondary: 'bg-white text-ink border border-line hover:bg-ground',
    dark: 'bg-ink text-white hover:bg-black',
    white: 'bg-white text-brand-800 hover:bg-brand-50',
    ghostLight: 'border-[1.5px] border-white/60 text-white hover:bg-white/10',
    outline: 'border border-line text-ink hover:bg-ground',
  }
  const cls = `${base} ${sizes} ${variants[variant]} ${className}`
  if (external || href.startsWith('http')) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  )
}

export function Check({ className = 'text-brand-600' }: { className?: string }) {
  return (
    <svg className={`mt-[3px] h-4 w-4 flex-none ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12l5 5L20 7" />
    </svg>
  )
}

export function CheckList({ items, className = '', light = false }: { items: string[]; className?: string; light?: boolean }) {
  return (
    <ul className={`space-y-2.5 text-[15px] ${light ? 'text-brand-100' : 'text-ink/80'} ${className}`}>
      {items.map((it) => (
        <li key={it} className="flex gap-2.5">
          <Check className={light ? 'text-brand-300' : 'text-brand-600'} />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  )
}

export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((it, i) => (
          <li key={it.name} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden="true">›</span>}
            {it.href ? (
              <Link href={it.href} className="hover:text-ink">
                {it.name}
              </Link>
            ) : (
              <span aria-current="page">{it.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

/** Screenshot slot: shows the real image when `src` exists, else a labelled placeholder. */
export function Screenshot({ label, src, alt, kind = 'web', className = '' }: { label: string; src?: string; alt?: string; kind?: 'web' | 'phone'; className?: string }) {
  if (kind === 'phone') {
    return (
      <div className={`w-[200px] shrink-0 rounded-[32px] bg-ink p-2 shadow-float ${className}`}>
        <div className="flex h-[400px] items-center justify-center overflow-hidden rounded-[24px] bg-ground text-center">
          {src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={src} alt={alt ?? label} className="h-full w-full object-cover object-top" loading="lazy" />
          ) : (
            <span className="px-4 text-xs font-bold text-muted">[ {label} ]</span>
          )}
        </div>
      </div>
    )
  }
  return (
    <div className={`overflow-hidden rounded-2xl border border-line bg-white shadow-float ${className}`}>
      <div className="flex h-9 items-center gap-1.5 border-b border-line bg-ground px-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="ml-3 rounded-md bg-white px-2.5 py-0.5 text-[11px] text-muted">app.servienza.com</span>
      </div>
      <div className="flex min-h-[260px] items-center justify-center bg-ground text-center">
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt ?? label} className="h-auto w-full" loading="lazy" />
        ) : (
          <span className="px-6 text-[13px] font-bold text-muted">[ {label} ]</span>
        )}
      </div>
    </div>
  )
}

export function Faq({ items, defaultOpenFirst = true }: { items: { q: string; a: string }[]; defaultOpenFirst?: boolean }) {
  return (
    <div className="border-t border-line">
      {items.map((it, i) => (
        <details key={it.q} open={defaultOpenFirst && i === 0} className="group border-b border-line py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-extrabold sm:text-lg [&::-webkit-details-marker]:hidden">
            <span>{it.q}</span>
            <svg className="h-5 w-5 flex-none text-muted transition-transform group-open:rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </summary>
          <p className="mt-2.5 text-base leading-relaxed text-muted">{it.a}</p>
        </details>
      ))}
    </div>
  )
}

export function StepNumber({ n, filled = true }: { n: number; filled?: boolean }) {
  return (
    <span
      className={`inline-flex h-8 w-8 flex-none items-center justify-center rounded-full text-sm font-extrabold ${
        filled ? 'bg-brand-600 text-white' : 'border-2 border-brand-600 bg-white text-brand-700'
      }`}
    >
      {n}
    </span>
  )
}
