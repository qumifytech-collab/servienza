import Icon from '@/components/Icon'

export default function SavingsCalculator() {
  return (
    <section className="sec bg-2" id="calculator">
      <div className="wrap">
        <div className="section-head reveal">
          <h2 className="h-section">See what one platform saves you.</h2>
          <p className="lead">
            Most owners we talk to pay for five or six tools that don't talk to
            each other. Put in your own numbers — everything below is editable,
            and the math is yours.
          </p>
        </div>

        <div className="calc reveal">
          <div className="calc-inputs">
            <div className="calc-block">
              <div className="calc-label">How big is your team?</div>

              <div className="stepper" data-stepper="team">
                <button
                  className="step-btn"
                  data-step="-1"
                  aria-label="Fewer"
                >
                  &minus;
                </button>

                <div className="step-val">
                  <b id="team-val">4</b>{" "}
                  <span id="team-unit">technicians</span>
                </div>

                <button
                  className="step-btn"
                  data-step="1"
                  aria-label="More"
                >
                  +
                </button>
              </div>

              <p className="calc-hint">
                Sets which Servienza plan you'd be on.
              </p>
            </div>

            <div className="calc-block">
              <div className="calc-label-row">
                <div className="calc-label">Tools you pay for today</div>
                <span className="calc-hint">
                  tap to toggle · prices are editable
                </span>
              </div>

              <div className="tool-list" id="tool-list">
                <div className="tool is-on" data-price="29">
                  <button className="tool-tick" aria-label="Toggle">
                    <Icon name="check" />
                  </button>
                  <span className="tool-name">
                    Scheduling &amp; dispatch app
                  </span>
                  <span className="tool-cost">
                    $<input
                      type="number"
                      min="0"
                      value="29"
                      aria-label="Monthly price"
                    />
                    /mo
                  </span>
                </div>

                <div className="tool is-on" data-price="30">
                  <button className="tool-tick" aria-label="Toggle">
                    <Icon name="check" />
                  </button>
                  <span className="tool-name">GPS / fleet tracking</span>
                  <span className="tool-cost">
                    $<input
                      type="number"
                      min="0"
                      value="30"
                      aria-label="Monthly price"
                    />
                    /mo
                  </span>
                </div>

                <div className="tool is-on" data-price="35">
                  <button className="tool-tick" aria-label="Toggle">
                    <Icon name="check" />
                  </button>
                  <span className="tool-name">
                    Invoicing &amp; payments tool
                  </span>
                  <span className="tool-cost">
                    $<input
                      type="number"
                      min="0"
                      value="35"
                      aria-label="Monthly price"
                    />
                    /mo
                  </span>
                </div>

                <div className="tool is-on" data-price="19">
                  <button className="tool-tick" aria-label="Toggle">
                    <Icon name="check" />
                  </button>
                  <span className="tool-name">
                    Customer reminders / messaging
                  </span>
                  <span className="tool-cost">
                    $<input
                      type="number"
                      min="0"
                      value="19"
                      aria-label="Monthly price"
                    />
                    /mo
                  </span>
                </div>

                <div className="tool is-on" data-price="29">
                  <button className="tool-tick" aria-label="Toggle">
                    <Icon name="check" />
                  </button>
                  <span className="tool-name">Reviews &amp; marketing</span>
                  <span className="tool-cost">
                    $<input
                      type="number"
                      min="0"
                      value="29"
                      aria-label="Monthly price"
                    />
                    /mo
                  </span>
                </div>

                <div className="tool" data-price="25">
                  <button className="tool-tick" aria-label="Toggle">
                    <Icon name="check" />
                  </button>
                  <span className="tool-name">Reporting / analytics</span>
                  <span className="tool-cost">
                    $<input
                      type="number"
                      min="0"
                      value="25"
                      aria-label="Monthly price"
                    />
                    /mo
                  </span>
                </div>
              </div>
            </div>

            <div className="calc-block">
              <div className="calc-label">Admin time you'd save</div>

              <div className="calc-fields">
                <label className="calc-field">
                  <span>
                    Working hours on schedule, invoice &amp; paperwork
                  </span>
                  <input
                    type="number"
                    min="0"
                    id="hours"
                    value="5"
                  />
                </label>

                <label className="calc-field">
                  <span>What an hour of that time is worth ($)</span>
                  <input
                    type="number"
                    min="0"
                    id="rate"
                    value="30"
                  />
                </label>
              </div>

              <p className="calc-hint">
                Your estimate — set either to 0 to leave time savings out.
              </p>
            </div>
          </div>

          <div className="calc-result">
            <div className="cr-card">
              <div className="cr-kicker">
                Estimated savings with Servienza
              </div>

              <div className="cr-big">
                <span id="cr-monthly">$0</span>
                <span className="cr-per">/mo</span>
              </div>

              <div className="cr-annual">
                about <b id="cr-annual">$0</b> a year
              </div>

              <div className="cr-break">
                <div className="cr-line">
                  <span>Software you'd replace</span>
                  <b id="cr-current">$0/mo</b>
                </div>

                <div className="cr-line">
                  <span>Time saved (your estimate)</span>
                  <b id="cr-time">$0/mo</b>
                </div>

                <div className="cr-line minus">
                  <span>
                    Servienza <span id="cr-plan">Growth</span>
                  </span>
                  <b id="cr-serv">$0/mo</b>
                </div>
              </div>

              <a className="btn btn-accent" href="#pricing">
                Start free trial
                <Icon name="arrow-right" className="icon" />
              </a>

              <p className="cr-note">
                An estimate from the numbers you entered plus typical tool
                prices you can edit — not a guarantee.
              </p>
            </div>

            <div className="cr-setup">
              <div className="cr-setup-ic">
                <Icon name="hand-heart" />
              </div>

              <div>
                <b>And setup is on us.</b> A real person migrates your data,
                connects your other tools, and builds your workflows with you —
                so the switch costs you time you don't have to spend.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}