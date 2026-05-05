"use client";

const InvoicingPayments = () => {
  return (
    <section id="invoicing" className="py-24 px-8 bg-[#fff]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-block px-4 py-1.5 rounded-lg bg-[#fff] text-[#1c160c] text-sm font-medium mb-8">
            Invoicing & Payments
          </div>

          <h2 className="text-5xl md:text-6xl text-[#000] tracking-tighter mb-6">
            Get paid faster, Zero fees from us
          </h2>

          <p className="text-[#000] text-lg max-w-2xl leading-relaxed">
            Invoices are generated automatically from service logs and sent to your
            customers. Stripe handles payments and we don&apos;t take a cut.
            Every dollar your customer pays goes to you.
          </p>
        </div>

        {/* Two integration cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Stripe Card */}
          <div className="bg-[#1c160c] rounded-[2rem] p-8 md:p-10 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div>
                <p className="text-white font-medium text-lg">Stripe Payments</p>
                <p className="text-white/60 text-sm">Zero platform fees</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 flex-1">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"/>
                <p className="text-white/70 text-sm leading-relaxed">
                  Accept credit cards, debit cards, and ACH bank transfers directly through your invoices
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"/>
                <p className="text-white/70 text-sm leading-relaxed">
                  We do not monetize over Stripe — you only pay Stripe&apos;s standard processing fees, nothing extra
                  from us
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"/>
                <p className="text-white/70 text-sm leading-relaxed">
                  Customers can pay from the invoice email in one click — no login or account needed
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"/>
                <p className="text-white/70 text-sm leading-relaxed">
                  Automatic follow-up texts and emails for overdue invoices until you get paid
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-white/70 text-sm">
                Connect your Stripe account in minutes. Payouts go directly to your bank.
              </p>
            </div>
          </div>

          {/* QuickBooks Card */}
          <div className="bg-[#FAF6F0] rounded-[2rem] p-8 md:p-10 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div>
                <p className="text-[#000] font-medium text-lg">QuickBooks Integration</p>
                <p className="text-neutral-700 text-sm">Two-way sync</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 flex-1">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2CA01C] mt-2 shrink-0"/>
                <p className="text-[#000]/70 text-sm leading-relaxed">
                  Invoices, payments, and customer data sync automatically to QuickBooks
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2CA01C] mt-2 shrink-0"/>
                <p className="text-[#000]/70 text-sm leading-relaxed">
                  No double entry — create an invoice in Servienza and it appears in QuickBooks instantly
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2CA01C] mt-2 shrink-0"/>
                <p className="text-[#000]/70 text-sm leading-relaxed">
                  Revenue, expenses, and customer balances stay accurate across both systems
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2CA01C] mt-2 shrink-0"/>
                <p className="text-[#000]/70 text-sm leading-relaxed">
                  Your accountant works in QuickBooks, your crew works in Servienza — everybody&apos;s happy
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#000]/10">
              <p className="text-neutral-700 text-sm">
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
