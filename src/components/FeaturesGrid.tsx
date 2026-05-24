"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  ClipboardList,
  MapPin,
  CheckSquare,
  Users,
  Package,
  UserCog,
  BarChart3,
  Camera,
  RefreshCw,
  CalendarClock,
  FileText,
  Bell,
} from "lucide-react";

const features = [
  {
    icon: ClipboardList,
    title: "Service Logs",
    short: "Detailed service history with photos, notes, and inventory used on every job.",
    detail:
      "Every job gets a complete digital log — technicians capture before/after photos, add notes, record chemicals or parts used, and the system auto-generates an invoice from the log. No more deciphering handwritten notes or chasing techs for updates.",
    image: "/features/feat-service-logs.png",
  },
  {
    icon: MapPin,
    title: "GPS Tracking",
    short: "Real-time crew location and route history on every job.",
    detail:
      "See where every technician is right now on a live map. Track route history, verify arrival and departure times, and give customers accurate ETAs. All automatic — your crew doesn't need to check in manually.",
    image: "/features/feat-gps-tracking.png",
  },
  {
    icon: CheckSquare,
    title: "Smart Checklists",
    short: "Out-of-the-box templates plus fully custom checklists for any service.",
    detail:
      "Start with pre-built checklists for common services like pool cleaning, HVAC maintenance, or pest treatment — or build your own from scratch. Technicians check off items as they go, ensuring nothing gets missed and giving customers proof of work.",
    image: "/features/feat-smart-checklists.png",
  },
  {
    icon: Users,
    title: "Customer Management",
    short: "Full customer profiles with property details, service history, and communication logs.",
    detail:
      "Every customer has a complete profile — property details, service history, photos, notes, preferred scheduling, payment history, and communication log. Your team always has full context before arriving on site.",
    image: "/features/feat-customer-management.png",
  },
  {
    icon: Package,
    title: "Product Library",
    short: "Manage your inventory of parts, chemicals, and materials across all jobs.",
    detail:
      "Maintain a catalog of every product you use — chemicals, parts, filters, materials. Technicians select items from the library when logging service, and costs auto-populate on the invoice. Track usage across jobs and know when to reorder.",
    image: "/features/feat-product-library.png",
  },
  {
    icon: UserCog,
    title: "Technician Management",
    short: "Calendars, skills, time-off, and availability — all in one place.",
    detail:
      "Manage each technician's calendar, skills, certifications, territories, and availability. Handle time-off requests, set working hours, and see at a glance who's available. Schedule conflicts are flagged automatically before they become problems.",
    image: "/features/feat-technician-management.png",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    short: "Revenue, job completion, technician performance — the data you need to grow.",
    detail:
      "Revenue breakdowns, job completion rates, technician utilization, customer retention, and more. See what's working, spot inefficiencies, and make smarter decisions backed by real data — not gut feelings.",
    image: "/features/feat-reports-analytics.png",
  },
  {
    icon: Camera,
    title: "Photo Documentation",
    short: "Before/after photos on every job — proof of work for you and your customers.",
    detail:
      "Technicians snap photos directly in the app — before, during, and after service. Photos are timestamped, geotagged, and attached to the job record. Great for customer transparency, dispute resolution, and quality control.",
    image: "/features/feat-photo-documentation.png",
  },
  {
    icon: RefreshCw,
    title: "Recurring Services",
    short: "Each service scheduled independently with its own cadence and pricing.",
    detail:
      "Set up weekly pool cleaning, monthly pest treatment, and quarterly HVAC maintenance — all for the same customer, each on its own schedule and at its own price. The system auto-generates visits so you never miss a recurring job.",
    image: "/features/feat-recurring-services.png",
  },
  {
    icon: CalendarClock,
    title: "Ad-hoc Requests",
    short: "Handle one-off service calls and manage them through their full lifecycle.",
    detail:
      "When a customer calls with an emergency or a one-time request, create the job in seconds. Track it from request to dispatch to completion to payment — with the same tools you use for recurring work. Nothing falls through the cracks.",
    image: "/features/feat-adhoc-requests.png",
  },
  {
    icon: FileText,
    title: "Auto Invoicing",
    short: "Invoices generated automatically from completed service logs.",
    detail:
      "When a technician marks a job done and logs what they used, the invoice is created automatically — with labor, materials, and any recurring charges already calculated. Send it to the customer in one tap, or let it go out on its own.",
    image: "/features/feat-auto-invoicing.png",
  },
  {
    icon: Bell,
    title: "Customer Alerts",
    short: "Automated notifications keep customers informed at every step.",
    detail:
      "Customers get notified about upcoming services, technician en-route alerts with live tracking, job completion summaries, and payment reminders — via push notification, text, or email. They stay informed without you lifting a finger.",
    image: "/features/feat-customer-alerts.png",
  },
];

const FeaturesGrid = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section id="features" className="py-24 px-8 bg-[#f5f6fa]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-block px-4 py-1.5 rounded-lg bg-[#dfe2ef] text-[#1a1f3d] text-sm font-medium mb-8">
            Features
          </div>

          <h2 className="text-5xl md:text-6xl text-[#1a1f3d] tracking-tighter mb-6">
            Everything your crew needs,{" "}
            <span className="text-[#8b90a5]">nothing they don&apos;t.</span>
          </h2>

          <p className="text-[#64697e] text-lg max-w-2xl leading-relaxed">
            From service logs and GPS tracking to invoicing and customer alerts
            — every tool your business needs, built into one simple platform.
          </p>
        </div>

        {/* Feature pills + detail */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left: scrollable feature list */}
          <div className="lg:col-span-2 flex flex-col gap-2 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <button
                  key={f.title}
                  onClick={() => setActiveFeature(i)}
                  className={cn(
                    "flex items-start gap-4 p-4 rounded-2xl text-left transition-all duration-300 cursor-pointer",
                    activeFeature === i
                      ? "bg-[#1a1f3d] text-white"
                      : "bg-transparent hover:bg-[#e8eaf3] text-[#1a1f3d]"
                  )}
                >
                  <div
                    className={cn(
                      "w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5",
                      activeFeature === i ? "bg-white/15" : "bg-[#dfe2ef]"
                    )}
                  >
                    <Icon
                      className={cn(
                        "w-4.5 h-4.5",
                        activeFeature === i ? "text-white" : "text-[#1a1f3d]"
                      )}
                    />
                  </div>
                  <div>
                    <p className="font-medium text-base">{f.title}</p>
                    <p
                      className={cn(
                        "text-sm leading-snug mt-1",
                        activeFeature === i ? "text-white/60" : "text-[#64697e]"
                      )}
                    >
                      {f.short}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: detail card */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="relative aspect-[16/10] w-full rounded-[2rem] overflow-hidden">
              <Image
                key={features[activeFeature].image}
                src={features[activeFeature].image}
                alt={features[activeFeature].title}
                fill
                className="object-cover transition-all duration-500"
              />
            </div>

            <div className="px-2">
              <h3 className="text-2xl font-semibold tracking-tighter text-[#1a1f3d] mb-3">
                {features[activeFeature].title}
              </h3>
              <p className="text-[#64697e] text-lg leading-relaxed max-w-xl">
                {features[activeFeature].detail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
