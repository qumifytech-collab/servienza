"use client";

import { Check, X, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const competitors = ["Servienza", "Jobber", "Housecall Pro", "ServiceTitan"];

const features = [
  {
    category: "Scheduling & Dispatch",
    items: [
      { name: "Drag & drop dispatch board", values: [true, true, true, true] },
      { name: "AI route optimization", values: [true, false, false, true] },
      { name: "Schedule conflict detection", values: [true, false, "partial", true] },
      { name: "Technician availability management", values: [true, true, true, true] },
      { name: "Recurring service scheduling", values: [true, true, true, true] },
      { name: "Independent cadence per service", values: [true, false, false, "partial"] },
    ],
  },
  {
    category: "Field Operations",
    items: [
      { name: "Mobile app (iOS & Android)", values: [true, true, true, true] },
      { name: "GPS tracking & live location", values: [true, "partial", true, true] },
      { name: "Before/after photo capture", values: [true, true, true, true] },
      { name: "Custom checklists", values: [true, true, "partial", true] },
      { name: "Out-of-the-box checklists", values: [true, false, false, false] },
      { name: "Service logs with inventory", values: [true, "partial", "partial", true] },
    ],
  },
  {
    category: "Invoicing & Payments",
    items: [
      { name: "Auto-invoice from service log", values: [true, false, false, true] },
      { name: "Stripe payments (zero platform fee)", values: [true, false, false, false] },
      { name: "QuickBooks integration", values: [true, true, true, true] },
      { name: "Automated payment follow-ups", values: [true, "partial", true, true] },
      { name: "Customer payment portal", values: [true, true, true, true] },
    ],
  },
  {
    category: "Communication",
    items: [
      { name: "Push notifications", values: [true, true, true, true] },
      { name: "SMS appointment reminders", values: [true, true, true, true] },
      { name: "Technician en-route tracking", values: [true, false, "partial", true] },
      { name: "Email service reports", values: [true, false, false, "partial"] },
    ],
  },
  {
    category: "Support & Setup",
    items: [
      { name: "Live human support", values: [true, true, true, true] },
      { name: "Free data migration", values: [true, false, false, true] },
      { name: "Full company setup included", values: [true, false, false, "partial"] },
      { name: "Dedicated onboarding specialist", values: [true, false, false, true] },
      { name: "No long-term contracts", values: [true, true, true, false] },
    ],
  },
  {
    category: "Pricing",
    items: [
      { name: "Starts under $50/mo", values: [true, true, true, false] },
      { name: "No hidden fees", values: [true, "partial", "partial", false] },
      { name: "No per-transaction platform fee", values: [true, false, false, false] },
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
    <section id="compare" className="py-24 px-8 bg-[#f0f2f8]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-block px-4 py-1.5 rounded-lg bg-[#dfe2ef] text-[#1a1f3d] text-sm font-medium mb-8">
            Compare
          </div>

          <h2 className="text-5xl md:text-6xl text-[#1a1f3d] tracking-tighter mb-6">
            See how we{" "}
            <span className="text-[#8b90a5]">stack up.</span>
          </h2>

          <p className="text-[#64697e] text-lg max-w-xl leading-relaxed">
            We built Servienza to fill the gaps other platforms leave behind —
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
                    i === 0 ? "text-[#1a1f3d] font-semibold" : "text-[#64697e]"
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
                <p className="text-[#1a1f3d] text-xs font-semibold tracking-wider uppercase">
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
                    <p className="text-[#1a1f3d] text-sm">{item.name}</p>
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

        <p className="text-center text-[#8b90a5] text-xs mt-6">
          Comparison based on publicly available information as of 2025. Features may have changed.
        </p>
      </div>
    </section>
  );
};

export default Comparison;
