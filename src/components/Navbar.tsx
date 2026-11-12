'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { LOGIN_URL, NAV, SIGNUP_URL } from '@/lib/site'
import { Logo } from './Logo'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Close the drawer on navigation and lock scroll while it is open.
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const isActive = (href: string) => (href.startsWith('/#') ? false : pathname === href || pathname.startsWith(href + '/'))

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ground/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 px-4 sm:h-[72px] sm:px-8">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className={`text-[15px] font-semibold hover:text-ink ${isActive(n.href) ? 'text-brand-700' : 'text-ink/75'}`}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={LOGIN_URL} className="hidden px-3.5 py-2.5 text-[15px] font-semibold text-ink/75 hover:text-ink sm:inline-block">
            Log in
          </a>
          <a href={SIGNUP_URL} className="rounded-[10px] bg-brand-600 px-4 py-2.5 text-[14px] font-bold text-white hover:bg-brand-700 sm:text-[15px]">
            Start free
          </a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink lg:hidden"
          >
            {open ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
            )}
          </button>
        </div>
      </div>
      {open && (
        <div id="mobile-menu" className="border-t border-line bg-ground lg:hidden">
          <nav aria-label="Main mobile" className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-8">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className="rounded-lg px-2 py-3 text-[17px] font-bold text-ink hover:bg-white">
                {n.label}
              </Link>
            ))}
            <a href={LOGIN_URL} className="rounded-lg px-2 py-3 text-[17px] font-bold text-ink/75 hover:bg-white">
              Log in
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
