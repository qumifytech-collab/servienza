export default function Footer() {
  return (
    <>
      {/* Final CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center reveal">
          <div className="relative">
            <div className="absolute inset-0 bg-amber-400/5 rounded-3xl blur-2xl" />
            <div className="relative border border-amber-400/15 rounded-3xl p-14">
              <p className="text-amber-400 text-sm font-medium tracking-widest uppercase mb-4">Ready to simplify?</p>
              <h2 className="font-display text-4xl md:text-6xl text-white mb-6 leading-tight">
                Stop juggling tools.<br />Start growing faster.
              </h2>
              <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
                Join service businesses already using Servienza to save hours every week and get paid faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#"
                  className="inline-flex items-center justify-center gap-2 bg-amber-400 text-navy-950 font-medium
                    text-base px-8 py-4 rounded-xl hover:bg-amber-300 transition-all amber-glow">
                  Start your free 14-day trial
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M3 8h10M9 4l4 4-4 4"/>
                  </svg>
                </a>
                <a href="#"
                  className="inline-flex items-center justify-center gap-2 border border-white/15
                    text-white text-base px-8 py-4 rounded-xl hover:bg-white/5 transition-all">
                  Book a demo
                </a>
              </div>
              <p className="text-sm text-slate-500 mt-6">No credit card required · Cancel anytime · Setup in minutes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-10 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 14L9 4L15 14H3Z" fill="#050d1a"/>
                    <circle cx="9" cy="10" r="2" fill="#050d1a"/>
                  </svg>
                </div>
                <span className="font-display font-800 text-lg text-white">Servienza</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                Field service management software built for the businesses that keep the world running.
              </p>
              <p className="text-slate-600 text-xs mt-4">servianza.com</p>
            </div>

            {[
              { title: 'Product', links: ['Features', 'Pricing', 'Mobile App', 'Integrations', 'Changelog'] },
              { title: 'Industries', links: ['Plumbing', 'HVAC', 'Pool Service', 'Landscaping', 'Pest Control'] },
              { title: 'Company', links: ['About', 'Blog', 'Careers', 'Contact', 'Privacy Policy'] },
            ].map(col => (
              <div key={col.title}>
                <p className="text-xs font-medium text-white uppercase tracking-widest mb-4">{col.title}</p>
                <ul className="space-y-2.5">
                  {col.links.map(l => (
                    <li key={l}>
                      <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-600">© 2025 Servienza. All rights reserved.</p>
            <p className="text-xs text-slate-600">Built for modern service businesses.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
