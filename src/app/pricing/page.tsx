'use client'

import { useState, useEffect } from 'react'
import { ArrowUpRight, Check, Minus, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import Footer from '@/components/Footer'

/* ─── Data ─────────────────────────────────────────────────────────────────── */

const tiers = [
  {
    id: 'starter',
    name: 'Starter',
    monthlyPrice: 49,
    annualPrice: 39,
    desc: 'Perfect for solo operators just getting started.',
    techCount: 'Up to 2 technicians',
    features: [
      'Scheduling & dispatch',
      'Customer management',
      'Basic invoicing',
      'Mobile app (iOS & Android)',
      'Email notifications',
      'Job history & notes',
      '5 GB storage',
    ],
    cta: 'Start free trial',
    highlight: false,
    badge: null,
  },
  {
    id: 'growth',
    name: 'Growth',
    monthlyPrice: 129,
    annualPrice: 99,
    desc: 'For growing teams ready to scale operations.',
    techCount: 'Up to 10 technicians',
    features: [
      'Everything in Starter',
      'Route optimization',
      'QuickBooks sync',
      'GPS tracking',
      'SMS notifications',
      'Service checklists',
      'Chemical tracking',
      'Customer portal',
      '25 GB storage',
    ],
    cta: 'Start free trial',
    highlight: true,
    badge: 'Most popular',
  },
  {
    id: 'pro',
    name: 'Pro',
    monthlyPrice: 299,
    annualPrice: 239,
    desc: 'Serious operations with advanced needs.',
    techCount: 'Up to 30 technicians',
    features: [
      'Everything in Growth',
      'Stripe payments',
      'API access',
      'Custom reporting',
      'Priority support',
      'Advanced analytics',
      'Multi-location',
      'Custom branding',
      '100 GB storage',
    ],
    cta: 'Start free trial',
    highlight: false,
    badge: null,
  },
]

type FeatureValue = boolean | string

const comparisonGroups: {
  category: string
  features: { name: string; starter: FeatureValue; growth: FeatureValue; pro: FeatureValue }[]
}[] = [
  {
    category: 'Core',
    features: [
      { name: 'Technician seats',        starter: '2',   growth: '10',  pro: '30'  },
      { name: 'Job scheduling',           starter: true,  growth: true,  pro: true  },
      { name: 'Customer management',      starter: true,  growth: true,  pro: true  },
      { name: 'Mobile app',               starter: true,  growth: true,  pro: true  },
      { name: 'Email notifications',      starter: true,  growth: true,  pro: true  },
      { name: 'Job history & notes',      starter: true,  growth: true,  pro: true  },
    ],
  },
  {
    category: 'Dispatch & Tracking',
    features: [
      { name: 'Route optimization',        starter: false, growth: true,  pro: true  },
      { name: 'GPS tracking',              starter: false, growth: true,  pro: true  },
      { name: 'Drag-and-drop dispatch',    starter: false, growth: true,  pro: true  },
      { name: 'Real-time crew status',     starter: false, growth: true,  pro: true  },
    ],
  },
  {
    category: 'Billing & Payments',
    features: [
      { name: 'Basic invoicing',           starter: true,  growth: true,  pro: true  },
      { name: 'Auto-invoicing',            starter: false, growth: true,  pro: true  },
      { name: 'Recurring billing',         starter: false, growth: true,  pro: true  },
      { name: 'QuickBooks sync',           starter: false, growth: true,  pro: true  },
      { name: 'Stripe payments',           starter: false, growth: false, pro: true  },
    ],
  },
  {
    category: 'Communication',
    features: [
      { name: 'SMS notifications',         starter: false, growth: true,  pro: true  },
      { name: 'Automated reminders',       starter: false, growth: true,  pro: true  },
      { name: 'Customer portal',           starter: false, growth: true,  pro: true  },
    ],
  },
  {
    category: 'Advanced',
    features: [
      { name: 'Service checklists',        starter: false, growth: true,  pro: true  },
      { name: 'Chemical tracking',         starter: false, growth: true,  pro: true  },
      { name: 'Custom reporting',          starter: false, growth: false, pro: true  },
      { name: 'Advanced analytics',        starter: false, growth: false, pro: true  },
      { name: 'API access',                starter: false, growth: false, pro: true  },
      { name: 'Multi-location',            starter: false, growth: false, pro: true  },
      { name: 'Custom branding',           starter: false, growth: false, pro: true  },
    ],
  },
  {
    category: 'Support',
    features: [
      { name: 'Help center access',        starter: true,  growth: true,  pro: true  },
      { name: 'Email support',             starter: true,  growth: true,  pro: true  },
      { name: 'Live chat support',         starter: false, growth: true,  pro: true  },
      { name: 'Priority support',          starter: false, growth: false, pro: true  },
      { name: 'Dedicated onboarding',      starter: false, growth: false, pro: true  },
    ],
  },
]

const faqs = [
  {
    q: 'Is there a free trial?',
    a: "Yes — every plan starts with a 14-day free trial. No credit card required to get started. You'll have full access to all features in your chosen plan.",
  },
  {
    q: "What counts as a 'technician seat'?",
    a: "A technician seat is any active field crew member with access to the mobile app. Office managers and admins using the web dashboard don't count toward your seat limit.",
  },
  {
    q: 'Can I switch plans later?',
    a: 'Absolutely. You can upgrade or downgrade at any time. Upgrades are prorated and take effect immediately; downgrades take effect at the start of the next billing cycle.',
  },
  {
    q: 'How does annual billing work?',
    a: "Annual billing saves you up to 20% compared to monthly. You're charged once per year upfront and can cancel before renewal with no penalty.",
  },
  {
    q: 'What happens if I exceed my technician limit?',
    a: "We'll notify you well before you hit your limit and make upgrading simple. We won't cut off your team mid-job — your crew stays connected.",
  },
  {
    q: 'Do you offer discounts for seasonal businesses?',
    a: 'Yes. If your business is seasonal, reach out to our team — we offer flexible pause options so you only pay for what you use during the off-season.',
  },
]

/* ─── Sub-components ────────────────────────────────────────────────────────── */

function FaqItem({ q, a, delay }: { q: string; a: string; delay: number }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="reveal rounded-xl border border-[#dfe2ef] bg-white overflow-hidden transition-all duration-200 hover:border-[#1a1f3d]/20"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
      >
        <span className="font-medium text-[#1a1f3d] text-sm md:text-base">{q}</span>
        <ChevronDown
          className={cn(
            'w-4 h-4 text-[#64697e] flex-shrink-0 transition-transform duration-300',
            open && 'rotate-180'
          )}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          open ? 'max-h-48' : 'max-h-0'
        )}
      >
        <p className="px-6 pb-5 text-sm text-[#64697e] leading-relaxed border-t border-[#dfe2ef] pt-4">
          {a}
        </p>
      </div>
    </div>
  )
}

