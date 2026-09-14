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

  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(function (link) {
    link.addEventListener('click', function (event) {
      var href = link.getAttribute('href');
      var target = href ? document.getElementById(href.slice(1)) : null;
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target, { offset: -64, duration: 1.05 });
    });
  });

  (function raf(time) { lenis.raf(time); requestAnimationFrame(raf); })(0);
}

/* ═══════════════════════════════════════════════════════════════
   2. HERO — Brand reveal, handoff and message reveal
   ═══════════════════════════════════════════════════════════════ */
function initFeatureReveal() {
  var section = document.querySelector('[data-services]');
  if (!section) return;
  var title = section.querySelector('[data-services-title]');
  var intro = section.querySelector('[data-services-intro]');
  var cards = section.querySelectorAll('[data-service-card]');
  var closing = section.querySelector('[data-services-closing]');

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top 72%',
      once: true
    }
  });
  if (title) {
    tl.from(title, {
      opacity: 0,
      y: 38,
      clipPath: 'inset(0 0 100% 0)',
      duration: 0.85,
      ease: 'power4.out'
    }, '-=0.18');
  }
  if (intro) tl.from(intro, { opacity: 0, y: 18, duration: 0.5, ease: 'power3.out' }, '-=0.42');
  if (cards.length) {
    tl.from(cards, {
      opacity: 0,
      y: 34,
      scale: 0.975,
      clipPath: 'inset(0 0 18% 0)',
      duration: 0.65,
      stagger: 0.09,
      ease: 'power4.out'
    }, '-=0.2');
    tl.from(section.querySelectorAll('[data-service-icon] path'), {
      strokeDasharray: 40,
      strokeDashoffset: 40,
      duration: 0.7,
      stagger: 0.025,
      ease: 'power2.out'
    }, '-=0.72');
  }
  if (closing) tl.from(closing, { opacity: 0, y: 24, duration: 0.6, ease: 'power3.out' }, '-=0.2');
}

/* ═══════════════════════════════════════════════════════════════
   5. PROCESS — Connected, staggered step reveal
   ═══════════════════════════════════════════════════════════════ */
function initProcessReveal() {
  var section = document.querySelector('[data-process]');
  if (!section) return;
  var title = section.querySelector('[data-process-title]');
  var line = section.querySelector('[data-process-line]');
  var cards = section.querySelectorAll('[data-process-card]');

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top 74%',
      once: true
    }
  });
  if (title) {
    tl.from(title, {
      opacity: 0,
      y: 34,
      clipPath: 'inset(0 0 100% 0)',
      duration: 0.85,
      ease: 'power4.out'
    }, '-=0.18');
  }
  if (line) {
    tl.from(line, {
      scaleX: 0,
      duration: 0.9,
      ease: 'power3.inOut'
    }, '-=0.35');
  }
  if (cards.length) {
    tl.from(cards, {
      opacity: 0,
      y: 32,
      scale: 0.98,
      clipPath: 'inset(0 0 16% 0)',
      duration: 0.68,
      stagger: 0.11,
      ease: 'power4.out'
    }, '-=0.65');
    tl.from(section.querySelectorAll('.process-node span'), {
      scale: 0,
      duration: 0.35,
      stagger: 0.11,
      ease: 'back.out(2)'
    }, '-=0.65');
  }
}

/* ═══════════════════════════════════════════════════════════════
   6. CTA BUTTONS — Magnetic effect
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
      if (dist > 0.01 && dist < 60) {
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
  initFeatureReveal();
  initProcessReveal();
  initMagneticButtons();
  initBgParallax();

  window.addEventListener('resize', function () { ScrollTrigger.refresh(); });
});
