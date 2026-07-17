import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

/* ═══════════════════════════════════════════════════════════════
   1. LENIS — Smooth scroll
   ═══════════════════════════════════════════════════════════════ */
function initLenis() {
  var lenis = new Lenis({ duration: 1.2, easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); }, orientation: 'vertical', smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  (function raf(time) { lenis.raf(time); requestAnimationFrame(raf); })(0);
}

/* ═══════════════════════════════════════════════════════════════
   2. HERO — Badge typewriter + split-text H1
   ═══════════════════════════════════════════════════════════════ */
function splitHeroWords() {
  var h1 = document.querySelector('[data-hero-title]');
  if (!h1 || h1.hasAttribute('data-split')) return;
  h1.setAttribute('data-split', '');

  var words = [];
  Array.from(h1.childNodes).forEach(function (node) {
    if (node.nodeType === 3) {
      node.textContent.split(/(\s+)/).forEach(function (part) {
        if (part) words.push({ text: part, isSpace: part.trim() === '' });
      });
    } else if (node.nodeType === 1) {
      words.push({ text: null, el: node.cloneNode(true) });
    }
  });

  h1.innerHTML = '';
  var fragment = document.createDocumentFragment();
  words.forEach(function (w) {
    if (w.isSpace) { fragment.appendChild(document.createTextNode(w.text)); return; }
    var outer = document.createElement('span');
    outer.className = 'hw';
    var inner = document.createElement('span');
    inner.className = 'hwi';
    if (w.el) inner.appendChild(w.el);
    else inner.textContent = w.text;
    outer.appendChild(inner);
    fragment.appendChild(outer);
  });
  h1.appendChild(fragment);
}

function initHeroTypewriter() {
  var badge = document.querySelector('[data-badge]');
  if (!badge) return;
  var text = badge.getAttribute('data-badge') || badge.textContent;
  badge.textContent = '';
  badge.style.visibility = 'visible';
  var chars = text.split('');
  var tl = gsap.timeline({ delay: 0.4 });
  chars.forEach(function (c, i) { tl.call(function () { badge.textContent += c; }, null, null, i * 0.03); });
}

function initHeroSplit() {
  splitHeroWords();
  gsap.set('.hwi', { y: '100%', opacity: 0, filter: 'blur(8px)' });
  var fadeEls = document.querySelectorAll('[data-hero-fade]');
  gsap.set(fadeEls, { y: 24, opacity: 0 });
  var tl = gsap.timeline({ delay: 0.4 });
  tl.to('.hwi', { y: '0%', opacity: 1, filter: 'blur(0px)', duration: 0.55, stagger: 0.025, ease: 'power4.out' }, 0);
  if (fadeEls.length) tl.to(fadeEls, { y: 0, opacity: 1, duration: 0.4, stagger: 0.06, ease: 'power3.out' }, 0.1);
}

/* ═══════════════════════════════════════════════════════════════
   3. COUNTER — Intro count-up with GSAP
   ═══════════════════════════════════════════════════════════════ */
function initCounter() {
  var el = document.querySelector('[data-site-intro-count]');
  if (!el) return;
  gsap.to({ val: 0 }, { val: 100, duration: 0.65, ease: 'power2.out', onUpdate: function () { el.textContent = String(Math.round(this.targets()[0].val)).padStart(2, '0'); } });
}

/* ═══════════════════════════════════════════════════════════════
   4. PORTFOLIO — 3D mouse tilt + scroll reveal
   ═══════════════════════════════════════════════════════════════ */
function initCardTilt() {
  gsap.utils.toArray('[data-tilt]').forEach(function (card) {
    var rX = gsap.quickTo(card, 'rotationX', { duration: 0.4, ease: 'power3.out' });
    var rY = gsap.quickTo(card, 'rotationY', { duration: 0.4, ease: 'power3.out' });
    card.addEventListener('mousemove', function (e) {
      var rect = card.getBoundingClientRect();
      rX((e.clientY - rect.top - rect.height / 2) / (rect.height / 2) * -6);
      rY((e.clientX - rect.left - rect.width / 2) / (rect.width / 2) * 6);
    });
    card.addEventListener('mouseleave', function () { rX(0); rY(0); });
  });
}

function initCardReveal() {
  gsap.utils.toArray('[data-tilt]').forEach(function (card, i) {
    var r = [{ rotateY: -10, rotateX: 5 }, { rotateX: 8 }, { rotateY: 10, rotateX: 5 }][i % 3];
    gsap.from(card, { scrollTrigger: { trigger: card, start: 'top bottom-=80', toggleActions: 'play reverse play reverse' }, opacity: 0, y: 30, rotateY: r.rotateY, rotateX: r.rotateX, duration: 0.5, ease: 'power4.out' });
  });
}

/* ═══════════════════════════════════════════════════════════════
   5. FEATURES — Clip-path curtain reveal (left to right)
   ═══════════════════════════════════════════════════════════════ */
function initFeatureReveal() {
  var cards = gsap.utils.toArray('[data-gsap="feature"]');
  cards.forEach(function (card, i) {
    gsap.from(card, {
      scrollTrigger: { trigger: card, start: 'top bottom-=80', toggleActions: 'play reverse play reverse' },
      y: 24,
      opacity: 0,
      scale: 0.97,
      filter: 'blur(4px)',
      duration: 0.5,
      ease: 'power4.out',
      delay: i * 0.08
    });
  });
}

