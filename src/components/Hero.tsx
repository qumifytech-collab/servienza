import {ArrowUpRight, Star} from "lucide-react";
import {Button} from "@/components/ui/button";
import EarlyAdopters from "@/components/EarlyAdopters";
import HeroCarousel from "@/components/HeroCarousel";

export default function HeroSection() {
  return (
    <main
      className="w-full flex flex-col items-center justify-start px-6 text-center pt-36 pb-20 relative overflow-hidden bg-[#f0f2f8]">
      <div className="max-w-6xl w-full flex flex-col items-center justify-center relative z-10">
        {/* Review Badge */}
        <div className="mb-5 flex flex-col items-center gap-2">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={18} className="text-[#4f6bff] fill-[#4f6bff]"/>
            ))}
          </div>
          <span className="text-[17px] font-medium text-[#1a1f3d]">
              Helped over 100+ businesses
            </span>
        </div>

        <h1 className="max-w-4xl text-5xl md:text-6xl tracking-tighter text-[#1a1f3d] mb-4 leading-[1.1]">
          The all-in-one platform for service businesses.
        </h1>

        <p className="text-lg md:text-lg mb-8 max-w-xl mx-auto text-[#64697e]">
          Schedule, dispatch, track, invoice, and get paid — from one app your whole team will actually use. Built for HVAC, plumbing, pest control, pool service, and more.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Button
            size="lg"
            className="group relative overflow-hidden rounded-xl px-5 h-11 text-sm bg-[#4f6bff] text-white gap-2 flex items-center cursor-pointer hover:bg-[#3b4cca]"
          >
            <span className="relative z-10">Get started</span>

            <span className="relative z-10 w-6 h-6 overflow-hidden flex items-center justify-center">
                <span
                  className="absolute transition-transform duration-300 group-hover:translate-x-6 group-hover:-translate-y-6">
                  <ArrowUpRight className="size-5" strokeWidth={2}/>
                </span>
                <span
                  className="absolute -translate-x-6 translate-y-6 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0">
                  <ArrowUpRight className="size-5" strokeWidth={2}/>
                </span>
              </span>
          </Button>
          <Button
            size="lg"
            className="rounded-xl px-5 h-11 text-sm bg-[#e8eaf3] border-[#dfe2ef] text-[#1a1f3d] cursor-pointer hover:bg-[#dfe2ef]"
          >
            Book a free call
          </Button>
        </div>
      </div>

      {/* Hero Carousel — auto-rotating industry images */}
      <div className="w-full max-w-6xl mx-auto relative z-10 px-4 md:px-0 mb-10">
        <HeroCarousel />
      </div>
      <EarlyAdopters/>
    </main>
  );
}
