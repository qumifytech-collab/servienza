"use client";

import React from 'react';
import { Instrument_Serif } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
});

const WhoWeAre = () => {
  const stats = [
    {
      value: "10+ hrs",
      label: "Saved every week on admin work",
    },
    {
      value: "2x faster",
      label: "Job scheduling and dispatching",
    },
    {
      value: "100%",
      label: "Visibility from job to payment",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#FAF6F0] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="relative mb-16">
          {/* Badge */}
          <div className="inline-block px-4 py-1.5 rounded-lg bg-[#E8E2D8] text-[#1c160c] text-sm font-medium mb-8">
            Who we are
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative">
            <h2 className={cn(
              "text-5xl md:text-6xl text-[#1c160c] relative z-10 pr-8 tracking-tighter",
            )}>
              Built for service businesses.
            </h2>

            <p className="max-w-md text-[#7A726A] text-lg leading-relaxed relative z-10 pl-0 md:pl-8">
              We built this platform to bring your customers, jobs, team, and payments together.
              Everything stays connected so you can run your day-to-day work from one place.
            </p>
          </div>
        </div>

        {/* Main Div (Stats Card Container) */}
        <div className="relative overflow-hidden border border-white/10 rounded-3xl p-10 flex flex-col items-center text-center justify-center min-h-[500px]">
          {/* Background Image */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/hero_image.avif')" }}
          />

          {/* Grid of Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full relative z-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center justify-center p-4 bg-white/20 rounded-2xl"
              >
                <span className={cn(
                  "text-6xl md:text-7xl text-white mb-4",
                  instrumentSerif.className
                )}>
                  {stat.value}
                </span>
                <span className="text-white/90 text-lg font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Careers Banner */}
        <div className="mt-8 bg-[#F4F0EA] rounded-2xl p-8 md:py-4 md:px-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <h3 className="text-xl font-medium tracking-tighter">
                Ready to run your business in one place?
              </h3>
              <span className="inline-block px-3 py-1 bg-[#E8E2D8] text-black text-sm font-semibold rounded-lg w-fit">
        Free trial available
      </span>
            </div>
            <p className="text-[#7A726A] max-w-2xl text-sm">
              Start managing your customers, jobs, team, and payments from a single platform built for field service work.
            </p>
          </div>
          <Button size={'sm'} className="bg-[#1c160c] text-white hover:bg-[#2c261c] rounded-xl px-3 h-10 text-sm font-medium shrink-0 cursor-pointer">
            Get started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
