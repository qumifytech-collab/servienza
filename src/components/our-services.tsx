"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { MoveRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Manage jobs",
    description:
      "Create, schedule, and track every job in one place so nothing slips through the cracks.",
    image: "/image1.avif",
  },
  {
    id: "02",
    title: "Schedule & dispatch",
    description:
      "Assign jobs, plan routes, and keep your team moving with clear schedules and real-time updates.",
    image: "/image2.avif",
  },
  {
    id: "03",
    title: "Track your team",
    description:
      "Know where your team is and what they’re working on with live tracking and job updates.",
    image: "/image3.avif",
  },
  {
    id: "04",
    title: "Invoice & get paid",
    description:
      "Send invoices, track payments, and keep your cash flow moving without extra work.",
    image: "/image4.avif",
  },
];

const OurServices = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    if (selectedStep === null) {
      setActiveStep(index);
    }
  };

  const handleMouseLeave = () => {
    if (selectedStep === null) {
      setActiveStep(0);
    }
  };

  const handleClick = (index: number) => {
    if (selectedStep === index) {
      // unselect if clicked again
      setSelectedStep(null);
      setActiveStep(0);
    } else {
      setSelectedStep(index);
      setActiveStep(index);
    }
  };

  return (
    <section className="py-24 px-8 bg-[#FAF6F0]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 flex flex-col items-center">
          <div className="inline-block px-4 py-1.5 rounded-lg bg-[#E8E2D8] text-[#1c160c] text-sm font-medium mb-8">
            Services
          </div>

          <h2 className="text-5xl md:text-6xl text-[#1c160c] mb-6 tracking-tighter">
            Your business, fully in{" "}
            <span className="text-[#91877D]">sync</span>
          </h2>

          <p className="max-w-2xl text-[#7A726A] text-lg leading-relaxed">
            From scheduling jobs to tracking work and getting paid we bring
            everything together so you can focus on running your business.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT */}
          <div className="flex flex-col gap-4">
            {services.map((service, index) => (
              <button
                key={service.id}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(index)}
                className={cn(
                  "group flex items-baseline gap-4 p-8 rounded-[2rem] transition-all duration-500 ease-out text-left cursor-pointer",
                  activeStep === index
                    ? "bg-[#F4F0EA] opacity-100"
                    : "opacity-40 hover:opacity-60"
                )}
              >
                <span className="text-3xl md:text-4xl text-[#1c160c] tracking-tighter">
                  {service.title}
                </span>

                <span className="text-sm font-medium text-[#1c160c] mt-2">
                  {service.id}
                </span>
              </button>
            ))}
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-8 transition-all duration-500 ease-out">
            <div className="relative aspect-[4/3] w-[90%] rounded-[2.5rem] overflow-hidden">
              <Image
                key={services[activeStep].image} // 👈 smooth image swap
                src={services[activeStep].image}
                alt={services[activeStep].title}
                fill
                className="object-cover transition-all duration-700 scale-105"
              />
            </div>

            <div className="px-2">
              <h3 className="text-2xl font-semibold tracking-tighter text-[#1c160c] mb-4">
                {services[activeStep].title}
              </h3>

              <p className="text-[#7A726A] text-lg mb-8 max-w-lg">
                {services[activeStep].description}
              </p>

              <button className="flex items-center gap-2 text-[#1c160c] font-semibold hover:gap-4 transition-all group cursor-pointer">
                <MoveRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                <span>See how it works</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;