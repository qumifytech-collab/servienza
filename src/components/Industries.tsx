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
    <section id="industries" className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="inline-block bg-brand-50 text-brand-700 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Industries served</span>
          <h2 className="font-display text-4xl md:text-5xl text-gray-900 mb-4">Built for your trade</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">Whether you run a crew of 2 or 200, Servienza adapts to how your business operates.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <a key={ind.name} href="#"
              className="reveal group bg-white border border-gray-200 rounded-2xl p-6 hover:border-brand-300 hover:shadow-md hover:shadow-brand-600/5 transition-all duration-300"
              style={{ transitionDelay: `${i * 50}ms` }}>
              <div className="text-3xl mb-3">{ind.icon}</div>
              <h3 className="font-display text-base font-700 text-gray-900 mb-1 group-hover:text-brand-700 transition-colors">{ind.name}</h3>
              <p className="text-sm text-gray-400 leading-snug">{ind.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
