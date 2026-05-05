"use client";

import { ArrowUpRight } from "lucide-react";
import AppStoreBadges from "@/components/AppStoreBadges";
import Logo from "@/components/Logo";

const navLinks = {
  Product: ["Features", "Smart Dispatch", "Invoicing & Payments", "Mobile App", "Integrations"],
  Company: ["About", "Case Studies", "Blog", "Compare", "Careers"],
  Support: ["Help Center", "Data Migration", "Onboarding", "Contact Us"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const socials = [
  { label: "X", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-[#1a1f3d] px-8 pt-20 pb-10">
      <div className="max-w-6xl mx-auto">

        {/* Big headline */}
        <div className="border-b border-white/10 pb-16 mb-16">
          <p className="inline-block px-4 py-1.5 rounded-lg bg-[#dfe2ef] text-[#1a1f3d] text-sm font-medium mb-8">
            Ready when you are
          </p>
          <div className="flex items-end justify-between gap-8">
            <h2
              className="text-white text-6xl md:text-7xl leading-none tracking-tighter max-w-2xl">
              Your crew. Your jobs. Your money. All in one place.
            </h2>

            <a
              href="#"
              className="group shrink-0 flex items-center justify-center w-20 h-20 rounded-full border border-white/20 hover:border-white/60 hover:bg-white/5 transition-all duration-300 mb-2"
            >
              <ArrowUpRight className="w-10 h-10 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Nav grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <Logo dark size="lg" />
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Field service software built for the people who actually do the work.
            </p>

            <div className="flex gap-2 mt-8">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="px-3 py-1.5 rounded-lg border border-white/15 text-white/50 text-xs hover:border-white/40 hover:text-white transition-all duration-200"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(navLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-white/30 text-xs font-medium tracking-widest uppercase mb-5">
                {category}
              </p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/50 text-sm hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 mb-6">
          <p className="text-white/50 text-sm mb-3">Get the mobile app</p>
          <AppStoreBadges dark={true} />
          <a
            href="#"
            className="inline-flex items-center gap-1.5 mt-3 text-white/80 text-lg hover:text-white/60 transition-colors duration-200"
          >
            Or use the web app
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>

        {/* Wordmark */}
        <div className="border-t border-white/10 pt-10 mb-10 overflow-hidden">
          <p
            className="text-white/20 text-[clamp(4rem,14vw,10rem)] leading-none select-none text-center">
            Servienza
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Servienza. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Built for field service teams everywhere.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
