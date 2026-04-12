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
    <section id="pricing" className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="inline-block bg-brand-50 text-brand-700 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Pricing</span>
          <h2 className="font-display text-4xl md:text-5xl text-gray-900 mb-4">Straightforward pricing.<br/>No surprises.</h2>
          <p className="text-gray-500 text-lg">Start free for 14 days. No credit card required.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-5 items-start">
          {tiers.map((t, i) => (
            <div key={t.name}
              className={`reveal rounded-2xl p-7 flex flex-col transition-all
                ${t.highlight
                  ? 'bg-brand-600 text-white shadow-xl shadow-brand-600/25 scale-105 relative'
                  : 'bg-white border border-gray-200 text-gray-900 hover:shadow-md'
                }`}
              style={{transitionDelay:`${i*80}ms`}}>
              {t.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-700 font-display rounded-full px-4 py-1.5 whitespace-nowrap">
                  Most popular
                </div>
              )}

              <p className={`font-display text-lg font-700 mb-1 ${t.highlight ? 'text-white' : 'text-gray-900'}`}>{t.name}</p>
              <div className="flex items-baseline gap-1 mb-2">
                <span className={`font-display text-4xl font-800 ${t.highlight ? 'text-white' : 'text-gray-900'}`}>{t.price}</span>
                <span className={`text-sm ${t.highlight ? 'text-brand-200' : 'text-gray-400'}`}>{t.period}</span>
              </div>
              <p className={`text-sm mb-6 ${t.highlight ? 'text-brand-100' : 'text-gray-400'}`}>{t.desc}</p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {t.features.map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <span className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${t.highlight ? 'bg-white/20' : 'bg-brand-100'}`}>
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" stroke={t.highlight ? 'white' : '#059669'} strokeWidth="2">
                        <path d="M1 4l2 2 4-4"/>
                      </svg>
                    </span>
                    <span className={t.highlight ? 'text-brand-50' : 'text-gray-600'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a href="#"
                className={`block text-center text-sm font-semibold py-3 rounded-xl transition-all
                  ${t.highlight
                    ? 'bg-white text-brand-700 hover:bg-brand-50'
                    : 'bg-brand-600 text-white hover:bg-brand-700'
                  }`}>
                {t.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-10">
          All plans include a 14-day free trial · No credit card required · Cancel anytime
        </p>
      </div>
    </section>
  )
}
