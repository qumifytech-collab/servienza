// @ts-nocheck
/* Bridge runtime for the imported markup: SVG icon injection + small interactions.
   Ported from the standalone build (icons.js / site.js / calc.js). */

const ICONS = {
    'menu': "<path d='M4 6h16M4 12h16M4 18h16'/>",
    'arrow-right': "<path d='M5 12h14'/><path d='m12 5 7 7-7 7'/>",
    'check': "<path d='M20 6 9 17l-5-5'/>",
    'x': "<path d='M18 6 6 18'/><path d='M6 6l12 12'/>",
    'minus': "<path d='M5 12h14'/>",
    'plus': "<path d='M5 12h14'/><path d='M12 5v14'/>",
    'lock': "<rect x='3' y='11' width='18' height='11' rx='2'/><path d='M7 11V7a5 5 0 0 1 10 0v4'/>",
    'alert-triangle': "<path d='M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z'/><path d='M12 9v4'/><path d='M12 17h.01'/>",
    'route': "<circle cx='6' cy='19' r='3'/><path d='M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15'/><circle cx='18' cy='5' r='3'/>",
    'trending-down': "<path d='M22 17 13.5 8.5l-5 5L2 7'/><path d='M16 17h6v-6'/>",
    'wind': "<path d='M12.8 19.6A2 2 0 1 0 14 16H2'/><path d='M17.5 8a2.5 2.5 0 1 1 1.8 4.2H2'/><path d='M9.8 4.4A2 2 0 1 1 11 8H2'/>",
    'wrench': "<path d='M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z'/>",
    'droplet': "<path d='M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z'/>",
    'bug': "<path d='m8 2 1.88 1.88'/><path d='M14.12 3.88 16 2'/><path d='M9 7.13v-1a3 3 0 1 1 6 0v1'/><path d='M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6z'/><path d='M12 20v-9'/><path d='M6.53 9C4.6 8.8 3 7.1 3 5'/><path d='M6 13H2'/><path d='M3 21c0-2.1 1.7-3.9 3.8-4'/><path d='M20.97 5c0 2.1-1.6 3.8-3.5 4'/><path d='M22 13h-4'/><path d='M17.2 17c2.1.1 3.8 1.9 3.8 4'/>",
    'scissors': "<circle cx='6' cy='6' r='3'/><path d='M8.12 8.12 12 12'/><path d='M20 4 8.12 15.88'/><circle cx='6' cy='18' r='3'/><path d='M14.8 14.8 20 20'/>",
    'leaf': "<path d='M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z'/><path d='M2 21c0-3 1.85-5.36 5.08-6'/>",
    'sparkles': "<path d='m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z'/><path d='M5 3v4'/><path d='M19 17v4'/><path d='M3 5h4'/><path d='M17 19h4'/>",
    'zap': "<path d='M13 2 3 14h9l-1 8 10-12h-9l1-8z'/>",
    'heart': "<path d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7z'/>",
    'brush': "<path d='m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08'/><path d='M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z'/>",
    'paintbrush': "<path d='m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08'/><path d='M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z'/>",
    'hammer': "<path d='m15 12-8.5 8.5a2.12 2.12 0 1 1-3-3L12 9'/><path d='M17.64 15 22 10.64'/><path d='M20.91 11.7a1.65 1.65 0 0 0 0-2.33l-6.28-6.28a1.65 1.65 0 0 0-2.33 0l-1.06 1.06a1.65 1.65 0 0 0 0 2.33l6.28 6.28a1.65 1.65 0 0 0 2.33 0z'/>",
    'clipboard-list': "<rect width='8' height='4' x='8' y='2' rx='1' ry='1'/><path d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/><path d='M12 11h4'/><path d='M12 16h4'/><path d='M8 11h.01'/><path d='M8 16h.01'/>",
    'map-pin': "<path d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z'/><circle cx='12' cy='10' r='3'/>",
    'check-square': "<path d='m9 11 3 3L22 4'/><path d='M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11'/>",
    'users': "<path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'/><circle cx='9' cy='7' r='4'/><path d='M22 21v-2a4 4 0 0 0-3-3.87'/><path d='M16 3.13a4 4 0 0 1 0 7.75'/>",
    'package': "<path d='M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z'/><path d='m3.3 7 8.7 5 8.7-5'/><path d='M12 22V12'/>",
    'calendar': "<rect width='18' height='18' x='3' y='4' rx='2' ry='2'/><path d='M16 2v4'/><path d='M8 2v4'/><path d='M3 10h18'/>",
    'bar-chart': "<path d='M12 20V10'/><path d='M18 20V4'/><path d='M6 20v-4'/>",
    'camera': "<path d='M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z'/><circle cx='12' cy='13' r='3'/>",
    'repeat': "<path d='m17 2 4 4-4 4'/><path d='M3 11v-1a4 4 0 0 1 4-4h14'/><path d='m7 22-4-4 4-4'/><path d='M21 13v1a4 4 0 0 1-4 4H3'/>",
    'move': "<path d='M5 9 2 12l3 3'/><path d='M9 5l3-3 3 3'/><path d='M15 19l-3 3-3-3'/><path d='M19 9l3 3-3 3'/><path d='M2 12h20'/><path d='M12 2v20'/>",
    'activity': "<path d='M22 12h-4l-3 9L9 3l-3 9H2'/>",
    'bell': "<path d='M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9'/><path d='M10.3 21a1.94 1.94 0 0 0 3.4 0'/>",
    'message-square': "<path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'/>",
    'mail': "<rect width='20' height='16' x='2' y='4' rx='2'/><path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'/>",
    'credit-card': "<rect width='20' height='14' x='2' y='5' rx='2'/><path d='M2 10h20'/>",
    'badge-percent': "<path d='M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76z'/><path d='M9 15 15 9'/><path d='M9.5 9h.01'/><path d='M14.5 14h.01'/>",
    'refresh-cw': "<path d='M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8'/><path d='M21 3v5h-5'/><path d='M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16'/><path d='M8 16H3v5'/>",
    'phone': "<path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z'/>",
    'hand-heart': "<path d='M11 14h2a2 2 0 0 0 2-2 2 2 0 0 0-2-2H9.5l-2.7-2.7A1 1 0 0 0 6.1 5H2'/><path d='M5 18l1.4-1.4a2 2 0 0 1 1.4-.6H13a2 2 0 0 0 2-2'/><path d='M14.4 9.6a2 2 0 0 0 2.8 0l1.3-1.3a2 2 0 0 0 0-2.8 2 2 0 0 0-2.8 0l-.7.7-.7-.7a2 2 0 0 0-2.8 0 2 2 0 0 0 0 2.8z'/><path d='M2 13v8'/>",
    'monitor': "<rect width='20' height='14' x='2' y='3' rx='2'/><path d='M8 21h8'/><path d='M12 17v4'/>",
    'smartphone': "<rect width='14' height='20' x='5' y='2' rx='2' ry='2'/><path d='M12 18h.01'/>",
    'twitter': "<path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'/>",
    'linkedin': "<path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'/><rect width='4' height='12' x='2' y='9'/><circle cx='4' cy='4' r='2'/>",
    'instagram': "<rect width='20' height='20' x='2' y='2' rx='5' ry='5'/><path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'/><path d='M17.5 6.5h.01'/>"
};

