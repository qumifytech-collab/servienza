const appFeatures = [
  'Daily routes with turn-by-turn GPS navigation',
  'Upload before & after job photos',
  'Complete digital service checklists',
  'Collect payments on-site via card or tap',
  'Real-time communication with dispatch',
  'View customer history and notes',
]

export default function MobileApp() {
  return (
    <section className="py-24 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <p className="text-amber-400 text-sm font-medium tracking-widest uppercase mb-4">Mobile app</p>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6 leading-tight">
              Your office goes wherever your technicians go.
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              The Servienza mobile app puts everything your field team needs in their pocket. No more phone calls to dispatch. No more paperwork.
            </p>

            <ul className="space-y-3 mb-10">
              {appFeatures.map(f => (
                <li key={f} className="flex items-start gap-3 text-slate-300">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-amber-400/15 flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="#fbbf24" strokeWidth="2">
                      <path d="M2 5l2 2 4-4"/>
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex gap-3">
              <a href="#" className="flex items-center gap-2 bg-white/8 border border-white/15 rounded-xl px-5 py-3 hover:bg-white/12 transition-colors">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                  <path d="M13.5 10a5.5 5.5 0 01-5.5 5.5A5.5 5.5 0 012.5 10 5.5 5.5 0 018 4.5 5.5 5.5 0 0113.5 10zm-2 0a3.5 3.5 0 00-3.5-3.5A3.5 3.5 0 004.5 10a3.5 3.5 0 003.5 3.5A3.5 3.5 0 0011.5 10z"/>
                </svg>
                <div>
                  <p className="text-xs text-slate-400">Download on the</p>
                  <p className="text-sm font-medium text-white">App Store</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-2 bg-white/8 border border-white/15 rounded-xl px-5 py-3 hover:bg-white/12 transition-colors">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 3l14 7-14 7V3z" fill="white"/>
                </svg>
                <div>
                  <p className="text-xs text-slate-400">Get it on</p>
                  <p className="text-sm font-medium text-white">Google Play</p>
                </div>
              </a>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="reveal flex justify-center">
            <div className="relative">
              <div className="w-64 bg-navy-900 rounded-[2.5rem] border-2 border-white/15 overflow-hidden shadow-2xl shadow-black/60">
                {/* Status bar */}
                <div className="bg-navy-800 px-6 py-3 flex justify-between text-xs text-slate-400">
                  <span>9:41 AM</span>
                  <span>●●●</span>
                </div>
                {/* App header */}
                <div className="bg-navy-800 px-4 pb-3">
                  <p className="text-xs text-slate-500">Good morning,</p>
                  <p className="font-display text-base font-700 text-white">Mike Torres</p>
                </div>
                {/* Content */}
                <div className="bg-navy-950 p-4 min-h-80">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">Today — 4 jobs</p>
                  {[
                    { time: '8:00', title: 'HVAC Maintenance', addr: '3421 Oak Ave', status: 'bg-green-500', done: true },
                    { time: '10:30', title: 'Pool Service', addr: 'Bay Harbor Dr', status: 'bg-amber-400', done: false },
                    { time: '1:00', title: 'Plumbing Repair', addr: 'Coral Gables', status: 'bg-slate-600', done: false },
                    { time: '3:30', title: 'AC Inspection', addr: 'Brickell Ave', status: 'bg-slate-600', done: false },
                  ].map(j => (
                    <div key={j.time} className={`flex gap-3 mb-3 p-3 rounded-xl border ${j.done ? 'border-green-500/20 bg-green-500/5' : 'border-white/5 bg-navy-800/50'}`}>
                      <div className={`w-2 h-2 rounded-full ${j.status} mt-1.5 flex-shrink-0`} />
                      <div className="flex-1 min-w-0">
                        <p className={`text-xs font-medium ${j.done ? 'text-slate-500 line-through' : 'text-white'}`}>{j.title}</p>
                        <p className="text-xs text-slate-500 truncate">{j.addr}</p>
                      </div>
                      <span className="text-xs text-slate-600">{j.time}</span>
                    </div>
                  ))}
                  {/* Nav button */}
                  <div className="mt-4 bg-amber-400 rounded-xl py-2.5 text-center">
                    <p className="text-xs font-700 text-navy-950 font-display">Navigate to next job</p>
                  </div>
                </div>
              </div>
              {/* Glow */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-40 h-20 bg-amber-400/10 blur-2xl rounded-full"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
