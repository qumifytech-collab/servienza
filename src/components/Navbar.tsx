"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how-we-work" },
  { label: "Why us", href: "#why-choose-us" },
  { label: "FAQ", href: "#faq" },
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
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Header bar */}
      <div
        className={cn(
          "h-20 px-6 md:px-10 flex items-center justify-between relative z-50 transition-all duration-300",
          scrolled
            ? "bg-[#F4F0EA]/80 backdrop-blur-md shadow-sm border-b border-black/5"
            : "bg-[#F4F0EA] border-b border-black/5"
        )}
      >
        <Link href="/" className="text-2xl font-medium text-black">
          Servienza
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 mr-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleAnchor(link.href)}
              className="relative text-sm font-medium text-[#1c160c] group cursor-pointer"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#1c160c] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex gap-2 flex-row">
          <Button
            size="lg"
            className="rounded-xl px-5 h-11 text-sm bg-white border-gray-200 text-black cursor-pointer hover:bg-[#EDE8E0] transition-colors"
          >
            Login
          </Button>
          <Button
            size="lg"
            className="group relative overflow-hidden rounded-xl px-5 h-11 text-sm bg-black text-white gap-2 flex items-center cursor-pointer"
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
          className="md:hidden w-12 h-12 flex items-center justify-center bg-black/5 rounded-full cursor-pointer z-50 transition-colors hover:bg-black/10"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} color="#000" />}
        </button>
      </div>

      {/* Full screen mobile menu */}
      <div
        className={cn(
          "fixed inset-0 bg-[#F4F0EA] pt-32 px-6 flex flex-col transition-all duration-300 ease-in-out z-40",
          isOpen
            ? "opacity-100 visible translate-y-0 pointer-events-auto"
            : "opacity-0 invisible -translate-y-5 pointer-events-none"
        )}
      >
        <div className="flex flex-col gap-2">
          {navLinks.map((link, i) => (
            <button
              key={link.label}
              onClick={() => handleAnchor(link.href)}
              className="text-4xl font-medium text-black text-left py-3 border-b border-black/5 hover:pl-2 transition-all duration-200 cursor-pointer"
              style={{ transitionDelay: isOpen ? `${i * 40}ms` : "0ms" }}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="mt-auto pb-12 flex flex-col gap-3">
          <Button
            size="lg"
            className="w-full rounded-xl px-5 h-11 text-sm bg-white border-gray-200 text-black cursor-pointer"
          >
            Login
          </Button>
          <Button
            size="lg"
            className="w-full group relative overflow-hidden rounded-xl px-5 h-11 text-sm bg-black text-white gap-2 flex items-center justify-center cursor-pointer"
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
