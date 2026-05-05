"use client";

import {
  Headphones,
  DatabaseZap,
  Rocket,
  MessageCircle,
  Users,
  Heart,
} from "lucide-react";
import { cn } from "@/lib/utils";

const supportFeatures = [
  {
    icon: Headphones,
    title: "Live Human Support",
    desc: "Real people, not chatbots. Reach our support team by phone, chat, or email — and get answers from someone who understands field service.",
    highlight: true,
  },
  {
    icon: DatabaseZap,
    title: "Data Migration",
    desc: "Switching from another platform? We'll migrate your customers, jobs, service history, and invoices — so you don't lose a thing.",
    highlight: false,
  },
  {
    icon: Rocket,
    title: "Full Company Setup",
    desc: "We'll set up your entire company from scratch — services, pricing, team members, routes, checklists, and integrations. You just show up and start working.",
    highlight: false,
  },
  {
    icon: MessageCircle,
    title: "Ongoing Training",
    desc: "As your team grows or you discover new features, we're here to walk you through it. No extra charge, no training packages to buy.",
    highlight: false,
  },
  {
    icon: Users,
    title: "Dedicated Onboarding",
    desc: "Every new customer gets a dedicated onboarding specialist who learns your business and makes sure you're set up for success.",
    highlight: false,
  },
  {
    icon: Heart,
    title: "We Actually Care",
    desc: "We're building Servienza for businesses like yours. When you succeed, we succeed. That's why we go further than any other platform to make sure you're running smoothly.",
    highlight: false,
  },
];

const SupportOnboarding = () => {
  return (
    <section id="support" className="py-24 px-8 bg-[#f5f6fa]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-1.5 rounded-lg bg-[#dfe2ef] text-[#1a1f3d] text-sm font-medium mb-8">
            White-glove support
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <h2 className="text-5xl md:text-6xl text-[#1a1f3d] tracking-tighter leading-tight max-w-xl">
              We don&apos;t just sell software.{" "}
              <span className="text-[#8b90a5]">We set you up for success.</span>
            </h2>

            <p className="text-[#64697e] text-lg max-w-md leading-relaxed">
              Live human support, full data migration, and a dedicated team that
              sets up your company from start to finish — at no extra cost.
            </p>
          </div>
        </div>

        {/* Support cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {supportFeatures.map((sf) => {
            const Icon = sf.icon;
            return (
              <div
                key={sf.title}
                className={cn(
                  "rounded-2xl p-8 flex flex-col",
                  sf.highlight
                    ? "bg-[#1a1f3d] text-white md:col-span-2 lg:col-span-1 lg:row-span-2"
                    : "bg-[#f0f2f8] border border-[#dfe2ef]"
                )}
              >
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center mb-6",
                    sf.highlight ? "bg-white/10" : "bg-[#dfe2ef]"
                  )}
                >
                  <Icon
                    className={cn(
                      "w-6 h-6",
                      sf.highlight ? "text-white" : "text-[#1a1f3d]"
                    )}
                  />
                </div>

                <h3
                  className={cn(
                    "font-medium text-xl mb-3",
                    sf.highlight ? "text-white" : "text-[#1a1f3d]"
                  )}
                >
                  {sf.title}
                </h3>

                <p
                  className={cn(
                    "text-base leading-relaxed",
                    sf.highlight ? "text-white/60" : "text-[#64697e]"
                  )}
                >
                  {sf.desc}
                </p>

                {sf.highlight && (
                  <div className="mt-auto pt-8">
                    <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="w-8 h-8 rounded-full bg-white/20 border-2 border-[#1a1f3d] flex items-center justify-center"
                          >
                            <span className="text-white text-xs font-medium">
                              {["M", "S", "J"][i - 1]}
                            </span>
                          </div>
                        ))}
                      </div>
                      <p className="text-white/50 text-sm">
                        Your support team — always a call away
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom banner */}
        <div className="mt-8 bg-[#f0f2f8] rounded-2xl p-8 md:py-5 md:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-[#dfe2ef]">
          <div>
            <h3 className="text-xl font-medium text-[#1a1f3d] tracking-tighter mb-1">
              Switching from another platform?
            </h3>
            <p className="text-[#64697e] text-sm">
              We handle the full migration — customers, jobs, history, invoices — so you can switch without skipping a beat.
            </p>
          </div>
          <button className="bg-[#1a1f3d] text-white hover:bg-[#252a4a] rounded-xl px-6 py-3 text-sm font-medium shrink-0 cursor-pointer transition-colors">
            Talk to our migration team
          </button>
        </div>
      </div>
    </section>
  );
};

export default SupportOnboarding;
