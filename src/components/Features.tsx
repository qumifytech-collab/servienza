export default function Features() {
  return (
    <section className="sec bg-2" id="features">
      <div className="wrap">
        <div className="section-head reveal">
          <h2 className="h-section">
            Everything your crew needs, nothing they don't.
          </h2>
          <p className="lead">
            From service logs and GPS tracking to invoicing and customer alerts
            — every tool your business needs, built into one simple platform.
          </p>
        </div>

        <div className="features">
          <div className="feature reveal">
            <div className="ic-box">
              <svg data-l="clipboard-list"></svg>
            </div>
            <h4>Service Logs</h4>
            <p>
              Detailed service history with photos, notes, and inventory used
              on every job.
            </p>
          </div>

          <div className="feature reveal">
            <div className="ic-box">
              <svg data-l="map-pin"></svg>
            </div>
            <h4>GPS Tracking</h4>
            <p>Real-time crew location and route history on every job.</p>
          </div>

          <div className="feature reveal">
            <div className="ic-box">
              <svg data-l="check-square"></svg>
            </div>
            <h4>Smart Checklists</h4>
            <p>
              Out-of-the-box templates plus fully custom checklists for any
              service.
            </p>
          </div>

          <div className="feature reveal">
            <div className="ic-box">
              <svg data-l="users"></svg>
            </div>
            <h4>Customer Management</h4>
            <p>
              Full profiles with property details, service history, and
              communication logs.
            </p>
          </div>

          <div className="feature reveal">
            <div className="ic-box">
              <svg data-l="package"></svg>
            </div>
            <h4>Product Library</h4>
            <p>
              Manage your inventory of parts, chemicals, and materials across
              all jobs.
            </p>
          </div>

          <div className="feature reveal">
            <div className="ic-box">
              <svg data-l="calendar"></svg>
            </div>
            <h4>Technician Management</h4>
            <p>
              Calendars, skills, time-off, and availability — all in one place.
            </p>
          </div>

          <div className="feature reveal">
            <div className="ic-box">
              <svg data-l="bar-chart"></svg>
            </div>
            <h4>Reports &amp; Analytics</h4>
            <p>
              Revenue, job completion, technician performance — the data you
              need to grow.
            </p>
          </div>

          <div className="feature reveal">
            <div className="ic-box">
              <svg data-l="camera"></svg>
            </div>
            <h4>Photo Documentation</h4>
            <p>
              Before/after photos on every job — proof of work for you and your
              customers.
            </p>
          </div>

          <div className="feature reveal">
            <div className="ic-box">
              <svg data-l="repeat"></svg>
            </div>
            <h4>Recurring Services</h4>
            <p>
              Each service scheduled independently with its own cadence and
              pricing.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}