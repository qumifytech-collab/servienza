const fs = require('fs');
const ic = (n, s = 20, c = 'currentColor', extra = '') => fs.readFileSync(`node_modules/lucide-static/icons/${n}.svg`, 'utf8')
  .replace('<svg', `<svg width="${s}" height="${s}" style="color:${c};flex:none;${extra}"`).replace(/\n/g, '');
const MAN = '/home/claude/servienza2/node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2';
const MONO = `${__dirname}/node_modules/@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2`;

const statusBar = `<div class="sb"><span>9:41</span><span class="sbr">${ic('signal', 14)}${ic('wifi', 14)}${ic('battery-full', 18)}</span></div>`;
const tabBar = (active) => {
  const tabs = [['My Day', 'sun'], ['Dispatch', 'route'], ['Customers', 'users'], ['Service', 'wrench'], ['More', 'menu']];
  return `<div class="tabbar">${tabs.map(([l, i]) => `<div class="tab ${l === active ? 'on' : ''}">${ic(i, 20)}<span>${l}</span></div>`).join('')}</div><div class="home"></div>`;
};
const pill = (txt, bg, fg) => `<span class="pill" style="background:${bg};color:${fg}">${txt}</span>`;
const job = (n, name, addr, meta, st, tags, opts = {}) => {
  const acc = opts.oneOff ? '#D97706' : '#059669';
  const dot = opts.active ? '#378ADD' : (opts.done ? acc : '#1F2937');
  const stMap = { 'En Route': ['rgba(59,130,246,.2)', '#2563EB'], 'Completed': ['rgba(34,197,94,.2)', '#16A34A'], 'In Progress': ['rgba(168,85,247,.2)', '#9333EA'] };
  return `<div class="job" style="border-left-color:${acc};opacity:${opts.done ? .8 : 1}">
  <div class="num" style="background:${dot}">${n}</div>
  <div class="jb">
    <div class="row g6"><b class="jn">${name}</b>${st ? pill(st, ...stMap[st]) : ''}<span class="more" style="margin-left:${st ? 0 : 'auto'}">${ic('ellipsis-vertical', 15, '#6B7280')}</span></div>
    <div class="t12 sec">${addr}</div>
    <div class="t11 sec">${meta}</div>
    ${opts.win ? `<div class="t11" style="color:#1D9E75">✓ window ${opts.win}</div>` : ''}
    <div class="row g4 wrap" style="margin-top:2px">${tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    ${opts.live ? `<div class="row g8" style="margin-top:4px"><span class="row g6" style="flex:1;color:#22c55e;font-weight:600;font-size:13px"><i class="livedot"></i>Live tracking</span><span class="arrived">${ic('circle-check', 11, '#22c55e')}Arrived</span></div>` : ''}
  </div></div>`;
};
const drive = (txt, tight) => `<div class="drive" style="color:${tight ? '#A32D2D' : '#9CA3AF'};font-weight:${tight ? 600 : 400}">${ic(tight ? 'triangle-alert' : 'car', 12)}${txt}</div>`;

const myDay = `<div class="screen" id="mobile-my-day">${statusBar}<div class="pad">
<div class="row" style="align-items:flex-start;margin-bottom:20px"><div class="title" style="flex:1;color:#059669">Servienza</div><span class="hbtn">${ic('bell', 22, '#16160F')}</span><span class="hbtn">${ic('map-pin', 22, '#16160F')}</span></div>
<div class="segs"><div class="seg on">Today</div><div class="seg">Tomorrow</div><div class="seg">${ic('calendar-days', 12, '#8C8C83')}<span style="margin-left:6px">Pick date</span></div></div>
<div class="row g8" style="margin-bottom:12px">${[['2', 'Completed'], ['1', 'In progress'], ['4', 'Upcoming']].map(([n, l]) => `<div class="stat"><div class="mono" style="font-size:18px">${n}</div><div class="t11" style="color:#9CA3AF;font-weight:500">${l}</div></div>`).join('')}</div>
<div class="row g12" style="margin-bottom:16px"><div style="flex:1;min-width:0"><div class="t14 b600">Your day</div><div class="t13 sec">7 stops</div><div class="row g12" style="margin-top:2px"><span class="row g4 t11 sec"><i class="sw" style="background:#059669"></i>Recurring · 5</span><span class="row g4 t11 sec"><i class="sw" style="background:#D97706"></i>One-off · 2</span></div></div><div class="reorder">${ic('list-ordered', 18)}Reorder</div></div>
${job(1, 'Oakwood HOA', '1820 Oakwood Dr, Clearwater', '8:00 AM – 8:45 AM · North loop · 45 min', 'Completed', ['Weekly service'], { done: true })}
${drive('6 min · 2.1 mi')}
${job(2, 'Marina Club', '55 Harbor Way, Clearwater', '9:00 AM – 9:40 AM · North loop · 40 min', 'Completed', ['Weekly service', 'Filter clean'], { done: true })}
${drive('12 min · 4.8 mi')}
${job(3, 'Green Valley', '300 Green Valley Rd, Largo', '10:15 AM – 11:15 AM · North loop · 60 min', 'En Route', ['Weekly service', 'Equipment check'], { active: true, live: true, win: '10:00 AM – 12:00 PM' })}
${drive('only 4 min · 1.3 mi', true)}
${job(4, 'Patel', '48 Sunset Ct, Largo', '11:20 AM – 12:05 PM · One-off request · 45 min', '', ['Repair'], { oneOff: true })}
${drive('9 min · 3.6 mi')}
${job(5, 'Hillside Apts', '900 Hillside Blvd, Seminole', '1:00 PM – 2:00 PM · North loop · 60 min', '', ['Weekly service'])}
${drive('7 min · 2.9 mi')}
${job(6, 'Nguyen', '12 Bayview Ln, Seminole', '2:15 PM – 2:45 PM · One-off request · 30 min', '', ['Estimate visit'], { oneOff: true })}
</div>${tabBar('My Day')}</div>`;

