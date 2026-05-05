"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";

const CaseStudy = () => {
  return (
    <section className="py-24 px-8 bg-[#FFFDFB]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

        {/* LEFT */}
        <div>
          <div className="inline-block px-4 py-1.5 rounded-lg bg-[#F9F6F1] text-[#000] text-sm font-medium mb-8">
            Case study
          </div>

          <h2 className="text-5xl md:text-6xl text-[#000] tracking-tighter leading-tight mb-8">
            From missed jobs to 15 hours back every week.
          </h2>

          <div className="space-y-4 text-[#000] text-base mb-10 max-w-lg">
            <p>
              Clearview Pools, a growing residential pool service company, was drowning in scheduling conflicts, missed jobs, and unpaid invoices piling up every week.
            </p>
            <p>
              We mapped their operations, identified the biggest time sinks, and set them up with a system that ran their jobs, dispatched their crew, and sent invoices automatically.
            </p>
            <p>
              Within 30 days, the results were clear.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#fff] border border-[#dfe2ef] rounded-2xl p-6">
              <p className="text-5xl text-[#000] tracking-tighter mb-3">15+</p>
              <p className="text-[#000] font-medium text-sm mb-1">Hours saved</p>
              <p className="text-[#64697e] text-sm">Every single week</p>
            </div>
            <div className="bg-[#fff] border border-[#dfe2ef] rounded-2xl p-6">
              <p className="text-5xl text-[#000] tracking-tighter mb-3">60%</p>
              <p className="text-[#000] font-medium text-sm mb-1">Faster payments</p>
              <p className="text-[#64697e] text-sm">With auto invoicing</p>
            </div>
          </div>
        </div>

        {/* RIGHT — Image card */}
        <div className="relative rounded-[2rem] overflow-hidden w-full h-full" style={{ minHeight: "400px" }}>
          <Image
            src="/image3.jpg"
            alt="Clearview Pools case study"
            fill
            className="object-cover object-center"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-2 text-white text-4xl tracking-tight">
              <Sparkles className="w-8 h-8" />
              <span>Clearview Pools</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CaseStudy;
