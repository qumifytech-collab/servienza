"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Check, ArrowUpRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: 49,
    description: "For solo operators and small crews just getting started.",
    highlight: false,
    cta: "Start free trial",
    features: [
      "Up to 3 technicians",
      "Scheduling & dispatch",
      "Service logs with photos",
      "Basic checklists",
      "Customer management",
      "Mobile app access",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: 129,
    description: "For growing teams that need routing, invoicing, and more.",
    highlight: true,
    badge: "Most Popular",
    cta: "Start free trial",
    features: [
      "Up to 10 technicians",
      "Everything in Starter, plus:",
      "GPS tracking & live map",
      "Auto invoicing",
      "Recurring services",
      "Custom checklists",
      "Reports & analytics",
      "Priority email support",
    ],
  },
  {
    name: "Pro",
    price: 299,
    description: "For established businesses ready to scale operations.",
    highlight: false,
    cta: "Start free trial",
    features: [
      "Up to 30 technicians",
      "Everything in Growth, plus:",
      "Advanced route optimization",
      "Customer portal",
      "Ad-hoc request management",
      "Photo documentation",
      "Product library & inventory",
      "Phone & chat support",
    ],
  },
  {
    name: "Enterprise",
    price: null,
    description: "For large operations with custom needs and dedicated support.",
    highlight: false,
    cta: "Contact sales",
    features: [
      "Unlimited technicians",
      "Everything in Pro, plus:",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantees",
      "On-site onboarding",
      "API access",
      "Custom reporting",
    ],
  },
];

const Pricing = () => {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-block px-4 py-1.5 rounded-lg bg-[#dfe2ef] text-[#1a1f3d] text-sm font-medium mb-8">
            Pricing
          </div>

          <h2 className="text-5xl md:text-6xl text-[#1a1f3d] tracking-tighter mb-6">
            Simple pricing.{" "}
            <span className="text-[#8b90a5]">No surprises.</span>
          </h2>

          <p className="text-[#64697e] text-lg max-w-2xl leading-relaxed mb-8">
            Every plan includes a 14-day free trial. No credit card required.
            Cancel anytime.
          </p>

          {/* Billing toggle */}
          <div className="flex items-center gap-3 bg-[#f0f2f8] rounded-full p-1">
            <button
              onClick={() => setAnnual(false)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer",
                !annual
                  ? "bg-white text-[#1a1f3d] shadow-sm"
                  : "text-[#64697e] hover:text-[#1a1f3d]"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer flex items-center gap-2",
                annual
                  ? "bg-white text-[#1a1f3d] shadow-sm"
                  : "text-[#64697e] hover:text-[#1a1f3d]"
              )}
            >
              Annual
              <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-medium">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-2xl p-6 transition-all",
                plan.highlight
                  ? "bg-[#1a1f3d] text-white ring-2 ring-[#4f6bff] lg:scale-[1.03]"
                  : "bg-[#fafbfd] border border-[#e8eaf3] text-[#1a1f3d]"
              )}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#4f6bff] text-white text-xs font-medium whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={cn(
                    "text-lg font-semibold mb-1",
                    plan.highlight ? "text-white" : "text-[#1a1f3d]"
                  )}
                >
                  {plan.name}
                </h3>
                <p
                  className={cn(
                    "text-sm leading-relaxed",
                    plan.highlight ? "text-white/60" : "text-[#64697e]"
                  )}
                >
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                {plan.price !== null ? (
                  <div className="flex items-end gap-1">
                    <span
                      className={cn(
                        "text-4xl font-bold tracking-tight",
                        plan.highlight ? "text-white" : "text-[#1a1f3d]"
                      )}
                    >
                      ${annual ? Math.round(plan.price * 0.8) : plan.price}
                    </span>
                    <span
                      className={cn(
                        "text-sm mb-1",
                        plan.highlight ? "text-white/50" : "text-[#8b90a5]"
                      )}
                    >
                      /mo
                    </span>
                  </div>
                ) : (
                  <span
                    className={cn(
                      "text-4xl font-bold tracking-tight",
                      plan.highlight ? "text-white" : "text-[#1a1f3d]"
                    )}
                  >
                    Custom
                  </span>
                )}
                {annual && plan.price !== null && (
                  <p
                    className={cn(
                      "text-xs mt-1",
                      plan.highlight ? "text-white/40" : "text-[#8b90a5]"
                    )}
                  >
                    billed annually (${Math.round(plan.price * 0.8 * 12)}/yr)
                  </p>
                )}
              </div>

              <button
                className={cn(
                  "w-full py-3 rounded-xl text-sm font-medium transition-colors cursor-pointer flex items-center justify-center gap-2 group mb-6",
                  plan.highlight
                    ? "bg-[#4f6bff] text-white hover:bg-[#3b4cca]"
                    : "bg-[#1a1f3d] text-white hover:bg-[#252a4a]"
                )}
              >
                {plan.cta}
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <div className="flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <Check
                        className={cn(
                          "w-4 h-4 mt-0.5 shrink-0",
                          plan.highlight ? "text-[#4f6bff]" : "text-emerald-500"
                        )}
                      />
                      <span
                        className={cn(
                          "text-sm",
                          plan.highlight ? "text-white/70" : "text-[#64697e]"
                        )}
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-[#8b90a5] mt-10">
          All plans include free onboarding, mobile app, and unlimited
          customers. Need something custom?{" "}
          <a href="#contact" className="text-[#4f6bff] hover:underline">
            Talk to us
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Pricing;