const field = (l, v, unit) => `<div class="crow"><span class="t16 b500" style="flex:1">${l}</span>${unit ? `<span class="t10 sec b600">${unit}</span>` : ''}<span class="inp">${v}</span></div>`;
const sw = (l, on) => `<div class="crow"><span class="t16 b500" style="flex:1">${l}</span><span class="switch ${on ? 'on' : ''}"><i></i></span></div>`;
const checklist = `<div class="screen" id="mobile-checklist">${statusBar}<div class="pad">
<div class="row" style="margin-bottom:20px">${ic('arrow-left', 28)}</div>
<div class="t13 sec">Green Valley · Stop 3 of 7</div><div class="t16 b600" style="margin-top:4px">Weekly service</div><div class="t14 sec" style="margin-top:2px">300 Green Valley Rd, Largo</div>
<div class="card" style="margin-top:16px"><div class="row g6 t10 sec b600 up">${ic('sticky-note', 14, '#6B7280')}Service Notes</div><div class="t14" style="margin-top:6px">Gate code 4471. Dog in the yard is friendly.</div></div>
<div class="row g6 t14 sec" style="margin:18px 0 10px">${ic('clipboard-check', 14, '#6B7280')}Service Checklist</div>
<div class="t16 b600" style="margin:0 4px 8px">Readings</div>
${field('Pressure', '18', 'PSI')}${field('Chlorine', '3.0', 'PPM')}${field('pH', '7.4', '')}
<div class="t16 b600" style="margin:14px 4px 8px">Tasks</div>
${sw('Skimmer basket emptied', true)}${sw('Filter backwashed', true)}${sw('Walls brushed', true)}${sw('Equipment inspected', false)}
<div class="row g6 t10 sec b600 up" style="margin:18px 0 8px">${ic('camera', 14, '#6B7280')}Photos</div>
<div class="row g8"><div class="ph before"><span>Before</span></div><div class="ph after"><span>After</span></div><div class="ph add">${ic('plus', 22, '#8C8C83')}</div></div>
<div class="crow" style="margin-top:16px;align-items:flex-start;min-height:64px"><span class="t14 sec">Add notes...</span></div>
<div class="btn primary" style="margin-top:18px">${ic('check', 18, '#fff')}Mark Job Complete</div>
</div><div class="home"></div></div>`;

