import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service — Servienza',
  description:
    'The terms governing use of Servienza, operated by Qumify Technologies Inc.: plans and billing, customer texts and calls, technician location, your data, and how disputes are handled.',
  robots: { index: true, follow: true },
}

/*
 * DRAFT — 17 Nov 2026. Matches the product as built (Free and Team plans, 60-day trial,
 * monthly/annual billing, customer texts, missed-call voicemail, technician tracking, Stripe pay
 * links, QuickBooks); liability cap (6 months' fees) and arbitration confirmed by the owner.
 * Awaiting lawyer review; §19 carries a LAWYER comment. The same text is served to the apps from
 * wonderpool-api resources/legal/terms.md — keep the two in step.
 */
const LAST_UPDATED = 'November 17, 2026'
const SUPPORT_EMAIL = 'at@servienza.com'
const BUSINESS_NAME = 'Servienza'
const LEGAL_ENTITY = 'Qumify Technologies Inc.'
const MAILING_ADDRESS = '2 Burning Tree Ln, Boca Raton, FL 33431, USA'
const GOVERNING_STATE = 'Florida'
const VENUE_COUNTY = 'Palm Beach County, Florida'
const PRICE_CHANGE_NOTICE_DAYS = 30
const ARBITRATION_OPT_OUT_DAYS = 30
const TRIAL_DAYS = 60
const TEAM_MONTHLY = '$100'
const TEAM_ANNUAL = '$960'
const SEAT_MONTHLY = '$25'
const SEAT_ANNUAL = '$240'

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mt-10 scroll-mt-6">
      <h2 className="text-xl font-semibold text-brand-800 font-display">{title}</h2>
      <div className="mt-3 space-y-3 text-slate-700 leading-relaxed">{children}</div>
    </section>
  )
}

