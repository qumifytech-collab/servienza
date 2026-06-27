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
    <section className="py-14 bg-white border-b border-gray-100 overflow-hidden">
      <p className="text-center text-xs text-gray-400 uppercase tracking-widest font-semibold mb-8">
        Early adopter companies
      </p>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"/>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"/>

        <div className="flex gap-4 ticker-track" style={{width:'max-content'}}>
          {[...earlyAdopters, ...earlyAdopters].map((co, i) => (
            <div key={i}
              className="flex-shrink-0 flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-5 py-3">
              <div className="w-8 h-8 rounded-lg bg-brand-100 flex items-center justify-center text-brand-700 font-display font-700 text-sm flex-shrink-0">
                {co.name.charAt(0)}
              </div>
              <div>
                <p className="text-gray-800 text-sm font-semibold whitespace-nowrap">{co.name}</p>
                <p className="text-gray-400 text-xs whitespace-nowrap">{co.location}</p>
              </div>
              <span className="text-xs bg-white border border-gray-200 rounded-full px-2.5 py-0.5 text-gray-400 whitespace-nowrap ml-1">
                {co.industry}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
