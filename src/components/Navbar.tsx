'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 nav-blur
      ${scrolled ? 'bg-navy-950/90 border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center flex-shrink-0">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 14L9 4L15 14H3Z" fill="#050d1a" strokeWidth="0"/>
              <circle cx="9" cy="10" r="2" fill="#050d1a"/>
            </svg>
          </div>
          <span className="font-display font-800 text-lg tracking-tight text-white">
            Servienza
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#industries" className="hover:text-white transition-colors">Industries</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors px-3 py-1.5">
            Sign in
          </a>
          <a href="#"
            className="text-sm font-medium bg-amber-400 text-navy-950 px-4 py-2 rounded-lg hover:bg-amber-300 transition-colors">
            Start free trial
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-slate-400" onClick={() => setOpen(!open)}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <><line x1="4" y1="4" x2="18" y2="18"/><line x1="18" y1="4" x2="4" y2="18"/></> :
              <><line x1="3" y1="7" x2="19" y2="7"/><line x1="3" y1="11" x2="19" y2="11"/><line x1="3" y1="15" x2="19" y2="15"/></>}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy-900 border-t border-white/5 px-6 py-4 flex flex-col gap-4 text-sm">
          {['Features','Industries','How it works','Pricing'].map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/ /g,'-')}`}
              onClick={() => setOpen(false)}
              className="text-slate-300 hover:text-white transition-colors">{l}</a>
          ))}
          <a href="#" className="mt-2 text-center bg-amber-400 text-navy-950 font-medium py-2.5 rounded-lg">
            Start free trial
          </a>
        </div>
      )}
    </nav>
  )
}
