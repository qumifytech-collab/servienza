"use client";

import { Accordion as AccordionPrimitive } from "radix-ui";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Do I need any technical knowledge to get started?",
    a: "Not at all. Servienza is built for business owners and field crews, not developers. If you can use a smartphone, you can use Servienza — and we'll walk you through setup on day one.",
  },
  {
    q: "How long does it take to see results?",
    a: "Most teams feel the difference within the first week. Scheduling conflicts drop, your crew always knows where to be, and invoices go out without you chasing them down.",
  },
  {
    q: "What if it doesn't fit the way my business works?",
    a: "Every field service business is a little different, and we get that. Reach out and we'll talk through your workflow — there's a good chance we can make it work, and if not, we'll be honest with you.",
  },
  {
    q: "How much does it cost?",
    a: "Plans start from $49/month with no setup fees, no long-term contracts, and no hidden charges. Solo operators and small teams get everything they need from day one. Book a free call and we'll walk you through the right plan for your crew size.",
  },
  {
    q: "What happens after I sign up?",
    a: "We get you set up, import your jobs and team, and make sure everything is running smoothly before we hand off. You're never left to figure it out alone.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-24 px-8 bg-[#FAF6F0]">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 flex flex-col items-center">
          <div className="inline-block px-4 py-1.5 rounded-lg bg-[#E8E2D8] text-[#1c160c] text-sm font-medium mb-8">
            FAQ
          </div>

          <h2 className="text-5xl md:text-6xl text-[#1c160c] tracking-tighter mb-6">
            Your questions{" "}
            <span className="text-[#91877D]">answered.</span>
          </h2>

          <p className="text-[#7A726A] text-lg leading-relaxed max-w-lg">
            Everything you need to know about Servienza. Still have questions? Book a free call and we&apos;ll walk you through it.
          </p>
        </div>

        {/* Accordion */}
        <AccordionPrimitive.Root type="single" collapsible className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <AccordionPrimitive.Item
              key={i}
              value={`item-${i}`}
              className="bg-[#F0EBE3] rounded-2xl px-7 py-1 group"
            >
              <AccordionPrimitive.Header>
                <AccordionPrimitive.Trigger className="flex w-full items-center justify-between py-5 text-left text-[#1c160c] text-base font-medium cursor-pointer outline-none">
                  <span>{faq.q}</span>
                  <span className="relative w-5 h-5 shrink-0">
                    <Plus className="w-5 h-5 text-[#1c160c] absolute inset-0 transition-all duration-300 group-data-[state=open]:opacity-0 group-data-[state=open]:rotate-90" />
                    <Minus className="w-5 h-5 text-[#1c160c] absolute inset-0 transition-all duration-300 opacity-0 -rotate-90 group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-0" />
                  </span>
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>

              <AccordionPrimitive.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                <p className="text-[#7A726A] text-base leading-relaxed pb-6 pr-8">
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
