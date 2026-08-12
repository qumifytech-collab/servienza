import Icon from '@/components/Icon'

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-text">
          <span className="trust-tag reveal">
            Early access — free setup for our first crews
          </span>

          <h1 className="h-display reveal">
            The all-in-one platform for service businesses.
          </h1>

          <p className="lead reveal">
            Schedule, dispatch, track, invoice, and get paid — from one app your whole team will actually use. Built for HVAC, plumbing, pest control, pool service, and more.
          </p>

          <div className="hero-cta reveal">
            <a className="btn btn-accent btn-lg" href="#pricing">
              Start free trial
              <Icon name="arrow-right" className="icon" />
            </a>

            <a className="btn btn-ghost btn-lg" href="#dispatch">
              See how it works
            </a>
          </div>

          <div className="hero-fine reveal">
            <span className="dot">
              <Icon name="check" />
              14-day free trial
            </span>

            <span className="dot">
              <Icon name="check" />
              No credit card required
            </span>

            <span className="dot">
              <Icon name="check" />
              Free setup &amp; migration
            </span>
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="device">
            <div className="device-bar">
              <div className="dotrow">
                <i></i>
                <i></i>
                <i></i>
              </div>

              <span className="device-url">
                <Icon name="lock" />
                app.servienza.com/dispatch
              </span>
            </div>

            <div className="board">
              <div className="board-head">
                <div className="t">Today — 3 technicians, 12 jobs</div>

                <div className="seg">
                  <b className="on">Day</b>
                  <b>Week</b>
                </div>
              </div>

              <div className="tech-col">
                <div className="tech-id">
                  <span className="tech-av" style={{ background: "#3B82F6" }}>
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
                    <div className="jt">1:00</div>
                    <div className="jn">Chem — Rivera</div>
                  </div>
                </div>
              </div>

              <div className="tech-col">
                <div className="tech-id">
                  <span className="tech-av" style={{ background: "#0E8C7E" }}>
                    SK
                  </span>
                  <span className="tech-name">Sarah K.</span>
                </div>

                <div className="tech-jobs">
                  <div className="jobchip jc-blue">
                    <div className="jt">8:30</div>
                    <div className="jn">HVAC — Torres</div>
                  </div>

                  <div className="jobchip jc-amber">
                    <div className="jt">11:00</div>
                    <div className="jn">AC repair — Johnson</div>
                  </div>

                  <div className="jobchip jc-amber">
                    <div className="jt">11:15</div>
                    <div className="jn">Duct — Williams</div>
                  </div>
                </div>
              </div>

              <div className="tech-col">
                <div className="tech-id">
                  <span className="tech-av" style={{ background: "#7C83FD" }}>
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
                    <div className="jt">1:30</div>
                    <div className="jn">Rodent — Martinez</div>
                  </div>
                </div>
              </div>

              <div className="board-alert">
                <Icon name="alert-triangle" />
                <span>
                  <b>Conflict:</b> Sarah K. has overlapping jobs at 11:00 — 15 min travel time required
                </span>
              </div>
            </div>
          </div>

          <div className="float-card reveal">
            <div className="ic-box">
              <Icon name="route" />
            </div>

            <div>
              <div className="fnum">47 miles</div>
              <div className="flbl">saved with route optimization</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
