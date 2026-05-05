"use client";

import Image from "next/image";

const otherTags = [
  "Steep learning curve",
  "Hidden fees",
  "Clunky interfaces",
  "Poor support",
  "Steep learning curve",
  "Hidden fees",
  "Clunky interfaces",
  "Poor support",
];

const ourTags = [
  "Built for the field",
  "Simple setup",
  "Transparent pricing",
  "Real support",
  "Built for the field",
  "Simple setup",
  "Transparent pricing",
  "Real support",
];

const Marquee = ({ tags, dark }: { tags: string[]; dark?: boolean }) => (
  <div className="overflow-hidden w-full">
    <div
      className="flex gap-2 w-max"
      style={{ animation: "marquee 18s linear infinite" }}
    >
      {tags.map((tag, i) => (
        <span
          key={i}
          className={`whitespace-nowrap px-3 py-1 rounded-full text-xs font-medium shrink-0 ${
            dark
              ? "bg-white/15 text-white"
              : "bg-white/25 text-white"
          }`}
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-24 px-8 bg-[#f5f6fa]">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-block px-4 py-1.5 rounded-lg bg-[#dfe2ef] text-[#1a1f3d] text-sm font-medium mb-8">
            Why choose us
          </div>

          <h2 className="text-5xl md:text-6xl text-[#1a1f3d] tracking-tighter mb-6">
            We&apos;re not your{" "}
            <span className="text-[#8b90a5]">typical</span> field software.
          </h2>

          <p className="text-[#64697e] text-lg max-w-xl leading-relaxed">
            We skip the bloat and complicated setups to build tools that actually work for people running real businesses.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* LEFT — Others */}
          <div className="relative rounded-[2rem] overflow-hidden" style={{ minHeight: "480px" }}>
            <Image
              src="/image1.jpg"
              alt="Other software"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/55" />

            <div className="relative z-10 flex flex-col h-full p-8 pt-7">
              <Marquee tags={otherTags} dark />

              <div className="flex-1 flex items-center justify-center">
                <h3 className="text-white text-4xl md:text-5xl tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
                  Other software
                </h3>
              </div>

              <p className="text-white/70 text-base leading-relaxed text-center">
                Other tools overwhelm you with features, take weeks to set up, and leave your team confused about what to do next.
              </p>
            </div>
          </div>

          {/* RIGHT — Servienza */}
          <div className="relative rounded-[2rem] overflow-hidden" style={{ minHeight: "480px" }}>
            <Image
              src="/image2.jpg"
              alt="Servienza"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/45" />

            <div className="relative z-10 flex flex-col h-full p-8 pt-7">
              <Marquee tags={ourTags} />

              <div className="flex-1 flex items-center justify-center">
                <h3 className="text-white text-4xl md:text-5xl tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
                  Servienza
                </h3>
              </div>

              <p className="text-white/80 text-base leading-relaxed text-center">
                With Servienza, your team is up and running on day one — simple language, fast setup, and everything you need built right in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
