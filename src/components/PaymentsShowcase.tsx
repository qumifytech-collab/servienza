export default function PaymentsShowcase() {
  return (
    <section className="sec" id="payments">
      <div className="wrap showcase flip">
        <div className="showcase-text reveal">
          <span className="eyebrow">Invoicing</span>
          <h2 className="h-section" style={{ marginTop: 16 }}>The invoice writes itself when the job closes.</h2>
          <p className="lead" style={{ marginTop: 18 }}>Service logs become line items. Deposits get credited. Reminders go out on their own. You approve; the rest is handled.</p>
          <ul className="feat-list">
            <li><span className="ic-box"><svg data-l="check-square"></svg></span><span className="ft"><b>Draft → Approved → Sent → Paid</b> <span>— one status, always current, on web and mobile</span></span></li>
            <li><span className="ic-box"><svg data-l="bell"></svg></span><span className="ft"><b>Automatic reminders</b> <span>with a fresh pay link and the PDF attached</span></span></li>
            <li><span className="ic-box"><svg data-l="circle-dollar-sign"></svg></span><span className="ft"><b>Deposits credited automatically</b> <span>— the estimate deposit lands on the final bill</span></span></li>
          </ul>
        </div>
        <div className="showcase-visual reveal">
          <div className="invoice">
            <div className="invoice-top">
              <div><div className="co">Torres Pool &amp; Spa</div><div className="num">Invoice #1041 · Hilltop HOA · Due Sep 15</div></div>
              <span className="pill warn">Partially paid</span>
            </div>
            <div className="life">
              <div className="st done"><i><svg data-l="check"></svg></i>Draft</div>
              <div className="st done"><i><svg data-l="check"></svg></i>Approved</div>
              <div className="st done"><i><svg data-l="check"></svg></i>Sent</div>
              <div className="st now"><i>4</i>Partial</div>
              <div className="st"><i>5</i>Paid</div>
            </div>
            <div className="invoice-body">
              <div className="inv-line"><span className="desc">Weekly service · 3 pools × 4 visits <span className="tag">from service logs</span></span><span className="amt">$1,440.00</span></div>
              <div className="inv-line"><span className="desc">Chemical balance &amp; testing</span><span className="amt">$180.00</span></div>
              <div className="inv-line"><span className="desc">Pump seal replacement</span><span className="amt">$240.00</span></div>
              <div className="inv-line credit"><span className="desc">Deposit paid on estimate #E-217</span><span className="amt">−$500.00</span></div>
            </div>
            <div className="inv-total"><span className="tl">Balance due</span><span className="tv"><small>of $1,860.00</small>$1,360.00</span></div>
            <div className="inv-actions">
              <span className="btn-sm accent">Send reminder</span>
              <span className="btn-sm">Record payment</span>
              <span className="meta">Reminder sent Sep 3 · opened</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
