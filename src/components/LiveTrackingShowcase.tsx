export default function LiveTrackingShowcase() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<section class="sec" id="tracking">
  <div class="wrap showcase">
    <div class="showcase-text reveal">
      <span class="eyebrow">Live tracking</span>
      <h2 class="h-section" style="margin-top:16px">Customers see you coming. You see everything.</h2>
      <p class="lead" style="margin-top:18px">Send customers a live tracking link when the tech heads out — and watch every route from the office: who's en route, who's arrived, and who's running behind.</p>
      <ul class="feat-list">
        <li><span class="ic-box"><svg data-l="navigation"></svg></span><span class="ft"><b>Customer tracking links</b> <span>— a live "on the way" map for any visit; links expire once the job is done</span></span></li>
        <li><span class="ic-box"><svg data-l="map-pin"></svg></span><span class="ft"><b>Office live map</b> <span>— every technician's route with En Route → Arrived → Done at a glance</span></span></li>
        <li><span class="ic-box"><svg data-l="clipboard-list"></svg></span><span class="ft"><b>Job-by-job accountability</b> <span>— statuses, skip reasons, and service reports logged with who and when</span></span></li>
      </ul>
    </div>
    <div class="showcase-visual reveal">
      <div class="trk-card">
        <div class="trk-head">
          <div class="trk-co">Torres Pool &amp; Spa</div>
          <div class="trk-title"><span class="live-dot"></span> Mike is on the way</div>
        </div>
        <div class="trk-steps">
          <span class="agr-step current"><svg data-l="navigation"></svg> On the way</span><span class="agr-arrow">→</span>
          <span class="agr-step">Arrived</span><span class="agr-arrow">→</span>
          <span class="agr-step">Completed</span>
        </div>
        <div class="trk-map">
          <div class="trk-trail"></div>
          <div class="trk-eta">12 min away</div>
          <div class="trk-tech"></div>
          <div class="trk-pin"><svg data-l="map-pin"></svg></div>
        </div>
        <div class="trk-foot"><svg data-l="lock"></svg> Live view · updates automatically · this link expires after the visit</div>
      </div>
      <div class="agr-stat">
        <span class="ic-box"><svg data-l="activity"></svg></span>
        <div><div class="fnum">7 of 12 stops done</div><div class="flbl">the office sees every technician's progress — and who's running behind</div></div>
      </div>
    </div>
  </div>
</section>` }} />
  )
}