const hrow = (l, v, cls = '') => `<div class="row" style="gap:10px;padding:2px 0"><span class="t13 sec" style="width:64px">${l}</span><span class="t13 ${cls}">${v}</span></div>`;
const invoiceSent = `<div class="screen" id="mobile-invoice-sent">${statusBar}<div class="pad" style="padding-bottom:0">
<div class="row" style="margin-bottom:8px">${ic('arrow-left', 22)}<span style="flex:1"></span><span class="sq">${ic('share-2', 20)}</span><span class="sq" style="margin-left:8px">${ic('send', 20)}</span></div></div>
<div style="padding:4px 15px 12px;border-bottom:1px solid rgba(20,20,14,.11)">
<div class="row g8">${pill('Invoice sent', 'rgba(37,99,235,.15)', '#2563EB')}</div>
<div class="t20 b600" style="margin-top:8px">Green Valley</div>
<div style="margin-top:8px">${hrow('Phone', '(727) 555-0142', 'b600 u')}${hrow('Location', '300 Green Valley Rd, Largo FL 33770')}${hrow('Created', 'Nov 11, 2026')}${hrow('Due', 'Nov 26, 2026')}</div>
<div class="mono" style="font-size:34px;line-height:44px;letter-spacing:-2px;margin-top:12px">$185.00</div><div class="t13 sec">Balance due</div></div>
<div style="padding:20px 15px;border-bottom:1px solid rgba(20,20,14,.11);display:flex;flex-direction:column;gap:16px">
<div class="row" style="justify-content:space-between"><span class="t14 sec">Billing period</span><span class="t14 b600">Nov 1 – Nov 11, 2026</span></div>
<div class="row" style="justify-content:space-between"><span class="t14 sec">Service request</span><span class="mono t13" style="color:#3B82F6">SR-2041</span></div></div>
<div style="padding:16px 15px"><div class="t13 sec" style="margin-bottom:12px">Items</div>
${[['Weekly service', 'Nov 11 · 60 min', '$125.00'], ['Filter cartridge', '1 × $60.00', '$60.00']].map(([a, b, c]) => `<div class="row" style="justify-content:space-between;padding:8px 0;border-bottom:1px solid rgba(20,20,14,.08)"><div><div class="t14 b600">${a}</div><div class="t13 sec" style="margin-top:2px">${b}</div></div><span class="mono t13">${c}</span></div>`).join('')}
<div class="row" style="justify-content:space-between;padding:10px 0"><span class="t14 b600">Total</span><span class="mono t13">$185.00</span></div>
<div class="row g10" style="margin-top:12px;padding:12px;border:1px solid rgba(20,20,14,.11);border-radius:12px">${ic('link', 18, '#059669')}<div style="flex:1"><div class="t14 b600">Payment link</div><div class="t13 sec">Sent by text and email · reminders on</div></div>${ic('copy', 18, '#8C8C83')}</div></div>
<div class="dim"></div>
<div class="alert"><div class="at">Invoice sent</div><div class="am">Green Valley has been emailed a link to this invoice.</div><div class="ab">OK</div></div>
<div class="home"></div></div>`;

const invRow = (name, amt, num, addr, st, overdue) => {
  const S = { Paid: ['rgba(5,150,105,.1)', '#047857', 'rgba(5,150,105,.6)'], Sent: ['transparent', '#2563EB', 'rgba(37,99,235,.6)'], Draft: ['transparent', '#A16207', 'rgba(202,138,4,.6)'] }[st];
  return `<div class="card" style="margin-bottom:8px"><div class="row" style="justify-content:space-between;gap:8px"><b class="t15 b600" style="flex:1">${name}</b><span class="mono t14" style="color:${st === 'Paid' ? '#047857' : '#16160F'}">${amt}</span></div>
<div class="mono t12" style="margin-top:4px">${num}</div><div class="t13 sec">${addr}</div>
<div class="row g8" style="margin-top:8px">${overdue ? `<span class="pill" style="border:1px solid rgba(220,38,38,.7);color:#DC2626;background:transparent">Overdue</span>` : ''}<span class="pill" style="border:1px solid ${S[2]};background:${S[0]};color:${S[1]}">${st}</span></div></div>`;
};
const money = `<div class="screen" id="mobile-money">${statusBar}<div class="pad">
<div class="row" style="margin-bottom:4px">${ic('arrow-left', 22)}<span class="t20 b600" style="flex:1;margin-left:10px">Invoices</span><span class="plus">${ic('plus', 18, '#fff')}</span></div>
<div class="row g8" style="padding:12px 0 4px">${[['Outstanding', '$1,240'], ['Overdue', '2'], ['Paid (Nov)', '$6,830']].map(([l, v]) => `<div class="card" style="flex:1;padding:10px"><div class="t14 sec">${l}</div><div class="mono" style="font-size:20px;margin-top:8px">${v}</div></div>`).join('')}</div>
<div class="card row g10" style="padding:12px 16px;margin:12px 0 8px">${ic('search', 18, '#8C8C83')}<span class="t16 sec" style="font-weight:400">Search by customer name</span></div>
<div class="row g8" style="margin:4px 0 12px">${['All', 'Draft', 'Sent', 'Paid', 'Overdue'].map((t, i) => `<span class="chip ${i === 0 ? 'on' : ''}">${t}</span>`).join('')}</div>
${invRow('Green Valley', '$185.00', 'INV-1042', '300 Green Valley Rd, Largo', 'Sent')}
${invRow('Marina Club', '$240.00', 'INV-1041', '55 Harbor Way, Clearwater', 'Paid')}
${invRow('Oakwood HOA', '$1,120.00', 'INV-1040', '1820 Oakwood Dr, Clearwater', 'Paid')}
${invRow('Torres', '$95.00', 'INV-1036', '77 Palm Ave, Seminole', 'Sent', true)}
${invRow('Kelly', '$160.00', 'INV-1033', '5 Dune St, Clearwater', 'Sent', true)}
</div>${tabBar('More')}</div>`;

