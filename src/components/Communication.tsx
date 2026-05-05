"use client";

import {
  Bell,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const channels = [
  {
    icon: Bell,
    title: "Push Notifications",
    desc: "Instant alerts on iOS and Android — job assignments, schedule changes, and customer updates reach your team the moment they happen.",
  },
  {
    icon: MessageSquare,
    title: "SMS / Text Messages",
    desc: "Automated texts for appointment reminders, technician en-route alerts, and payment follow-ups. Your customers stay informed without you picking up the phone.",
  },
  {
    icon: Mail,
    title: "Email Notifications",
    desc: "Professional emails for invoices, service summaries, upcoming appointment reminders, and payment receipts — branded with your company name.",
  },
];

const customerAlerts = [
  {
    icon: Clock,
    time: "1 day before",
    title: "Service Reminder",
    message: "Hi Maria, your pool cleaning is scheduled for tomorrow between 9-11 AM. Reply C to confirm.",
    type: "sms",
  },
  {
    icon: MapPin,
    time: "30 min before",
    title: "Technician En Route",
    message: "Mike is on his way to your property. Track his arrival in real time.",
    type: "push",
  },
  {
    icon: CheckCircle2,
    time: "After service",
    title: "Service Complete",
    message: "Your pool service is complete. View the service report and photos from today's visit.",
    type: "email",
  },
];

const Communication = () => {
  return (
    <section className="py-24 px-8 bg-[#f5f6fa]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-block px-4 py-1.5 rounded-lg bg-[#dfe2ef] text-[#1a1f3d] text-sm font-medium mb-8">
            Communication
          </div>

          <h2 className="text-5xl md:text-6xl text-[#1a1f3d] tracking-tighter mb-6">
            Keep everyone{" "}
            <span className="text-[#8b90a5]">in the loop.</span>
          </h2>

          <p className="text-[#64697e] text-lg max-w-2xl leading-relaxed">
            Push notifications, text messages, and emails — automated at every
            step so your customers always know what&apos;s happening and your team
            never misses an update.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* LEFT: Channel cards */}
          <div className="flex flex-col gap-4">
            {channels.map((ch) => {
              const Icon = ch.icon;
              return (
                <div
                  key={ch.title}
                  className="bg-[#f0f2f8] rounded-2xl p-7 flex items-start gap-5"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#dfe2ef] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#1a1f3d]" />
                  </div>
                  <div>
                    <h3 className="text-[#1a1f3d] font-medium text-lg mb-1">
                      {ch.title}
                    </h3>
                    <p className="text-[#64697e] text-sm leading-relaxed">
                      {ch.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Customer journey timeline */}
          <div className="bg-[#1a1f3d] rounded-[2rem] p-8 md:p-10">
            <div className="mb-8">
              <p className="text-white/40 text-xs font-medium tracking-widest uppercase mb-2">
                Customer Experience
              </p>
              <p className="text-white font-medium text-xl">
                What your customer sees
              </p>
            </div>

            <div className="flex flex-col gap-0">
              {customerAlerts.map((alert, index) => {
                const Icon = alert.icon;
                return (
                  <div key={alert.title} className="flex gap-4">
                    {/* Timeline */}
                    <div className="flex flex-col items-center">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-full flex items-center justify-center shrink-0",
                          index === 0
                            ? "bg-blue-500/20"
                            : index === 1
                            ? "bg-amber-500/20"
                            : "bg-emerald-500/20"
                        )}
                      >
                        <Icon
                          className={cn(
                            "w-4.5 h-4.5",
                            index === 0
                              ? "text-blue-400"
                              : index === 1
                              ? "text-amber-400"
                              : "text-emerald-400"
                          )}
                        />
                      </div>
                      {index < customerAlerts.length - 1 && (
                        <div
                          className="w-px flex-1 bg-white/10 my-2"
                          style={{ minHeight: "24px" }}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="pb-8">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-white/40 text-xs">{alert.time}</span>
                        <span
                          className={cn(
                            "px-2 py-0.5 rounded text-[10px] font-medium uppercase",
                            alert.type === "sms"
                              ? "bg-blue-500/20 text-blue-300"
                              : alert.type === "push"
                              ? "bg-amber-500/20 text-amber-300"
                              : "bg-emerald-500/20 text-emerald-300"
                          )}
                        >
                          {alert.type}
                        </span>
                      </div>
                      <p className="text-white font-medium text-sm mb-1">
                        {alert.title}
                      </p>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {alert.message}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 pt-6 border-t border-white/10">
              <p className="text-white/30 text-xs leading-relaxed">
                All communication is automated. Your customers stay informed at
                every step — without you sending a single message manually.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Communication;
