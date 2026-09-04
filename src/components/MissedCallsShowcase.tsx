export default function MissedCallsShowcase() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<section class="sec" id="missed-calls">
  <div class="wrap showcase">
    <div class="showcase-text reveal">
      <span class="eyebrow">Missed calls</span>
      <h2 class="h-section" style="margin-top:16px">Every missed call becomes a callback.</h2>
      <p class="lead" style="margin-top:18px">When your crew can't pick up, Servienza answers with your greeting, records the voicemail, and turns it into a transcribed, ready-to-work callback — matched to the right customer automatically.</p>
      <ul class="feat-list">
        <li><span class="ic-box"><svg data-l="mic"></svg></span><span class="ft"><b>Auto-answer &amp; transcription</b> <span>— a friendly greeting captures the voicemail and transcribes it in seconds</span></span></li>
        <li><span class="ic-box"><svg data-l="users"></svg></span><span class="ft"><b>Caller matched to customer</b> <span>— known callers link straight to their profile; unknown numbers become new leads</span></span></li>
        <li><span class="ic-box"><svg data-l="bell"></svg></span><span class="ft"><b>New → Handled triage</b> <span>— instant notifications and a live badge so no callback ever slips through</span></span></li>
      </ul>
    </div>
    <div class="showcase-visual reveal">
      <div class="vm-stack">
        <div class="vm-card">
          <div class="vm-head">
            <span class="vm-avatar">MG</span>
            <div>
              <div class="vm-name">Maria Garcia <span class="vm-match">Customer</span></div>
              <div class="vm-meta">(305) 555-0142 · 0:42 · 12 min ago</div>
            </div>
            <span class="vm-pill new">NEW</span>
          </div>
          <p class="vm-quote">"Hi, this is Maria on Palm Court — the pool pump is making a loud noise again. Can someone call me back today?"</p>
          <div class="vm-actions">
            <button class="vm-play"><svg data-l="play"></svg> Play voicemail</button>
            <button class="vm-handle"><svg data-l="check"></svg> Mark handled</button>
          </div>
        </div>
        <div class="vm-card">
          <div class="vm-head">
            <span class="vm-avatar">?</span>
            <div>
              <div class="vm-name">(786) 555-0198 <span class="vm-match lead-tag">New lead</span></div>
              <div class="vm-meta">0:31 · 1 hr ago</div>
            </div>
            <span class="vm-pill done">HANDLED</span>
          </div>
          <p class="vm-quote">"Hey, I got your number from my neighbor — looking for weekly service for a 15,000-gallon pool. Give me a call back."</p>
        </div>
        <div class="vm-note"><svg data-l="bell"></svg> Missed call from Maria Garcia — your team was notified the moment the transcript was ready.</div>
      </div>
    </div>
  </div>
</section>` }} />
  )
}
