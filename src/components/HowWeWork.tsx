"use client";


const steps = [
  {
    id: "01",
    title: "Quick Setup",
    badge: "Day 1",
    description:
      "Set up your team on the web app, download the mobile app for the field. Most teams are fully running on day one no IT, no training sessions.",
  },
  {
    id: "02",
    title: "Dispatch & Track",
    badge: "Week 1+",
    description:
      "Schedule and dispatch from the web. Your crew works from the mobile app they see their jobs, update status, and you see it all live.",
  },
  {
    id: "03",
    title: "Get Paid & Grow",
    badge: "Ongoing",
    description:
      "Jobs get marked done in the field, invoices go out automatically from the web. Payments come in faster and your admin time drops to near zero.",
  },
];

const HowWeWork = () => {
  return (
    <section id="how-we-work" className="py-24 px-8 bg-[#fff]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          <div className="inline-block px-4 py-1.5 rounded-lg bg-[#F9F6F1] text-[#000] text-sm font-medium mb-8">
            How we work
          </div>

          <h2 className="text-5xl md:text-6xl text-[#000] tracking-tighter leading-tight mb-6">
            Up and running in a day. Not a month.
          </h2>

          <p className="text-[#000] text-lg leading-relaxed mb-10 max-w-md">
            Our three-step process takes you from day one to a fully running business with clear guidance and support at every stage.
          </p>

          <div className="flex items-center gap-4">
            <button className="px-6 py-3 rounded-xl bg-[#000] text-white text-sm cursor-pointer">
              Book a free call
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-0">
          {steps.map((step, index) => (
            <div key={step.id} className="flex gap-6">
              {/* Number + line */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#F8F5F0] flex items-center justify-center text-[#000] font-medium text-lg shrink-0">
                  {step.id}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px flex-1 bg-[#cfd2e0] my-2" style={{ minHeight: "40px" }} />
                )}
              </div>

              {/* Content */}
              <div className="pb-10">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-[#000] font-medium text-lg">{step.title}</h3>
                  <span className="px-2.5 py-0.5 rounded-md bg-[#F8F5F0] text-[#000] text-xs font-medium">
                    {step.badge}
                  </span>
                </div>
                <p className="text-[#000] text-base leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowWeWork;
