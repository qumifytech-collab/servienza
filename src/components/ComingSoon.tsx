"use client";

import {
  Bot,
  FileBarChart,
  Globe,
  Wallet,
  QrCode,
  Star,
  Repeat,
  ShoppingCart,
  Gauge,
  MessageSquareMore,
} from "lucide-react";
import { cn } from "@/lib/utils";

const comingSoonFeatures = [
  {
    icon: Bot,
    title: "AI Job Estimator",
    desc: "Upload photos of a job site and get instant cost estimates based on your pricing history and service catalog.",
    eta: "Week 1–2",
  },
  {
    icon: MessageSquareMore,
    title: "Two-way SMS Chat",
    desc: "Customers reply to appointment texts and your team sees it in the app — no more switching to personal phones.",
    eta: "Week 1–2",
  },
  {
    icon: FileBarChart,
    title: "Customer Portal",
    desc: "A branded self-service portal where customers view upcoming services, past invoices, service photos, and pay outstanding balances.",
    eta: "Week 2–3",
  },
  {
    icon: Wallet,
    title: "Batch Invoicing",
    desc: "Generate and send invoices for all completed jobs at once — perfect for end-of-week or end-of-month billing runs.",
    eta: "Week 1",
  },
  {
    icon: QrCode,
    title: "QR Code Check-in",
    desc: "Technicians scan a QR code at the job site to auto-log arrival, start the timer, and pull up the service checklist.",
    eta: "Week 2",
  },
  {
    icon: Star,
    title: "Customer Review Requests",
    desc: "Automatically ask for Google/Yelp reviews after a completed job — boosting your online reputation on autopilot.",
    eta: "Week 2–3",
  },
  {
    icon: Repeat,
    title: "Service Agreements & Contracts",
    desc: "Create and manage annual service contracts with auto-renewal, payment plans, and bundled pricing.",
    eta: "Week 3–4",
  },
  {
    icon: ShoppingCart,
    title: "Inventory Management",
    desc: "Track stock levels across warehouses and trucks. Get alerts when supplies run low and auto-reorder from vendors.",
    eta: "Week 3–4",
  },
  {
    icon: Globe,
    title: "Multi-language Support",
    desc: "Full app localization for Spanish-speaking teams — making it easy for every crew member to use the app in their language.",
    eta: "Week 2–3",
  },
  {
    icon: Gauge,
    title: "Technician Scorecards",
    desc: "Performance dashboards for each technician — on-time rate, customer ratings, jobs completed, and revenue generated.",
    eta: "Week 3–4",
  },
];

const ComingSoon = () => {
  return (
    <section className="py-24 px-8 bg-[#f0f2f8]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-block px-4 py-1.5 rounded-lg bg-[#1a1f3d] text-white text-sm font-medium mb-8">
            Coming Soon
          </div>

          <h2 className="text-5xl md:text-6xl text-[#1a1f3d] tracking-tighter mb-6">
            What&apos;s next on{" "}
            <span className="text-[#8b90a5]">the roadmap.</span>
          </h2>

          <p className="text-[#64697e] text-lg max-w-2xl leading-relaxed">
            We ship fast. These features are being built right now and will roll
            out over the next 30 days. Early adopters get them first.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {comingSoonFeatures.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="bg-[#f5f6fa] border border-[#dfe2ef] rounded-2xl p-6 flex items-start gap-5 hover:bg-white hover:shadow-sm transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#dfe2ef] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#1a1f3d]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-[#1a1f3d] font-medium text-base">
                      {f.title}
                    </h3>
                    <span className="px-2 py-0.5 rounded-md bg-[#dfe2ef] text-[#1a1f3d] text-[10px] font-semibold tracking-wide uppercase">
                      {f.eta}
                    </span>
                  </div>
                  <p className="text-[#64697e] text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-[#64697e] text-base mb-4">
            Want to influence what we build next?
          </p>
          <button className="bg-[#1a1f3d] text-white hover:bg-[#252a4a] rounded-xl px-6 py-3 text-sm font-medium cursor-pointer transition-colors">
            Join the early adopter program
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
