export default function DispatchShowcase() {
  return (
    <section className="sec" id="dispatch">
      <div className="wrap showcase">
        <div className="showcase-text reveal">

          <h2 className="h-section" style={{ marginTop: "16px" }}>
            See conflicts before they happen.
          </h2>

          <p className="lead" style={{ marginTop: "18px" }}>
            The dispatcher board shows every technician, every job, and flags
            conflicts in real time — so double-bookings and impossible travel
            times get caught before they hit the field.
          </p>

          <ul className="feat-list">
            <li>
              <span className="ic-box">
                <svg data-l="move"></svg>
              </span>
              <span className="ft">
                <b>Drag &amp; drop scheduling</b>{" "}
                <span>with live conflict detection</span>
              </span>
            </li>

            <li>
              <span className="ic-box">
                <svg data-l="route"></svg>
              </span>
              <span className="ft">
                <b>Automatic route optimization</b>{" "}
                <span>
                  using Google Maps travel time between jobs
                </span>
              </span>
            </li>

            <li>
              <span className="ic-box">
                <svg data-l="activity"></svg>
              </span>
              <span className="ft">
                <b>Real-time status</b>{" "}
                <span>updates from every technician in the field</span>
              </span>
            </li>
          </ul>

          <div style={{ marginTop: "30px" }}>
            <a className="btn-link" href="#pricing">
              Start your free trial
              <svg data-l="arrow-right"></svg>
            </a>
          </div>
        </div>

        <div className="showcase-visual reveal">
          <div className="device">
            <div className="device-bar">
              <div className="dotrow">
                <i></i>
                <i></i>
                <i></i>
              </div>

              <span className="device-url">
                <svg data-l="lock"></svg>
                app.servienza.com/dispatch
              </span>
            </div>

            <div className="board">
              <div className="board-head">
                <div className="t">
                  Today: 6 technicians · 24 jobs
                </div>

                <div className="seg">
                  <b className="on">Day</b>
                  <b>Week</b>
                </div>
              </div>

              <div className="tech-col">
                <div className="tech-id">
                  <span
                    className="tech-av"
                    style={{ background: "#3B82F6" }}
                  >
                    MT
                  </span>
                  <span className="tech-name">Mike T.</span>
                </div>

                <div className="tech-jobs">
                  <div className="jobchip jc-teal">
                    <div className="jt">8:00</div>
                    <div className="jn">Pool — Garcia</div>
                  </div>

                  <div className="jobchip jc-teal">
                    <div className="jt">10:30</div>
                    <div className="jn">Filter — Chen</div>
                  </div>

                  <div className="jobchip jc-teal">
                    <div className="jt">3:30</div>
                    <div className="jn">Repair — Park</div>
                  </div>
                </div>
              </div>

              <div className="tech-col">
                <div className="tech-id">
                  <span
                    className="tech-av"
                    style={{ background: "#0E8C7E" }}
                  >
                    SK
                  </span>
                  <span className="tech-name">Sarah K.</span>
                </div>

                <div className="tech-jobs">
                  <div className="jobchip jc-blue">
                    <div className="jt">8:30</div>
                    <div className="jn">HVAC — Torres</div>
                  </div>

                  <div className="jobchip jc-blue">
                    <div className="jt">11:00</div>
                    <div className="jn">AC — Johnson</div>
                  </div>

                  <div className="jobchip jc-blue">
                    <div className="jt">2:30</div>
                    <div className="jn">Duct — Williams</div>
                  </div>
                </div>
              </div>

              <div className="tech-col">
                <div className="tech-id">
                  <span
                    className="tech-av"
                    style={{ background: "#7C83FD" }}
                  >
                    JR
                  </span>
                  <span className="tech-name">James R.</span>
                </div>

                <div className="tech-jobs">
                  <div className="jobchip jc-indigo">
                    <div className="jt">9:00</div>
                    <div className="jn">Pest — Adams</div>
                  </div>

                  <div className="jobchip jc-indigo">
                    <div className="jt">11:30</div>
                    <div className="jn">Termite — Lee</div>
                  </div>

                  <div className="jobchip jc-indigo">
                    <div className="jt">4:00</div>
                    <div className="jn">Follow-up — Davis</div>
                  </div>
                </div>
              </div>

              <div className="board-alert">
                <svg data-l="route"></svg>

                <span>
                  <b>Routes optimized</b> — saving 47 miles today ·
                  recalculated 7:45 AM on traffic
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}