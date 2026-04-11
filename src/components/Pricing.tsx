const tiers = [
  {
    name: 'Starter',
    price: '$49',
    period: '/mo',
    desc: 'Perfect for solo operators just getting started.',
    features: ['Up to 2 technicians', 'Scheduling & dispatch', 'Customer management', 'Basic invoicing', 'Mobile app'],
    cta: 'Get started',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$129',
    period: '/mo',
    desc: 'For growing teams ready to scale operations.',
    features: ['Up to 10 technicians', 'Route optimization', 'QuickBooks sync', 'GPS tracking', 'SMS notifications', 'Service checklists'],
    cta: 'Start free trial',
    highlight: true,
  },
  {
    name: 'Pro',
    price: '$299',
    period: '/mo',
    desc: 'Serious operations with advanced needs.',
    features: ['Up to 30 technicians', 'All Growth features', 'Stripe payments', 'API access', 'Custom reporting', 'Priority support'],
    cta: 'Get started',
    highlight: false,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For large businesses with custom requirements.',
    features: ['Unlimited technicians', 'Custom integrations', 'Dedicated CSM', 'SLA guarantee', 'SSO & security', 'White-labeling'],
    cta: 'Contact sales',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-amber-400 text-sm font-medium tracking-widest uppercase mb-4">Pricing</p>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">Straightforward pricing.<br />No surprises.</h2>
          <p className="text-slate-400 text-lg">Start free for 14 days. No credit card required.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-5">
          {tiers.map((t, i) => (
            <div key={t.name}
              className={`reveal rounded-2xl p-7 flex flex-col
                ${t.highlight
                  ? 'bg-amber-400 text-navy-950 relative overflow-hidden'
                  : 'bg-navy-900 border border-white/8 text-white'
                }`}
              style={{ transitionDelay: `${i * 80}ms` }}>
              {t.highlight && (
                <div className="absolute top-4 right-4 text-xs font-700 font-display bg-navy-950/20 rounded-full px-3 py-1">
                  Most popular
                </div>
              )}
              <p className={`font-display text-lg font-700 mb-1 ${t.highlight ? 'text-navy-950' : 'text-white'}`}>
                {t.name}
              </p>
              <div className="flex items-baseline gap-1 mb-2">
                <span className={`font-display text-4xl font-800 ${t.highlight ? 'text-navy-950' : 'text-white'}`}>
                  {t.price}
                </span>
                <span className={`text-sm ${t.highlight ? 'text-navy-700' : 'text-slate-500'}`}>{t.period}</span>
              </div>
              <p className={`text-sm mb-6 ${t.highlight ? 'text-navy-700' : 'text-slate-400'}`}>{t.desc}</p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {t.features.map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                      stroke={t.highlight ? '#0a1628' : '#fbbf24'} strokeWidth="2.5">
                      <path d="M2 7l3 3 7-7"/>
                    </svg>
                    <span className={t.highlight ? 'text-navy-800' : 'text-slate-300'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a href="#"
                className={`block text-center text-sm font-medium py-3 rounded-xl transition-all
                  ${t.highlight
                    ? 'bg-navy-950 text-white hover:bg-navy-800'
                    : 'border border-white/15 text-white hover:bg-white/8'
                  }`}>
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
