"use client";

import {
  FileCheck2,
  Landmark,
  Link2,
  PenLine,
  Receipt,
  ShieldCheck,
} from "lucide-react";

const capabilities = [
  {
    icon: Landmark,
    title: "Deposits at approval",
    desc: "Ask for a percentage or a fixed amount. The customer approves and pays the deposit in one step through Stripe — or approves now and pays by Zelle or check, recorded with one click.",
  },
  {
    icon: Receipt,
    title: "Invoices that write themselves",
    desc: "The deposit instantly becomes a paid part-payment invoice, emailed to the customer. When the job is done, the balance invoice bills the full estimate minus the deposit — automatically.",
  },
  {
    icon: ShieldCheck,
    title: "Tamper-evident records",
    desc: "The moment an estimate is sent, it's frozen — the PDF and its contents get cryptographic fingerprints, and approval produces a signed receipt. What the customer agreed to can never silently change.",
  },
  {
    icon: PenLine,
    title: "E-signed agreements",
    desc: "Send service agreements from reusable templates with merge fields. Customers sign online — no printing, no scanning — and both sides get a verifiable signed copy.",
  },
  {
    icon: FileCheck2,
    title: "Approval creates the job",
    desc: "The instant a customer approves, the service request is created and lands on your dispatch board — no re-keying, no estimate sitting forgotten in an inbox.",
  },
  {
    icon: Link2,
    title: "One connected thread",
    desc: "Estimate, deposit, job, invoices, and payments stay linked on one record. Open any of them and jump to the rest — with Stripe and QuickBooks references right there.",
  },
];

const EstimatesDeposits = () => {
  return (
    <section id="estimates" className="py-24 px-8 bg-[#FFFDFB]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-block px-4 py-1.5 rounded-lg bg-[#fff] text-[#000] text-sm font-medium mb-8">
            Estimates & Deposits
          </div>

          <h2 className="text-5xl md:text-6xl text-[#000] tracking-tighter mb-6">
            Win the job with money down.
          </h2>

          <p className="text-[#000] text-lg max-w-2xl leading-relaxed">
            Send an estimate, and your customer approves it online and pays the
            deposit in the same tap. The job, the invoices, and the paper trail
            create themselves.
          </p>
        </div>

        {/* Two-panel mockup: customer approval + office thread */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
          {/* Customer's view — public estimate page */}
          <div className="bg-[#FAF6F0] rounded-[2rem] p-8 md:p-10 flex flex-col">
            <p className="text-neutral-500 text-xs mb-4">
              What your customer sees — no login, no app
            </p>
            <div className="bg-white rounded-2xl border border-black/5 shadow-sm p-6 flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="font-semibold text-[#000]">Estimate Q-2026-0007</p>
                  <p className="text-sm text-neutral-500">Torres Pool & Spa</p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-medium border border-amber-200">
                  Awaiting approval
                </span>
              </div>

              <div className="text-sm divide-y divide-black/5">
                <div className="flex justify-between py-2">
                  <span className="text-neutral-600">Filter system replacement</span>
                  <span className="text-[#000]">$1,850.00</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-neutral-600">Installation labor</span>
                  <span className="text-[#000]">$600.00</span>
                </div>
                <div className="flex justify-between py-2 font-medium">
                  <span className="text-[#000]">Total</span>
                  <span className="text-[#000]">$2,450.00</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-neutral-600">Deposit due at approval</span>
                  <span className="text-[#000] font-medium">$500.00</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-neutral-600">Balance on completion</span>
                  <span className="text-neutral-600">$1,950.00</span>
                </div>
              </div>

              <div className="mt-5 rounded-xl bg-emerald-600 text-white text-center text-sm font-medium py-3">
                Approve & pay $500 deposit
              </div>
              <p className="mt-2 text-center text-xs text-neutral-500">
                or approve now and pay the deposit another way (Zelle, check)
              </p>
              <p className="mt-4 text-center text-[10px] text-neutral-400 font-mono">
                Document fingerprint 3f9a…c21e — frozen at send
              </p>
            </div>
          </div>

          {/* Office view — the linked thread */}
          <div className="bg-[#181715] rounded-[2rem] p-8 md:p-10 flex flex-col">
            <p className="text-[#a09d96] text-xs mb-4">
              What your office sees — everything that followed, on one record
            </p>
            <div className="flex flex-col gap-2 flex-1">
              {[
                {
                  title: "Estimate Q-2026-0007 · Approved",
                  sub: "Consent + signed receipt recorded · 9:14 AM",
                  dot: "bg-emerald-400",
                },
                {
                  title: "Deposit invoice INV-0012 · Paid $500.00",
                  sub: "Card via Stripe · pi_3Oa8Zk… · synced to QuickBooks",
                  dot: "bg-emerald-400",
                },
                {
                  title: "Service request #42 · Scheduled",
                  sub: "Created automatically at approval · Mike T., Sep 2",
                  dot: "bg-sky-400",
                },
                {
                  title: "Balance invoice INV-0015 · $1,950.00",
                  sub: "Full job minus deposit credit — generated at completion",
                  dot: "bg-amber-400",
                },
              ].map((row, i, arr) => (
                <div key={row.title} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-2.5 h-2.5 rounded-full mt-2 ${row.dot}`} />
                    {i < arr.length - 1 && (
                      <div className="w-px flex-1 bg-white/15 my-1" />
                    )}
                  </div>
                  <div className="pb-5">
                    <p className="text-[#faf9f5] text-sm font-medium">{row.title}</p>
                    <p className="text-[#a09d96] text-xs mt-0.5">{row.sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-5 border-t border-white/10">
              <p className="text-[#a09d96] text-sm">
                Every record links to the others — open the invoice and jump to the
                estimate, the job, or the payment in one click.
              </p>
            </div>
          </div>
        </div>

        {/* Capability cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="bg-white rounded-2xl border border-black/5 p-6"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-emerald-600" />
                </div>
                <p className="font-medium text-[#000] mb-2">{c.title}</p>
                <p className="text-sm text-neutral-600 leading-relaxed">{c.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EstimatesDeposits;