const map = `<svg class="map" viewBox="0 0 358 180" xmlns="http://www.w3.org/2000/svg"><rect width="358" height="180" fill="#EEF2EC"/><g stroke="#FFFFFF" stroke-width="6"><path d="M0 60H358M0 130H358M70 0V180M190 0V180M300 0V180"/></g><g stroke="#FFFFFF" stroke-width="3"><path d="M0 95H358M130 0V180M250 0V180M20 0V180M340 0V180M0 25H358M0 160H358"/></g><rect x="78" y="68" width="44" height="20" fill="#DDE4D8"/><rect x="200" y="100" width="40" height="24" fill="#DDE4D8"/><rect x="310" y="35" width="30" height="18" fill="#DDE4D8"/><path d="M0 140 Q 80 150 150 120 T 358 110" stroke="#B9D7F0" stroke-width="10" fill="none"/><path d="M20 60 L 70 60 L 70 95 L 190 95 L 190 130 L 250 130" stroke="#378ADD" stroke-width="3.5" fill="none" stroke-linecap="round"/><circle cx="20" cy="60" r="6" fill="#378ADD" stroke="#fff" stroke-width="2"/><g transform="translate(250 130)"><path d="M0-26c-8 0-14 6-14 14 0 10 14 24 14 24s14-14 14-24c0-8-6-14-14-14z" fill="#DC2626"/><circle r="5" cy="-12" fill="#fff"/></g></svg>`;
const clrow = (name, sub, c, done) => `<div class="crow" style="padding:12px 16px"><span class="dotc" style="background:${done ? 'rgba(5,150,105,.12)' : '#F7F7F4'}">${ic(done ? 'circle-check' : 'clipboard-list', 18, done ? '#059669' : '#8C8C83')}</span><div style="flex:1;margin-left:12px"><div class="t16 b500">${name}</div><div class="t13" style="color:${c}">${sub}</div></div><span class="sq" style="width:40px;height:40px;background:#F7F7F4">${ic('pencil', 16, '#6B7280')}</span></div>`;
const serviceDetail = `<div class="screen" id="mobile-service-detail">${statusBar}<div class="pad">
<div class="row" style="margin-bottom:16px">${ic('arrow-left', 22)}<span class="t20 b600" style="flex:1;margin-left:10px">Service</span></div>
<div class="row" style="border:1px solid rgba(20,20,14,.11);border-radius:12px;padding:10px 12px;margin-bottom:16px"><div style="flex:1;margin-right:8px"><div class="t16 b600">Green Valley</div><div class="t13 sec" style="margin-top:2px">300 Green Valley Rd, Largo FL 33770</div></div>${['phone-call', 'camera', 'map-pin'].map(i => `<span class="circ">${ic(i, 18, '#1D9E75')}</span>`).join('')}</div>
${map}
<div class="t13 sec" style="margin:16px 0 8px">Service type</div><div class="row g8 wrap">${['Weekly service', 'Equipment check'].map(t => `<span class="bluepill">${t}</span>`).join('')}</div>
<div class="t13 sec" style="margin:16px 0 8px">Checklists</div>
<div class="row" style="padding:0 4px 6px"><span class="t16" style="flex:1">Weekly service</span><span class="t13" style="color:#059669">1 of 2 done</span></div>
${clrow('Pool readings', 'Completed · tap to edit', '#059669', true)}${clrow('Equipment check', 'Not started', '#8C8C83', false)}
<div class="t13 sec" style="margin:16px 0 8px">Time on job</div><div class="row g10 card" style="padding:12px 16px">${ic('timer', 20, '#16a34a')}<span class="mono t16" style="color:#15803D">00:18:42</span></div>
<div class="t13 sec" style="margin:16px 0 8px">Costs</div><div class="card" style="padding:12px 16px;gap:8px;display:flex;flex-direction:column">
<div class="row g8"><span style="flex:1" class="row g8 t14 sec">${ic('circle-dollar-sign', 18, '#6B7280')}Material</span><span class="t14">$60.00</span></div>
<div class="row g8"><span style="flex:1" class="row g8 t14 sec">${ic('circle-dollar-sign', 18, '#6B7280')}Labor</span><span class="t14">$125.00</span></div>
<div class="row" style="border-top:1px solid rgba(20,20,14,.11);padding-top:8px"><span style="flex:1" class="t14 b600">Total</span><span class="t14 b600">$185.00</span></div></div>
<div class="row g10" style="margin-top:20px"><div class="btn outline" style="flex:1">${ic('map', 18)}Open Maps</div><div class="btn primary" style="flex:1">${ic('check', 18, '#fff')}Submit</div></div>
</div><div class="home"></div></div>`;

