const integrations = [
  { name: 'QuickBooks', desc: 'Sync invoices & payments', bg: 'bg-green-50 border-green-200', text: 'text-green-700', dot: 'bg-green-500' },
  { name: 'Stripe', desc: 'Card & ACH payments', bg: 'bg-violet-50 border-violet-200', text: 'text-violet-700', dot: 'bg-violet-500' },
  { name: 'GPS Tracking', desc: 'Live fleet visibility', bg: 'bg-blue-50 border-blue-200', text: 'text-blue-700', dot: 'bg-blue-500' },
  { name: 'SMS Alerts', desc: 'Customer notifications', bg: 'bg-orange-50 border-orange-200', text: 'text-orange-700', dot: 'bg-orange-500' },
  { name: 'Email Automation', desc: 'Reminders & follow-ups', bg: 'bg-red-50 border-red-200', text: 'text-red-700', dot: 'bg-red-400' },
]

export default function Integrations() {
  return (
    <section className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="inline-block bg-brand-50 text-brand-700 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Integrations</span>
          <h2 className="font-display text-4xl md:text-5xl text-gray-900 mb-4">Plays well with your stack.</h2>
          <p className="text-gray-500 text-lg max-w-lg mx-auto">Connect the tools you already use. No switching, no disruption.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {integrations.map((int, i) => (
            <div key={int.name}
              className={`reveal border ${int.bg} rounded-2xl px-8 py-6 text-center min-w-44 hover:scale-105 transition-transform duration-200`}
              style={{transitionDelay:`${i*80}ms`}}>
              <div className={`w-2.5 h-2.5 rounded-full ${int.dot} mx-auto mb-3`}/>
              <p className={`font-display text-lg font-700 ${int.text} mb-1`}>{int.name}</p>
              <p className="text-xs text-gray-400">{int.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
