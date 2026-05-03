"use client";

const brands = [
  { name: "Torres Pool & Spa", className: "text-base font-medium tracking-tight" },
  { name: "SUMMIT HVAC", className: "text-sm font-black tracking-[0.18em]" },
  { name: "Greenfield Landscaping", className: "text-base font-semibold" },
  { name: "Peak Plumbing Co.", className: "text-base font-medium" },
  { name: "BLUE WAVE SERVICES", className: "text-sm font-black tracking-widest" },
  { name: "Horizon Electrical", className: "text-base font-semibold" },
  { name: "ClearPath Cleaning", className: "text-base font-medium" },
  { name: "ProTech Field Services", className: "text-sm font-bold tracking-wide" },
];

export default function EarlyAdopters() {
  return (
    <section className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center md:items-stretch overflow-hidden">
      {/* Left label */}
      <div className="flex-shrink-0 flex items-center px-8 py-4">
        <p className="text-md leading-snug text-[#9C8E84] w-28">
          Businesses we&apos;ve helped:
        </p>
      </div>

      {/* Marquee */}
      <div className="relative flex-1 overflow-hidden flex items-center">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[#F4F0EA] to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-[#F4F0EA] to-transparent" />

        <div
          className="flex items-center gap-14 animate-[ticker_35s_linear_infinite]"
          style={{ width: "max-content" }}
        >
          {[...brands, ...brands].map((brand, i) => (
            <span
              key={i}
              className={`whitespace-nowrap text-[#1c1c1c]/50 ${brand.className}`}
            >
              {brand.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
