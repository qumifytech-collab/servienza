const steps = [
  {
    num: '01',
    title: 'Schedule Jobs',
    desc: 'Assign jobs to technicians with a simple drag-and-drop calendar. Set recurring appointments, send customer confirmations automatically.',
    color: 'from-amber-400/20 to-amber-400/5',
    border: 'border-amber-400/30',
  },
  {
    num: '02',
    title: 'Dispatch Technicians',
    desc: "Routes are optimized automatically. Techs get their daily schedule on the mobile app with GPS navigation and job details.",
    color: 'from-blue-400/20 to-blue-400/5',
    border: 'border-blue-400/30',
  },
  {
    num: '03',
    title: 'Get Paid Faster',
    desc: 'Technicians collect payment on-site or send invoices instantly. Payments sync to QuickBooks and deposit directly to your account.',
    color: 'from-green-400/20 to-green-400/5',
    border: 'border-green-400/30',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-amber-400 text-sm font-medium tracking-widest uppercase mb-4">How it works</p>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">Simple for your team,<br />powerful for your business.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-14 left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] h-px bg-white/10" />
          <div className="hidden md:block absolute top-14 left-1/3 w-1/3 h-px bg-white/10" />

          {steps.map((s, i) => (
            <div key={s.num} className="reveal" style={{ transitionDelay: `${i * 120}ms` }}>
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} border ${s.border}
                flex items-center justify-center mb-6 relative z-10`}>
                <span className="font-display text-xl font-800 text-white">{s.num}</span>
              </div>
              <h3 className="font-display text-2xl font-700 text-white mb-3">{s.title}</h3>
              <p className="text-slate-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
