"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Header bar */}
      <div className="h-20 bg-[#F4F0EA] border-b border-black/5 px-6 md:px-10 flex items-center justify-between relative z-50">
        <Link href="/" className="text-2xl font-medium text-black">
          Servienza
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 mr-8">
          <Link href="#" className="text-sm font-medium">Features</Link>
          <Link href="#" className="text-sm font-medium">Industries</Link>
          <Link href="#" className="text-sm font-medium">How it works</Link>
          <Link href="#" className="text-sm font-medium">Pricing</Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            size="lg"
            className="group relative overflow-hidden rounded-xl px-5 h-11 text-sm bg-black text-white gap-2 flex items-center cursor-pointer"
          >
            <span className="relative z-10">Start Free Trial</span>

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

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden w-12 h-12 flex items-center justify-center bg-black/5 rounded-full cursor-pointer z-50"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} color={'#000'} />}
        </button>
      </div>

      {/* Full screen menu */}
      <div
        className={cn(
          "fixed inset-0 bg-[#F4F0EA] pt-32 px-6 flex flex-col transition-all duration-300 ease-in-out z-40",
          isOpen
            ? "opacity-100 visible translate-y-0 pointer-events-auto"
            : "opacity-0 invisible -translate-y-5 pointer-events-none"
        )}
      >
        <div className="flex flex-col gap-6">
          <Link href="#" onClick={() => setIsOpen(false)} className="text-4xl font-medium text-black">
            Features
          </Link>
          <Link href="#" onClick={() => setIsOpen(false)} className="text-4xl font-medium text-black">
            Industries
          </Link>
          <Link href="#" onClick={() => setIsOpen(false)} className="text-4xl font-medium text-black">
            How it works
          </Link>
          <Link href="#" onClick={() => setIsOpen(false)} className="text-4xl font-medium text-black">
            Pricing
          </Link>
        </div>

        <div className="mt-auto pb-12">
          <Button
            size="lg"
            className="w-full group relative overflow-hidden rounded-xl px-5 h-11 text-sm bg-black text-white gap-2 flex items-center justify-center cursor-pointer"
          >
            <span className="relative z-10">Start Free Trial</span>

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