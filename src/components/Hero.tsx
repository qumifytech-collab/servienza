import {ArrowUpRight, Star} from "lucide-react";
import {Button} from "@/components/ui/button";
import EarlyAdopters from "@/components/EarlyAdopters";

export default function HeroSection() {
  return (
    <main
      className="w-full flex flex-col items-center justify-start px-6 text-center pt-36 pb-20 relative overflow-hidden bg-[#F4F0EA]">
      <div className="max-w-4xl w-full flex flex-col items-center justify-center relative z-10">
        {/* Review Badge */}
        <div className="mb-5 flex flex-col items-center gap-2">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={18} className="text-[#d9c5b2] fill-[#d9c5b2]"/>
            ))}
          </div>
          <span className="text-[17px] font-medium text-[#1c160c]">
              Helped over 100+ businesses
            </span>
        </div>

        <h1 className="max-w-4xl text-5xl md:text-6xl tracking-tighter text-[#1a1a1a] mb-4 leading-[1.1]">
          From service jobs to payments
        </h1>

        <p className="text-lg md:text-lg mb-8 max-w-2xl mx-auto text-[#7A726A]">
          We bring customer management, scheduling, dispatch, GPS tracking, invoicing, and payments into one powerful
          platform for field service pros.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Button
            size="lg"
            className="group relative overflow-hidden rounded-xl px-5 h-11 text-sm bg-black text-white gap-2 flex items-center cursor-pointer"
          >
            <span className="relative z-10">Start Free Trial</span>

            <span className="relative z-10 w-6 h-6 overflow-hidden flex items-center justify-center">
                <span
                  className="absolute transition-transform duration-300 group-hover:translate-x-6 group-hover:-translate-y-6">
                  <ArrowUpRight className="size-6" strokeWidth={2}/>
                </span>
                <span
                  className="absolute -translate-x-6 translate-y-6 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0">
                  <ArrowUpRight className="size-6" strokeWidth={2}/>
                </span>
              </span>
          </Button>
          <Button
            size="lg"
            className="rounded-xl px-5 h-11 text-sm bg-[#EDE7DE] border-gray-200 text-black cursor-pointer"
          >
            Find Your Plan
          </Button>
        </div>
      </div>

      {/* Hero Video Section */}
      <div className="w-full max-w-5xl mx-auto relative z-10 px-4 md:px-0 mb-10">

        {/* Dots Overlay with padding */}
        <div
          className="absolute inset-[40px] z-20 pointer-events-none [background-image:radial-gradient(white_8px,transparent_6px)] [background-size:50px_50px]"/>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto rounded-[1.5rem] relative z-10"
        >
          <source src="/video/hero_video.mp4" type="video/mp4"/>
        </video>

      </div>
      <EarlyAdopters/>
    </main>
  );
}
