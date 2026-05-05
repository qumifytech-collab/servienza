"use client";

import { cn } from "@/lib/utils";
import {
  Wrench,
  Snowflake,
  Waves,
  TreePine,
  Shield,
  PawPrint,
  Sparkles,
  Scissors,
  Zap,
  Paintbrush,
  Home,
  Hammer,
} from "lucide-react";

const industries = [
  {
    name: "HVAC",
    desc: "Heating, cooling & air quality",
    icon: Snowflake,
  },
  {
    name: "Plumbing",
    desc: "Leak repairs, installs & maintenance",
    icon: Wrench,
  },
  {
    name: "Pool Service",
    desc: "Cleaning, chemicals & equipment",
    icon: Waves,
  },
  {
    name: "Pest Control",
    desc: "Inspection, treatment & prevention",
    icon: Shield,
  },
  {
    name: "Pet Grooming",
    desc: "Mobile & in-home grooming",
    icon: PawPrint,
  },
  {
    name: "Landscaping",
    desc: "Lawn care, design & maintenance",
    icon: TreePine,
  },
  {
    name: "Cleaning Services",
    desc: "Residential & commercial cleaning",
    icon: Sparkles,
  },
  {
    name: "Electrical",
    desc: "Wiring, panels & lighting",
    icon: Zap,
  },
  {
    name: "Home Beauty",
    desc: "In-home beauty & wellness",
    icon: Scissors,
  },
  {
    name: "Painting",
    desc: "Interior & exterior painting",
    icon: Paintbrush,
  },
  {
    name: "Handyman",
    desc: "General home repairs & fixes",
    icon: Hammer,
  },
  {
    name: "Property Mgmt",
    desc: "Maintenance & tenant services",
    icon: Home,
  },
];

const IndustriesServed = () => {
  return (
    <section className="py-24 px-8 bg-[#FFFDFB]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-block px-4 py-1.5 rounded-lg bg-[#F9F6F1] text-[#000] text-sm font-medium mb-8">
            Built for your trade
          </div>

          <h2 className="text-5xl md:text-6xl text-[#000] tracking-tighter mb-6">
            One platform, every trade.
          </h2>

          <p className="text-[#000] text-lg max-w-xl leading-relaxed">
            Whether you run a crew of 2 or 50, Servienza adapts to how your
            business works not the other way around.
          </p>
        </div>

        {/* Industry grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.name}
                className={cn(
                  "group bg-[#fff] border border-[#dfe2ef] rounded-2xl p-6",
                  "hover:bg-white hover:border-[#cfd2e0] hover:shadow-sm",
                  "transition-all duration-300 cursor-default"
                )}
              >
                <div className="w-10 h-10 rounded-xl bg-[#EFEEE7] flex items-center justify-center mb-4 group-hover:bg-[#000] transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#000] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-[#000] font-medium text-base mb-1">
                  {ind.name}
                </h3>
                <p className="text-[#64697e] text-sm leading-snug">
                  {ind.desc}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mt-8 bg-[#FAF6F0] rounded-2xl p-8 md:py-5 md:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-[#dfe2ef]">
          <div>
            <h3 className="text-xl font-medium text-[#000] tracking-tighter mb-1">
              Don&apos;t see your industry?
            </h3>
            <p className="text-[#000] text-base">
              We handle the full migration customers, jobs, history, invoices  so you can switch without skipping a beat.
            </p>
          </div>
          <button className="bg-[#000] text-white hover:bg-[#252a4a] rounded-xl px-6 py-3 text-sm font-medium shrink-0 cursor-pointer transition-colors">
            Talk to us
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;
