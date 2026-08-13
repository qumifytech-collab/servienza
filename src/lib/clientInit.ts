// @ts-nocheck
/* Bridge runtime for the imported markup: SVG icon injection + small interactions.
   Ported from the standalone build (icons.js / site.js / calc.js). */

import { ICONS } from './icons';

function injectIcons(root) {
  (root || document).querySelectorAll('svg[data-l]').forEach(function (el) {
    var name = el.getAttribute('data-l');
    // Icons are server-rendered now; only fill in ones that arrived empty.
    if (!ICONS[name] || el.dataset.done || el.firstElementChild) return;
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
