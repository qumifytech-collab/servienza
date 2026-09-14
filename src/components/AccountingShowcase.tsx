export default function AccountingShowcase() {
  return (
    <section className="sec bg-2" id="accounting">
      <div className="wrap showcase">
        <div className="showcase-text reveal">
          <span className="eyebrow">Accounting</span>
          <h2 className="h-section" style={{ marginTop: 16 }}>Know what you&rsquo;re owed. Every morning.</h2>
          <p className="lead" style={{ marginTop: 18 }}>Outstanding, overdue, and paid — in one view, updated the second a customer taps Pay. No spreadsheet, no month-end scramble.</p>
          <ul className="feat-list">
            <li><span className="ic-box"><svg data-l="trending-up"></svg></span><span className="ft"><b>Revenue and receivables at a glance</b> <span>— filter by week, month, quarter, or technician</span></span></li>
            <li><span className="ic-box"><svg data-l="clock"></svg></span><span className="ft"><b>Overdue surfaces itself</b> <span>— one click sends a reminder with the PDF attached</span></span></li>
            <li><span className="ic-box"><svg data-l="list"></svg></span><span className="ft"><b>Every invoice, payment, and receipt</b> <span>in one ledger — export or hand it to your bookkeeper</span></span></li>
          </ul>
        </div>
        <div className="showcase-visual reveal">
          <div className="acct">
            <div className="acct-hd"><span className="t">Accounts · September</span><span className="tabs"><span>Week</span><span className="on">Month</span><span>Quarter</span></span></div>
            <div className="kpis">
              <div className="kpi"><div className="l">Paid this month</div><div className="v num">$38,920</div><div className="d up">▲ 12% vs Aug</div></div>
              <div className="kpi"><div className="l">Outstanding</div><div className="v num">$12,480</div><div className="d">31 invoices</div></div>
              <div className="kpi"><div className="l">Overdue</div><div className="v num">$2,115</div><div className="d warn">4 invoices · 30+ days</div></div>
            </div>
            <div className="acct-chart">
              <div className="cl"><span>Collected per week</span><span>USD</span></div>
              <svg viewBox="0 0 520 120" aria-label="Weekly collections">
                <defs><linearGradient id="acctGrad" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#5FE3D0" stopOpacity=".35" /><stop offset="1" stopColor="#5FE3D0" stopOpacity="0" /></linearGradient></defs>
                <g stroke="rgba(255,255,255,.08)"><line x1="0" x2="520" y1="30" y2="30" /><line x1="0" x2="520" y1="60" y2="60" /><line x1="0" x2="520" y1="90" y2="90" /></g>
                <path d="M0 90 L65 78 L130 82 L195 60 L260 66 L325 44 L390 50 L455 28 L520 34 L520 120 L0 120Z" fill="url(#acctGrad)" />
                <path d="M0 90 L65 78 L130 82 L195 60 L260 66 L325 44 L390 50 L455 28 L520 34" fill="none" stroke="#5FE3D0" strokeWidth="2.5" strokeLinejoin="round" />
                <circle cx="455" cy="28" r="4" fill="#5FE3D0" />
                <text x="455" y="16" fill="#F3F3F1" fontSize="11" textAnchor="middle">$11.2k</text>
              </svg>
            </div>
            <table className="acct-table">
              <thead><tr><th>Invoice</th><th>Customer</th><th>Status</th><th style={{ textAlign: 'right' }}>Amount</th></tr></thead>
              <tbody>
                <tr><td>#1042</td><td>Maria Garcia <span className="c">· Weekly pool</span></td><td><span className="pill ok">Paid</span></td><td className="r num">$233.00</td></tr>
                <tr><td>#1041</td><td>Hilltop HOA <span className="c">· 3 pools</span></td><td><span className="pill warn">Partially paid</span></td><td className="r num">$1,860.00</td></tr>
                <tr><td>#1040</td><td>D. Nguyen <span className="c">· Filter swap</span></td><td><span className="pill bad">Overdue 12d</span></td><td className="r num">$412.50</td></tr>
                <tr><td>#1039</td><td>Sunset Apartments</td><td><span className="pill n">Sent</span></td><td className="r num">$2,240.00</td></tr>
                <tr><td>#1038</td><td>R. Patel <span className="c">· Opening</span></td><td><span className="pill n">Draft</span></td><td className="r num">$395.00</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
