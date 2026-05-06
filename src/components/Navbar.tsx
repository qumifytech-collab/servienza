"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Features",  href: "#features"  },
  { label: "Dispatch",  href: "#dispatch"  },
  { label: "Invoicing", href: "#invoicing" },
  { label: "Compare",   href: "#compare"   },
  { label: "Support",   href: "#support"   },
  { label: "FAQ",       href: "#faq"       },
  { label: "Pricing",   href: "/pricing"   },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchor = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 font-sans">
      {/* Header bar */}
      <div
        className={cn(
          "h-20 px-6 md:px-10 flex items-center justify-between relative z-50 transition-all duration-300",
          scrolled
            ? "bg-[#FFFDFB]/80 backdrop-blur-md"
            : "bg-[#FFFDFB]"
        )}
      >
        <Logo size="md" />

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-4 mr-8">
          {navLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.label}
                href={link.href}
                className="relative text-md font-medium text-[#1a1f3d] group cursor-pointer"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#141413] transition-all duration-300 group-hover:w-full" />
              </Link>
            ) : (
              <button
                key={link.label}
                onClick={() => handleAnchor(link.href)}
                className="relative text-md font-medium text-[#1a1f3d] group cursor-pointer"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#141413] transition-all duration-300 group-hover:w-full" />
              </button>
            )
          )}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex gap-2 flex-row">
          <Button
            size="lg"
            className="rounded-xl px-5 h-11 text-sm bg-white border-[#dfe2ef] text-black cursor-pointer"
          >
            Login
          </Button>
          <Button
            size="lg"
            className="group relative overflow-hidden rounded-xl px-5 h-11 text-sm bg-[#141413] text-white gap-2 flex items-center cursor-pointer"
          >
            <span className="relative z-10">Get started</span>
            <span className="relative z-10 w-6 h-6 overflow-hidden flex items-center justify-center">
              <span className="absolute transition-transform duration-300 group-hover:translate-x-6 group-hover:-translate-y-6">
                <ArrowUpRight className="size-5" strokeWidth={2} />
              </span>
              <span className="absolute -translate-x-6 translate-y-6 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0">
                <ArrowUpRight className="size-5" strokeWidth={2} />
              </span>
            </span>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden w-12 h-12 flex items-center justify-center bg-[#1a1f3d]/5 rounded-full cursor-pointer z-50 transition-colors hover:bg-[#1a1f3d]/10"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} color="#1a1f3d" />}
        </button>
      </div>

      {/* Full screen mobile menu */}
      <div
        className={cn(
          "fixed inset-0 bg-[#f0f2f8] pt-32 px-6 flex flex-col transition-all duration-300 ease-in-out z-40",
          isOpen
            ? "opacity-100 visible translate-y-0 pointer-events-auto"
            : "opacity-0 invisible -translate-y-5 pointer-events-none"
        )}
      >
        <div className="flex flex-col gap-2">
          {navLinks.map((link, i) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-medium text-[#1a1f3d] text-left py-3 border-b border-[#1a1f3d]/5 hover:pl-2 transition-all duration-200 cursor-pointer"
                style={{ transitionDelay: isOpen ? `${i * 40}ms` : "0ms" }}
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.label}
                onClick={() => handleAnchor(link.href)}
                className="text-4xl font-medium text-[#1a1f3d] text-left py-3 border-b border-[#1a1f3d]/5 hover:pl-2 transition-all duration-200 cursor-pointer"
                style={{ transitionDelay: isOpen ? `${i * 40}ms` : "0ms" }}
              >
                {link.label}
              </button>
            )
          )}
        </div>

        <div className="mt-auto pb-12 flex flex-col gap-3">
          <Button
            size="lg"
            className="w-full rounded-xl px-5 h-11 text-sm bg-white border-[#dfe2ef] text-[#1a1f3d] cursor-pointer"
          >
            Login
          </Button>
          <Button
            size="lg"
            className="w-full group relative overflow-hidden rounded-xl px-5 h-11 text-sm bg-[#4f6bff] text-white gap-2 flex items-center justify-center cursor-pointer"
          >
            <span className="relative z-10">Get started</span>
            <span className="relative z-10 w-6 h-6 overflow-hidden flex items-center justify-center">
              <span className="absolute transition-transform duration-300 group-hover:translate-x-6 group-hover:-translate-y-6">
                <ArrowUpRight className="size-6" strokeWidth={2} />
              </span>
              <span className="absolute -translate-x-6 translate-y-6 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0">
                <ArrowUpRight className="size-6" strokeWidth={2} />
              </span>
            </span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
