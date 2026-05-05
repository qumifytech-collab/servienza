"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/carousel_hvac.jpg",
    alt: "HVAC technician inspecting outdoor unit",
    label: "HVAC",
  },
  {
    src: "/carousel_plumbing.jpg",
    alt: "Plumber installing pipe fittings",
    label: "Plumbing",
  },
  {
    src: "/carousel_landscaping.jpg",
    alt: "Landscaper mowing lawn",
    label: "Landscaping",
  },
  {
    src: "/carousel_grooming.jpg",
    alt: "Professional pet grooming",
    label: "Pet Grooming",
  },
  {
    src: "/carousel_cleaning.jpg",
    alt: "Professional cleaning service",
    label: "Cleaning",
  },
  {
    src: "/carousel_electrical.jpg",
    alt: "Electrician working with cables",
    label: "Electrical",
  },
  {
    src: "/carousel_handyman.jpg",
    alt: "Home inspector in safety vest",
    label: "Property & Handyman",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNext = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 500); // matches CSS transition duration
  }, []);

  useEffect(() => {
    const timer = setInterval(goToNext, 4000);
    return () => clearInterval(timer);
  }, [goToNext]);

  return (
    <div className="relative w-full rounded-[1.5rem] overflow-hidden bg-[#1a1f3d]">
      {/* Aspect ratio container */}
      <div className="relative w-full" style={{ paddingBottom: "40%" }}>
        {/* Slide track */}
        <div
          className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div key={slide.label} className="relative w-full h-full shrink-0">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={i === 0}
                sizes="(max-width: 768px) 100vw, 1200px"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f3d]/70 via-transparent to-transparent" />
            </div>
          ))}
        </div>

        {/* Industry label */}
        <div className="absolute bottom-6 left-8 z-20 flex items-center gap-3">
          <span className="px-4 py-1.5 rounded-lg bg-white/15 backdrop-blur-md text-white text-sm font-medium border border-white/10">
            {slides[current].label}
          </span>
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-6 right-8 z-20 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                i === current
                  ? "w-6 h-2 bg-white"
                  : "w-2 h-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
