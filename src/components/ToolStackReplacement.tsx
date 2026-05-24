"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import {
  CalendarDays,
  Navigation,
  FileSpreadsheet,
  MessageSquare,
  Receipt,
  ClipboardCheck,
  Camera,
  BarChart3,
  LayoutDashboard,
  MapPin,
  FileText,
  Bell,
  Users,
  Image as ImageIcon,
  PieChart,
  ListChecks,
} from "lucide-react";

const oldTools = [
  { name: "Scheduling app", cost: "$25/mo", icon: CalendarDays },
  { name: "GPS tracker", cost: "$30/mo", icon: Navigation },
  { name: "Spreadsheets", cost: "$12/mo", icon: FileSpreadsheet },
  { name: "Messaging tool", cost: "$15/mo", icon: MessageSquare },
  { name: "Invoicing software", cost: "$35/mo", icon: Receipt },
  { name: "Checklists app", cost: "$10/mo", icon: ClipboardCheck },
  { name: "Photo storage", cost: "$10/mo", icon: Camera },
  { name: "Reporting tool", cost: "$40/mo", icon: BarChart3 },
];

const newFeatures = [
  { name: "Smart Scheduling", icon: LayoutDashboard },
  { name: "GPS Tracking", icon: MapPin },
  { name: "Service Logs", icon: FileText },
  { name: "Customer Alerts", icon: Bell },
  { name: "Auto Invoicing", icon: Receipt },
  { name: "Team Management", icon: Users },
  { name: "Photo Documentation", icon: ImageIcon },
  { name: "Reports & Analytics", icon: PieChart },
  { name: "Notifications", icon: Bell },
  { name: "Checklists", icon: ListChecks },
];

const ToolStackReplacement = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<"before" | "transition" | "after">(
    "before"
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase("transition");
          setTimeout(() => setPhase("after"), 800);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* BEFORE — Old tools */}
          <div
            className={cn(
              "relative rounded-2xl border-2 border-dashed border-[#dfe2ef] p-8 transition-all duration-700",
              phase === "after" && "opacity-60"
            )}
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-semibold tracking-widest text-red-400 uppercase">
                Before — Your current stack
              </span>
              <span className="text-sm text-[#8b90a5]">~$177/mo</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {oldTools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <div
                    key={tool.name}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#fafbfd] border border-[#e8eaf3]"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#f0f2f8] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-[#8b90a5]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#1a1f3d] font-medium leading-tight">
                        {tool.name}
                      </p>
                      <p className="text-xs text-[#8b90a5]">{tool.cost}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 space-y-1.5">
              <div className="flex items-center gap-2 text-sm text-[#8b90a5]">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                No integration between tools
              </div>
              <div className="flex items-center gap-2 text-sm text-[#8b90a5]">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                Multiple logins & dashboards
              </div>
              <div className="flex items-center gap-2 text-sm text-[#8b90a5]">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                Data scattered everywhere
              </div>
            </div>
          </div>

          {/* AFTER — Servienza */}
          <div
            className={cn(
              "relative rounded-2xl bg-[#1a1f3d] p-8 transition-all duration-700",
              phase === "before" && "opacity-40 translate-y-4",
              phase === "transition" && "opacity-80 translate-y-2",
              phase === "after" && "opacity-100 translate-y-0 shadow-2xl"
            )}
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-semibold tracking-widest text-[#4f6bff] uppercase">
                After — Just Servienza
              </span>
              <span className="text-sm bg-[#4f6bff] text-white px-3 py-1 rounded-full">
                From $49/mo
              </span>
            </div>

            {/* Mock dashboard */}
            <div className="bg-[#252a4a] rounded-xl p-5 mb-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-3 text-xs text-white/40">
                  app.servienza.com
                </span>
              </div>

              <div className="grid grid-cols-5 gap-3">
                {newFeatures.map((feat) => {
                  const Icon = feat.icon;
                  return (
                    <div
                      key={feat.name}
                      className="flex flex-col items-center gap-1.5"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#1a1f3d] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white/70" />
                      </div>
                      <span className="text-[10px] text-white/50 text-center leading-tight">
                        {feat.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Everything in one platform
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                One login, one dashboard
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Save ~$128/mo instantly
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#4f6bff] text-white font-medium hover:bg-[#3b4cca] transition-colors"
          >
            See all features
          </a>
        </div>
      </div>
    </section>
  );
};

export default ToolStackReplacement;
