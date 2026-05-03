"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const services = [
  {
    id: "01",
    title: "Manage jobs",
    description:
      "Create and manage every job from your web dashboard. Your crew gets it instantly on their phone — no calls, no texts, no missed details.",
    image: "/image1.avif",
  },
  {
    id: "02",
    title: "Schedule & dispatch",
    description:
      "Build your schedule from the web and dispatch with one tap. Your crew sees their jobs, their order, and their route the moment you assign them.",
    image: "/image2.avif",
  },
  {
    id: "03",
    title: "Track your team",
    description:
      "See where every crew member is and where every job stands — live from your dashboard, without anyone having to check in.",
    image: "/image3.avif",
  },
  {
    id: "04",
    title: "Invoice & get paid",
    description:
      "Mark a job done on the app and the invoice goes out automatically. No paperwork, no delays, no chasing payments.",
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
    <section id="services" className="py-24 px-8 bg-[#FAF6F0]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 flex flex-col items-center">
          <div className="inline-block px-4 py-1.5 rounded-lg bg-[#E8E2D8] text-[#1c160c] text-sm font-medium mb-8">
            Services
          </div>

          <h2 className="text-5xl md:text-6xl text-[#1c160c] mb-6 tracking-tighter">
            Everything your crew needs,{" "}
            <span className="text-[#91877D]">in one place.</span>
          </h2>

          <p className="max-w-2xl text-[#7A726A] text-lg leading-relaxed">
            From scheduling jobs to tracking work and getting paid, we bring
            everything together so you can stop managing chaos and start doing the work.
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

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;