"use client";

import React from "react";
import { Shield, Lock, Server, Clock, CreditCard, HeadphonesIcon } from "lucide-react";

const badges = [
  {
    icon: Lock,
    title: "256-bit Encryption",
    desc: "All data encrypted in transit and at rest with AES-256.",
  },
  {
    icon: Server,
    title: "99.9% Uptime",
    desc: "Hosted on enterprise-grade cloud infrastructure with automatic failover.",
  },
  {
    icon: Shield,
    title: "SOC 2 Compliant",
    desc: "Audited security controls that meet enterprise standards.",
  },
  {
    icon: CreditCard,
    title: "Stripe-Powered Payments",
    desc: "PCI-compliant payment processing — we never touch card data.",
  },
  {
    icon: Clock,
    title: "Daily Backups",
    desc: "Automatic daily backups with point-in-time recovery.",
  },
  {
    icon: HeadphonesIcon,
    title: "Real Human Support",
    desc: "Talk to real people — no chatbots, no ticket queues.",
  },
];

const TrustBadges = () => {
  return (
    <section className="py-20 px-8 bg-[#f5f6fa]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 flex flex-col items-center">
          <div className="inline-block px-4 py-1.5 rounded-lg bg-[#dfe2ef] text-[#1a1f3d] text-sm font-medium mb-8">
            Trust & Security
          </div>

          <h2 className="text-4xl md:text-5xl text-[#1a1f3d] tracking-tighter mb-5">
            Your data is safe with us.
          </h2>

          <p className="text-[#64697e] text-lg max-w-xl leading-relaxed">
            We take security seriously so you can focus on running your business.
          </p>
        </div>

        {/* Badge grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.title}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#e8eaf3]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#dfe2ef] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#1a1f3d]" />
                </div>
                <div>
                  <h3 className="text-[#1a1f3d] font-medium text-base mb-1">
                    {badge.title}
                  </h3>
                  <p className="text-[#64697e] text-sm leading-relaxed">
                    {badge.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
