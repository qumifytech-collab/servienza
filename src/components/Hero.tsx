import {ArrowUpRight, Star} from "lucide-react";
import {Button} from "@/components/ui/button";
import EarlyAdopters from "@/components/EarlyAdopters";

export default function HeroSection() {
  return (
    <main
      className="w-full flex flex-col items-center justify-start px-6 text-center pt-36 pb-20 relative overflow-hidden bg-[#F4F0EA]">
      <div className="max-w-6xl w-full flex flex-col items-center justify-center relative z-10">
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
          Stop running your business from a group chat.
        </h1>

        <p className="text-lg md:text-lg mb-8 max-w-xl mx-auto text-[#7A726A]">
          Plan your day from the web. Run your jobs from the app. Built for teams of one or twenty.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Button
            size="lg"
            className="group relative overflow-hidden rounded-xl px-5 h-11 text-sm bg-black text-white gap-2 flex items-center cursor-pointer"
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
            className="rounded-xl px-5 h-11 text-sm bg-[#EDE7DE] border-gray-200 text-[#1c160c] cursor-pointer hover:bg-[#E0DAD0]"
          >
            Book a free call
          </Button>
        </div>
      </div>

      {/* Hero Video Section */}
      <div className="w-full max-w-6xl mx-auto relative z-10 px-4 md:px-0 mb-10">

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
