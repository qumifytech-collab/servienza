export default function StripeShowcase() {
  return (
    <section className="sec bg-2" id="stripe">
      <div className="wrap showcase">
        <div className="showcase-text reveal">
          <span className="eyebrow">Stripe payments</span>
          <h2 className="h-section" style={{ marginTop: 16 }}>Tap, pay, done. We take $0.</h2>
          <p className="lead" style={{ marginTop: 18 }}>Customers pay from the invoice email or text — card, Apple Pay, Google Pay, or ACH — with no account to create. Stripe&rsquo;s rate is the only fee. Servienza adds nothing on top.</p>
          <ul className="feat-list">
            <li><span className="ic-box"><svg data-l="credit-card"></svg></span><span className="ft"><b>Card, wallet, or bank</b> <span>— ACH for the big commercial jobs</span></span></li>
            <li><span className="ic-box"><svg data-l="badge-percent"></svg></span><span className="ft"><b>Zero platform fees</b> <span>— most competitors add 1–3% on top of Stripe</span></span></li>
            <li><span className="ic-box"><svg data-l="landmark"></svg></span><span className="ft"><b>Payouts to your bank in 2 days</b> <span>— every payment matched to its invoice automatically</span></span></li>
          </ul>
        </div>
        <div className="showcase-visual reveal">
          <div className="stripe-wrap">
            <div className="phone-frame"><div className="phone-screen">
              <div className="co">Torres Pool &amp; Spa</div>
              <div className="sub">Invoice #1042 · Maria Garcia</div>
              <div className="amt num">$233.00</div>
              <div className="sub">Due today</div>
              <div className="apple"> Pay</div>
              <div className="or">or pay with card</div>
              <div className="field card"><span>4242 4242 4242 4242</span><span>VISA</span></div>
              <div className="field"><span>MM / YY</span><span>CVC</span></div>
              <div className="field"><span>ACH bank transfer</span><span>›</span></div>
              <div className="pay">Pay $233.00</div>
              <div className="lock"><svg data-l="lock"></svg> Secured by Stripe</div>
            </div></div>
            <div className="stripe-side">
              <div className="mcard">
                <div className="fee">
                  <div className="col"><div className="l">Stripe</div><div className="v">2.9% + 30¢</div><div className="d">Standard card rate</div></div>
                  <div className="col us"><div className="l">Servienza</div><div className="v">$0.00</div><div className="d">No markup. Ever.</div></div>
                </div>
              </div>
              <div className="mcard">
                <div className="payout"><span className="l">Next payout · Mon Sep 7</span><span className="v num">$4,318.60</span></div>
                <div className="payrow"><div className="who">Maria Garcia<small>#1042 · Visa ••4242</small></div><span className="m">Just now</span><span className="amt num">$233.00</span></div>
                <div className="payrow"><div className="who">Hilltop HOA<small>#1041 · ACH</small></div><span className="m">Sep 4</span><span className="amt num">$500.00</span></div>
                <div className="payrow"><div className="who">J. Okafor<small>#1037 · Apple Pay</small></div><span className="m">Sep 4</span><span className="amt num">$165.00</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
