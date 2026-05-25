import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Servienza — learn how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <main className="bg-white pt-32 pb-24 px-6">
        <article className="max-w-3xl mx-auto text-[#3a3f55] leading-relaxed [&_a]:text-[#4f6bff] [&_a]:underline [&_p]:mb-4">
          <h1 className="text-4xl font-bold tracking-tight mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#8b90a5] mb-10">
            Last updated: May 25, 2026
          </p>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
            <p>
              This Privacy Policy explains how Qumify Technologies Inc.
              (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;) collects, uses, discloses, and protects your
              information when you use the Servienza platform available at
              servienza.com, including our web application, mobile applications,
              and any related services (collectively, the
              &quot;Service&quot;).
            </p>
            <p>
              By accessing or using the Service you agree to the collection and
              use of information in accordance with this Privacy Policy. If you
              do not agree, please do not use the Service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">
              2. Information We Collect
            </h2>

            <h3 className="text-lg font-medium mt-6 mb-2">
              2.1 Information You Provide
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Account information:</strong> name, email address, phone
                number, company name, and billing address when you create an
                account or contact us.
              </li>
              <li>
                <strong>Customer and job data:</strong> customer names,
                addresses, service history, photos, notes, invoices, and
                payment records you enter into the platform.
              </li>
              <li>
                <strong>Communications:</strong> messages, support requests, and
                feedback you send to us.
              </li>
              <li>
                <strong>Payment information:</strong> payment details are
                collected and processed directly by our payment processor,
                Stripe. We do not store your full credit card number.
              </li>
            </ul>

            <h3 className="text-lg font-medium mt-6 mb-2">
              2.2 Information Collected Automatically
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Device and usage data:</strong> IP address, browser
                type, operating system, referring URL, pages viewed, and
                interaction timestamps.
              </li>
              <li>
                <strong>Location data:</strong> GPS coordinates collected from
                the mobile app when technicians use GPS tracking features (only
                while the app is in use and with user permission).
              </li>
              <li>
                <strong>Cookies and similar technologies:</strong> we use
                cookies and local storage to maintain sessions, remember
                preferences, and analyze usage patterns.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">
              3. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Provide, operate, and maintain the Service.</li>
              <li>
                Process transactions and send related information such as
                invoices, receipts, and payment confirmations.
              </li>
              <li>
                Send service-related notifications including appointment
                reminders, technician en-route alerts, and job status updates
                via email, SMS, or push notifications.
              </li>
              <li>
                Respond to your support requests, comments, or questions.
              </li>
              <li>
                Improve, personalize, and expand the Service based on usage
                patterns.
              </li>
              <li>
                Detect, prevent, and address technical issues or fraudulent
                activity.
              </li>
              <li>Comply with legal obligations.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">
              4. Data Sharing and Disclosure
            </h2>
            <p>
              <strong>
                We do not sell, rent, or share your personal information with
                third parties for their marketing purposes.
              </strong>
            </p>
            <p>We may share information only in the following circumstances:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Service providers:</strong> trusted third-party vendors
                who perform services on our behalf (e.g., Stripe for payment
                processing, SendGrid for email delivery, Twilio for SMS
                messaging, Google Cloud for hosting). These providers are
                contractually obligated to use your data only to provide
                services to us and are bound by confidentiality obligations.
              </li>
              <li>
                <strong>Legal requirements:</strong> when required by law,
                subpoena, court order, or government regulation.
              </li>
              <li>
                <strong>Business transfers:</strong> in connection with a
                merger, acquisition, or sale of all or a portion of our assets,
                with prior notice to affected users.
              </li>
              <li>
                <strong>With your consent:</strong> when you explicitly
                authorize us to share data with a specific third party.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">5. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your
              data, including 256-bit TLS encryption for data in transit,
              encrypted storage at rest, regular security audits, and access
              controls that limit data access to authorized personnel only.
              While no method of electronic storage is 100% secure, we strive
              to use commercially acceptable means to protect your personal
              information.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">6. Data Retention</h2>
            <p>
              We retain your personal information for as long as your account is
              active or as needed to provide you the Service. If you close your
              account, we will delete or anonymize your personal data within 90
              days, except where retention is required by law or for legitimate
              business purposes such as resolving disputes or enforcing
              agreements.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">7. Your Rights</h2>
            <p>
              Depending on your location, you may have the following rights
              regarding your personal data:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Access:</strong> request a copy of the personal data we
                hold about you.
              </li>
              <li>
                <strong>Correction:</strong> request that we correct inaccurate
                or incomplete data.
              </li>
              <li>
                <strong>Deletion:</strong> request that we delete your personal
                data, subject to legal retention requirements.
              </li>
              <li>
                <strong>Portability:</strong> request your data in a structured,
                machine-readable format.
              </li>
              <li>
                <strong>Opt-out of communications:</strong> unsubscribe from
                marketing emails at any time using the link in the email, or
                text <strong>STOP</strong> to opt out of SMS messages.
              </li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:privacy@servienza.com">privacy@servienza.com</a>{" "}
              or at the address below.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">
              8. Cookies and Tracking
            </h2>
            <p>
              We use essential cookies to keep you signed in and remember your
              preferences. We may also use analytics cookies to understand how
              the Service is used. You can control cookie preferences through
              your browser settings. Disabling cookies may limit certain
              features of the Service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">
              9. Children&apos;s Privacy
            </h2>
            <p>
              The Service is not directed to individuals under the age of 18. We
              do not knowingly collect personal information from children. If we
              learn that we have collected data from a child, we will promptly
              delete it.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">
              10. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of material changes by posting the updated policy on
              this page and updating the &quot;Last updated&quot; date. Your
              continued use of the Service after changes are posted constitutes
              acceptance of the revised policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">11. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy or our
              data practices, please contact us:
            </p>
            <div className="mt-3 p-5 rounded-xl bg-[#f5f6fa] text-sm leading-relaxed">
              <p className="font-semibold">Qumify Technologies Inc.</p>
              <p>2 Burning Tree Ln</p>
              <p>Boca Raton, Florida 33431</p>
              <p className="mt-2">
                Email:{" "}
                <a href="mailto:privacy@servienza.com">
                  privacy@servienza.com
                </a>
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