function injectIcons(root) {
  (root || document).querySelectorAll('svg[data-l]').forEach(function (el) {
    var name = el.getAttribute('data-l');
    if (!ICONS[name] || el.dataset.done) return;
    el.setAttribute('viewBox', '0 0 24 24');
    el.setAttribute('width', '18');
    el.setAttribute('height', '18');
    el.setAttribute('fill', 'none');
    el.setAttribute('stroke', 'currentColor');
    el.setAttribute('stroke-width', '2');
    el.setAttribute('stroke-linecap', 'round');
    el.setAttribute('stroke-linejoin', 'round');
    el.innerHTML = ICONS[name];
    el.dataset.done = '1';
  });
}

let navBound = false;

export function initSite() {
  injectIcons();

  // sticky nav border on scroll
  var nav = document.getElementById('nav');
  if (nav && !navBound) {
    navBound = true;
    var onScroll = function () {
      if (window.scrollY > 8) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // faq accordion
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-a');
    if (!q || !a || q.__bound) return;
    q.__bound = true;
    q.addEventListener('click', function () {
      var open = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (o) {
        o.classList.remove('open');
        o.querySelector('.faq-a').style.maxHeight = null;
      });
      if (!open) { item.classList.add('open'); a.style.maxHeight = a.scrollHeight + 'px'; }
    });
  });

  // pricing monthly / annual toggle
  var cycleBtns = document.querySelectorAll('.price-toggle button');
  cycleBtns.forEach(function (btn) {
    if (btn.__bound) return;
    btn.__bound = true;
    btn.addEventListener('click', function () {
      cycleBtns.forEach(function (b) { b.classList.remove('on'); });
      btn.classList.add('on');
      var annual = btn.dataset.cycle === 'annual';
      document.querySelectorAll('.pprice .pv').forEach(function (pv) {
        var m = pv.getAttribute('data-m'), a = pv.getAttribute('data-a');
        if (m && a) pv.textContent = annual ? a : m;
      });
    });
  });

  initCalculator();
}

