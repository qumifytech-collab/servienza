export default function QuickBooksShowcase() {
  return (
    <section className="sec" id="quickbooks">
      <div className="wrap showcase flip">
        <div className="showcase-text reveal">
          <span className="eyebrow">QuickBooks Online</span>
          <h2 className="h-section" style={{ marginTop: 16 }}>Your books close themselves.</h2>
          <p className="lead" style={{ marginTop: 18 }}>Customers, products, invoices, and payments sync to QuickBooks as they happen. No CSV exports, no double entry, no &ldquo;which one is right?&rdquo; at tax time.</p>
          <ul className="feat-list">
            <li><span className="ic-box"><svg data-l="refresh-cw"></svg></span><span className="ft"><b>Two-way sync</b> <span>— payments recorded in QuickBooks close the invoice in Servienza too</span></span></li>
            <li><span className="ic-box"><svg data-l="layers"></svg></span><span className="ft"><b>Products and tax rates mapped once</b> <span>— your QB items and default tax flow into every invoice</span></span></li>
            <li><span className="ic-box"><svg data-l="shield-check"></svg></span><span className="ft"><b>Sync status on every row</b> <span>— see exactly what&rsquo;s in QuickBooks and fix gaps in one click</span></span></li>
          </ul>
        </div>
        <div className="showcase-visual reveal">
          <div className="qb">
            <div className="qb-head">
              <div className="qb-brand"><span className="lg sv">S</span>Servienza</div>
              <div className="qb-sync"><svg data-l="arrow-right-left"></svg>Live sync</div>
              <div className="qb-brand right">QuickBooks<span className="lg qbo">qb</span></div>
            </div>
            <div className="qb-row"><div className="k">Maria Garcia<small>Customer</small></div><div className="mapped">Garcia, Maria</div><span className="pill ok">Synced</span></div>
            <div className="qb-row"><div className="k">Invoice #1042<small>$233.00 · Sep 5</small></div><div className="mapped">Invoice 1042</div><span className="pill ok">Synced</span></div>
            <div className="qb-row"><div className="k">Payment · Visa ••4242<small>$233.00 · Stripe</small></div><div className="mapped">Received payment → Undeposited funds</div><span className="pill ok">Synced</span></div>
            <div className="qb-row"><div className="k">Weekly pool cleaning<small>Product · $120.00</small></div><div className="mapped">Service: Pool Cleaning – Weekly</div><span className="pill ok">Synced</span></div>
            <div className="qb-row"><div className="k">Variable-speed pump install<small>Product · new</small></div><div className="mapped">Not in QuickBooks yet</div><span className="pill warn">Not synced</span></div>
            <div className="qb-foot"><span>1 item needs a QuickBooks product before its invoice can sync.</span><span className="btn-sm">Create in QuickBooks</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