function CellValue({ val, highlight }: { val: FeatureValue; highlight: boolean }) {
  if (typeof val === 'boolean') {
    return val ? (
      <Check
        className={cn('w-4 h-4 mx-auto', highlight ? 'text-white' : 'text-[#4f6bff]')}
        strokeWidth={2.5}
      />
    ) : (
      <Minus className="w-4 h-4 mx-auto text-[#dfe2ef]" strokeWidth={2} />
    )
  }
  return (
    <span className={cn('text-sm font-semibold', highlight ? 'text-white' : 'text-[#1a1f3d]')}>
      {val}
    </span>
  )
}

/* ─── Page ──────────────────────────────────────────────────────────────────── */

export default function PricingPage() {
  const [annual, setAnnual] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#FFFDFB] pt-40 pb-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto text-center">

          <span
            className="reveal inline-block bg-[#F9F6F1] border border-[#dfe2ef] text-[#1a1f3d] text-sm font-medium px-4 py-1.5 rounded-lg mb-6"
          >
            Pricing
          </span>

          <h1
            className="reveal font-display text-5xl md:text-6xl text-[#1a1f3d] tracking-tighter leading-[1.05] mb-5"
            style={{ transitionDelay: '80ms' }}
          >
            Straightforward pricing.<br />No surprises.
          </h1>

          <p
            className="reveal text-[#64697e] text-lg max-w-lg mx-auto mb-10"
            style={{ transitionDelay: '160ms' }}
          >
            Start free for 14 days. No credit card required.
          </p>

          {/* Billing toggle */}
          <div
            className="reveal inline-flex items-center bg-[#F9F6F1] border border-[#dfe2ef] rounded-xl p-1"
            style={{ transitionDelay: '240ms' }}
          >
            <button
              onClick={() => setAnnual(false)}
              className={cn(
                'px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                !annual
                  ? 'bg-white text-[#1a1f3d] shadow-sm border border-[#dfe2ef]'
                  : 'text-[#64697e] hover:text-[#1a1f3d]'
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={cn(
                'flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                annual
                  ? 'bg-white text-[#1a1f3d] shadow-sm border border-[#dfe2ef]'
                  : 'text-[#64697e] hover:text-[#1a1f3d]'
              )}
            >
              Annual
              <span className="text-xs font-semibold text-[#4f6bff] bg-[#4f6bff]/10 px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ── Pricing cards ────────────────────────────────────────────────── */}
      <section className="bg-[#FFFDFB] pb-28 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-3 gap-5 mb-5">
            {tiers.map((tier, i) => (
              <div
                key={tier.id}
                className={cn(
                  'reveal relative rounded-2xl p-8 flex flex-col',
                  tier.highlight
                    ? 'bg-[#141413] text-white'
                    : 'bg-[#F9F6F1] border border-[#dfe2ef]'
                )}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Most popular badge */}
                {tier.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#4f6bff] text-white text-xs font-semibold px-4 py-1.5 rounded-full whitespace-nowrap">
                    {tier.badge}
                  </span>
                )}

                {/* Header */}
                <div className="mb-7">
                  <p className={cn(
                    'font-display text-lg font-bold mb-3',
                    tier.highlight ? 'text-white' : 'text-[#1a1f3d]'
                  )}>
                    {tier.name}
                  </p>

                  <div className="flex items-baseline gap-1 mb-1">
                    <span className={cn(
                      'font-display text-5xl font-bold tracking-tighter',
                      tier.highlight ? 'text-white' : 'text-[#1a1f3d]'
                    )}>
                      ${annual ? tier.annualPrice : tier.monthlyPrice}
                    </span>
                    <span className={cn(
                      'text-sm ml-0.5',
                      tier.highlight ? 'text-white/50' : 'text-[#64697e]'
                    )}>
                      /mo
                    </span>
                  </div>

                  {annual && (
                    <p className={cn('text-xs mb-3', tier.highlight ? 'text-white/40' : 'text-[#64697e]')}>
                      Billed ${tier.annualPrice * 12}/year
                    </p>
                  )}

                  <p className={cn('text-sm leading-relaxed mb-4', tier.highlight ? 'text-white/60' : 'text-[#64697e]')}>
                    {tier.desc}
                  </p>

                  <span className={cn(
                    'inline-block text-xs font-semibold px-3 py-1.5 rounded-lg',
                    tier.highlight
                      ? 'bg-white/10 text-white/80'
                      : 'bg-white border border-[#dfe2ef] text-[#1a1f3d]'
                  )}>
                    {tier.techCount}
                  </span>
                </div>

                {/* Feature list */}
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span className={cn(
                        'mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0',
                        tier.highlight ? 'bg-white/15' : 'bg-[#4f6bff]/10'
                      )}>
                        <Check
                          className={cn('w-2.5 h-2.5', tier.highlight ? 'text-white' : 'text-[#4f6bff]')}
                          strokeWidth={3}
                        />
                      </span>
                      <span className={tier.highlight ? 'text-white/80' : 'text-[#1a1f3d]'}>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#"
                  className={cn(
                    'group flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-200',
                    tier.highlight
                      ? 'bg-white text-[#141413] hover:bg-white/90'
                      : 'bg-[#141413] text-white hover:bg-[#1a1f3d]'
                  )}
                >
                  {tier.cta}
                  <ArrowUpRight
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            ))}
          </div>

          {/* Enterprise row */}
          <div className="reveal rounded-2xl bg-white border border-[#dfe2ef] p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6" style={{ transitionDelay: '240ms' }}>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <p className="font-display text-xl font-bold text-[#1a1f3d]">Enterprise</p>
                <span className="text-xs font-semibold bg-[#F9F6F1] border border-[#dfe2ef] text-[#64697e] px-3 py-1 rounded-lg">
                  Custom pricing
                </span>
              </div>
              <p className="text-[#64697e] text-sm max-w-xl leading-relaxed">
                For large operations with complex requirements. Unlimited technicians, dedicated customer success manager, custom integrations, SLA guarantee, SSO &amp; enterprise security, and white-labeling.
              </p>
            </div>
            <a
              href="#"
              className="group flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-[#dfe2ef] text-[#1a1f3d] hover:border-[#1a1f3d]/40 hover:bg-[#F9F6F1] transition-all duration-200 whitespace-nowrap"
            >
              Contact sales
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <p className="text-center text-sm text-[#64697e]/70 mt-8">
            All plans include a 14-day free trial · No credit card required · Cancel anytime
          </p>
        </div>
      </section>

      {/* ── Feature comparison ───────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-10 bg-[#f0f2f8]">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14 reveal">
            <span className="inline-block bg-[#FFFDFB] border border-[#dfe2ef] text-[#1a1f3d] text-sm font-medium px-4 py-1.5 rounded-lg mb-6">
              Compare plans
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-[#1a1f3d] tracking-tighter">
              Everything in one place
            </h2>
          </div>

          <div className="reveal rounded-2xl overflow-hidden border border-[#dfe2ef] bg-white">

            {/* Table header */}
            <div className="grid grid-cols-4">
              <div className="p-6 bg-[#F9F6F1] border-b border-r border-[#dfe2ef]" />
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className={cn(
                    'p-6 border-b border-r last:border-r-0 border-[#dfe2ef] text-center',
                    tier.highlight ? 'bg-[#141413]' : 'bg-[#F9F6F1]'
                  )}
                >
                  <p className={cn(
                    'font-display text-base font-bold',
                    tier.highlight ? 'text-white' : 'text-[#1a1f3d]'
                  )}>
                    {tier.name}
                  </p>
                  <p className={cn(
                    'text-sm mt-0.5',
                    tier.highlight ? 'text-white/50' : 'text-[#64697e]'
                  )}>
                    ${annual ? tier.annualPrice : tier.monthlyPrice}/mo
                  </p>
                </div>
              ))}
            </div>

            {/* Feature rows */}
            {comparisonGroups.map((group, gi) => (
              <div key={group.category}>
                {/* Category header */}
                <div className="grid grid-cols-4 border-b border-[#dfe2ef] bg-[#f0f2f8]/60">
                  <div className="col-span-4 px-6 py-3">
                    <p className="text-xs font-semibold text-[#64697e] uppercase tracking-widest">
                      {group.category}
                    </p>
                  </div>
                </div>

                {group.features.map((feature, fi) => (
                  <div
                    key={feature.name}
                    className={cn(
                      'grid grid-cols-4 border-b border-[#dfe2ef] last:border-b-0',
                      gi === comparisonGroups.length - 1 && fi === group.features.length - 1
                        ? 'border-b-0'
                        : ''
                    )}
                  >
                    <div className="px-6 py-4 text-sm text-[#1a1f3d] border-r border-[#dfe2ef]">
                      {feature.name}
                    </div>
                    {(
                      [
                        { key: 'starter' as const, val: feature.starter, highlight: false },
                        { key: 'growth'  as const, val: feature.growth,  highlight: true  },
                        { key: 'pro'     as const, val: feature.pro,     highlight: false },
                      ] as const
                    ).map(({ key, val, highlight }) => (
                      <div
                        key={key}
                        className={cn(
                          'px-6 py-4 flex items-center justify-center border-r last:border-r-0 border-[#dfe2ef]',
                          highlight
                            ? 'bg-[#141413]/5'
                            : fi % 2 === 0 ? 'bg-white' : 'bg-[#F9F6F1]/30'
                        )}
                      >
                        <CellValue val={val} highlight={false} />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-10 bg-[#FFFDFB]">
        <div className="max-w-3xl mx-auto">

          <div className="text-center mb-14 reveal">
            <span className="inline-block bg-[#F9F6F1] border border-[#dfe2ef] text-[#1a1f3d] text-sm font-medium px-4 py-1.5 rounded-lg mb-6">
              FAQ
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-[#1a1f3d] tracking-tighter">
              Common questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} delay={i * 60} />
            ))}
          </div>

          <p className="text-center text-sm text-[#64697e] mt-12">
            Still have questions?{' '}
            <a href="#" className="text-[#1a1f3d] font-medium underline underline-offset-2 hover:opacity-70 transition-opacity">
              Talk to our team
            </a>
          </p>
        </div>
      </section>

      {/* ── CTA band ─────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-10 bg-[#f0f2f8]">
        <div className="max-w-6xl mx-auto">
          <div className="reveal bg-[#141413] rounded-2xl px-8 md:px-16 py-16 text-center">
            <p className="font-display text-4xl md:text-5xl text-white tracking-tighter leading-tight mb-5">
              Ready to run a tighter ship?
            </p>
            <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Join hundreds of service businesses that use Servienza to schedule smarter, dispatch faster, and get paid quicker.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a
                href="#"
                className="group flex items-center gap-2 bg-white text-[#141413] px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:bg-white/90"
              >
                Start free trial
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#"
                className="text-white/50 text-sm font-medium hover:text-white transition-colors duration-200 px-4 py-3 flex items-center gap-1"
              >
                Contact sales
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <p className="mt-8 text-white/25 text-sm">
              14-day free trial · No credit card required · Cancel anytime
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
