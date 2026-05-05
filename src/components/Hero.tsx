import {Star} from "lucide-react";
import EarlyAdopters from "@/components/EarlyAdopters";
import HeroCarousel from "@/components/HeroCarousel";

export default function HeroSection() {
  return (
    <main className="w-full bg-[#FFFDFB] overflow-hidden">

      {/* Hero text band */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 pt-44 pb-14">
        <div className="flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-20">

          {/* Left — stars badge + large headline */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-5">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} className="text-[#d9c5b2] fill-[#d9c5b2]"/>
                ))}
              </div>
              <span className="text-[13px] font-medium text-[#6c6a64]">
                Helped over 100+ businesses
              </span>
            </div>

            <h1
              className="max-w-4xl text-5xl md:text-6xl tracking-tighter text-[#1a1a1a] mb-4 leading-[1.1]"
            >
              The all-in-one platform for service businesses.
            </h1>
          </div>

          {/* Right — description + CTAs, bottom-aligned to headline */}
          <div className="lg:w-[340px] lg:flex-shrink-0 flex flex-col gap-6">
            <p className="text-lg md:text-lg max-w-2xl mx-auto  text-[#000] mb-4">
              Schedule, dispatch, track, invoice, and get paid from one app
              your whole team will actually use. Built for HVAC, plumbing, pest
              control, pool service, and more.
            </p>

            {/*<div className="flex flex-row flex-wrap gap-3">*/}
            {/*  <Button*/}
            {/*    size="lg"*/}
            {/*    className="group relative overflow-hidden rounded-xl px-5 h-11 text-sm bg-[#141413] text-white gap-2 flex items-center cursor-pointer font-sans"*/}
            {/*  >*/}
            {/*    <span className="relative z-10">Get started</span>*/}
            {/*    <span className="relative z-10 w-6 h-6 overflow-hidden flex items-center justify-center">*/}
            {/*      <span className="absolute transition-transform duration-300 group-hover:translate-x-6 group-hover:-translate-y-6">*/}
            {/*        <ArrowUpRight className="size-5" strokeWidth={2} />*/}
            {/*      </span>*/}
            {/*      <span className="absolute -translate-x-6 translate-y-6 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0">*/}
            {/*        <ArrowUpRight className="size-5" strokeWidth={2} />*/}
            {/*      </span>*/}
            {/*    </span>*/}
            {/*  </Button>*/}
            {/*  <Button*/}
            {/*    size="lg"*/}
            {/*    className="rounded-xl px-5 h-11 text-sm bg-white border border-[#e6dfd8] text-[#141413] cursor-pointer hover:bg-[#f5f0e8] transition-colors font-sans"*/}
            {/*  >*/}
            {/*    Book a free call*/}
            {/*  </Button>*/}
            {/*</div>*/}
          </div>

        </div>
      </div>

      {/* Hero Carousel */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <HeroCarousel/>
      </div>

      <EarlyAdopters/>
    </main>
  );
}
