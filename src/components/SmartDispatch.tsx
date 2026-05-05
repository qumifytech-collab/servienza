"use client";

import {
  Route,
  GripVertical,
  AlertTriangle,
  Calendar,
  Clock,
  Brain,
} from "lucide-react";
import { cn } from "@/lib/utils";

const capabilities = [
  {
    icon: Brain,
    title: "AI Route Optimization",
    desc: "Automatically builds the most efficient route for each technician — reducing drive time, saving fuel, and fitting more jobs into every day.",
  },
  {
    icon: GripVertical,
    title: "Drag & Drop Scheduling",
    desc: "Move jobs between technicians or time slots with a simple drag. The board updates in real time so your whole team stays in sync.",
  },
  {
    icon: AlertTriangle,
    title: "Conflict Detection",
    desc: "Overlapping jobs, double-booked techs, or impossible travel times get flagged instantly — before they become problems in the field.",
  },
  {
    icon: Calendar,
    title: "Technician Calendars",
    desc: "Each technician has their own calendar showing assigned jobs, availability windows, and blocked-out time — visible to dispatchers and managers.",
  },
  {
    icon: Clock,
    title: "Time-off & Availability",
    desc: "Technicians request time off directly in the app. Managers approve or adjust, and the schedule auto-adapts to available crew.",
  },
  {
    icon: Route,
    title: "Live Dispatch Board",
    desc: "See every job, every technician, and every status on one real-time board. Know exactly what's happening across your entire operation at a glance.",
  },
];

const SmartDispatch = () => {
  return (
    <section id="dispatch" className="py-24 px-8 bg-[#f0f2f8]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-block px-4 py-1.5 rounded-lg bg-[#dfe2ef] text-[#1a1f3d] text-sm font-medium mb-8">
            Smart Dispatch
          </div>

          <h2 className="text-5xl md:text-6xl text-[#1a1f3d] tracking-tighter mb-6">
            Dispatch smarter,{" "}
            <span className="text-[#8b90a5]">not harder.</span>
          </h2>

          <p className="text-[#64697e] text-lg max-w-2xl leading-relaxed">
            An AI-powered dispatcher board that routes your crew, prevents
            conflicts, and keeps your whole operation running on one screen.
          </p>
        </div>

        {/* Dispatcher board mockup */}
        <div className="bg-[#1a1f3d] rounded-[2rem] p-8 md:p-10 mb-8">
          {/* Board header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-white font-medium text-lg">Dispatcher Board</p>
              <p className="text-white/40 text-sm">Today — 6 technicians, 24 jobs</p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded-lg bg-white/10 text-white/70 text-xs">
                Day view
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/5 text-white/40 text-xs">
                Week view
              </span>
            </div>
          </div>

          {/* Mock board rows */}
          <div className="flex flex-col gap-3">
            {[
              {
                name: "Mike T.",
                jobs: [
                  { time: "8:00", label: "Pool cleaning — Garcia", color: "bg-blue-500/30 text-blue-300", w: "w-[30%]" },
                  { time: "10:30", label: "Filter replace — Chen", color: "bg-emerald-500/30 text-emerald-300", w: "w-[25%]" },
                  { time: "1:00", label: "Chemical balance — Rivera", color: "bg-blue-500/30 text-blue-300", w: "w-[20%]" },
                  { time: "3:30", label: "Equipment repair — Park", color: "bg-amber-500/30 text-amber-300", w: "w-[22%]" },
                ],
              },
              {
                name: "Sarah K.",
                jobs: [
                  { time: "8:30", label: "HVAC inspection — Torres", color: "bg-purple-500/30 text-purple-300", w: "w-[35%]" },
                  { time: "11:00", label: "AC repair — Johnson", color: "bg-purple-500/30 text-purple-300", w: "w-[28%]" },
                  { time: "2:30", label: "Duct cleaning — Williams", color: "bg-amber-500/30 text-amber-300", w: "w-[30%]" },
                ],
              },
              {
                name: "James R.",
                jobs: [
                  { time: "9:00", label: "Pest treatment — Adams", color: "bg-rose-500/30 text-rose-300", w: "w-[25%]" },
                  { time: "11:30", label: "Termite inspection — Lee", color: "bg-rose-500/30 text-rose-300", w: "w-[22%]" },
                  { time: "1:30", label: "Rodent control — Martinez", color: "bg-amber-500/30 text-amber-300", w: "w-[28%]" },
                  { time: "4:00", label: "Follow-up — Davis", color: "bg-emerald-500/30 text-emerald-300", w: "w-[18%]" },
                ],
              },
            ].map((tech) => (
              <div key={tech.name} className="flex items-center gap-4">
                <div className="w-20 shrink-0">
                  <p className="text-white/70 text-sm font-medium">{tech.name}</p>
                </div>
                <div className="flex-1 flex gap-1.5">
                  {tech.jobs.map((job, i) => (
                    <div
                      key={i}
                      className={cn(
                        "rounded-lg px-3 py-2.5 text-xs truncate",
                        job.color,
                        job.w
                      )}
                    >
                      <span className="opacity-60">{job.time}</span>{" "}
                      {job.label}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Route optimization indicator */}
          <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <Route className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <p className="text-white/80 text-sm font-medium">
                Routes optimized — saving 47 miles today
              </p>
              <p className="text-white/40 text-xs">
                AI recalculated at 7:45 AM based on traffic and job locations
              </p>
            </div>
          </div>
        </div>

        {/* Capability cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="bg-[#f5f6fa] border border-[#dfe2ef] rounded-2xl p-6 hover:bg-white hover:shadow-sm transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#dfe2ef] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#1a1f3d]" />
                </div>
                <h3 className="text-[#1a1f3d] font-medium text-base mb-2">
                  {cap.title}
                </h3>
                <p className="text-[#64697e] text-sm leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SmartDispatch;
