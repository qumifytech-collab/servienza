"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import {
  Calendar,
  Navigation,
  FileSpreadsheet,
  MessageSquare,
  CreditCard,
  ClipboardList,
  MapPin,
  Camera,
  BarChart3,
  Bell,
  Users,
  FileText,
  ArrowRight,
} from "lucide-react";

const oldTools = [
  { icon: Calendar, name: "Scheduling app", cost: "$25/mo" },
  { icon: Navigation, name: "GPS tracker", cost: "$30/mo" },
  { icon: FileSpreadsheet, name: "Spreadsheets", cost: "$12/mo" },
  { icon: MessageSquare, name: "Messaging tool", cost: "$15/mo" },
  { icon: CreditCard, name: "Invoicing software", cost: "$35/mo" },
  { icon: ClipboardList, name: "Checklists app", cost: "$10/mo" },
  { icon: Camera, name: "Photo storage", cost: "$10/mo" },
  { icon: BarChart3, name: "Reporting tool", cost: "$40/mo" },
];

const servienzaFeatures = [
  { icon: Calendar, name: "Smart Scheduling" },
  { icon: MapPin, name: "GPS Tracking" },
  { icon: ClipboardList, name: "Service Logs" },
  { icon: MessageSquare, name: "Customer Alerts" },
  { icon: CreditCard, name: "Auto Invoicing" },
  { icon: Users, name: "Team Management" },
  { icon: Camera, name: "Photo Documentation" },
  { icon: BarChart3, name: "Reports & Analytics" },
  { icon: Bell, name: "Notifications" },
  { icon: FileText, name: "Checklists" },
];

const ToolStackReplacement = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [phase, setPhase] = useState<"before" | "transition" | "after">("before");
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;

          // Start transition after a brief pause
          setTimeout(() => setPhase("transition"), 1200);
          setTimeout(() => setPhase("after"), 2000);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const totalOldCost = oldTools.reduce((sum, t) => {
    const num = parseInt(t.cost.replace(/[^0-9]/g, ""));
    return sum + num;
  }, 0);

  return (
    <section ref={sectionRef} className="py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-block px-4 py-1.5 rounded-lg bg-[#dfe2ef] text-[#1a1f3d] text-sm font-medium mb-8">
            Simplify Everything
          </div>

          <h2 className="text-5xl md:text-6xl text-[#1a1f3d] tracking-tighter mb-6">
            Replace your tool stack.{" "}
            <span className="text-[#8b90a5]">Keep your sanity.</span>
          </h2>

          <p className="text-[#64697e] text-lg max-w-2xl leading-relaxed">
            Stop paying for 8 different apps that don&apos;t talk to each other.
            Servienza replaces them all — for a fraction of the cost.
          </p>
        </div>

        {/* Before / After comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* BEFORE — scattered tools */}
          <div
            className={cn(
              "relative rounded-3xl border-2 border-dashed border-[#e0e2ec] bg-[#fafbfd] p-8 transition-all duration-700",
              phase !== "before" && "opacity-40 scale-[0.97]"
            )}
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-semibold text-red-400 uppercase tracking-wider">
                Before — Your current stack
              </span>
              <span className="text-sm font-medium text-[#64697e] bg-red-50 px-3 py-1 rounded-full">
                ~${totalOldCost}/mo
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {oldTools.map((tool, i) => {
                const Icon = tool.icon;
                return (
                  <div
                    key={tool.name}
                    className={cn(
                      "flex items-center gap-3 p-3 rounded-xl bg-white border border-[#e8eaf3] transition-all",
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4",
                      phase === "transition" &&
                        "opacity-0 -translate-x-4 scale-95"
                    )}
                    style={{
                      transitionDelay: isVisible
                        ? `${i * 80}ms`
                        : "0ms",
                      transitionDuration: "500ms",
                    }}
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#f0f2f8] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-[#64697e]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-[#1a1f3d] truncate">
                        {tool.name}
                      </p>
                      <p className="text-xs text-[#8b90a5]">{tool.cost}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Red lines showing disconnection */}
            <div className="mt-6 flex items-center gap-2 text-sm text-[#8b90a5]">
              <span className="inline-block w-2 h-2 rounded-full bg-red-300" />
              No integration between tools
            </div>
            <div className="flex items-center gap-2 text-sm text-[#8b90a5] mt-1">
              <span className="inline-block w-2 h-2 rounded-full bg-red-300" />
              Multiple logins & dashboards
            </div>
            <div className="flex items-center gap-2 text-sm text-[#8b90a5] mt-1">
              <span className="inline-block w-2 h-2 rounded-full bg-red-300" />
              Data scattered everywhere
            </div>
          </div>

          {/* Arrow divider (mobile) */}
          <div className="lg:hidden flex justify-center -my-4">
            <div className="w-12 h-12 rounded-full bg-[#4f6bff] flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-white rotate-90" />
            </div>
          </div>

          {/* AFTER — Servienza */}
          <div
            className={cn(
              "relative rounded-3xl border-2 bg-[#1a1f3d] p-8 transition-all duration-700",
              phase === "after"
                ? "opacity-100 scale-100 border-[#4f6bff]"
                : phase === "transition"
                ? "opacity-80 scale-[1.02] border-[#4f6bff]"
                : "opacity-60 border-[#2a2f4d]"
            )}
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-semibold text-[#4f6bff] uppercase tracking-wider">
                After — Just Servienza
              </span>
              <span className="text-sm font-medium text-white bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full">
                From $49/mo
              </span>
            </div>

            {/* Servienza dashboard mockup */}
            <div className="rounded-2xl bg-[#0d1221] border border-[#252a4a] p-5 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <div className="w-3 h-3 rounded-full bg-green-400/60" />
                <span className="ml-2 text-xs text-[#64697e]">
                  app.servienza.com
                </span>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {servienzaFeatures.map((feat, i) => {
                  const Icon = feat.icon;
                  return (
                    <div
                      key={feat.name}
                      className={cn(
                        "flex flex-col items-center gap-1.5 p-2 rounded-lg transition-all",
                        phase === "after"
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-3"
                      )}
                      style={{
                        transitionDelay:
                          phase === "after" ? `${i * 60 + 200}ms` : "0ms",
                        transitionDuration: "400ms",
                      }}
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#4f6bff]/15 flex items-center justify-center">
                        <Icon className="w-3.5 h-3.5 text-[#4f6bff]" />
                      </div>
                      <span className="text-[10px] text-[#8b90a5] text-center leading-tight">
                        {feat.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Green checkmarks */}
            <div className="flex items-center gap-2 text-sm text-[#8b90a5]">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-white/70">Everything in one platform</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#8b90a5] mt-1">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-white/70">One login, one dashboard</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#8b90a5] mt-1">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-white/70">
                Save ~${totalOldCost - 49}/mo instantly
              </span>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button className="px-8 py-3.5 rounded-xl bg-[#4f6bff] text-white text-sm font-medium hover:bg-[#3b4cca] transition-colors cursor-pointer">
            See all features
          </button>
        </div>
      </div>
    </section>
  );
};

export default ToolStackReplacement;