function initCalculator() {
  var PLANS = [
    { max: 3,  name: 'Starter', price: 49 },
    { max: 10, name: 'Growth',  price: 129 },
    { max: 20, name: 'Pro',     price: 299 }
  ];
  var WEEKS = 4.33, TEAM_MIN = 1, TEAM_MAX = 20;
  var calc = document.getElementById('calculator');
  if (!calc || calc.__bound) return;
  calc.__bound = true;
  var team = 4;

  function planFor(n){ for (var i=0;i<PLANS.length;i++) if (n<=PLANS[i].max) return PLANS[i]; return PLANS[PLANS.length-1]; }
  function money(n){ return '$' + Math.round(n).toLocaleString('en-US'); }
  function num(el){ var v=parseFloat(el.value); return isNaN(v)||v<0?0:v; }

  function recalc(){
    var current = 0;
    calc.querySelectorAll('.tool').forEach(function (t){ if (t.classList.contains('is-on')) current += num(t.querySelector('input')); });
    var hours = num(document.getElementById('hours'));
    var rate = num(document.getElementById('rate'));
    var timeVal = hours * rate * WEEKS;
    var plan = planFor(team);
    var net = current + timeVal - plan.price;
    document.getElementById('cr-monthly').textContent = money(net);
    document.getElementById('cr-annual').textContent = money(net * 12);
    document.getElementById('cr-current').textContent = money(current) + '/mo';
    document.getElementById('cr-time').textContent = money(timeVal) + '/mo';
    document.getElementById('cr-serv').textContent = '\u2212' + money(plan.price) + '/mo';
    document.getElementById('cr-plan').textContent = plan.name;
  }
  function setTeam(n){
    team = Math.max(TEAM_MIN, Math.min(TEAM_MAX, n));
    document.getElementById('team-val').textContent = team;
    document.getElementById('team-unit').textContent = team === 1 ? 'technician' : 'technicians';
    recalc();
  }
  calc.querySelectorAll('[data-stepper="team"] .step-btn').forEach(function (b){
    b.addEventListener('click', function(){ setTeam(team + parseInt(b.dataset.step, 10)); });
  });
  calc.querySelectorAll('.tool').forEach(function (t){
    t.querySelector('.tool-tick').addEventListener('click', function(){ t.classList.toggle('is-on'); recalc(); });
  });
  calc.querySelectorAll('input[type="number"]').forEach(function (inp){
    inp.addEventListener('input', recalc);
    inp.addEventListener('click', function(e){ e.stopPropagation(); });
  });
  setTeam(4);
}
