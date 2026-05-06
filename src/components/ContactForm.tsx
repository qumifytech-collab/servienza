"use client";

import {useState} from "react";
import Image from "next/image";
import {ArrowRight, ArrowUpRight, Star} from "lucide-react";
import {cn} from "@/lib/utils";

const serviceOptions = [
  "Job Management",
  "Scheduling & Dispatch",
  "Team Tracking",
  "Invoicing & Payments",
  "All of the above",
];

const challengeOptions = [
  "Too much manual work",
  "Missed jobs",
  "Late payments",
  "Hard to track my team",
];

const OptionPill = ({
                      label,
                      selected,
                      onToggle,
                    }: {
  label: string;
  selected: boolean;
  onToggle: () => void;
}) => (
  <button
    type="button"
    onClick={onToggle}
    className={cn(
      "flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm transition-all cursor-pointer",
      selected
        ? "border-[#1a1f3d] bg-[#E0DACE]"
        : "border-[#cfd2e0] bg-[#fff] text-[#64697e]"
    )}
  >
    <span
      className={cn(
        "w-4 h-4 rounded-full border-2 shrink-0 transition-all",
        selected
          ? "bg-[#000] border-[#000]"
          : "bg-transparent border-[#c0c4d6]"
      )}
    />
    <span className={selected ? "text-[#1a1f3d] font-medium" : ""}>{label}</span>
  </button>
);

const ContactForm = () => {
  const [services, setServices] = useState<string[]>([]);
  const [challenges, setChallenges] = useState<string[]>([]);

  const toggle = (
    val: string,
    list: string[],
    setList: (v: string[]) => void
  ) => {
    setList(list.includes(val) ? list.filter((v) => v !== val) : [...list, val]);
  };

  return (
    <section className="py-24 px-8 bg-[#fff]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">

        {/* LEFT — image card */}
        <div
          className="relative rounded-[2rem] overflow-hidden"
          style={{ minHeight: "560px" }}
        >
          <Image
            src="/features/Reports.jpg"
            alt="Book a call"
            fill
            className="object-cover object-center"
          />

          {/* Bottom black gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-[1]" />

          <div className="relative z-10 flex flex-col justify-between h-full p-10">
            {/* Stars */}
            <div className="flex flex-col items-center gap-1">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-white text-white"
                  />
                ))}
              </div>

              <p className="text-white/80 text-sm">
                Helped over 100+ businesses
              </p>
            </div>

            {/* Heading */}
            <div>
              <h2
                className="text-white text-4xl md:text-5xl leading-tight tracking-tight mb-4 text-center"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Turn chaos into clarity, today.
              </h2>

              <p className="text-white text-sm leading-relaxed text-center">
                Book a free 30-minute call and we&apos;ll show you exactly where
                Servienza saves you time and money.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT — form */}
        <div className="bg-[#F4F0EA] rounded-[2rem] p-6 flex flex-col gap-6">
          {/* Name + Email */}
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name*"
              className="w-full bg-[#fff] rounded-xl px-5 py-4 text-[#1c160c] placeholder:text-[#A8A09A] text-sm outline-none focus:ring-2 focus:ring-[#1c160c]/20 transition"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full bg-[#fff] rounded-xl px-5 py-4 text-[#1c160c] placeholder:text-[#A8A09A] text-sm outline-none focus:ring-2 focus:ring-[#1c160c]/20 transition"
            />
          </div>

          {/* Services */}
          <div>
            <p className="text-[#64697e] text-sm mb-3">What are you interested in?</p>
            <div className="flex flex-wrap gap-2">
              {serviceOptions.map((s) => (
                <OptionPill
                  key={s}
                  label={s}
                  selected={services.includes(s)}
                  onToggle={() => toggle(s, services, setServices)}
                />
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div>
            <p className="text-[#64697e] text-sm mb-3">What&apos;s your biggest challenge?</p>
            <div className="flex flex-wrap gap-2">
              {challengeOptions.map((c) => (
                <OptionPill
                  key={c}
                  label={c}
                  selected={challenges.includes(c)}
                  onToggle={() => toggle(c, challenges, setChallenges)}
                />
              ))}
            </div>
          </div>

          {/* Textarea */}
          <textarea
            rows={4}
            placeholder="Tell us about your business..."
            className="w-full bg-[#fff] rounded-xl px-5 py-4 text-[#1a1f3d] placeholder:text-[#9a9db3] text-sm outline-none focus:ring-2 focus:ring-[#1a1f3d]/20 transition resize-none"
          />

          {/* Submit */}
          <button
            type="submit"
            className="group w-full flex items-center justify-center gap-2 bg-[#141413] text-white rounded-xl py-4 text-base cursor-pointer"
          >
            Book a free call
            <span className="relative w-5 h-5">
              <ArrowUpRight
                className="w-5 h-5 absolute inset-0 transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-1 group-hover:-translate-y-1"/>
              <ArrowRight
                className="w-5 h-5 absolute inset-0 transition-all duration-300 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"/>
            </span>
          </button>

          <p className="text-center text-neutral-700 text-sm">
            By submitting, you agree to our{" "}
            <a href="#" className="text-[#000] hover:underline">
              terms of service.
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
