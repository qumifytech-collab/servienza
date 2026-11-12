import Link from 'next/link'
import { Logo } from './Logo'
import { TRADES } from '@/content/trades'
import { COMPETITORS } from '@/content/competitors'
import { SUPPORT_EMAIL, SUPPORT_HOURS, LEGAL_ENTITY } from '@/lib/site'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-ink text-[#B8B6AD]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-8 pt-14 sm:px-8">
        <div className="flex flex-wrap justify-between gap-10">
          <div className="flex max-w-xs flex-col gap-3">
            <Logo light />
            <p className="text-sm leading-relaxed">Software for people who do the work themselves.</p>
            <p className="text-sm leading-relaxed">
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-[#B8B6AD] hover:text-white">{SUPPORT_EMAIL}</a>
              <br />
              {SUPPORT_HOURS}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-10 gap-y-8 text-sm sm:grid-cols-4">
            <FooterCol title="Product" links={[
              { href: '/#how', label: 'How it works' },
              { href: '/features', label: 'Features' },
              { href: '/pricing', label: 'Pricing' },
              { href: '/support', label: 'Setup & support' },
              { href: '/#faq', label: 'Questions' },
            ]} />
            <FooterCol title="Your trade" links={TRADES.map((t) => ({ href: `/industries/${t.slug}`, label: t.short }))} />
            <FooterCol title="Compare" links={COMPETITORS.map((c) => ({ href: `/compare/${c.slug}`, label: `vs ${c.name}` }))} />
            <FooterCol title="Company" links={[
              { href: '/support', label: 'Contact' },
              { href: '/support', label: 'Help center' },
              { href: '/privacy', label: 'Privacy' },
              { href: '/terms', label: 'Terms' },
              { href: '/sms-opt-in', label: 'SMS policy' },
            ]} />
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-3 border-t border-white/10 pt-5 text-[13px]">
          <span>© {year} {LEGAL_ENTITY} · Servienza. All rights reserved.</span>
          <span>Made in the USA</span>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div className="flex flex-col gap-2.5">
      <b className="text-white">{title}</b>
      {links.map((l) => (
        <Link key={l.href + l.label} href={l.href} className="text-[#B8B6AD] hover:text-white">
          {l.label}
        </Link>
      ))}
    </div>
  )
}
