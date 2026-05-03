"use client";

import {ArrowUpRight} from "lucide-react";
import AppStoreBadges from "@/components/AppStoreBadges";

const webFeatures = [
  "Schedule and dispatch jobs",
  "Track your crew in real time",
  "Manage customers and job history",
  "Send invoices and track payments",
  "View reports and business insights",
];

const mobileFeatures = [
  "See assigned jobs for the day",
  "Get directions to each job site",
  "Update job status on the go",
  "Log notes, photos, and signatures",
  "Mark jobs done to trigger invoicing",
];

const TwoApps = () => {
  return (
    <section className="py-24 px-8 bg-[#F4F0EA]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-block px-4 py-1.5 rounded-lg bg-[#E8E2D8] text-[#1c160c] text-sm font-medium mb-8">
            Two apps, one business
          </div>

          <h2 className="text-5xl md:text-6xl text-[#1c160c] tracking-tighter mb-6">
            Office mode.{" "}
            <span className="text-[#91877D]">Field mode.</span>
          </h2>

          <p className="text-[#7A726A] text-lg leading-relaxed max-w-lg">
            Whether it&apos;s just you or a full crew — the web app runs your office and the mobile app runs your field.
            Use one, or use both.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Web App */}
          <div className="bg-[#1c160c] rounded-[2rem] p-10 flex flex-col gap-8">
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
          <div className="bg-[#EDE8E0] rounded-[2rem] p-10 flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <div>
                <p className="text-[#1c160c] font-medium text-2xl">In the field</p>
                <p className="text-[#7A726A] text-base">iOS & Android</p>
              </div>
            </div>

            <div>
              <p className="text-[#7A726A] text-base font-medium uppercase mb-5">
                Built for the field
              </p>
              <ul className="flex flex-col gap-3">
                {mobileFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="text-[#1c160c]/70 text-sm leading-snug">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-4 border-t border-[#1c160c]/10 flex flex-col gap-4">
              <p className="text-[#7A726A] text-sm leading-relaxed">
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
