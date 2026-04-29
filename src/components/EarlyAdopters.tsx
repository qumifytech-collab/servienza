"use client";

const brands = [
  { name: "Placeholder Co.", className: "text-xl font-medium tracking-tight" },
  { name: "BRAND NAME", className: "text-base font-black tracking-[0.18em]" },
  { name: "Sample Group", className: "text-xl font-semibold" },
  { name: "acme.", className: "text-2xl font-light italic font-serif" },
  { name: "LOREM INC", className: "text-base font-bold tracking-widest" },
  { name: "Ipsum & Co", className: "text-xl font-medium" },
  { name: "dolor.", className: "text-2xl font-light font-serif" },
  { name: "SITAMET", className: "text-base font-black tracking-[0.12em]" },
];

export default function EarlyAdopters() {
  return (
    <section className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center md:items-stretch overflow-hidden">
      {/* Left label */}
      <div className="flex-shrink-0 flex items-center px-8 py-4">
        <p className="text-md leading-snug text-[#9C8E84] w-28">
          Businesses we've helped:
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
              className={`whitespace-nowrap text-[#1c1c1c] ${brand.className}`}
            >
              {brand.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
