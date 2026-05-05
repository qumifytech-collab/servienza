"use client";

import Image from "next/image";
import {
  CreditCard,
  BookOpen,
  FileText,
  Send,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: FileText,
    title: "Technician completes service log",
    desc: "Photos, notes, and inventory used — all captured on site.",
  },
  {
    icon: DollarSign,
    title: "Invoice auto-generated",
    desc: "Labor, parts, and recurring charges calculated automatically.",
  },
  {
    icon: Send,
    title: "Sent to customer instantly",
    desc: "Via email or text — no manual step needed.",
  },
  {
    icon: CreditCard,
    title: "Customer pays online",
    desc: "One-click payment via Stripe. You get paid the same day.",
  },
];

const InvoicingPayments = () => {
  return (
    <section id="invoicing" className="py-24 px-8 bg-[#f0f2f8]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-block px-4 py-1.5 rounded-lg bg-[#dfe2ef] text-[#1a1f3d] text-sm font-medium mb-8">
            Invoicing & Payments
          </div>

          <h2 className="text-5xl md:text-6xl text-[#1a1f3d] tracking-tighter mb-6">
            Get paid faster.{" "}
            <span className="text-[#8b90a5]">Zero fees from us.</span>
          </h2>

          <p className="text-[#64697e] text-lg max-w-2xl leading-relaxed">
            Invoices are generated automatically from service logs and sent to your
            customers. Stripe handles payments — and we don&apos;t take a cut.
            Every dollar your customer pays goes to you.
          </p>
        </div>

        {/* Flow visualization */}
        <div className="bg-white rounded-[2rem] p-8 md:p-10 mb-8">
          <p className="text-[#8b90a5] text-xs font-medium tracking-widest uppercase mb-8">
            From job complete to payment received
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="flex flex-col items-center text-center relative">
                  <div className="w-14 h-14 rounded-2xl bg-[#f0f2f8] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#1a1f3d]" />
                  </div>
                  <p className="text-[#1a1f3d] font-medium text-sm mb-1">
                    {step.title}
                  </p>
                  <p className="text-[#64697e] text-xs leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Arrow between steps */}
                  {i < steps.length - 1 && (
                    <div className="hidden md:flex absolute right-0 top-7 translate-x-1/2">
                      <ArrowRight className="w-4 h-4 text-[#cfd2e0]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Two integration cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Stripe Card */}
          <div className="bg-[#1a1f3d] rounded-[2rem] p-8 md:p-10 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-[#635BFF]/20 flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-[#635BFF]" />
              </div>
              <div>
                <p className="text-white font-medium text-lg">Stripe Payments</p>
                <p className="text-white/40 text-sm">Zero platform fees</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 flex-1">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                <p className="text-white/70 text-sm leading-relaxed">
                  Accept credit cards, debit cards, and ACH bank transfers directly through your invoices
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                <p className="text-white/70 text-sm leading-relaxed">
                  We do not monetize over Stripe — you only pay Stripe&apos;s standard processing fees, nothing extra from us
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                <p className="text-white/70 text-sm leading-relaxed">
                  Customers can pay from the invoice email in one click — no login or account needed
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                <p className="text-white/70 text-sm leading-relaxed">
                  Automatic follow-up texts and emails for overdue invoices until you get paid
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-white/30 text-xs">
                Connect your Stripe account in minutes. Payouts go directly to your bank.
              </p>
            </div>
          </div>

          {/* QuickBooks Card */}
          <div className="bg-[#e8eaf3] rounded-[2rem] p-8 md:p-10 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-[#2CA01C]/15 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-[#2CA01C]" />
              </div>
              <div>
                <p className="text-[#1a1f3d] font-medium text-lg">QuickBooks Integration</p>
                <p className="text-[#64697e] text-sm">Two-way sync</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 flex-1">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2CA01C] mt-2 shrink-0" />
                <p className="text-[#1a1f3d]/70 text-sm leading-relaxed">
                  Invoices, payments, and customer data sync automatically to QuickBooks
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2CA01C] mt-2 shrink-0" />
                <p className="text-[#1a1f3d]/70 text-sm leading-relaxed">
                  No double entry — create an invoice in Servienza and it appears in QuickBooks instantly
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2CA01C] mt-2 shrink-0" />
                <p className="text-[#1a1f3d]/70 text-sm leading-relaxed">
                  Revenue, expenses, and customer balances stay accurate across both systems
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2CA01C] mt-2 shrink-0" />
                <p className="text-[#1a1f3d]/70 text-sm leading-relaxed">
                  Your accountant works in QuickBooks, your crew works in Servienza — everybody&apos;s happy
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#1a1f3d]/10">
              <p className="text-[#64697e] text-xs">
                Works with QuickBooks Online. Connect in under 5 minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvoicingPayments;
