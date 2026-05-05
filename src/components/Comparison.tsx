"use client";

import { Check, X, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const competitors = ["Servienza", "Jobber", "Housecall Pro", "ServiceTitan"];

const features = [
  {
    category: "Operations",
    items: [
      {
        name: "AI route optimization",
        values: [true, false, false, true],
      },
      {
        name: "Schedule conflict detection",
        values: [true, false, "partial", true],
      },
      {
        name: "Independent cadence per service",
        values: [true, false, false, "partial"],
      },
      {
        name: "GPS tracking & live location",
        values: [true, "partial", true, true],
      },
    ],
  },

  {
    category: "Automation",
    items: [
      {
        name: "Auto-invoice from service log",
        values: [true, false, false, true],
      },
      {
        name: "Automated payment follow-ups",
        values: [true, "partial", true, true],
      },
      {
        name: "Technician en-route tracking",
        values: [true, false, "partial", true],
      },
    ],
  },

  {
    category: "Setup & Support",
    items: [
      {
        name: "Free data migration",
        values: [true, false, false, true],
      },
      {
        name: "Full company setup included",
        values: [true, false, false, "partial"],
      },
      {
        name: "Dedicated onboarding specialist",
        values: [true, false, false, true],
      },
    ],
  },

  {
    category: "Pricing",
    items: [
      {
        name: "No per-transaction platform fee",
        values: [true, false, false, false],
      },
      {
        name: "No hidden fees",
        values: [true, "partial", "partial", false],
      },
    ],
  },
];

const CellIcon = ({ value }: { value: boolean | string }) => {
  if (value === true) {
    return (
      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
        <Check className="w-3.5 h-3.5 text-emerald-600" />
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center">
        <X className="w-3.5 h-3.5 text-red-400" />
      </div>
    );
  }
  return (
    <div className="w-6 h-6 rounded-full bg-amber-50 flex items-center justify-center">
      <Minus className="w-3.5 h-3.5 text-amber-500" />
    </div>
  );
};

const Comparison = () => {
  return (
    <section id="compare" className="py-24 px-8 bg-[#fff]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-block px-4 py-1.5 rounded-lg bg-[#F9F6F1] text-[#000] text-sm font-medium mb-8">
            Compare
          </div>

          <h2 className="text-5xl md:text-6xl text-[#000] tracking-tighter mb-6">
            See how we stack up
          </h2>

          <p className="text-[#000] text-lg max-w-xl leading-relaxed">
            We built Servienza to fill the gaps other platforms leave behind
            especially for small and mid-size service businesses.
          </p>
        </div>

        {/* Comparison table */}
        <div className="bg-white rounded-[2rem] overflow-hidden border border-[#dfe2ef]">
          {/* Header row */}
          <div className="grid grid-cols-5 gap-0 border-b border-[#dfe2ef] sticky top-0 bg-white z-10">
            <div className="p-5 col-span-1">
              <p className="text-[#64697e] text-sm font-medium">Feature</p>
            </div>
            {competitors.map((comp, i) => (
              <div
                key={comp}
                className={cn(
                  "p-5 text-center",
                  i === 0 && "bg-[#f0f2f8]"
                )}
              >
                <p
                  className={cn(
                    "text-sm font-medium",
                    i === 0 ? "text-[#000] font-semibold" : "text-[#64697e]"
                  )}
                >
                  {comp}
                </p>
              </div>
            ))}
          </div>

          {/* Feature sections */}
          {features.map((section) => (
            <div key={section.category}>
              {/* Category header */}
              <div className="px-5 py-3 bg-[#f5f6fa] border-b border-[#dfe2ef]">
                <p className="text-[#000] text-xs font-semibold tracking-wider uppercase">
                  {section.category}
                </p>
              </div>

              {/* Items */}
              {section.items.map((item, idx) => (
                <div
                  key={item.name}
                  className={cn(
                    "grid grid-cols-5 gap-0",
                    idx < section.items.length - 1 && "border-b border-[#f0f2f8]"
                  )}
                >
                  <div className="p-4 col-span-1 flex items-center">
                    <p className="text-[#000] text-sm">{item.name}</p>
                  </div>
                  {item.values.map((val, i) => (
                    <div
                      key={i}
                      className={cn(
                        "p-4 flex items-center justify-center",
                        i === 0 && "bg-[#f0f2f8]/50"
                      )}
                    >
                      <CellIcon value={val} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>

        <p className="text-center text-[#000] text-sm mt-6">
          Comparison based on publicly available information as of 2025. Features may have changed.
        </p>
      </div>
    </section>
  );
};

export default Comparison;
