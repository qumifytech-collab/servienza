const features = [
  {
    title: 'Customer Management',
    desc: 'Full customer profiles with property details, service history, notes, and communication logs in one place.',
    img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=700&q=80&auto=format&fit=crop',
    imgAlt: 'Professional plumber reviewing customer information on a tablet outside a residential home',
  },
  {
    title: 'Scheduling & Dispatch',
    desc: 'Drag-and-drop calendar with technician assignment, conflict detection, and real-time availability.',
    img: 'https://images.unsplash.com/photo-1524749292158-7540c2494485?w=700&q=80&auto=format&fit=crop',
    imgAlt: 'Office dispatcher managing technician schedules on a large monitor',
  },
  {
    title: 'Route Optimization',
    desc: 'Automatically builds the most efficient routes for your technicians — saving fuel, time, and money every day.',
    img: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=700&q=80&auto=format&fit=crop',
    imgAlt: 'Landscaping technician checking GPS route navigation on smartphone beside service truck',
  },
  {
    title: 'Technician Mobile App',
    desc: 'iOS & Android apps so your field team can view jobs, navigate, collect photos, and take payments on-site.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80&auto=format&fit=crop',
    imgAlt: 'HVAC technician using mobile app checklist on rooftop',
  },
  {
    title: 'Billing & Payments',
    desc: 'Create invoices, set up subscriptions, accept payments via Stripe, and sync everything to QuickBooks automatically.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&q=80&auto=format&fit=crop',
    imgAlt: 'Technician showing digital invoice on tablet to homeowner',
  },
  {
    title: 'Checklists & Photos',
    desc: 'Digital service checklists with before/after photo uploads — giving customers proof and protecting your team.',
    img: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=700&q=80&auto=format&fit=crop',
    imgAlt: 'Pool service technician photographing swimming pool on mobile phone',
  },
  {
    title: 'Reports & Analytics',
    desc: 'Revenue charts, technician performance, job completion rates — all the data you need to grow smarter.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80&auto=format&fit=crop',
    imgAlt: 'Business owner reviewing analytics dashboard on laptop in modern workspace',
  },
  {
    title: 'Technician Management',
    desc: 'Assign skills, certifications, territories, and performance goals. See your whole team at a glance.',
    img: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=700&q=80&auto=format&fit=crop',
    imgAlt: 'Group of service technicians preparing for daily jobs around service vehicles',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 reveal">
          <span className="inline-block bg-brand-50 text-brand-700 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Core features</span>
          <h2 className="font-display text-4xl md:text-5xl text-gray-900 mb-4">Everything you need,<br/>nothing you don't.</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">Replace 6 different tools with one platform your whole team will actually use.</p>
        </div>

        <div className="space-y-24">
          {features.map((f, i) => (
            <div key={f.title}
              className={`reveal flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-16 items-center`}>
              {/* Image */}
              <div className="w-full md:w-1/2 flex-shrink-0">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 aspect-video">
                  <img
                    src={f.img}
                    alt={f.imgAlt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              {/* Text */}
              <div className="w-full md:w-1/2">
                <span className="inline-block bg-brand-50 text-brand-600 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
                  Feature {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-3xl font-700 text-gray-900 mb-4">{f.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed mb-6">{f.desc}</p>
                <a href="#" className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:gap-3 transition-all">
                  Learn more
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
