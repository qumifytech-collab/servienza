export default function EstimatesShowcase() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<section class="sec bg-2" id="estimates">
  <div class="wrap showcase flip">
    <div class="showcase-visual reveal">
      <div class="invoice">
        <div class="invoice-top">
          <div><div class="co">Torres Pool &amp; Spa</div><div class="num">Estimate Q-2026-0007 · Rob Alvarez</div></div>
          <span class="invoice-status">Awaiting approval</span>
        </div>
        <div class="agr-steps">
          <span class="agr-step done"><svg data-l="check"></svg> Sent</span><span class="agr-arrow">→</span>
          <span class="agr-step current"><svg data-l="eye"></svg> Viewed</span><span class="agr-arrow">→</span>
          <span class="agr-step">Approved + deposit</span><span class="agr-arrow">→</span>
          <span class="agr-step">Job created</span>
        </div>
        <div class="invoice-body">
          <div class="inv-line"><span class="desc">Filter system replacement</span><span class="amt">$1,850.00</span></div>
          <div class="inv-line"><span class="desc">Installation labor</span><span class="amt">$600.00</span></div>
          <div class="inv-line"><span class="desc">Deposit due at approval</span><span class="amt">$500.00</span></div>
        </div>
        <div class="inv-total"><span class="tl">Total</span><span class="tv">$2,450.00</span></div>
        <div class="invoice-pay">
          <button class="pay-btn"><svg data-l="credit-card"></svg> Approve &amp; pay $500 deposit</button>
          <div class="pay-meta"><svg data-l="lock"></svg> Stripe-secured · or approve now and pay by Zelle or check</div>
        </div>
      </div>
      <div class="agr-stat">
        <span class="ic-box"><svg data-l="route"></svg></span>
        <div><div class="fnum">One connected thread</div><div class="flbl">estimate → deposit → job → invoices → payment, every record linked to the next</div></div>
      </div>
    </div>
    <div class="showcase-text reveal">
      <span class="eyebrow">Estimates &amp; deposits</span>
      <h2 class="h-section" style="margin-top:16px">Win the job with money down.</h2>
      <p class="lead" style="margin-top:18px">Send an estimate and your customer approves it online — paying the deposit in the same tap. The job, both invoices, and the paper trail create themselves.</p>
      <ul class="feat-list">
        <li><span class="ic-box"><svg data-l="badge-percent"></svg></span><span class="ft"><b>Deposits at approval</b> <span>— a percentage or fixed amount, paid through Stripe, or recorded from Zelle, check, or cash</span></span></li>
        <li><span class="ic-box"><svg data-l="file-text"></svg></span><span class="ft"><b>Invoices that write themselves</b> <span>— the deposit becomes a paid invoice instantly, and the final bill credits it automatically</span></span></li>
        <li><span class="ic-box"><svg data-l="shield-check"></svg></span><span class="ft"><b>Frozen at send</b> <span>— every estimate carries a tamper-evident fingerprint, and approval produces a signed receipt</span></span></li>
      </ul>
    </div>
  </div>
</section>` }} />
  )
}
