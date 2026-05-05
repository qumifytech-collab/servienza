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
    <section id="dispatch" className="py-24 px-8 bg-[#FFFDFB]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-block px-4 py-1.5 rounded-lg bg-[#fff] text-[#000] text-sm font-medium mb-8">
            Smart Dispatch
          </div>

          <h2 className="text-5xl md:text-6xl text-[#000] tracking-tighter mb-6">
            Dispatch smarter, not harder.
          </h2>

          <p className="text-[#000] text-lg max-w-2xl leading-relaxed">
            An AI-powered dispatcher board that routes your crew, prevents
            conflicts, and keeps your whole operation running on one screen.
          </p>
        </div>

        {/* Dispatcher board mockup */}
        <div className="bg-[#181715] rounded-[2rem] p-8 md:p-10 mb-8">

          {/* Board header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-[#faf9f5] font-medium text-lg">Dispatcher Board</p>
              <p className="text-[#a09d96] text-sm mt-0.5">Today: 6 technicians · 24 jobs</p>
            </div>
            <div className="flex gap-1">
              <span className="px-3 py-1.5 rounded-[6px] bg-[#fff] text-[#000] text-[12px] font-medium">
                Day
              </span>
              <span className="px-3 py-1.5 rounded-[6px] text-[#a09d96] text-[12px] font-medium">
                Week
              </span>
            </div>
          </div>

          {/* Time axis */}
          <div className="flex items-center gap-4 mb-2">
            <div className="w-20 shrink-0" />
            <div className="flex-1 flex justify-between px-1">
              {["8 AM", "10 AM", "12 PM", "2 PM", "4 PM"].map((t) => (
                <span key={t} className="text-sm text-[#6c6a64]">{t}</span>
              ))}
            </div>
          </div>

          {/* Technician rows */}
          <div className="flex flex-col gap-2">
            {[
              {
                name: "Mike T.",
                jobs: [
                  { time: "8:00", label: "Pool cleaning - Garcia", w: "w-[28%]" },
                  { time: "10:30", label: "Filter replace - Chen", w: "w-[22%]" },
                  { time: "1:00", label: "Chemical balance - Rivera", w: "w-[20%]" },
                  { time: "3:30", label: "Equipment repair - Park", w: "w-[20%]" },
                ],
              },
              {
                name: "Sarah K.",
                jobs: [
                  { time: "8:30", label: "HVAC inspection - Torres", w: "w-[32%]" },
                  { time: "11:00", label: "AC repair - Johnson", w: "w-[26%]" },
                  { time: "2:30", label: "Duct cleaning - Williams", w: "w-[28%]" },
                ],
              },
              {
                name: "James R.",
                jobs: [
                  { time: "9:00", label: "Pest treatment - Adams", w: "w-[24%]" },
                  { time: "11:30", label: "Termite inspection - Lee", w: "w-[22%]" },
                  { time: "1:30", label: "Rodent control - Martinez", w: "w-[26%]" },
                  { time: "4:00", label: "Follow-up - Davis", w: "w-[16%]" },
                ],
              },
            ].map((tech) => (
              <div key={tech.name} className="flex items-center gap-4">
                <div className="w-20 shrink-0">
                  <p className="text-[#a09d96] text-[13px] font-medium">{tech.name}</p>
                </div>
                <div className="flex-1 flex gap-1.5">
                  {tech.jobs.map((job, i) => (
                    <div
                      key={i}
                      className={cn("rounded-[6px] px-3 py-2 text-[12px] truncate bg-[#252320]", job.w)}
                    >
                      <span className="text-[#a09d96]">{job.time}</span>{" "}
                      <span className="text-[#C1BDB7]">{job.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Route optimization bar */}
          <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center gap-3">
            <div>
              <p className="text-[#faf9f5] text-lg font-medium">
                Routes optimized - saving 47 miles today
              </p>
              <p className="text-[#a09d96] text-sm mt-0.5">
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
                className="bg-[#fff] border border-[#dfe2ef] rounded-2xl p-6 hover:bg-white hover:shadow-sm transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EFEEE7] flex items-center justify-center mb-4">
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
