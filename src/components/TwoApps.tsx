"use client";

import {ArrowUpRight} from "lucide-react";
import AppStoreBadges from "@/components/AppStoreBadges";

const webFeatures = [
  "Drag & drop dispatcher board",
  "AI-powered route optimization",
  "Full customer management & history",
  "Send invoices and track payments",
  "QuickBooks & Stripe integrations",
  "Technician calendars & availability",
  "Reports, analytics & revenue dashboards",
  "Recurring service management",
];

const mobileFeatures = [
  "View assigned jobs for the day",
  "GPS navigation to each job site",
  "Complete digital checklists on site",
  "Capture before/after photos",
  "Log service details & inventory used",
  "Mark jobs done to auto-create invoices",
  "Track time on each job",
  "Works offline — syncs when back online",
];

const TwoApps = () => {
  return (
    <section className="py-24 px-8 bg-[#f0f2f8]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-block px-4 py-1.5 rounded-lg bg-[#dfe2ef] text-[#1a1f3d] text-sm font-medium mb-8">
            Two apps, one business
          </div>

          <h2 className="text-5xl md:text-6xl text-[#1a1f3d] tracking-tighter mb-6">
            Office mode.{" "}
            <span className="text-[#8b90a5]">Field mode.</span>
          </h2>

          <p className="text-[#64697e] text-lg leading-relaxed max-w-lg">
            Whether it&apos;s just you or a full crew — the web app runs your office and the mobile app runs your field.
            Use one, or use both.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Web App */}
          <div className="bg-[#1a1f3d] rounded-[2rem] p-10 flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <div>
                <p className="text-white font-medium text-2xl">At your desk</p>
                <p className="text-white/40 text-base">Desktop & tablet</p>
              </div>
            </div>

            <div>
              <p className="text-white/50 text-base font-medium uppercase mb-5">
                Built for the office
              </p>
              <ul className="flex flex-col gap-3">
                {webFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="text-white/70 text-sm leading-snug">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-4 border-t border-white/10 flex flex-col gap-4">
              <p className="text-white/30 text-xs leading-relaxed">
                Perfect for the owner, office manager, or anyone running the business from a desk.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-white text-sm font-medium hover:text-white/70 transition-colors duration-200"
              >
                Open the web app
                <ArrowUpRight className="w-4 h-4"/>
              </a>
            </div>
          </div>

          {/* Mobile App */}
          <div className="bg-[#e8eaf3] rounded-[2rem] p-10 flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <div>
                <p className="text-[#1a1f3d] font-medium text-2xl">In the field</p>
                <p className="text-[#64697e] text-base">iOS & Android</p>
              </div>
            </div>

            <div>
              <p className="text-[#64697e] text-base font-medium uppercase mb-5">
                Built for the field
              </p>
              <ul className="flex flex-col gap-3">
                {mobileFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="text-[#1a1f3d]/70 text-sm leading-snug">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-4 border-t border-[#1a1f3d]/10 flex flex-col gap-4">
              <p className="text-[#64697e] text-sm leading-relaxed">
                Perfect for the crew on the road — or the solo operator who switches between office and field all day.
              </p>
              <AppStoreBadges/>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TwoApps;
