import { withIcons } from '@/lib/icons'

export default function Trades() {
  return (
    <section className="sec" id="trades">
      <div className="wrap">
        <div className="section-head reveal">
          <h2 className="h-section">One platform, every trade.</h2>
          <p className="lead">
            Whether you run a crew of 2 or 50, Servienza adapts to how your
            business works — not the other way around.
          </p>
        </div>

        <div className="trades">
          <a className="trade reveal" href="/industries/hvac">
            <div className="ic-box">
              <svg data-l="wind"></svg>
            </div>
            <h4>HVAC</h4>
            <p>Heating, cooling &amp; air quality</p>
            <span className="trade-go">
              <svg data-l="arrow-right"></svg>
            </span>
          </a>

          <a className="trade reveal" href="/industries/plumbing">
            <div className="ic-box">
              <svg data-l="wrench"></svg>
            </div>
            <h4>Plumbing</h4>
            <p>Leak repairs, installs &amp; maintenance</p>
            <span className="trade-go">
              <svg data-l="arrow-right"></svg>
            </span>
          </a>

          <a className="trade reveal" href="/industries/pool-service">
            <div className="ic-box">
              <svg data-l="droplet"></svg>
            </div>
            <h4>Pool Service</h4>
            <p>Cleaning, chemicals &amp; equipment</p>
            <span className="trade-go">
              <svg data-l="arrow-right"></svg>
            </span>
          </a>

          <a className="trade reveal" href="/industries/pest-control">
            <div className="ic-box">
              <svg data-l="bug"></svg>
            </div>
            <h4>Pest Control</h4>
            <p>Inspection, treatment &amp; prevention</p>
            <span className="trade-go">
              <svg data-l="arrow-right"></svg>
            </span>
          </a>

          <a className="trade reveal" href="/industries/pet-grooming">
            <div className="ic-box">
              <svg data-l="scissors"></svg>
            </div>
            <h4>Pet Grooming</h4>
            <p>Mobile &amp; in-home grooming</p>
            <span className="trade-go">
              <svg data-l="arrow-right"></svg>
            </span>
          </a>

          <a className="trade reveal" href="/industries/landscaping">
            <div className="ic-box">
              <svg data-l="leaf"></svg>
            </div>
            <h4>Landscaping</h4>
            <p>Lawn care, design &amp; maintenance</p>
            <span className="trade-go">
              <svg data-l="arrow-right"></svg>
            </span>
          </a>

          <a className="trade reveal" href="/industries/cleaning">
            <div className="ic-box">
              <svg data-l="sparkles"></svg>
            </div>
            <h4>Cleaning</h4>
            <p>Residential &amp; commercial cleaning</p>
            <span className="trade-go">
              <svg data-l="arrow-right"></svg>
            </span>
          </a>

          <a className="trade reveal" href="/industries/electrical">
            <div className="ic-box">
              <svg data-l="zap"></svg>
            </div>
            <h4>Electrical</h4>
            <p>Wiring, panels &amp; lighting</p>
            <span className="trade-go">
              <svg data-l="arrow-right"></svg>
            </span>
          </a>

          <a className="trade reveal" href="/industries/home-beauty">
            <div className="ic-box">
              <svg data-l="heart"></svg>
            </div>
            <h4>Home Beauty</h4>
            <p>In-home beauty &amp; wellness</p>
            <span className="trade-go">
              <svg data-l="arrow-right"></svg>
            </span>
          </a>

          <a className="trade reveal" href="/industries/painting">
            <div className="ic-box">
              <svg data-l="paintbrush"></svg>
            </div>
            <h4>Painting</h4>
            <p>Interior &amp; exterior painting</p>
            <span className="trade-go">
              <svg data-l="arrow-right"></svg>
            </span>
          </a>

          <a className="trade reveal" href="/industries/handyman">
            <div className="ic-box">
              <svg data-l="hammer"></svg>
            </div>
            <h4>Handyman</h4>
            <p>General home repairs &amp; fixes</p>
            <span className="trade-go">
              <svg data-l="arrow-right"></svg>
            </span>
          </a>

          <div className="trade cta-tile reveal">
            <h4>Don't see your trade?</h4>
            <p>
              We handle full migration so you can switch without skipping a
              beat.
            </p>
            <a className="btn-link" href="#contact">
              Talk to us
              <svg data-l="arrow-right"></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}