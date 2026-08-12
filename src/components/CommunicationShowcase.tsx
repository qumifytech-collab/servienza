export default function CommunicationShowcase() {
  return (
    <section className="sec bg-2" id="communication">
      <div className="wrap showcase flip">
        <div className="showcase-visual reveal">
          <div className="msg-stack">
            <div className="msg">
              <div className="mhead">
                <span className="mtag">SMS · 1 day before</span>
                <span className="mtime">9:02 AM</span>
              </div>

              <div className="mtitle">Service reminder</div>

              <p>
                Hi Maria, your pool cleaning is scheduled for tomorrow between
                9–11 AM. Reply C to confirm.
              </p>
            </div>

            <div className="msg right">
              <div className="mhead">
                <span className="mtag">Push · 30 min before</span>
                <span className="mtime">8:34 AM</span>
              </div>

              <div className="mtitle">Technician en route</div>

              <p>
                Mike is on his way to your property. Track his arrival in real
                time.
              </p>
            </div>

            <div className="msg">
              <div className="mhead">
                <span className="mtag">Email · after service</span>
                <span className="mtime">11:48 AM</span>
              </div>

              <div className="mtitle">Service complete</div>

              <p>
                Your pool service is complete. View the service report and
                photos from today's visit.
              </p>
            </div>
          </div>
        </div>

        <div className="showcase-text reveal">

          <h2 className="h-section" style={{ marginTop: "16px" }}>
            Keep everyone in the loop.
          </h2>

          <p className="lead" style={{ marginTop: "18px" }}>
            Push notifications, texts, and emails — automated at every step,
            so your customers always know what's happening and your team never
            misses an update.
          </p>

          <ul className="feat-list">
            <li>
              <span className="ic-box">
                <svg data-l="bell"></svg>
              </span>

              <span className="ft">
                <b>Push notifications</b>{" "}
                <span>
                  for job assignments and schedule changes on iOS &amp; Android
                </span>
              </span>
            </li>

            <li>
              <span className="ic-box">
                <svg data-l="message-square"></svg>
              </span>

              <span className="ft">
                <b>Automated SMS</b>{" "}
                <span>
                  for reminders, en-route alerts, and payment follow-ups
                </span>
              </span>
            </li>

            <li>
              <span className="ic-box">
                <svg data-l="mail"></svg>
              </span>

              <span className="ft">
                <b>Branded emails</b>{" "}
                <span>
                  for invoices, summaries, and receipts
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}