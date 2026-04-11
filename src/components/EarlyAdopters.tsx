const earlyAdopters = [
  { name: 'FlowRight Plumbing', industry: 'Plumbing', location: 'Miami, FL' },
  { name: 'ArcticBreeze HVAC', industry: 'HVAC', location: 'Houston, TX' },
  { name: 'AquaClear Pools', industry: 'Pool Service', location: 'Tampa, FL' },
  { name: 'GreenLawn Pro', industry: 'Landscaping', location: 'Phoenix, AZ' },
  { name: 'ShieldPest Co.', industry: 'Pest Control', location: 'Orlando, FL' },
  { name: 'PawsOnWheels', industry: 'Pet Grooming', location: 'Austin, TX' },
  { name: 'SparkClean Services', industry: 'Cleaning', location: 'Atlanta, GA' },
  { name: 'LuxeHome Beauty', industry: 'Home Beauty', location: 'Los Angeles, CA' },
]

export default function EarlyAdopters() {
  return (
    <section className="py-16 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 reveal">
        <p className="text-center text-xs text-slate-500 uppercase tracking-widest mb-6">
          Early adopter companies
        </p>
      </div>

      {/* Scrolling ticker */}
      <div className="relative">
        <div className="flex gap-4 animate-[ticker_30s_linear_infinite]" style={{
          width: 'max-content',
        }}>
          {[...earlyAdopters, ...earlyAdopters].map((co, i) => (
            <div key={i}
              className="flex-shrink-0 flex items-center gap-3 bg-navy-900 border border-white/8
                rounded-xl px-5 py-3">
              <div className="w-7 h-7 rounded-lg bg-amber-400/15 flex items-center justify-center
                text-amber-400 font-display font-700 text-xs flex-shrink-0">
                {co.name.charAt(0)}
              </div>
              <div>
                <p className="text-white text-sm font-medium whitespace-nowrap">{co.name}</p>
                <p className="text-slate-500 text-xs whitespace-nowrap">{co.location}</p>
              </div>
              <span className="text-xs border border-white/8 rounded-full px-2.5 py-0.5 text-slate-500 whitespace-nowrap">
                {co.industry}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