/* ═══════════════════════════════════════════════════════════════
   6. STEPS — Pipeline line draw (scrub) + circle highlight
   ═══════════════════════════════════════════════════════════════ */
function initStepsPipeline() {
  var line = document.querySelector('[data-gsap="pipeline-line"]');
  if (line) {
    gsap.from(line, { scrollTrigger: { trigger: line, start: 'top 80%', end: 'bottom 60%', scrub: 1.5 }, scaleX: 0, transformOrigin: 'left center' });
  }

  gsap.utils.toArray('[data-gsap="step"]').forEach(function (el) {
    var circle = el.querySelector('.rounded-full');
    var heading = el.querySelector(':scope > h3');
    var desc = el.querySelector(':scope > p');
    var tl = gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 75%', end: 'top 30%', scrub: 1 } });
    tl.from(circle, { scale: 0, duration: 0.3 });
    tl.to(circle, { borderColor: 'var(--color-primary-500)', backgroundColor: 'var(--color-primary-500)', color: 'var(--color-bg)', duration: 0.2 }, '-=0.05');
    if (heading) tl.from(heading, { y: 24, opacity: 0, duration: 0.25 }, '-=0.1');
    if (desc) tl.from(desc, { y: 16, opacity: 0, duration: 0.2 }, '-=0.05');
  });
}

/* ═══════════════════════════════════════════════════════════════
   7. FAQ — GSAP accordion height animation
   ═══════════════════════════════════════════════════════════════ */
function initFaqAccordion() {
  gsap.utils.toArray('[data-faq-item]').forEach(function (details) {
    var content = details.querySelector('.faq-content');
    var inner = content.querySelector('div');
    var icon = details.querySelector('[data-faq-icon]');
    var isFirst = true;

    details.addEventListener('toggle', function () {
      if (isFirst) { isFirst = false; return; }
      if (details.open) {
        gsap.set(content, { height: 0, overflow: 'hidden', display: 'block' });
        gsap.to(content, { height: inner.offsetHeight, duration: 0.4, ease: 'power3.inOut' });
        if (icon) gsap.to(icon, { rotation: 180, duration: 0.3, ease: 'power2.inOut' });
      } else {
        gsap.to(content, { height: 0, duration: 0.35, ease: 'power3.inOut', onComplete: function () { gsap.set(content, { display: '' }); } });
        if (icon) gsap.to(icon, { rotation: 0, duration: 0.3, ease: 'power2.inOut' });
      }
    });
  });
}

/* ═══════════════════════════════════════════════════════════════
   8. CTA BUTTONS — Magnetic effect
   ═══════════════════════════════════════════════════════════════ */
function initMagneticButtons() {
  gsap.utils.toArray('[data-magnetic]').forEach(function (btn) {
    var xTo = gsap.quickTo(btn, 'x', { duration: 0.4, ease: 'power3.out' });
    var yTo = gsap.quickTo(btn, 'y', { duration: 0.4, ease: 'power3.out' });
    btn.addEventListener('mousemove', function (e) {
      var rect = btn.getBoundingClientRect();
      var x = e.clientX - rect.left - rect.width / 2;
      var y = e.clientY - rect.top - rect.height / 2;
      var dist = Math.sqrt(x * x + y * y);
      if (dist < 60) {
        var s = (60 - dist) / 60 * 8;
        xTo(x / dist * s);
        yTo(y / dist * s);
      } else { xTo(0); yTo(0); }
    });
    btn.addEventListener('mouseleave', function () { xTo(0); yTo(0); });
  });
}

/* ═══════════════════════════════════════════════════════════════
   9. BACKGROUND — Subtle grid parallax
   ═══════════════════════════════════════════════════════════════ */
function initBgParallax() {
  var grid = document.querySelector('[data-bg-grid]');
  if (!grid) return;
  gsap.to(grid, { y: -80, ease: 'none', scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 1.5 } });
}

/* ═══════════════════════════════════════════════════════════════
   BOOT
   ═══════════════════════════════════════════════════════════════ */
function ready(fn) { if (document.readyState !== 'loading') { fn(); } else { document.addEventListener('DOMContentLoaded', fn); } }

ready(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('[data-gsap], [data-tilt], [data-magnetic]').forEach(function (el) { gsap.set(el, { opacity: 1, clipPath: 'none', transform: 'none', x: 0, y: 0 }); });
    return;
  }

  initLenis();
  initCounter();
  initHeroTypewriter();
  initHeroSplit();
  initCardTilt();
  initCardReveal();
  initFeatureReveal();
  initStepsPipeline();
  initFaqAccordion();
  initMagneticButtons();
  initBgParallax();

  /* Patch i18n toggle to re-split hero after lang change */
  var origToggle = window.__toggleLang;
  window.__toggleLang = function () {
    if (origToggle) origToggle();
    setTimeout(function () {
      var h1 = document.querySelector('[data-hero-title]');
      if (h1) { h1.removeAttribute('data-split'); splitHeroWords(); gsap.from('.hwi', { y: '100%', opacity: 0, filter: 'blur(6px)', duration: 0.5, stagger: 0.03, ease: 'power3.out' }); }
    }, 0);
  };

  window.addEventListener('resize', function () { ScrollTrigger.refresh(); });
});
