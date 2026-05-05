"use client";

import { Accordion as AccordionPrimitive } from "radix-ui";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Do I need any technical knowledge to get started?",
    a: "Not at all. Servienza is built for business owners and field crews, not developers. If you can use a smartphone, you can use Servienza — and we'll walk you through setup on day one.",
  },
  {
    q: "How long does it take to set up?",
    a: "Most teams are fully up and running on day one. Our onboarding team handles the setup for you — importing your customers, services, and team. No IT department or training sessions needed.",
  },
  {
    q: "Can I migrate from my current software?",
    a: "Yes. We offer free data migration from platforms like Jobber, Housecall Pro, ServiceTitan, or even spreadsheets. We'll move your customers, job history, invoices, and service records so nothing gets left behind.",
  },
  {
    q: "Do you charge fees on Stripe payments?",
    a: "No. We do not monetize over Stripe. You only pay Stripe's standard processing fees — we don't add any platform fee on top. Every dollar your customer pays goes to you.",
  },
  {
    q: "Does it work for recurring services?",
    a: "Absolutely. You can set up multiple recurring services for the same customer — each with its own schedule, cadence, and pricing. Weekly pool cleaning, monthly pest treatment, and quarterly HVAC service all managed independently.",
  },
  {
    q: "Is the mobile app available for both iOS and Android?",
    a: "Yes, the mobile app is available on both the App Store and Google Play. Your field crew uses the mobile app while you manage operations from the web dashboard.",
  },
  {
    q: "What kind of support do you offer?",
    a: "Live human support — not chatbots. Reach our team by phone, chat, or email. Every new customer gets a dedicated onboarding specialist, and ongoing training is always free.",
  },
  {
    q: "How much does it cost?",
    a: "Plans start from $49/month with no setup fees, no long-term contracts, and no hidden charges. Solo operators and small teams get everything they need from day one. Book a free call and we'll walk you through the right plan for your crew size.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-24 px-8 bg-[#fff]">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 flex flex-col items-center">
          <div className="inline-block px-4 py-1.5 rounded-lg bg-[#F9F6F1] text-[#1a1f3d] text-sm font-medium mb-8">
            FAQ
          </div>

          <h2 className="text-5xl md:text-6xl text-[#000] tracking-tighter mb-6">
            Your questions answered.
          </h2>

          <p className="text-[#000] text-lg leading-relaxed max-w-lg">
            Everything you need to know about Servienza. Still have questions? Book a free call and we&apos;ll walk you through it.
          </p>
        </div>

        {/* Accordion */}
        <AccordionPrimitive.Root type="single" collapsible className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <AccordionPrimitive.Item
              key={i}
              value={`item-${i}`}
              className="bg-[#FAF8F4] rounded-2xl px-7 py-1 group"
            >
              <AccordionPrimitive.Header>
                <AccordionPrimitive.Trigger className="flex w-full items-center justify-between py-5 text-left text-[#000] text-base font-medium cursor-pointer outline-none">
                  <span>{faq.q}</span>
                  <span className="relative w-5 h-5 shrink-0">
                    <Plus className="w-5 h-5 text-[#000] absolute inset-0 transition-all duration-300 group-data-[state=open]:opacity-0 group-data-[state=open]:rotate-90" />
                    <Minus className="w-5 h-5 text-[#000] absolute inset-0 transition-all duration-300 opacity-0 -rotate-90 group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-0" />
                  </span>
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>

              <AccordionPrimitive.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                <p className="text-[#000] text-base leading-relaxed pb-6 pr-8">
                  {faq.a}
                </p>
              </AccordionPrimitive.Content>
            </AccordionPrimitive.Item>
          ))}
        </AccordionPrimitive.Root>
      </div>
    </section>
  );
};

export default FaqSection;
