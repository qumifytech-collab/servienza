const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="9" cy="7" r="4"/><path d="M2 21v-2a4 4 0 014-4h6a4 4 0 014 4v2"/>
        <path d="M17 3a4 4 0 010 8" strokeLinecap="round"/>
        <path d="M21 21v-2a4 4 0 00-3-3.87" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Customer Management',
    desc: 'Full customer profiles with property details, service history, notes, and communication logs in one place.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="16" height="16" rx="2"/>
        <path d="M3 9h16M9 21V9"/>
      </svg>
    ),
    title: 'Scheduling & Dispatch',
    desc: 'Drag-and-drop calendar with technician assignment, conflict detection, and real-time availability.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M11 3C7.686 3 5 5.686 5 9c0 4.971 6 10 6 10s6-5.029 6-10c0-3.314-2.686-6-6-6z"/>
        <circle cx="11" cy="9" r="2"/>
      </svg>
    ),
    title: 'Route Optimization',
    desc: 'Automatically builds the most efficient routes for your technicians — saving fuel, time, and money every day.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="5" y="2" width="12" height="18" rx="2"/>
        <path d="M9 6h4M9 10h4M9 14h2"/>
      </svg>
    ),
    title: 'Technician Mobile App',
    desc: 'iOS & Android apps so your field team can view jobs, navigate, collect photos, and take payments on-site.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4h14a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z"/>
        <path d="M2 10h18M7 15h2M13 15h4"/>
      </svg>
    ),
    title: 'Billing & Payments',
    desc: 'Create invoices, set up subscriptions, accept payments via Stripe, and sync everything to QuickBooks automatically.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14.5 4h-7L5 8v10a2 2 0 002 2h8a2 2 0 002-2V8l-2.5-4z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    title: 'Checklists & Photos',
    desc: 'Digital service checklists with before/after photo uploads — giving customers proof and protecting your team.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-amber-400 text-sm font-medium tracking-widest uppercase mb-4">Core features</p>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
            Everything you need,<br />nothing you don't.
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Replace 6 different tools with one platform your whole team will actually use.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={f.title}
              className="reveal group bg-navy-900 border border-white/8 rounded-2xl p-7
                hover:border-amber-400/20 transition-all duration-300"
              style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center mb-5
                group-hover:bg-amber-400/20 transition-colors">
                {f.icon}
              </div>
              <h3 className="font-display text-xl font-700 text-white mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
