"use client";

import { useState } from "react";
import { ArrowUpRight, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import EarlyAdopters from "@/components/EarlyAdopters";
import HeroCarousel from "@/components/HeroCarousel";
import { submitCTA } from "@/lib/api";

export default function HeroSection() {
  const [heroEmail, setHeroEmail] = useState("");
  const [heroSubmitted, setHeroSubmitted] = useState(false);
  const [heroSubmitting, setHeroSubmitting] = useState(false);

  const handleHeroSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroEmail) return;
    setHeroSubmitting(true);
    try {
      await submitCTA({ email: heroEmail, source: "Hero Trial Signup" });
      setHeroSubmitted(true);
    } finally {
      setHeroSubmitting(false);
    }
  };

  return (
    <main className="w-full flex flex-col items-center justify-start px-6 text-center pt-36 pb-20 relative overflow-hidden bg-[#f0f2f8]">
      <div className="max-w-6xl w-full flex flex-col items-center justify-center relative z-10">
        {/* Stats badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-[#dfe2ef] backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-[#1a1f3d] font-medium">
            Trusted by 100+ service businesses
          </span>
        </div>

        <h1 className="max-w-4xl text-5xl md:text-6xl tracking-tighter text-[#1a1f3d] mb-4 leading-[1.1]">
          The all-in-one platform for service businesses.
        </h1>

        <p className="text-lg md:text-lg mb-8 max-w-xl mx-auto text-[#64697e]">
          Schedule, dispatch, track, invoice, and get paid — from one app your
          whole team will actually use. Built for HVAC, plumbing, pest control,
          pool service, and more.
        </p>

        {/* Inline email signup */}
        {heroSubmitted ? (
          <div className="flex items-center gap-2 mb-20 px-6 py-4 rounded-2xl bg-emerald-50 border border-emerald-200">
            <CheckCircle className="w-5 h-5 text-emerald-500" />
            <span className="text-emerald-700 font-medium">
              We&apos;ll be in touch at {heroEmail}!
            </span>
          </div>
        ) : (
          <form
            onSubmit={handleHeroSubmit}
            className="flex flex-col sm:flex-row items-center gap-3 mb-6 w-full max-w-lg"
          >
            <input
              type="email"
              placeholder="Enter your work email"
              value={heroEmail}
              onChange={(e) => setHeroEmail(e.target.value)}
              required
              className="flex-1 w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white border border-[#dfe2ef] text-[#1a1f3d] placeholder:text-[#9a9db3] text-sm outline-none focus:ring-2 focus:ring-[#4f6bff]/30 focus:border-[#4f6bff] transition"
            />
            <Button
              type="submit"
              disabled={heroSubmitting}
              size="lg"
              className="group relative overflow-hidden rounded-xl px-6 h-12 text-sm bg-[#4f6bff] text-white gap-2 flex items-center cursor-pointer hover:bg-[#3b4cca] whitespace-nowrap disabled:opacity-60"
            >
              <span className="relative z-10">
                {heroSubmitting ? "Sending..." : "Start free trial"}
              </span>
              <span className="relative z-10 w-5 h-5 overflow-hidden flex items-center justify-center">
                <span className="absolute transition-transform duration-300 group-hover:translate-x-6 group-hover:-translate-y-6">
                  <ArrowUpRight className="size-4" strokeWidth={2} />
                </span>
                <span className="absolute -translate-x-6 translate-y-6 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0">
                  <ArrowUpRight className="size-4" strokeWidth={2} />
                </span>
              </span>
            </Button>
          </form>
        )}

        <div className="flex items-center gap-4 mb-16 text-sm text-[#8b90a5]">
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            14-day free trial
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            No credit card required
          </span>
          <span className="flex items-center gap-1.5 hidden sm:flex">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            Cancel anytime
          </span>
        </div>
      </div>

      {/* Hero Carousel */}
      <div className="w-full max-w-6xl mx-auto relative z-10 px-4 md:px-0 mb-10">
        <HeroCarousel />
      </div>
      <EarlyAdopters />
    </main>
  );
}