const dcard = (name, t, color, top, h, bad) => `<div class="dcard" style="top:${top}px;height:${h}px;border-left-color:${color}${bad ? ';background:#FCEBEB;border-color:#A32D2D' : ''}"><div class="t13 b600" style="line-height:16px">${name}</div><div class="t11 sec">${t}</div>${bad ? `<div class="t11" style="color:#A32D2D;font-weight:600">⚠ overlaps</div>` : ''}</div>`;
const dispatch = `<div class="screen" id="mobile-dispatch">${statusBar}<div class="pad" style="padding-bottom:0;flex:none">
<div class="row" style="margin-bottom:10px"><span class="t20 b600" style="flex:1">Dispatch board</span><span class="t14 sec">Nov 2026</span><span class="hbtn" style="margin-left:6px">${ic('sliders-horizontal', 20)}</span></div></div>
<div class="row" style="padding:0 8px 8px;border-bottom:1px solid rgba(20,20,14,.11)">${ic('chevron-left', 18, '#8C8C83')}<div class="row" style="flex:1;justify-content:space-around">${[['Mon', '9'], ['Tue', '10'], ['Wed', '11'], ['Thu', '12'], ['Fri', '13'], ['Sat', '14'], ['Sun', '15']].map(([d, n], i) => `<div class="day ${i === 2 ? 'on' : ''}"><span class="t13 sec">${d}</span><b class="t14">${n}</b></div>`).join('')}</div>${ic('chevron-right', 18, '#8C8C83')}</div>
<div class="row g6" style="padding:10px 12px;border-bottom:1px solid rgba(20,20,14,.11)">${[['circle-check', 'Progress', '5/14'], ['layout-list', 'Pending', '8'], ['zap', 'Active', '3'], ['clock', 'Behind', '1']].map(([i, l, v]) => `<div class="spill">${ic(i, 13, '#56564E')}<span class="t11 sec">${l}</span><b class="t12">${v}</b></div>`).join('')}</div>
<div class="row" style="margin:10px 12px 0;padding:8px 12px;border-radius:10px;background:#FCEBEB"><span class="t14" style="color:#A32D2D;font-weight:600;flex:1">1 conflict</span><span class="t14 sec">Show ›</span></div>
<div class="grid"><div class="gh"><div class="tc"></div>${['Maria', 'Dev', 'Sam'].map((n, i) => `<div class="th"><span class="av">${n[0]}</span><b class="t14 b600">${n}</b><span class="t10 sec">${[5, 5, 4][i]} stops</span></div>`).join('')}</div>
<div class="gb"><div class="tc">${['8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM'].map(h => `<div class="hr t11 sec">${h}</div>`).join('')}</div>
<div class="col">${dcard('Oakwood HOA', '8:00 – 8:45', '#059669', 0, 56)}${dcard('Marina Club', '9:00 – 9:40', '#059669', 80, 50)}${dcard('Green Valley', '10:15 – 11:15', '#059669', 180, 78)}${dcard('Patel', '11:20 – 12:05', '#D97706', 266, 58)}${dcard('Hillside Apts', '1:00 – 2:00', '#059669', 400, 60)}</div>
<div class="col">${dcard('Torres', '8:00 – 9:00', '#059669', 0, 78)}${dcard('Kelly', '9:00 – 9:45', '#059669', 80, 58)}${dcard('Lakeside Villas', '10:30 – 11:30', '#059669', 200, 78)}${dcard('Brooks', '11:15 – 12:00', '#D97706', 260, 58, true)}</div>
<div class="col">${dcard('Harbor Point', '8:30 – 9:30', '#059669', 40, 78)}${dcard('Nguyen', '10:00 – 10:30', '#D97706', 160, 38)}${dcard('Bayview HOA', '11:00 – 12:30', '#059669', 240, 118)}${dcard('Diaz', '1:00 – 1:45', '#D97706', 400, 58)}</div>
</div></div>${tabBar('Dispatch')}</div>`;

