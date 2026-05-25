import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Servienza — the field service management platform by Qumify Technologies Inc.",
};

export default function TermsOfService() {
  return (
    <>
      <main className="bg-white pt-32 pb-24 px-6">
        <article className="max-w-3xl mx-auto text-[#3a3f55] leading-relaxed [&_a]:text-[#4f6bff] [&_a]:underline [&_p]:mb-4">
          <h1 className="text-4xl font-bold tracking-tight mb-2">
            Terms of Service
          </h1>
          <p className="text-sm text-[#8b90a5] mb-10">
            Last updated: May 25, 2026
          </p>

          {/* ─── 1. Agreement ─────────────────────────────── */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">
              1. Agreement to Terms
            </h2>
            <p>
              These Terms of Service (&quot;Terms&quot;) constitute a legally
              binding agreement between you (&quot;User,&quot; &quot;you,&quot;
              or &quot;your&quot;) and Qumify Technologies Inc.
              (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;), governing your access to and use of the
              Servienza platform available at servienza.com, including our web
              application, mobile applications (iOS and Android), and all
              related services (collectively, the &quot;Service&quot;).
            </p>
            <p>
              By creating an account or using the Service, you agree to be
              bound by these Terms and our{" "}
              <a href="/privacy">Privacy Policy</a>. If you do not agree, do
              not use the Service.
            </p>
          </section>

          {/* ─── 2. Service Description ──────────────────── */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">
              2. Service Description
            </h2>
            <p>
              Servienza is a field service management platform designed for
              service businesses including HVAC, plumbing, pool service, pest
              control, electrical, landscaping, cleaning, and related trades.
              The Service provides tools for job scheduling and dispatch, GPS
              tracking, service logging with photo documentation, invoicing and
              payment processing, customer communication (including SMS, email,
              and push notifications), route optimization, recurring service
              management, and business analytics.
            </p>
          </section>

          {/* ─── 3. Account ──────────────────────────────── */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">
              3. Account Registration
            </h2>
            <p>
              You must provide accurate, complete, and current information when
              creating an account. You are responsible for maintaining the
              confidentiality of your account credentials and for all activity
              that occurs under your account. You must notify us immediately of
              any unauthorized use.
            </p>
            <p>
              You must be at least 18 years old and have the legal capacity to
              enter into a binding agreement to use the Service.
            </p>
          </section>

          {/* ─── 4. Subscriptions & Payment ──────────────── */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">
              4. Subscriptions and Payment
            </h2>
            <p>
              The Service is offered on a subscription basis with plans as
              described on our pricing page. All plans include a 14-day free
              trial. After the trial period, your selected plan will be billed
              monthly or annually based on your choice.
            </p>
            <p>
              Payments are processed through Stripe. We do not charge any
              platform fees on top of Stripe&apos;s standard processing rates.
              You are responsible for paying all fees associated with your
              subscription and any applicable taxes.
            </p>
            <p>
              You may cancel your subscription at any time. Cancellation takes
              effect at the end of the current billing period. We do not provide
              prorated refunds for partial billing periods.
            </p>
          </section>

          {/* ─── 5. Acceptable Use ───────────────────────── */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">5. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Use the Service for any unlawful purpose or in violation of
                applicable laws.
              </li>
              <li>
                Attempt to gain unauthorized access to any part of the Service,
                other users&apos; accounts, or our systems.
              </li>
              <li>
                Transmit viruses, malware, or any harmful code through the
                Service.
              </li>
              <li>
                Use the Service to send unsolicited bulk messages (spam) or
                violate anti-spam laws.
              </li>
              <li>
                Reverse engineer, decompile, or disassemble any part of the
                Service.
              </li>
              <li>
                Resell, sublicense, or make the Service available to third
                parties without our written consent.
              </li>
            </ul>
          </section>

          {/* ─── 6. Data Ownership ───────────────────────── */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">
              6. Data Ownership and License
            </h2>
            <p>
              You retain all ownership rights to the data you input into the
              Service (customer information, job records, photos, etc.). By
              using the Service, you grant us a limited license to store,
              process, and display your data solely for the purpose of
              providing the Service to you.
            </p>
            <p>
              All intellectual property rights in the Service, including
              software, design, logos, and documentation, are and remain the
              property of Qumify Technologies Inc.
            </p>
          </section>

          {/* ─── 7. SMS / Messaging Terms ────────────────── */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">
              7. SMS and Messaging Terms
            </h2>
            <div className="p-5 rounded-xl bg-[#f5f6fa] text-sm leading-relaxed">
              <p className="font-semibold text-base mb-3">
                Servienza SMS Notifications Program
              </p>

              <p className="mb-3">
                <strong>Program name:</strong> Servienza SMS Notifications
              </p>

              <p className="mb-3">
                <strong>Program description:</strong> When you or your customers
                opt in to Servienza SMS notifications, you may receive
                automated text messages related to the Service, including
                appointment reminders, technician en-route alerts, job status
                updates, invoice and payment notifications, and account
                security messages. These messages are transactional and
                service-related.
              </p>

              <p className="mb-3">
                <strong>Message frequency:</strong> Message frequency varies
                based on your service activity. You may receive up to 20
                messages per month depending on the number of scheduled jobs
                and service events.
              </p>

              <p className="mb-3">
                <strong>Message and data rates may apply.</strong> Please
                contact your wireless carrier for details about your messaging
                plan and any charges that may apply.
              </p>

              <p className="mb-3">
                <strong>Opt-out:</strong> You can cancel SMS notifications at
                any time. Text{" "}
                <strong className="text-[#1a1f3d] text-base">STOP</strong> to
                the number from which you received messages. After sending
                STOP, you will receive a confirmation message and will no
                longer receive SMS messages from Servienza. If you wish to
                re-enroll, you may do so through your account settings or by
                texting START.
              </p>

              <p className="mb-3">
                <strong>Help:</strong> If you are experiencing issues with SMS
                messages, text{" "}
                <strong className="text-[#1a1f3d] text-base">HELP</strong> for
                assistance. You can also contact our support team directly at{" "}
                <a href="mailto:support@servienza.com">
                  support@servienza.com
                </a>{" "}
                or call <a href="tel:+15612994400">(561) 299-4400</a>.
              </p>

              <p className="mb-3">
                <strong>Carriers:</strong> Carriers are not liable for delayed
                or undelivered messages.
              </p>

              <p>
                <strong>Privacy:</strong> For information on how we handle your
                data, please read our{" "}
                <a href="/privacy">Privacy Policy</a>. We do not share your
                phone number or message data with third parties for marketing
                purposes.
              </p>
            </div>
          </section>

          {/* ─── 8. Third-Party Services ─────────────────── */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">
              8. Third-Party Services
            </h2>
            <p>
              The Service integrates with third-party services including Stripe
              (payment processing), QuickBooks (accounting), Google Maps (route
              optimization), and Twilio (SMS messaging). Your use of these
              integrations is subject to the respective third party&apos;s
              terms and privacy policies. We are not responsible for the
              practices or content of third-party services.
            </p>
          </section>

          {/* ─── 9. Service Availability ─────────────────── */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">
              9. Service Availability
            </h2>
            <p>
              We strive to maintain 99.9% uptime for the Service. However, we
              do not guarantee uninterrupted or error-free availability. We may
              perform scheduled maintenance with advance notice. We are not
              liable for temporary service disruptions caused by maintenance,
              infrastructure issues, or events beyond our control.
            </p>
          </section>

          {/* ─── 10. Limitation of Liability ─────────────── */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">
              10. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, Qumify Technologies Inc.
              shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages, including loss of profits,
              data, or goodwill, arising from your use of or inability to use
              the Service.
            </p>
            <p>
              Our total aggregate liability for all claims related to the
              Service shall not exceed the amount you paid to us in the twelve
              (12) months preceding the claim.
            </p>
          </section>

          {/* ─── 11. Disclaimer of Warranties ────────────── */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">
              11. Disclaimer of Warranties
            </h2>
            <p>
              The Service is provided &quot;as is&quot; and &quot;as
              available&quot; without warranties of any kind, either express or
              implied, including but not limited to implied warranties of
              merchantability, fitness for a particular purpose, and
              non-infringement.
            </p>
          </section>

          {/* ─── 12. Indemnification ─────────────────────── */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">12. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Qumify Technologies Inc.
              and its officers, directors, employees, and agents from any
              claims, damages, or expenses (including reasonable attorney fees)
              arising from your use of the Service, your violation of these
              Terms, or your violation of any third-party rights.
            </p>
          </section>

          {/* ─── 13. Termination ─────────────────────────── */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">13. Termination</h2>
            <p>
              We may suspend or terminate your access to the Service at any
              time for violation of these Terms or for any other reason with
              reasonable notice. Upon termination, your right to use the
              Service ceases immediately. You may request an export of your
              data within 30 days of termination.
            </p>
          </section>

          {/* ─── 14. Governing Law ───────────────────────── */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">14. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the
              laws of the State of Florida, without regard to its conflict of
              law provisions. Any disputes shall be resolved in the state or
              federal courts located in Palm Beach County, Florida.
            </p>
          </section>

          {/* ─── 15. Changes ─────────────────────────────── */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">
              15. Changes to These Terms
            </h2>
            <p>
              We reserve the right to modify these Terms at any time. We will
              notify you of material changes by email or through the Service
              at least 30 days before the changes take effect. Your continued
              use of the Service after the effective date constitutes
              acceptance of the revised Terms.
            </p>
          </section>

          {/* ─── 16. Contact ─────────────────────────────── */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">16. Contact Us</h2>
            <p>
              If you have questions about these Terms, please contact us:
            </p>
            <div className="mt-3 p-5 rounded-xl bg-[#f5f6fa] text-sm leading-relaxed">
              <p className="font-semibold">Qumify Technologies Inc.</p>
              <p>2 Burning Tree Ln</p>
              <p>Boca Raton, Florida 33431</p>
              <p className="mt-2">
                Email:{" "}
                <a href="mailto:support@servienza.com">
                  support@servienza.com
                </a>
              </p>
              <p>
                Phone: <a href="tel:+15612994400">(561) 299-4400</a>
              </p>
              <p>
                Website:{" "}
                <a
                  href="https://www.servienza.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  servienza.com
                </a>
              </p>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
