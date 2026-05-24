"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import {
  Calendar,
  AlertTriangle,
  MapPin,
  Clock,
  FileText,
  Receipt,
  DollarSign,
  Route,
  Navigation,
  CheckSquare,
  Camera,
  Clipboard,
  ChevronRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Tour slide data                                                    */
/* ------------------------------------------------------------------ */
const slides = [
  {
    id: "dispatch",
    badge: "Smart Dispatch",
    title: "See conflicts before they happen.",
    description:
      "The dispatcher board shows every technician, every job, and flags conflicts in real time. Double-bookings and impossible travel times get caught before they become problems in the field.",
    bullets: [
      "Drag & drop scheduling with conflict detection",
      "Google Maps travel time between jobs",
      "Real-time technician status updates",
    ],
  },
  {
    id: "invoicing",
    badge: "Auto Invoicing",
    title: "From job complete to payment — automatic.",
    description:
      "When a technician marks a job done, the invoice is generated instantly from the service log. Parts, labor, and recurring charges are calculated automatically and sent to the customer.",
    bullets: [
      "Auto-generated from service logs",
      "One-click Stripe payments for customers",
      "Automated follow-ups for overdue invoices",
    ],
  },
  {
    id: "routes",
    badge: "Route Builder",
    title: "Optimize every mile, every day.",
    description:
      "AI builds the most efficient route for each technician based on job locations, traffic, and time windows. Less driving means more jobs per day and lower fuel costs.",
    bullets: [
      "AI-optimized route sequencing",
      "Traffic-aware travel time estimates",
      "Drag to reorder stops manually",
    ],
  },
  {
    id: "logs",
    badge: "Service Logs",
    title: "Every job, fully documented.",
    description:
      "Technicians complete custom checklists on-site, capture before/after photos, log parts used, and add notes. The service log auto-generates the invoice — no paperwork, no follow-up calls.",
    bullets: [
      "Custom checklists per service type",
      "Before/after photo capture",
      "Auto-invoice from completed log",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Animated mockup components                                         */
/* ------------------------------------------------------------------ */

const DispatchMockup = ({ active }: { active: boolean }) => {
  const jobs = [
    { tech: "Mike T.", time: "8:00 AM", job: "Pool cleaning — Garcia", status: "done" },
    { tech: "Mike T.", time: "10:30 AM", job: "Filter replace — Chen", status: "active" },
    { tech: "Mike T.", time: "1:00 PM", job: "Chemical balance — Rivera", status: "upcoming" },
    { tech: "Sarah K.", time: "8:30 AM", job: "HVAC inspect — Torres", status: "done" },
    { tech: "Sarah K.", time: "11:00 AM", job: "AC repair — Johnson", status: "conflict" },
    { tech: "Sarah K.", time: "11:15 AM", job: "Duct clean — Williams", status: "conflict" },
  ];

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-[#4f6bff]" />
          <span className="text-xs text-white/70 font-medium">Today — 3 technicians, 12 jobs</span>
        </div>
        <div className="flex gap-1.5">
          <span className="px-2 py-0.5 rounded text-[10px] bg-[#4f6bff]/20 text-[#4f6bff] font-medium">Day</span>
          <span className="px-2 py-0.5 rounded text-[10px] text-white/30">Week</span>
        </div>
      </div>

      {jobs.map((job, i) => (
        <div
          key={i}
          className={cn(
            "flex items-center gap-3 p-2.5 rounded-lg transition-all duration-500",
            active ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4",
            job.status === "conflict"
              ? "bg-red-500/10 border border-red-500/20"
              : "bg-white/5"
          )}
          style={{ transitionDelay: active ? `${i * 100}ms` : "0ms" }}
        >
          <span className="text-[10px] text-white/40 w-14 shrink-0">{job.time}</span>
          <span className="text-xs text-white/50 w-16 shrink-0">{job.tech}</span>
          <span className="text-xs text-white/80 flex-1">{job.job}</span>
          {job.status === "conflict" && (
            <AlertTriangle className="w-3.5 h-3.5 text-red-400 shrink-0" />
          )}
          {job.status === "done" && (
            <span className="text-[10px] text-emerald-400">Done</span>
          )}
          {job.status === "active" && (
            <span className="text-[10px] text-[#4f6bff]">In progress</span>
          )}
        </div>
      ))}

      {/* Conflict alert */}
      <div
        className={cn(
          "mt-3 flex items-center gap-2 p-2.5 rounded-lg bg-red-500/10 border border-red-500/20 transition-all duration-500",
          active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
        style={{ transitionDelay: active ? "700ms" : "0ms" }}
      >
        <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
        <span className="text-xs text-red-300">
          Conflict: Sarah K. has overlapping jobs at 11:00 — 15 min travel time required
        </span>
      </div>

      {/* Map travel time */}
      <div
        className={cn(
          "mt-2 flex items-center gap-2 p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 transition-all duration-500",
          active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
        style={{ transitionDelay: active ? "900ms" : "0ms" }}
      >
        <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
        <span className="text-xs text-emerald-300">
          Google Maps: 22 min drive between Garcia → Chen
        </span>
        <Clock className="w-3 h-3 text-emerald-400 ml-auto" />
      </div>
    </div>
  );
};

const InvoicingMockup = ({ active }: { active: boolean }) => {
  const steps = [
    { icon: FileText, label: "Service log completed", detail: "Pool cleaning — Garcia residence", color: "text-[#4f6bff]" },
    { icon: Receipt, label: "Invoice #1042 generated", detail: "Labor $85 + Parts $24.50 = $109.50", color: "text-amber-400" },
    { icon: DollarSign, label: "Sent to customer", detail: "Email + SMS sent to maria@garcia.com", color: "text-emerald-400" },
  ];

  return (
    <div className="space-y-3">
      <div className="text-xs text-white/40 uppercase tracking-wider mb-4">
        Auto-invoice pipeline
      </div>

      {steps.map((step, i) => {
        const Icon = step.icon;
        return (
          <div key={i} className="flex items-start gap-3">
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500",
                  active ? "bg-white/10 scale-100" : "bg-white/5 scale-75"
                )}
                style={{ transitionDelay: active ? `${i * 300}ms` : "0ms" }}
              >
                <Icon className={cn("w-4 h-4", step.color)} />
              </div>
              {i < steps.length - 1 && (
                <div
                  className={cn(
                    "w-px h-8 transition-all duration-500",
                    active ? "bg-white/20" : "bg-transparent"
                  )}
                  style={{ transitionDelay: active ? `${i * 300 + 200}ms` : "0ms" }}
                />
              )}
            </div>
            <div
              className={cn(
                "pt-1 transition-all duration-500",
                active ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
              )}
              style={{ transitionDelay: active ? `${i * 300}ms` : "0ms" }}
            >
              <p className="text-sm text-white/90 font-medium">{step.label}</p>
              <p className="text-xs text-white/40 mt-0.5">{step.detail}</p>
            </div>
          </div>
        );
      })}

      {/* Payment received */}
      <div
        className={cn(
          "mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 transition-all duration-500",
          active ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}
        style={{ transitionDelay: active ? "1200ms" : "0ms" }}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-emerald-300 font-medium">Payment received!</p>
            <p className="text-xs text-emerald-300/60 mt-0.5">Visa •••• 4242 — via Stripe</p>
          </div>
          <span className="text-lg font-bold text-emerald-300">$109.50</span>
        </div>
      </div>
    </div>
  );
};

const RoutesMockup = ({ active }: { active: boolean }) => {
  const stops = [
    { time: "8:00 AM", addr: "1420 Oak Lane", job: "Pool cleaning", drive: null },
    { time: "9:15 AM", addr: "892 Maple Dr", job: "Filter replace", drive: "12 min" },
    { time: "10:45 AM", addr: "3301 Pine Blvd", job: "Chemical balance", drive: "18 min" },
    { time: "12:00 PM", addr: "750 Cedar Ave", job: "Equipment repair", drive: "8 min" },
    { time: "1:30 PM", addr: "2105 Birch St", job: "Pool inspection", drive: "14 min" },
  ];

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Route className="w-4 h-4 text-[#4f6bff]" />
          <span className="text-xs text-white/70 font-medium">Mike T. — Today&apos;s Route</span>
        </div>
        <div
          className={cn(
            "flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 transition-all duration-500",
            active ? "opacity-100" : "opacity-0"
          )}
          style={{ transitionDelay: active ? "800ms" : "0ms" }}
        >
          <Navigation className="w-3 h-3 text-emerald-400" />
          <span className="text-[10px] text-emerald-300 font-medium">Optimized — saves 23 min</span>
        </div>
      </div>

      {stops.map((stop, i) => (
        <div key={i}>
          {stop.drive && (
            <div
              className={cn(
                "flex items-center gap-2 pl-6 py-1 transition-all duration-500",
                active ? "opacity-100" : "opacity-0"
              )}
              style={{ transitionDelay: active ? `${i * 150 + 100}ms` : "0ms" }}
            >
              <div className="w-px h-4 bg-white/10" />
              <span className="text-[10px] text-white/30">{stop.drive} drive</span>
            </div>
          )}
          <div
            className={cn(
              "flex items-center gap-3 p-2.5 rounded-lg bg-white/5 transition-all duration-500",
              active ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            )}
            style={{ transitionDelay: active ? `${i * 150}ms` : "0ms" }}
          >
            <div className="w-6 h-6 rounded-full bg-[#4f6bff]/20 flex items-center justify-center shrink-0">
              <span className="text-[10px] text-[#4f6bff] font-bold">{i + 1}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-white/80 font-medium">{stop.job}</p>
              <p className="text-[10px] text-white/40">{stop.addr}</p>
            </div>
            <span className="text-[10px] text-white/40 shrink-0">{stop.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const ServiceLogMockup = ({ active }: { active: boolean }) => {
  const checklist = [
    { label: "Check water chemistry levels", checked: true },
    { label: "Clean skimmer basket", checked: true },
    { label: "Vacuum pool floor", checked: true },
    { label: "Backwash filter system", checked: false },
    { label: "Inspect pump & motor", checked: false },
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Clipboard className="w-4 h-4 text-[#4f6bff]" />
          <span className="text-xs text-white/70 font-medium">Service Log — Garcia Residence</span>
        </div>
        <span className="text-[10px] text-white/30">Pool Cleaning Checklist</span>
      </div>

      {/* Checklist */}
      {checklist.map((item, i) => (
        <div
          key={i}
          className={cn(
            "flex items-center gap-3 p-2 rounded-lg transition-all duration-500",
            active ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4",
            item.checked ? "bg-emerald-500/10" : "bg-white/5"
          )}
          style={{ transitionDelay: active ? `${i * 120}ms` : "0ms" }}
        >
          <CheckSquare
            className={cn(
              "w-4 h-4 shrink-0",
              item.checked ? "text-emerald-400" : "text-white/20"
            )}
          />
          <span
            className={cn(
              "text-xs",
              item.checked ? "text-white/60 line-through" : "text-white/80"
            )}
          >
            {item.label}
          </span>
        </div>
      ))}

      {/* Photos section */}
      <div
        className={cn(
          "mt-4 transition-all duration-500",
          active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
        style={{ transitionDelay: active ? "700ms" : "0ms" }}
      >
        <div className="flex items-center gap-2 mb-2">
          <Camera className="w-3.5 h-3.5 text-white/40" />
          <span className="text-[10px] text-white/40">Before / After Photos</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="aspect-video rounded-lg bg-white/10 flex items-center justify-center">
            <span className="text-[10px] text-white/30">Before</span>
          </div>
          <div className="aspect-video rounded-lg bg-emerald-500/10 flex items-center justify-center">
            <span className="text-[10px] text-emerald-300/50">After</span>
          </div>
        </div>
      </div>

      {/* Parts logged */}
      <div
        className={cn(
          "p-2.5 rounded-lg bg-white/5 transition-all duration-500",
          active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
        style={{ transitionDelay: active ? "900ms" : "0ms" }}
      >
        <p className="text-[10px] text-white/40 mb-1.5">Products used</p>
        <div className="flex flex-wrap gap-1.5">
          <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-white/60">
            Chlorine tabs ×3
          </span>
          <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-white/60">
            pH Balancer 1L
          </span>
          <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-white/60">
            Skimmer basket
          </span>
        </div>
      </div>
    </div>
  );
};

const mockups: Record<string, React.FC<{ active: boolean }>> = {
  dispatch: DispatchMockup,
  invoicing: InvoicingMockup,
  routes: RoutesMockup,
  logs: ServiceLogMockup,
};

/* ------------------------------------------------------------------ */
/*  Main ProductTour component                                         */
/* ------------------------------------------------------------------ */
const ProductTour = () => {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const goTo = (idx: number) => {
    setCurrent(idx);
    setAnimKey((k) => k + 1);
  };

  const slide = slides[current];
  const Mockup = mockups[slide.id];

  return (
    <section ref={sectionRef} id="product-tour" className="py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-block px-4 py-1.5 rounded-lg bg-[#dfe2ef] text-[#1a1f3d] text-sm font-medium mb-8">
            See it in action
          </div>

          <h2 className="text-5xl md:text-6xl text-[#1a1f3d] tracking-tighter mb-6">
            Partner with the platform{" "}
            <span className="text-[#8b90a5]">that delivers.</span>
          </h2>

          <p className="text-[#64697e] text-lg max-w-2xl leading-relaxed">
            From dispatch to payment, every step is connected. Here&apos;s how
            Servienza runs your operation.
          </p>
        </div>

        {/* Tour content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* LEFT — Animated mockup */}
          <div className="bg-[#1a1f3d] rounded-2xl p-6 min-h-[480px]">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 mb-5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-white/30">
                app.servienza.com/{slide.id}
              </span>
            </div>

            <div key={animKey}>
              <Mockup active={visible} />
            </div>
          </div>

          {/* RIGHT — Text + navigation */}
          <div className="flex flex-col justify-between min-h-[480px] py-4">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#4f6bff]/10 text-[#4f6bff] text-sm font-medium mb-4">
                {slide.badge}
              </span>

              <h3 className="text-3xl md:text-4xl text-[#1a1f3d] tracking-tight mb-4 leading-tight">
                {slide.title}
              </h3>

              <p className="text-[#64697e] text-base leading-relaxed mb-8">
                {slide.description}
              </p>

              <div className="space-y-3">
                {slide.bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-[#4f6bff] mt-0.5 shrink-0" />
                    <span className="text-[#1a1f3d] text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex items-center gap-3 mt-8">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => goTo(i)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all cursor-pointer",
                    i === current
                      ? "bg-[#1a1f3d] text-white border-[#1a1f3d]"
                      : "bg-[#f5f6fa] text-[#64697e] border-[#e8eaf3] hover:bg-[#e8eaf3]"
                  )}
                >
                  {s.badge}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTour;
