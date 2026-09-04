export default function AgreementsShowcase() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<section class="sec" id="agreements">
  <div class="wrap showcase">
    <div class="showcase-text reveal">
      <span class="eyebrow">Agreements &amp; e-sign</span>
      <h2 class="h-section" style="margin-top:16px">From handshake to signed — in minutes.</h2>
      <p class="lead" style="margin-top:18px">Send professional service agreements from reusable templates. Customers sign from any device — no login, no printing — and the signed PDF files itself.</p>
      <ul class="feat-list">
        <li><span class="ic-box"><svg data-l="clipboard-list"></svg></span><span class="ft"><b>Templates with merge fields</b> <span>— customer, rates, and dates fill themselves in</span></span></li>
        <li><span class="ic-box"><svg data-l="send"></svg></span><span class="ft"><b>Sign from any device</b> <span>— you see the moment it's viewed, and reminders go out with one click</span></span></li>
        <li><span class="ic-box"><svg data-l="shield-check"></svg></span><span class="ft"><b>Audit trail built in</b> <span>— every signature records name, consent, IP, timestamp, and a tamper-evident fingerprint</span></span></li>
      </ul>
    </div>
    <div class="showcase-visual reveal">
      <div class="invoice">
        <div class="invoice-top">
          <div><div class="co">Torres Pool &amp; Spa</div><div class="num">Pool Service Agreement · Maria Garcia</div></div>
          <span class="invoice-status">Awaiting signature</span>
        </div>
        <div class="agr-steps">
          <span class="agr-step done"><svg data-l="check"></svg> Draft</span><span class="agr-arrow">→</span>
          <span class="agr-step done"><svg data-l="check"></svg> Sent</span><span class="agr-arrow">→</span>
          <span class="agr-step current"><svg data-l="eye"></svg> Viewed</span><span class="agr-arrow">→</span>
          <span class="agr-step">Signed</span>
        </div>
        <div class="invoice-body">
          <div class="inv-line"><span class="desc">Weekly pool service — 1284 Palm Court</span><span class="amt">$180/mo</span></div>
          <div class="inv-line"><span class="desc">Term</span><span class="amt">Sep 1, 2026 — Aug 31, 2027</span></div>
          <div style="padding-top:16px">
            <label class="agr-sign-label">Type your full name to sign</label>
            <div class="agr-sign-box">Maria Garcia</div>
            <div class="agr-consent"><svg data-l="check-square"></svg> I agree to sign this agreement electronically</div>
            <button class="pay-btn"><svg data-l="pen-line"></svg> Agree &amp; sign</button>
            <div class="pay-meta"><svg data-l="lock"></svg> Signature recorded with IP, timestamp &amp; document fingerprint</div>
          </div>
        </div>
      </div>
      <div class="agr-stat">
        <span class="ic-box"><svg data-l="shield-check"></svg></span>
        <div><div class="fnum">Signed PDF, delivered</div><div class="flbl">archived to the customer file and emailed to both sides — automatically</div></div>
      </div>
    </div>
  </div>
</section>` }} />
  )
}
