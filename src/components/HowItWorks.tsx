const steps = [
  { num: '01', title: 'Schedule Jobs', desc: 'Assign jobs to technicians with a simple drag-and-drop calendar. Set recurring appointments and send customer confirmations automatically.', color: 'bg-brand-50 border-brand-200 text-brand-700' },
  { num: '02', title: 'Dispatch Technicians', desc: "Routes are optimized automatically. Techs get their daily schedule on the mobile app with GPS navigation and full job details.", color: 'bg-blue-50 border-blue-200 text-blue-700' },
  { num: '03', title: 'Get Paid Faster', desc: 'Technicians collect payment on-site or send invoices instantly. Payments sync to QuickBooks and deposit directly to your account.', color: 'bg-violet-50 border-violet-200 text-violet-700' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="inline-block bg-brand-50 text-brand-700 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">How it works</span>
          <h2 className="font-display text-4xl md:text-5xl text-gray-900 mb-4">Simple for your team,<br/>powerful for your business.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[22%] right-[22%] h-px border-t-2 border-dashed border-gray-200"/>
          {steps.map((s, i) => (
            <div key={s.num} className="reveal bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow" style={{transitionDelay:`${i*100}ms`}}>
              <div className={`w-14 h-14 rounded-2xl border ${s.color} flex items-center justify-center mb-6 font-display text-xl font-700`}>{s.num}</div>
              <h3 className="font-display text-2xl font-700 text-gray-900 mb-3">{s.title}</h3>
              <p className="text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
