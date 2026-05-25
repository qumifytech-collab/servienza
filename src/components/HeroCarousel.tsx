"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/industry_hvac.webp",
    alt: "HVAC technician with service van",
    label: "HVAC",
  },
  {
    src: "/industry_plumbing.webp",
    alt: "Plumber with work truck",
    label: "Plumbing",
  },
  {
    src: "/industry_pool.webp",
    alt: "Pool service professional with van",
    label: "Pool Service",
  },
  {
    src: "/industry_pest.webp",
    alt: "Pest control technician with service vehicle",
    label: "Pest Control",
  },
  {
    src: "/industry_grooming.webp",
    alt: "Pet groomer with mobile grooming van",
    label: "Pet Grooming",
  },
  {
    src: "/industry_landscaping.webp",
    alt: "Landscaper with work truck",
    label: "Landscaping",
  },
  {
    src: "/industry_cleaning.webp",
    alt: "Cleaning professional with service van",
    label: "Cleaning",
  },
  {
    src: "/industry_electrical.webp",
    alt: "Electrician with work van",
    label: "Electrical",
  },
  {
    src: "/industry_beauty.webp",
    alt: "Beauty professional with mobile service vehicle",
    label: "Home Beauty",
  },
  {
    src: "/industry_painting.webp",
    alt: "Painter with work van",
    label: "Painting",
  },
  {
    src: "/industry_handyman.webp",
    alt: "Handyman with service truck",
    label: "Handyman",
  },
  {
    src: "/industry_property.webp",
    alt: "Property manager with vehicle",
    label: "Property Mgmt",
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
            <div key={slide.label} className="relative min-w-full h-full shrink-0">
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
