const stats = [
  { value: '2,400+', label: 'Service businesses', sub: 'across the US' },
  { value: '18,000+', label: 'Technicians dispatched', sub: 'every day' },
  { value: '$340M+', label: 'Invoices processed', sub: 'through the platform' },
  { value: '4.9 / 5', label: 'Average rating', sub: 'App Store & Google Play' },
]

const testimonials = [
  {
    quote: "We cut our dispatch time by 60% in the first month. The route optimization alone paid for the subscription.",
    name: 'Carlos M.', role: 'Owner, CoolBreeze HVAC', industry: 'HVAC',
    avatar: 'CM',
  },
  {
    quote: "Finally one place for scheduling, invoicing, and GPS tracking. My guys love the app — and they hate learning new software.",
    name: 'Tanya R.', role: 'Operations Manager, AquaClear Pools', industry: 'Pool Service',
    avatar: 'TR',
  },
  {
    quote: "QuickBooks sync saved us 6 hours a week on bookkeeping. We went from chasing payments to getting paid same-day.",
    name: 'David K.', role: 'CEO, GreenLawn Pro', industry: 'Landscaping',
    avatar: 'DK',
  },
]

export default function SocialProof() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((s, i) => (
            <div key={s.label} className="reveal text-center" style={{transitionDelay:`${i*80}ms`}}>
              <p className="font-display text-4xl md:text-5xl font-800 gradient-text mb-1">{s.value}</p>
              <p className="text-gray-800 text-sm font-semibold">{s.label}</p>
              <p className="text-gray-400 text-xs mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12 reveal">
          <span className="inline-block bg-brand-50 text-brand-700 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">What teams are saying</span>
          <h2 className="font-display text-4xl md:text-5xl text-gray-900">Built for modern service businesses.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={t.name}
              className="reveal bg-gray-50 border border-gray-200 rounded-2xl p-8 flex flex-col hover:border-brand-200 hover:shadow-md transition-all"
              style={{transitionDelay:`${i*100}ms`}}>
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 14 14" fill="#f59e0b"><path d="M7 1l1.5 4H13l-3.5 2.5L11 12 7 9.5 3 12l1.5-4.5L1 5h4.5z"/></svg>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 flex-1">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-9 h-9 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-display font-700 text-sm flex-shrink-0">{t.avatar}</div>
                <div>
                  <p className="text-gray-900 text-sm font-semibold">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
                <span className="ml-auto text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-500">{t.industry}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
