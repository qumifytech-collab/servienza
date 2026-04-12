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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <span className="inline-block bg-brand-50 text-brand-700 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Mobile app</span>
            <h2 className="font-display text-4xl md:text-5xl text-gray-900 mb-6 leading-tight">
              Your office goes wherever your technicians go.
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              The Servienza mobile app puts everything your field team needs in their pocket. No more phone calls to dispatch. No more paperwork.
            </p>
            <ul className="space-y-3 mb-10">
              {appFeatures.map(f => (
                <li key={f} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="#059669" strokeWidth="2.5"><path d="M2 5l2 2 4-4"/></svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="flex gap-3">
              <a href="#" className="flex items-center gap-2 bg-gray-900 text-white rounded-xl px-5 py-3 hover:bg-gray-800 transition-colors">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="white"><path d="M14.5 10.5a6.5 6.5 0 01-6.5 6.5A6.5 6.5 0 011.5 10.5 6.5 6.5 0 018 4a6.5 6.5 0 016.5 6.5zm-2 0A4.5 4.5 0 008 6a4.5 4.5 0 00-4.5 4.5A4.5 4.5 0 008 15a4.5 4.5 0 004.5-4.5z"/></svg>
                <div>
                  <p className="text-xs text-gray-400">Download on the</p>
                  <p className="text-sm font-semibold">App Store</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-2 bg-gray-900 text-white rounded-xl px-5 py-3 hover:bg-gray-800 transition-colors">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 3l14 7-14 7V3z" fill="white"/></svg>
                <div>
                  <p className="text-xs text-gray-400">Get it on</p>
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </a>
            </div>
          </div>

          {/* Real photo */}
          <div className="reveal">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1622653902334-e4e8a1e07f7f?w=700&q=80&auto=format&fit=crop&crop=top"
                alt="HVAC technician completing service job while using mobile app checklist on smartphone"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
