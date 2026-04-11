export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center grid-bg overflow-hidden pt-16">
      {/* Radial glow behind headline */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px]
        rounded-full bg-amber-400/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px]
        rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 border border-amber-400/30 rounded-full
            px-4 py-1.5 text-sm text-amber-400 mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"/>
            Now with AI-powered route optimization
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-7xl leading-[1.0] tracking-tight mb-6 animate-fade-up">
            Run your service<br />
            business <span className="gradient-text">like a machine.</span>
          </h1>

          {/* Subhead */}
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed animate-fade-up delay-100">
            Servienza brings customer management, scheduling, dispatching, GPS tracking, invoicing, and payments into one powerful platform — built for field service pros.
          </p>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-up delay-200">
            <a href="#"
              className="inline-flex items-center justify-center gap-2 bg-amber-400 text-navy-950 font-medium
                text-base px-7 py-3.5 rounded-xl hover:bg-amber-300 transition-all duration-200 amber-glow">
              Start free trial
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </a>
            <a href="#"
              className="inline-flex items-center justify-center gap-2 border border-white/15
                text-white text-base px-7 py-3.5 rounded-xl hover:bg-white/5 transition-all duration-200">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="8" cy="8" r="6.5"/>
                <polygon points="6.5,5.5 11.5,8 6.5,10.5" fill="currentColor" stroke="none"/>
              </svg>
              Watch demo
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 items-center animate-fade-up delay-300">
            <p className="text-xs text-slate-500 uppercase tracking-widest">Trusted by service teams in</p>
            {['Plumbing', 'HVAC', 'Pool Service', 'Landscaping', 'Pest Control'].map(i => (
              <span key={i} className="text-xs text-slate-400 border border-white/10 rounded-md px-3 py-1.5">
                {i}
              </span>
            ))}
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="mt-20 relative animate-fade-up delay-400">
          <div className="rounded-2xl border border-white/10 overflow-hidden bg-navy-900/80
            shadow-2xl shadow-black/40 max-w-5xl">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-navy-800/50">
              <span className="w-3 h-3 rounded-full bg-red-500/60"/>
              <span className="w-3 h-3 rounded-full bg-amber-400/60"/>
              <span className="w-3 h-3 rounded-full bg-green-500/60"/>
              <span className="ml-4 text-xs text-slate-500 bg-navy-700/50 rounded px-3 py-1 flex-1 max-w-xs">
                app.servianza.com/dashboard
              </span>
            </div>
            {/* Mock dashboard content */}
            <div className="p-6 grid grid-cols-4 gap-4">
              {/* Stat cards */}
              {[
                { label: 'Jobs Today', value: '34', color: 'text-amber-400' },
                { label: 'Active Techs', value: '12', color: 'text-green-400' },
                { label: 'Revenue MTD', value: '$48,290', color: 'text-blue-400' },
                { label: 'Pending Invoices', value: '7', color: 'text-orange-400' },
              ].map(s => (
                <div key={s.label} className="bg-navy-800/60 rounded-xl p-4 border border-white/5">
                  <p className="text-xs text-slate-500 mb-2">{s.label}</p>
                  <p className={`text-2xl font-display font-700 ${s.color}`}>{s.value}</p>
                </div>
              ))}
              {/* Schedule row */}
              <div className="col-span-3 bg-navy-800/60 rounded-xl p-4 border border-white/5">
                <p className="text-xs text-slate-500 mb-3">Today's schedule</p>
                <div className="space-y-2">
                  {[
                    { name: 'Mike Torres', job: 'HVAC Maintenance — 3421 Oak Ave', time: '8:00 AM', status: 'bg-green-500' },
                    { name: 'Sarah Lee', job: 'Pool Chemical Service — Bay Harbor Dr', time: '10:30 AM', status: 'bg-amber-400' },
                    { name: 'James Ruiz', job: 'Plumbing Repair — Coral Gables', time: '1:00 PM', status: 'bg-blue-400' },
                  ].map(j => (
                    <div key={j.name} className="flex items-center gap-3 text-sm">
                      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${j.status}`}/>
                      <span className="text-slate-400 w-20 text-xs">{j.time}</span>
                      <span className="text-white font-medium w-28 truncate">{j.name}</span>
                      <span className="text-slate-500 text-xs truncate">{j.job}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Map placeholder */}
              <div className="bg-navy-800/60 rounded-xl border border-white/5 flex flex-col items-center justify-center p-4">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-amber-400/60 mb-2">
                  <path d="M16 4C11.582 4 8 7.582 8 12c0 6.627 8 16 8 16s8-9.373 8-16c0-4.418-3.582-8-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z" fill="currentColor"/>
                </svg>
                <p className="text-xs text-slate-500 text-center">Live GPS tracking</p>
                <p className="text-xs text-amber-400 font-medium mt-1">12 active</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
