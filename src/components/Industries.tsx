const industries = [
  { name: 'Plumbing', icon: '🔧', desc: 'Leak repairs, installations & maintenance' },
  { name: 'HVAC', icon: '❄️', desc: 'Heating, cooling & air quality systems' },
  { name: 'Pool Service', icon: '🏊', desc: 'Cleaning, chemical balancing & repairs' },
  { name: 'Landscaping', icon: '🌿', desc: 'Lawn care, design & maintenance' },
  { name: 'Pest Control', icon: '🛡️', desc: 'Inspection, treatment & prevention' },
  { name: 'Pet Grooming', icon: '🐾', desc: 'Mobile & in-home grooming services' },
  { name: 'Cleaning Services', icon: '✨', desc: 'Residential & commercial cleaning' },
  { name: 'Home Beauty', icon: '💅', desc: 'In-home beauty & wellness services' },
]

export default function Industries() {
  return (
    <section id="industries" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-amber-400 text-sm font-medium tracking-widest uppercase mb-4">Industries served</p>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">Built for your trade</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Whether you run a crew of 2 or 200, Servienza adapts to how your business operates.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <a key={ind.name} href="#"
              className="reveal group relative bg-navy-900 border border-white/8 rounded-2xl p-6
                hover:border-amber-400/30 hover:bg-navy-800/80 transition-all duration-300 cursor-pointer"
              style={{ transitionDelay: `${i * 50}ms` }}>
              <div className="text-3xl mb-3">{ind.icon}</div>
              <h3 className="font-display text-lg font-700 text-white mb-1 group-hover:text-amber-400 transition-colors">
                {ind.name}
              </h3>
              <p className="text-sm text-slate-500 leading-snug">{ind.desc}</p>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#fbbf24" strokeWidth="2">
                  <path d="M2 12L12 2M12 2H6M12 2v6"/>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