const approve = `<div class="screen web" id="customer-approve-estimate">${statusBar}
<div class="url">${ic('lock', 11, '#56564E')}app.servienza.com</div>
<div class="wcard">
<div class="row" style="justify-content:space-between;align-items:flex-start;border-bottom:1px solid #E5E7EB;padding-bottom:14px;gap:12px"><div><div style="font-size:19px;font-weight:600">Blue Wave Services</div><div class="t12" style="color:#6B7280;margin-top:2px">Clearwater, FL · (727) 555-0100</div></div><div style="text-align:right"><div class="t13" style="font-weight:600">Estimate EST-0118</div><div class="t12" style="color:#6B7280">Issued Nov 10, 2026</div><div class="row g4 t12" style="color:#D97706;justify-content:flex-end;margin-top:4px">${ic('clock', 13, '#D97706')}Valid until Dec 10</div></div></div>
<div class="row g10" style="margin-top:16px"><div class="wbox"><div class="wl">Prepared for</div><div class="t13" style="font-weight:500;margin-top:4px">Priya Patel</div><div class="t12" style="color:#6B7280">48 Sunset Ct, Largo FL</div></div><div class="wbox"><div class="wl">Project</div><div class="t13" style="font-weight:500;margin-top:4px">Pump replacement</div><div class="t12" style="color:#6B7280">Total <b style="color:#111827">$1,480.00</b></div></div></div>
<table class="wt"><tr class="wth"><th>Item</th><th style="text-align:right">Qty</th><th style="text-align:right">Amount</th></tr>
<tr><td>Variable-speed pump, 1.5 HP</td><td>1</td><td>$1,100.00</td></tr><tr><td>Installation &amp; plumbing</td><td>2 hr</td><td>$300.00</td></tr><tr><td>Haul away old unit</td><td>1</td><td>$80.00</td></tr></table>
<div class="row t13" style="justify-content:space-between;padding:10px 0 4px"><span style="color:#6B7280">Subtotal</span><span>$1,480.00</span></div>
<div class="row t14" style="justify-content:space-between;font-weight:600;border-top:1px solid #E5E7EB;padding-top:8px"><span>Total</span><span>$1,480.00</span></div>
<div class="row t13" style="justify-content:space-between;padding-top:6px;color:#6B7280"><span>Deposit due at approval</span><span style="color:#111827">$500.00</span></div>
<div class="row t13" style="justify-content:space-between;padding-top:2px;color:#6B7280"><span>Balance due on completion</span><span style="color:#111827">$980.00</span></div>
<div class="wsec"><div style="font-weight:600;font-size:15px">Approve this estimate</div>
<div class="t13" style="font-weight:500;margin-top:12px">Your full name</div><div class="winp">Priya Patel</div>
<div class="row g8 t13" style="align-items:flex-start;margin-top:12px"><span class="cb">${ic('check', 12, '#fff')}</span><span style="color:#374151;line-height:18px">I approve this estimate and agree to the terms. Typing my name is my electronic signature.</span></div>
<div class="wbtn" style="margin-top:16px">Approve &amp; Pay $500.00 deposit</div><div class="wbtn out">Decline</div>
<div class="t12" style="color:#6B7280;text-align:center;margin-top:10px;text-decoration:underline">Approve now, pay the deposit another way (Zelle, check) →</div></div>
</div><div class="home" style="background:#F3F4F6"></div></div>`;