const TOC = [
  ['who', '1. Who these terms are for'],
  ['account', '2. Your account and your team'],
  ['plans', '3. Plans, trial and billing'],
  ['changes-price', '4. Price changes'],
  ['cancel', '5. Cancelling, refunds and what happens to your data'],
  ['your-data', '6. Your data'],
  ['customers', '7. Your customers: texts, emails and consent'],
  ['calls', '8. Business phone number, voicemail and recordings'],
  ['tracking', '9. Technician location'],
  ['payments', '10. Payments, estimates and e-signatures'],
  ['third-party', '11. Third-party services'],
  ['acceptable', '12. Acceptable use'],
  ['availability', '13. Availability and changes to the service'],
  ['ip', '14. Our intellectual property; your feedback'],
  ['warranty', '15. Disclaimer of warranties'],
  ['liability', '16. Limitation of liability'],
  ['indemnity', '17. Indemnification'],
  ['termination', '18. Suspension and termination'],
  ['disputes', '19. Governing law and disputes'],
  ['terms-changes', '20. Changes to these terms'],
  ['misc', '21. General'],
  ['contact', '22. Contact'],
] as const

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <div className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600 text-lg font-bold text-white">
            S
          </span>
          <span className="text-lg font-semibold text-slate-900">Servienza</span>
        </div>

        <h1 className="mt-8 text-3xl font-bold text-slate-900 font-display sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-3 text-slate-600">
          These terms are the agreement between you and {LEGAL_ENTITY}, the company that operates{' '}
          {BUSINESS_NAME} (“{BUSINESS_NAME},” “we,” “us”). They cover the website, the web app at
          app.servienza.com and the {BUSINESS_NAME} mobile apps (together, the “Service”). By
          creating an account or using the Service you agree to them.
        </p>
        <p className="mt-1 text-sm text-slate-400">Last updated: {LAST_UPDATED}</p>

        <div className="mt-8 rounded-2xl border border-brand-200 bg-brand-50 p-5">
          <p className="text-sm font-bold uppercase tracking-wide text-brand-800">The short version</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[15px] text-slate-700">
            <li>
              Every account starts with {TRIAL_DAYS} days of the Team plan free. Add a card to stay on
              Team ({TEAM_MONTHLY}/month or {TEAM_ANNUAL}/year for two technicians); do nothing and you
              move to the Free plan. Nothing is deleted either way.
            </li>
            <li>
              Paid plans renew automatically until you cancel. Monthly plans can be cancelled any time;
              annual plans are paid up front and run to the end of the year you paid for.
            </li>
            <li>
              If we ever change a price we tell you by email at least {PRICE_CHANGE_NOTICE_DAYS} days
              before it applies, and never in the middle of a term you have already paid for.
            </li>
            <li>
              Your customers, jobs, invoices and photos are yours. You can export them any time, and you
              keep them on the Free plan.
            </li>
            <li>
              When you text or call your customers through {BUSINESS_NAME}, you are the sender: you need
              their permission, and the law on texting and call recording in your state applies to you.
            </li>
            <li>
              Disputes go to individual arbitration or small-claims court; you can opt out of
              arbitration within {ARBITRATION_OPT_OUT_DAYS} days of signing up.
            </li>
          </ul>
          <p className="mt-3 text-xs text-slate-500">
            The summary is for convenience; the full terms below are what applies.
          </p>
        </div>

        <nav aria-label="Contents" className="mt-8 columns-1 gap-6 text-[15px] sm:columns-2">
          {TOC.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="block py-0.5 text-brand-700 hover:underline">
              {label}
            </a>
          ))}
        </nav>

        <Section id="who" title="1. Who these terms are for">
          <p>
            {BUSINESS_NAME} is business software for service companies. You may use it only if you are at
            least 18 and are using it for a business (a “Company”). If you accept these terms for a
            Company, you confirm you have authority to bind it, and “you” means both you and the
            Company.
          </p>
          <p>
            Your own customers (the people whose jobs you schedule, who receive your estimates, invoices
            and texts) are not users of the Service and have no account with us. When they open a link
            you send them — an estimate, an invoice, a service report, a live-tracking page — they are
            dealing with you. Section 7 explains your responsibilities toward them.
          </p>
        </Section>

        <Section id="account" title="2. Your account and your team">
          <p>
            The person who creates a Company’s account is its owner. The owner can add technicians and
            other staff, who get their own logins, and is responsible for what everyone on the account
            does with the Service. Keep login codes and devices secure and tell us right away if you
            think an account has been compromised.
          </p>
          <p>
            Give us accurate information about your Company, including a working email address and a
            phone number, and keep it current. Notices under these terms go to the owner’s email on
            file.
          </p>
        </Section>

        <Section id="plans" title="3. Plans, trial and billing">
          <p>
            <strong>Free plan.</strong> One login (the owner), unlimited customers, scheduling, estimates,
            invoices with pay links, QuickBooks sync, agreements and documents, free for as long as you
            like. Features that cost us per use — the business phone number with voicemail-to-text,
            customer text messages, route optimisation and the live technician map — are shown with a
            lock and switched off on Free. Technicians cannot sign in to a Free Company. Storage of job
            photos and service reports on the Free plan may be limited in future; we will give notice
            before that happens and nothing is removed today.
          </p>
          <p>
            <strong>Team plan.</strong> {TEAM_MONTHLY} per month, or {TEAM_ANNUAL} per year paid in
            advance, for a Company with up to two technicians and every feature. Extra technician seats
            are {SEAT_MONTHLY} per month each ({SEAT_ANNUAL} per year on annual billing), added or removed
            from the billing page. Prices exclude any applicable sales tax or VAT, which we add where the
            law requires.
          </p>
          <p>
            <strong>Trial.</strong> Every new Company gets the Team plan free for {TRIAL_DAYS} days. No
            card is required to start. When the trial ends, you can add a card to continue on Team;
            otherwise your Company moves to the Free plan automatically. You are never charged at the
            end of a trial without choosing a paid plan.
          </p>
          <p>
            <strong>Automatic renewal.</strong> When you choose a paid plan you authorise us (through our
            payment processor, Stripe) to charge your payment method at the start of each billing
            period — every month, or every year — at the then-current price for your plan and seats,
            until you cancel. Choosing a plan during the trial ends the trial and starts billing right
            away. We email a receipt for every charge and, for annual plans, a reminder before each
            renewal.
          </p>
          <p>
            <strong>Fair-use limits.</strong> The Team plan includes 50 voicemail transcripts and 300 text
            messages per calendar month per Company. Reaching a limit only switches that feature off
            until the 1st of the next month (voicemails are still recorded; pay links go by email); it
            never incurs an extra charge. We may change these limits with the notice described in
            Section 4.
          </p>
          <p>
            <strong>Failed payments.</strong> If a charge fails we retry and email you. If it still fails
            after a reasonable period your Company moves to the Free plan until a payment method works
            again; nothing is deleted.
          </p>
          <p>
            <strong>Card payments from your customers</strong> are separate from your subscription: see
            Section 10.
          </p>
        </Section>

        <Section id="changes-price" title="4. Price changes">
          <p>
            Our costs change, and we may change the price of a plan, a seat, or the fair-use limits. If we
            do:
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>
              we will email the Company owner at least {PRICE_CHANGE_NOTICE_DAYS} days before the new
              price takes effect, stating the new price and how to cancel;
            </li>
            <li>
              the new price applies from your next renewal after that notice period — never in the
              middle of a monthly or annual period you have already paid for;
            </li>
            <li>
              you can cancel, or switch to the Free plan, at any time before the new price applies, with
              no charge. Continuing on the paid plan after the effective date is your agreement to the
              new price.
            </li>
          </ul>
          <p>
            Where your state’s law requires a different or longer notice for price changes, that law
            applies.
          </p>
        </Section>

        <Section id="cancel" title="5. Cancelling, refunds and what happens to your data">
          <p>
            <strong>Cancelling.</strong> Cancel any time from the billing page in the app (Menu →
            Billing → Manage subscription) or by emailing {SUPPORT_EMAIL}. Cancelling is as easy as
            signing up; nobody has to call you first.
          </p>
          <p>
            <strong>Monthly plans</strong> stay active until the end of the month you have paid for, then
            move to Free. <strong>Annual plans</strong> stay active until the end of the year you have
            paid for, then move to Free; they do not renew once cancelled.
          </p>
          <p>
            <strong>Refunds.</strong> Fees are charged in advance and are non-refundable, except: if you
            cancel an annual plan within 14 days of first paying for it, we refund it in full; and we
            refund any charge made in error. We may also refund at our discretion, for example after an
            outage. Refunds go back to the original payment method.
          </p>
          <p>
            <strong>Your data after cancelling.</strong> Moving to the Free plan deletes nothing: your
            customers, jobs, estimates, invoices, agreements, documents and photos stay in your account
            and you keep working with them. Your {BUSINESS_NAME} business phone number is kept for 30
            days after you leave the Team plan and then released, after which it may be assigned to
            someone else; voicemails already received stay in your account. If you want your account and
            data deleted entirely, email us from the owner’s address and we will do it within 30 days,
            apart from records we must keep by law (Section 6).
          </p>
        </Section>

        <Section id="your-data" title="6. Your data">
          <p>
            <strong>You own it.</strong> Everything you and your team put into the Service — customer
            records, jobs, notes, photos, checklists, estimates, invoices, payments, agreements and
            documents (“Company Data”) — belongs to you. You give us only the permission we need to host
            it, back it up, display it to you and your team, send it to the people you tell us to (your
            customers, QuickBooks, Stripe), and keep the Service working and secure. We do not sell
            Company Data or use your customer lists for our own marketing.
          </p>
          <p>
            <strong>Export.</strong> You can export customers, jobs, invoices and payments to spreadsheet
            files from the web app at any time, before or after you cancel.
          </p>
          <p>
            <strong>Our role.</strong> For your customers’ personal information we act on your behalf and
            on your instructions; you decide what to collect and how to use it, and you are responsible
            for having the right to put it into the Service. Requests from your customers about their
            information should go to you; we will help you fulfil them.
          </p>
          <p>
            <strong>Aggregated data.</strong> We may use information about how the Service is used, in a
            form that does not identify you, your team or your customers, to run and improve it — for
            example, how many jobs are completed per day across all companies.
          </p>
          <p>
            <strong>Retention.</strong> We keep Company Data while your account exists. After deletion we
            remove it from live systems within 30 days and from backups within 90, except for invoice,
            payment and consent records we are required to keep for tax, accounting or messaging-compliance
            reasons, which we keep for as long as the law requires and no longer.
          </p>
          <p>
            <strong>Backups and accuracy.</strong> We back up the Service regularly, but you are
            responsible for the accuracy of what you enter and for keeping your own copies of anything
            you cannot afford to lose.
          </p>
        </Section>

        <Section id="customers" title="7. Your customers: texts, emails and consent">
          <p>
            The Service can send messages to your customers on your behalf: estimate and invoice emails,
            pay links by text, a text when a technician is on the way, a text when a job is done, service
            reports, agreement requests and payment reminders. These go out in your business name and
            from the business phone number assigned to your Company.
          </p>
          <p>
            <strong>You are the sender.</strong> For every message the Service sends to your customers,
            you are the sender and we are the tool. That means you must:
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>
              only turn on texting for a customer who has agreed to receive texts from your business,
              and record that consent in the Service (the Service will not text a customer who has not
              opted in, and stops texting anyone who replies STOP);
            </li>
            <li>
              comply with the Telephone Consumer Protection Act (TCPA), the CAN-SPAM Act, CTIA messaging
              guidelines, your state’s telemarketing and privacy laws, and any similar laws where your
              customers live;
            </li>
            <li>
              use the messages for the job at hand — appointments, estimates, invoices, service reports
              and account matters — and not for marketing unless you have separate consent for that;
            </li>
            <li>keep your business name, phone number and messaging settings accurate.</li>
          </ul>
          <p>
            We may pause texting for a Company whose messages are generating carrier complaints, opt-out
            rates or legal claims, and we may refuse to send a message that would breach carrier rules.
            The{' '}
            <Link className="text-brand-700 underline" href="/sms-opt-in">
              SMS Messaging &amp; Opt-In Policy
            </Link>{' '}
            describes how consent is collected and honoured and applies alongside this section.
          </p>
          <p>
            <strong>Texts from us to you.</strong> We may text the owner and staff of a Company at the
            numbers they give us about account security (login codes), service alerts and account
            matters. Reply STOP to opt out of non-security texts and HELP for help; message and data
            rates may apply.
          </p>
        </Section>

        <Section id="calls" title="8. Business phone number, voicemail and recordings">
          <p>
            On the Team plan we can assign your Company a phone number. Calls to it that are not answered
            go to a greeting you record, callers can leave a voicemail, and the voicemail is recorded,
            transcribed and shown in the Service, matched to the customer who called. We do not place
            outbound calls, listen to live calls or record calls that are answered.
          </p>
          <p>
            <strong>Recording laws are yours to follow.</strong> Some states, including Florida and
            California, require every party to a call to be told it is being recorded. A voicemail
            greeting that invites the caller to leave a message is generally understood as notice that
            the message will be recorded, but you are responsible for the wording of your greeting and
            for any recording notice your state or your callers’ states require. You also authorise us to
            record, store and transcribe voicemails left on your number, and to use an automated
            transcription service to do so (transcripts can contain errors).
          </p>
          <p>
            The number is assigned to your Company for use with the Service. It is not yours to port out
            unless we agree in writing, and it is released 30 days after you leave the Team plan
            (Section 5). You may not use it for emergency calls; it cannot reach 911.
          </p>
        </Section>

        <Section id="tracking" title="9. Technician location">
          <p>
            On the Team plan, the mobile app can report a technician’s location to the Company during the
            working hours the Company sets, so the owner can see who is where and customers can follow a
            technician on the way. Tracking runs only inside those hours and only while the technician
            is signed in; the app tells technicians when it is on, and location history is kept for the
            period stated in the Privacy Policy.
          </p>
          <p>
            Technicians are your staff, not ours. You are responsible for telling them that the app
            reports their location during working hours, for obtaining any consent your state or their
            employment terms require, and for using the information only to run your business.
          </p>
        </Section>

        <Section id="payments" title="10. Payments, estimates and e-signatures">
          <p>
            <strong>Card payments.</strong> Pay links on your invoices and deposits on your estimates are
            processed by Stripe under your own Stripe account, which you open and operate under{' '}
            <a className="text-brand-700 underline" href="https://stripe.com/legal/connect-account" rel="noreferrer" target="_blank">
              Stripe’s Connected Account Agreement
            </a>
            . Stripe charges you its card-processing fees; {BUSINESS_NAME} adds no fee of its own. We never
            see or store full card numbers. We are not a bank, a money transmitter or a party to the
            payment: money moves between your customer and your Stripe account, and refunds, chargebacks
            and disputes with your customers are between you, your customer and Stripe. We can help you
            find the records you need.
          </p>
          <p>
            <strong>Estimates and agreements.</strong> When a customer types their name to approve an
            estimate or sign a service agreement, the Service records the name, the time and the
            document as it stood. This is an electronic signature under the U.S. ESIGN Act and similar
            laws, but whether a particular agreement is enforceable depends on its content and your
            state’s law, which is your responsibility. We provide starting templates as a convenience,
            not as legal advice.
          </p>
          <p>
            <strong>Invoices and taxes.</strong> You are responsible for the content of your invoices, for
            charging the right sales tax and for your own tax filings. QuickBooks sync, where you turn it
            on, copies data between the Service and your Intuit account under Intuit’s terms.
          </p>
        </Section>

        <Section id="third-party" title="11. Third-party services">
          <p>
            The Service relies on providers we do not control, including Stripe (payments), Intuit
            QuickBooks (accounting, when connected), Twilio (phone numbers and voicemail), Google Maps
            (addresses, routes and maps), Apple and Google (app stores and push notifications), and our
            cloud hosting, email and text-delivery providers. Their availability and terms are theirs.
            Where you connect your own account with one of them (Stripe, QuickBooks), their terms apply
            to that account and you can disconnect it at any time.
          </p>
          <p>
            If you downloaded a {BUSINESS_NAME} app from the Apple App Store or Google Play, the store’s
            terms also apply, and Apple or Google is not responsible for the app or for supporting it.
            Plans are bought on the web, not inside the apps.
          </p>
        </Section>

        <Section id="acceptable" title="12. Acceptable use">
          <p>You agree not to use the Service to:</p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>send unlawful, unsolicited, deceptive or abusive messages, or text anyone without consent;</li>
            <li>upload content you have no right to, or that is unlawful, infringing or harmful;</li>
            <li>break the law, including privacy, consumer-protection, employment and tax laws;</li>
            <li>
              probe, scrape, overload or reverse-engineer the Service, share logins, or access another
              Company’s data;
            </li>
            <li>resell the Service or build a competing product from it.</li>
          </ul>
        </Section>

        <Section id="availability" title="13. Availability and changes to the service">
          <p>
            We work to keep the Service available around the clock, but we do not promise uninterrupted
            or error-free operation and there is no service-level guarantee or credit. We may change,
            add or retire features; if we retire something you rely on we will give reasonable notice,
            and if a change materially reduces a paid plan you may cancel for a pro-rated refund of any
            prepaid period.
          </p>
        </Section>

        <Section id="ip" title="14. Our intellectual property; your feedback">
          <p>
            The Service, its software, design, templates and brand belong to {LEGAL_ENTITY} and its
            licensors. We give you a limited, non-exclusive, non-transferable right to use it for your
            Company while these terms are in force. If you send us ideas or feedback we may use them
            without owing you anything.
          </p>
        </Section>

        <Section id="warranty" title="15. Disclaimer of warranties">
          <p>
            THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE FULLEST EXTENT PERMITTED BY LAW WE
            DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A
            PARTICULAR PURPOSE AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT ROUTES, DRIVE TIMES,
            TRANSCRIPTS, LOCATION DATA OR ANY OTHER OUTPUT WILL BE ACCURATE OR COMPLETE, OR THAT THE
            SERVICE WILL MEET YOUR LEGAL OBLIGATIONS.
          </p>
        </Section>

        <Section id="liability" title="16. Limitation of liability">
          <p>
            TO THE FULLEST EXTENT PERMITTED BY LAW, {LEGAL_ENTITY.toUpperCase()} AND ITS OFFICERS, EMPLOYEES
            AND SUPPLIERS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR
            PUNITIVE DAMAGES, OR FOR LOST PROFITS, REVENUE, DATA OR GOODWILL, ARISING FROM THE SERVICE OR
            THESE TERMS, EVEN IF ADVISED OF THE POSSIBILITY. OUR TOTAL LIABILITY FOR ALL CLAIMS WILL
            NOT EXCEED THE GREATER OF (A) THE FEES YOU PAID US IN THE SIX MONTHS BEFORE THE CLAIM AROSE
            AND (B) ONE HUNDRED U.S. DOLLARS. Some states do not allow some of these limits, in which
            case they apply only as far as that state’s law permits.
          </p>
        </Section>

        <Section id="indemnity" title="17. Indemnification">
          <p>
            You will defend and indemnify {LEGAL_ENTITY} against claims, losses and reasonable legal
            costs arising from messages or calls you send through the Service, your use of location
            tracking, Company Data you upload, your dealings with your customers and staff, your breach
            of these terms, or your violation of the law. We will tell you promptly about any such claim
            and cooperate with you, and you may not settle a claim that admits fault on our behalf
            without our consent.
          </p>
        </Section>

        <Section id="termination" title="18. Suspension and termination">
          <p>
            You can stop using the Service and delete your account at any time (Section 5). We may suspend
            or terminate an account, with notice where practical, if it breaches these terms, creates
            legal or security risk, or has not been used for 24 months on the Free plan (we email the
            owner 60 days before removing a dormant account). If we terminate for a reason other than
            your breach, we refund any prepaid, unused period. Sections 5, 6 and 14 to 21 survive
            termination.
          </p>
        </Section>

        <Section id="disputes" title="19. Governing law and disputes">
          <p>
            These terms are governed by the laws of the State of {GOVERNING_STATE} and applicable U.S.
            federal law, without regard to conflict-of-law rules.
          </p>
          <p>
            <strong>Talk to us first.</strong> If you have a problem, email {SUPPORT_EMAIL}. Most things
            can be sorted out in a few days. If not, either of us may send the other a written notice of
            dispute; we then have 30 days to try to resolve it informally before anything formal starts.
          </p>
          <p>
            {/* LAWYER: review this dispute-resolution section as a whole. */}
            <strong>Arbitration.</strong> Any dispute that is
            not resolved informally will be settled by binding individual arbitration administered by the
            American Arbitration Association under its Commercial Arbitration Rules, by one arbitrator,
            in {VENUE_COUNTY} or by video, in English. For claims under $10,000 we pay the AAA filing and
            arbitrator fees unless the arbitrator finds the claim frivolous. Either party may instead
            bring an individual claim in small-claims court, and either party may go to court for an
            injunction to protect intellectual property or Company Data.
          </p>
          <p>
            <strong>Individual claims only.</strong> CLAIMS MAY BE BROUGHT ONLY ON AN INDIVIDUAL BASIS,
            NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY CLASS, COLLECTIVE OR REPRESENTATIVE PROCEEDING, AND
            THE ARBITRATOR MAY NOT CONSOLIDATE CLAIMS OF DIFFERENT COMPANIES. BOTH PARTIES WAIVE TRIAL BY
            JURY.
          </p>
          <p>
            <strong>Opt-out.</strong> You can opt out of arbitration by emailing {SUPPORT_EMAIL} with the
            subject “Arbitration opt-out,” your Company name and the owner’s email, within{' '}
            {ARBITRATION_OPT_OUT_DAYS} days of creating your account. If you opt out, or if the
            arbitration agreement is found unenforceable, disputes will be heard in the state or federal
            courts in {VENUE_COUNTY}, and both parties consent to their jurisdiction.
          </p>
        </Section>

        <Section id="terms-changes" title="20. Changes to these terms">
          <p>
            We may update these terms. For material changes we will email the Company owner and show a
            notice in the app at least {PRICE_CHANGE_NOTICE_DAYS} days before they take effect; changes
            that only clarify, or that cover a new feature, take effect when posted. The “Last updated”
            date at the top always shows the current version. If you do not agree to a change, stop using
            the Service before it takes effect and, if you prepaid, ask us for a pro-rated refund.
            Continuing to use the Service after a change takes effect is your acceptance of it.
          </p>
        </Section>

        <Section id="misc" title="21. General">
          <p>
            These terms, the Privacy Policy and the SMS Messaging &amp; Opt-In Policy are the whole
            agreement between us about the Service. If any part is unenforceable the rest still applies.
            You may not assign these terms without our consent; we may assign them to a successor of our
            business with notice to you. Our failure to enforce a term is not a waiver of it. Neither
            party is liable for delay caused by events outside its reasonable control. Notices to you go
            to the owner’s email on file; notices to us go to the addresses below.
          </p>
        </Section>

        <Section id="contact" title="22. Contact">
          <p>
            {LEGAL_ENTITY} (operating as {BUSINESS_NAME})
            <br />
            {MAILING_ADDRESS}
            <br />
            <a className="text-brand-700 underline" href={`mailto:${SUPPORT_EMAIL}`}>
              {SUPPORT_EMAIL}
            </a>
          </p>
          <p>
            See also the{' '}
            <Link className="text-brand-700 underline" href="/privacy">
              Privacy Policy
            </Link>{' '}
            and the{' '}
            <Link className="text-brand-700 underline" href="/sms-opt-in">
              SMS Messaging &amp; Opt-In Policy
            </Link>
            .
          </p>
        </Section>

        <footer className="mt-14 border-t border-slate-200 pt-6 text-sm text-slate-400">
          © 2026 {LEGAL_ENTITY}. All rights reserved.
        </footer>
      </div>
    </main>
  )
}
