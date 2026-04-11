const integrations = [
  { name: 'QuickBooks', desc: 'Sync invoices & payments', color: 'bg-green-500/10 border-green-500/20 text-green-400' },
  { name: 'Stripe', desc: 'Card & ACH payments', color: 'bg-purple-500/10 border-purple-500/20 text-purple-400' },
  { name: 'GPS Tracking', desc: 'Live fleet visibility', color: 'bg-blue-500/10 border-blue-500/20 text-blue-400' },
  { name: 'SMS Alerts', desc: 'Customer notifications', color: 'bg-amber-500/10 border-amber-500/20 text-amber-400' },
  { name: 'Email Automation', desc: 'Reminders & follow-ups', color: 'bg-red-500/10 border-red-500/20 text-red-400' },
]

export default function Integrations() {
  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-amber-400 text-sm font-medium tracking-widest uppercase mb-4">Integrations</p>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">Plays well with your stack.</h2>
          <p className="text-slate-400 text-lg max-w-lg mx-auto">
            Connect the tools you already use. No switching, no disruption.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {integrations.map((int, i) => (
            <div key={int.name}
              className={`reveal border rounded-2xl px-8 py-6 text-center min-w-40 ${int.color} transition-all duration-300 hover:scale-105`}
              style={{ transitionDelay: `${i * 80}ms` }}>
              <p className="font-display text-xl font-700 mb-1">{int.name}</p>
              <p className="text-xs opacity-70">{int.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