const css = `
@font-face{font-family:Manrope;src:url(file://${MAN}) format('woff2');font-weight:200 800}
@font-face{font-family:JB;src:url(file://${MONO}) format('woff2');font-weight:100 800}
*{box-sizing:border-box;margin:0;padding:0}
body{background:#ddd;font-family:Manrope,sans-serif;color:#16160F;-webkit-font-smoothing:antialiased;display:flex;flex-wrap:wrap;gap:20px;padding:20px}
.screen{width:390px;height:844px;background:#FFFFFF;position:relative;overflow:hidden;display:flex;flex-direction:column;font-weight:500}
.sb{height:54px;display:flex;align-items:flex-end;justify-content:space-between;padding:0 28px 8px 32px;font-weight:600;font-size:16px}
.sbr{display:flex;gap:5px;align-items:center}
.pad{padding:4px 16px 16px;flex:1;overflow:hidden}
.row{display:flex;align-items:center}.g4{gap:4px}.g6{gap:6px}.g8{gap:8px}.g10{gap:10px}.g12{gap:12px}.wrap{flex-wrap:wrap}
.title{font-size:22px;line-height:30px;font-weight:700}
.sec{color:#56564E}.b500{font-weight:500}.b600{font-weight:600}.u{text-decoration:underline}.up{text-transform:uppercase;letter-spacing:.4px}
.t10{font-size:10px;line-height:14px}.t11{font-size:11px;line-height:15px}.t12{font-size:12px;line-height:16px}.t13{font-size:13px;line-height:18px}.t14{font-size:14px;line-height:20px}.t15{font-size:15px;line-height:20px}.t16{font-size:16px;line-height:22px}.t20{font-size:20px;line-height:28px}
.mono{font-family:JB,monospace;font-weight:500}
.hbtn{padding:8px;display:flex}
.segs{display:flex;gap:2px;padding:3px;border-radius:12px;border:1px solid rgba(20,20,14,.11);background:#F7F7F4;margin-bottom:12px}
.seg{flex:1;display:flex;align-items:center;justify-content:center;padding:6px;border-radius:999px;border:1px solid transparent;font-size:13px;line-height:18px;font-weight:600;color:#8C8C83}
.seg.on{background:#fff;border-color:#059669;color:#047857}
.stat{flex:1;border-radius:12px;padding:8px;text-align:center;border:1px solid rgba(20,20,14,.11);background:#fff}
.sw{width:8px;height:8px;border-radius:2px;display:inline-block}
.reorder{height:44px;display:flex;align-items:center;gap:8px;padding:0 16px;border-radius:16px;border:1px solid rgba(20,20,14,.11);background:#FBFBF9;font-size:14px;font-weight:600}
.job{display:flex;gap:10px;background:#FBFBF9;border:1px solid #F3F4F6;border-left:3px solid;border-radius:12px;padding:12px}
.num{width:22px;height:22px;border-radius:11px;color:#fff;font-size:11px;font-weight:600;display:flex;align-items:center;justify-content:center;margin-top:1px;flex:none}
.jb{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}
.jn{font-size:15px;line-height:20px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex-shrink:1}
.pill{font-size:11px;line-height:16px;padding:2px 8px;border-radius:999px;font-weight:600;white-space:nowrap}
.more{width:26px;height:26px;border:1px solid rgba(20,20,14,.11);border-radius:8px;display:flex;align-items:center;justify-content:center;flex:none}
.tag{font-size:10px;line-height:14px;padding:1px 7px;border-radius:999px;border:.5px solid #D1D5DB;background:#F3F4F6}
.livedot{width:8px;height:8px;border-radius:4px;background:#22c55e;display:inline-block}
.arrived{display:flex;align-items:center;gap:4px;border:1px solid #22c55e;border-radius:20px;padding:4px 10px;color:#22c55e;font-size:13px;font-weight:600}
.drive{display:flex;align-items:center;gap:5px;padding:5px 0 5px 34px;font-size:11px}
.tabbar{position:absolute;left:14px;right:14px;bottom:30px;height:66px;border-radius:40px;background:rgba(255,255,255,.92);border:1px solid rgba(20,20,14,.08);box-shadow:0 8px 24px rgba(20,20,14,.10);display:flex;align-items:center;padding:6px;backdrop-filter:blur(10px)}
.tab{flex:1;height:54px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;border-radius:27px;font-size:10px;font-weight:600;color:#8C8C83}
.tab.on{background:rgba(5,150,105,.10);color:#047857}
.home{position:absolute;left:0;right:0;bottom:0;height:34px;background:linear-gradient(rgba(255,255,255,0),#fff)}
.home:after{content:'';position:absolute;left:125px;bottom:8px;width:140px;height:5px;border-radius:3px;background:#16160F}
.card{background:#FBFBF9;border:1px solid rgba(20,20,14,.11);border-radius:12px;padding:12px 14px}
.crow{display:flex;align-items:center;gap:10px;background:#FBFBF9;border:1px solid rgba(20,20,14,.11);border-radius:12px;padding:10px 14px;margin-bottom:8px}
.inp{min-width:72px;text-align:right;padding:8px 12px;border-radius:10px;border:1px solid rgba(20,20,14,.18);background:#fff;font-family:JB,monospace;font-size:15px}
.switch{width:51px;height:31px;border-radius:16px;background:#E9E9EA;position:relative;flex:none}.switch i{position:absolute;top:2px;left:2px;width:27px;height:27px;border-radius:14px;background:#fff;box-shadow:0 2px 4px rgba(0,0,0,.2)}
.switch.on{background:#059669}.switch.on i{left:22px}
.ph{width:92px;height:92px;border-radius:12px;position:relative;overflow:hidden;background:#D9E2DD}.ph span{position:absolute;left:6px;bottom:6px;font-size:10px;font-weight:600;color:#fff;background:rgba(0,0,0,.45);padding:2px 6px;border-radius:6px}
.ph.before{background:linear-gradient(160deg,#5C7F6B,#2F4F3F)}.ph.after{background:linear-gradient(160deg,#7FC8DE,#2A8FB5)}
.ph.add{background:#F7F7F4;border:1px dashed rgba(20,20,14,.18);display:flex;align-items:center;justify-content:center}
.btn{height:50px;border-radius:14px;display:flex;align-items:center;justify-content:center;gap:8px;font-size:16px;font-weight:600}
.btn.primary{background:#14140F;color:#fff}.btn.outline{border:1px solid rgba(20,20,14,.18);color:#16160F}
.sq{width:44px;height:44px;border-radius:6px;border:1px solid rgba(20,20,14,.11);display:flex;align-items:center;justify-content:center}
.dim{position:absolute;inset:0;background:rgba(0,0,0,.28)}
.alert{position:absolute;left:62px;right:62px;top:330px;background:rgba(242,242,247,.96);border-radius:14px;text-align:center;padding-top:18px;overflow:hidden;backdrop-filter:blur(20px)}
.at{font-size:17px;font-weight:600}.am{font-size:13px;line-height:18px;padding:4px 16px 16px;color:#16160F}.ab{border-top:1px solid rgba(60,60,67,.29);height:44px;line-height:44px;color:#007AFF;font-size:17px;font-weight:600}
.plus{width:36px;height:36px;border-radius:18px;background:#14140F;display:flex;align-items:center;justify-content:center}
.chip{padding:6px 12px;border-radius:999px;border:1px solid rgba(20,20,14,.11);font-size:13px;font-weight:600;color:#56564E;background:#fff}.chip.on{background:#14140F;color:#fff;border-color:#14140F}
.circ{width:40px;height:40px;border-radius:20px;border:1px solid rgba(20,20,14,.11);display:flex;align-items:center;justify-content:center;margin-left:8px;background:#fff}
.map{width:100%;height:180px;border-radius:12px;display:block;border:1px solid rgba(20,20,14,.11)}
.bluepill{font-size:13px;padding:6px 12px;border-radius:12px;background:rgba(59,130,246,.1);border:1px solid #BFDBFE;color:#2563EB}
.dotc{width:34px;height:34px;border-radius:17px;display:flex;align-items:center;justify-content:center;flex:none}
.day{display:flex;flex-direction:column;align-items:center;gap:2px;padding:6px 8px;border-radius:12px}.day.on{background:rgba(5,150,105,.10)}.day.on *{color:#047857}
.spill{flex:1;display:flex;align-items:center;gap:3px;padding:6px 6px;min-width:0;border-radius:10px;border:1px solid rgba(20,20,14,.11);background:#FBFBF9;white-space:nowrap}.spill b{margin-left:auto}
.grid{margin-top:10px;flex:1;display:flex;flex-direction:column;overflow:hidden}
.gh{display:flex;border-bottom:1px solid rgba(20,20,14,.11)}.tc{width:52px;flex:none;margin-left:8px;border-right:1px solid rgba(20,20,14,.11)}
.th{flex:1;display:flex;align-items:center;gap:6px;padding:8px 8px;border-right:1px solid rgba(20,20,14,.11)}
.av{width:24px;height:24px;border-radius:12px;background:rgba(5,150,105,.12);color:#047857;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center}
.gb{display:flex;flex:1;position:relative;overflow:hidden;background:repeating-linear-gradient(#fff 0 79px,rgba(20,20,14,.09) 79px 80px)}
.hr{height:80px;padding:6px 6px 0;text-align:left}
.col{flex:1;position:relative;border-right:1px solid rgba(20,20,14,.11)}
.dcard{position:absolute;left:4px;right:4px;background:#FBFBF9;border:1px solid rgba(20,20,14,.11);border-left:3px solid;border-radius:6px;padding:6px 8px;overflow:hidden}
.web{background:#F3F4F6;font-family:Manrope,sans-serif}
.url{margin:4px 16px 10px;height:38px;border-radius:12px;background:#E5E7EB;display:flex;align-items:center;justify-content:center;gap:5px;font-size:14px;color:#374151;font-weight:500}
.wcard{margin:0 12px;background:#fff;border:1px solid #E5E7EB;border-radius:12px;padding:20px 16px;box-shadow:0 1px 2px rgba(0,0,0,.05);color:#111827}
.wbox{flex:1;border:1px solid #E5E7EB;border-radius:6px;padding:10px 12px}.wl{font-size:11px;text-transform:uppercase;color:#6B7280;font-weight:500;letter-spacing:.3px}
.wt{width:100%;border:1px solid #E5E7EB;border-radius:6px;border-collapse:separate;border-spacing:0;overflow:hidden;margin-top:16px;font-size:13px}
.wt th,.wt td{padding:8px 10px;text-align:left}.wt td:nth-child(n+2){text-align:right}.wth{background:#F9FAFB;color:#6B7280;font-size:11px;font-weight:500}.wt tr+tr td{border-top:1px solid #E5E7EB}
.wsec{border:1px solid #E5E7EB;border-radius:8px;padding:16px;margin-top:18px}
.winp{height:40px;border:1px solid #D1D5DB;border-radius:6px;padding:0 12px;display:flex;align-items:center;font-size:14px;margin-top:6px;box-shadow:0 0 0 2px rgba(5,150,105,.25)}
.cb{width:16px;height:16px;border-radius:4px;background:#111827;display:flex;align-items:center;justify-content:center;flex:none;margin-top:1px}
.wbtn{height:40px;border-radius:6px;background:#111827;color:#fff;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:500}
.wbtn.out{background:#fff;color:#111827;border:1px solid #D1D5DB;margin-top:8px}
`;
fs.writeFileSync('mocks.html', `<!doctype html><html><head><meta charset="utf-8"><style>${css}</style></head><body>${myDay}${checklist}${invoiceSent}${money}${serviceDetail}${dispatch}${approve}</body></html>`);
console.log('written');
