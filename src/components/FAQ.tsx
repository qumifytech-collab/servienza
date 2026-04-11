'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'How long does it take to set up Servienza?',
    a: 'Most teams are fully set up and dispatching jobs within a single afternoon. We offer free onboarding calls and step-by-step setup guides to get your team live fast.',
  },
  {
    q: 'Can my technicians use the mobile app without training?',
    a: "Yes. The mobile app is built to be intuitive for field techs who aren't tech-savvy. Most technicians get comfortable within their first day. We also have short video tutorials for each feature.",
  },
  {
    q: 'Does Servienza integrate with QuickBooks?',
    a: 'Yes — Servienza has a native two-way sync with QuickBooks Online and Desktop. Invoices, payments, customers, and products stay in sync automatically with no manual entry.',
  },
  {
    q: 'How does route optimization work?',
    a: "Our engine analyzes your technicians' current locations, job addresses, time windows, and skill requirements — then builds the most efficient daily routes automatically. You can override any assignment with a drag-and-drop.",
  },
  {
    q: 'Is there a contract or can I cancel anytime?',
    a: 'All plans are month-to-month with no long-term contracts. Annual plans are available at a discount. You can cancel anytime from your account dashboard — no calls, no hassle.',
  },
  {
    q: 'What payment methods can I collect from customers?',
    a: 'Via our Stripe integration, you can collect credit cards, debit cards, ACH bank transfers, and tap-to-pay (Apple Pay / Google Pay) — in the office, on-site, or via a payment link sent by text or email.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <p className="text-amber-400 text-sm font-medium tracking-widest uppercase mb-4">FAQ</p>
          <h2 className="font-display text-4xl md:text-5xl text-white">Common questions</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i}
              className="reveal bg-navy-900 border border-white/8 rounded-2xl overflow-hidden
                hover:border-white/15 transition-colors"
              style={{ transitionDelay: `${i * 60}ms` }}>
              <button
                className="w-full text-left px-7 py-5 flex items-center justify-between gap-4"
                onClick={() => setOpen(open === i ? null : i)}>
                <span className="text-white font-medium">{faq.q}</span>
                <span className={`flex-shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center
                  transition-transform duration-200 ${open === i ? 'rotate-45' : ''}`}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 2v6M2 5h6"/>
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="px-7 pb-6 text-slate-400 leading-relaxed text-sm border-t border-white/5 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
