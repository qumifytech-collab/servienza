"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "We used to juggle texts, spreadsheets, and sticky notes just to get through a week. Now everything — scheduling, tracking, invoices — lives in one place and my team just knows where to be.",
    name: "Mike Torres",
    role: "Owner",
    company: "Torres Pool & Spa",
    metric: "15+ hrs saved per week",
  },
  {
    quote:
      "Before Servienza, I was spending Sunday nights building next week's schedule in a spreadsheet. Now my dispatcher handles everything in minutes and the techs get their routes on their phone automatically. Our missed appointment rate dropped to nearly zero.",
    name: "Rachel Simmons",
    role: "Operations Manager",
    company: "Summit HVAC Services",
    metric: "98% on-time arrival rate",
  },
  {
    quote:
      "We switched from Jobber because they were nickel-and-diming us on payments. Servienza's zero platform fee on Stripe was a game changer — we saved over $400/month just on processing fees. Plus the onboarding team migrated everything for us in two days.",
    name: "Carlos Vega",
    role: "Owner",
    company: "ClearPath Cleaning Co.",
    metric: "$400/mo saved on fees",
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goPrev = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const timer = setInterval(goNext, 8000);
    return () => clearInterval(timer);
  }, [goNext]);

  const t = testimonials[current];

  return (
    <section className="py-24 px-8 bg-[#f5f6fa]">
      <div className="max-w-6xl mx-auto">
        <div
          className="relative w-full rounded-[2rem] overflow-hidden"
          style={{ minHeight: "380px" }}
        >
          <Image
            src="/hero_image.jpg"
            alt="Testimonial background"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#1a1f3d]/75" />

          <div className="relative z-10 px-12 py-12 flex flex-col justify-between h-full min-h-[380px]">
            {/* Quote */}
            <div>
              <span className="block text-8xl text-white/30 leading-none -mb-8">
                &#8220;
              </span>

              <p
                className="text-white text-xl md:text-3xl leading-snug tracking-tight mb-8 transition-opacity duration-500"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {t.quote}
              </p>
            </div>

            {/* Attribution + controls */}
            <div className="flex items-end justify-between">
              <div>
                <p className="text-white text-lg font-medium">{t.name}</p>
                <p className="text-white/60 text-sm mt-0.5">
                  {t.role} at {t.company}
                </p>
                <div className="mt-2 inline-block px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30">
                  <span className="text-emerald-300 text-sm font-medium">
                    {t.metric}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {/* Dots */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={cn(
                        "rounded-full transition-all duration-300 cursor-pointer",
                        i === current
                          ? "w-6 h-2 bg-white"
                          : "w-2 h-2 bg-white/30 hover:bg-white/50"
                      )}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Arrows */}
                <div className="flex gap-2">
                  <button
                    onClick={goPrev}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={goNext}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
