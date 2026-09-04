export default function DocumentsShowcase() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<section class="sec bg-2" id="documents">
  <div class="wrap showcase flip">
    <div class="showcase-text reveal">
      <span class="eyebrow">Documents</span>
      <h2 class="h-section" style="margin-top:16px">Every document. One place.</h2>
      <p class="lead" style="margin-top:18px">Permits, warranties, photos, contracts — upload once, file it to the right customer, and find it in seconds from their record. No more digging through email threads and shared drives.</p>
      <ul class="feat-list">
        <li><span class="ic-box"><svg data-l="folder"></svg></span><span class="ft"><b>One home for every file</b> <span>— PDFs, photos, Word &amp; Excel, filed to a customer or company-wide</span></span></li>
        <li><span class="ic-box"><svg data-l="lock"></svg></span><span class="ft"><b>Private by default</b> <span>— share a file with all technicians, or hand-pick exactly who sees it</span></span></li>
        <li><span class="ic-box"><svg data-l="mail"></svg></span><span class="ft"><b>One-click email</b> <span>— send any document straight to the customer it belongs to</span></span></li>
      </ul>
    </div>
    <div class="showcase-visual reveal">
      <div class="doc-card">
        <div class="doc-head"><span class="t">Documents</span><button class="doc-upload"><svg data-l="upload"></svg> Upload</button></div>
        <div class="doc-row">
          <span class="ic-box"><svg data-l="file-text"></svg></span>
          <div class="doc-info">
            <div class="doc-name">pool-permit-2026.pdf</div>
            <div class="doc-meta">Maria Garcia · "City permit — renewed March" · uploaded by Sarah</div>
          </div>
          <span class="doc-access shared">All technicians</span>
          <button class="doc-mail" aria-label="Email to customer"><svg data-l="mail"></svg></button>
        </div>
        <div class="doc-row">
          <span class="ic-box"><svg data-l="image"></svg></span>
          <div class="doc-info">
            <div class="doc-name">heater-install-photos.jpg</div>
            <div class="doc-meta">James Rodriguez · "Before/after — warranty claim" · uploaded by Mike</div>
          </div>
          <span class="doc-access shared">2 technicians</span>
          <button class="doc-mail" aria-label="Email to customer"><svg data-l="mail"></svg></button>
        </div>
        <div class="doc-row">
          <span class="ic-box"><svg data-l="file-text"></svg></span>
          <div class="doc-info">
            <div class="doc-name">insurance-certificate.pdf</div>
            <div class="doc-meta">Company · "2026 liability coverage" · uploaded by Sarah</div>
          </div>
          <span class="doc-access">Admins only</span>
          <button class="doc-mail" aria-label="Email to customer"><svg data-l="mail"></svg></button>
        </div>
      </div>
    </div>
  </div>
</section>` }} />
  )
}
