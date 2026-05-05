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
      value: "15+ hrs",
      label: "Saved every week on admin work",
    },
    {
      value: "2x faster",
      label: "From booked job to invoice sent",
    },
    {
      value: "Day one",
      label: "Your team is up and running",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#f5f6fa] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="relative mb-16">
          {/* Badge */}
          <div className="inline-block px-4 py-1.5 rounded-lg bg-[#dfe2ef] text-[#1a1f3d] text-sm font-medium mb-8">
            Why it works
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative">
            <h2 className={cn(
              "text-5xl md:text-6xl text-[#1a1f3d] relative z-10 pr-8 tracking-tighter",
            )}>
              Built for the field.<br /> Not for IT.
            </h2>

            <p className="max-w-md text-[#64697e] text-lg leading-relaxed relative z-10 pl-0 md:pl-8">
              Most field service software is built for enterprise teams with dedicated admins. Servienza is built for the owner who&apos;s also on the tools. Use the web app to run your office, the mobile app to run your field — or both, if it&apos;s just you.
            </p>
          </div>
        </div>

        {/* Main Div (Stats Card Container) */}
        <div className="relative overflow-hidden border border-white/10 rounded-3xl p-10 flex flex-col items-center text-center justify-center min-h-[500px]">
          {/* Background Image */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/hero_image.jpg')" }}
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
        <div className="mt-8 bg-[#f0f2f8] rounded-2xl p-8 md:py-4 md:px-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <h3 className="text-xl font-medium tracking-tighter text-[#1a1f3d]">
                No IT team required. No month-long setup.
              </h3>
              <span className="inline-block px-3 py-1 bg-[#dfe2ef] text-[#1a1f3d] text-sm font-semibold rounded-lg w-fit">
                Free trial available
              </span>
            </div>
            <p className="text-[#64697e] max-w-2xl text-sm">
              Most teams are fully set up on day one. No training sessions, no consultant fees, no six-week onboarding — just your business running better.
            </p>
          </div>
          <Button size={'sm'} className="bg-[#4f6bff] text-white hover:bg-[#3b4cca] rounded-xl px-3 h-10 text-sm font-medium shrink-0 cursor-pointer">
            Get started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
