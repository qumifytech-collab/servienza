"use client";

import Image from "next/image";

const Testimonial = () => {
  return (
    <section className="py-24 px-8 bg-[#f5f6fa]">
      <div className="max-w-6xl mx-auto">
        <div className="relative w-full rounded-[2rem] overflow-hidden" style={{ minHeight: "340px" }}>
          <Image
            src="/hero_image.jpg"
            alt="Testimonial background"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 px-12 py-12">
            <span className="block text-9xl text-white leading-none -mb-12">
              &#8220;
            </span>

            <p className="text-white text-2xl md:text-4xl leading-snug tracking-tight mb-8" style={{ fontFamily: "Georgia" }}>
              We used to juggle texts, spreadsheets, and sticky notes just to get through a week. Now everything — scheduling, tracking, invoices — lives in one place and my team just knows where to be.
            </p>

            <div>
              <p className="text-white text-lg">Mike Torres</p>
              <p className="text-white/70 text-sm mt-0.5">Owner at Torres Pool & Spa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
