"use client";

import {Bell, CheckCircle2, Clock, Mail, MapPin, MessageSquare,} from "lucide-react";
import {cn} from "@/lib/utils";

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
    <section className="py-24 px-8 bg-[#FFFDFB]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-block px-4 py-1.5 rounded-lg bg-[#F9F6F1] text-[#1a1f3d] text-sm font-medium mb-8">
            Communication
          </div>

          <h2 className="text-5xl md:text-6xl text-[#000] tracking-tighter mb-6">
            Keep everyone in the loop.
          </h2>

          <p className="text-[#000] text-lg max-w-2xl leading-relaxed">
            Push notifications, text messages, and emails automated at every
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
                  className="bg-[#fff] border border-[#dfe2ef] rounded-2xl p-7 flex items-start gap-5"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#EFEEE7] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#1a1f3d]"/>
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
          <div className="bg-[#141413] rounded-[2rem] p-8 md:p-10">
            <div className="mb-8">
              <p className="text-white font-medium text-xl">
                What your customer sees
              </p>
            </div>

            <div className="flex flex-col gap-0">
              {customerAlerts.map((alert) => {
                return (
                  <div key={alert.title} className="flex gap-4">

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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Communication;
