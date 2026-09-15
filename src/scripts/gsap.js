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
function showHeroStatic() {
  var brand = document.querySelector('[data-hero-brand]');
  var message = document.querySelector('[data-hero-message]');
  var details = document.querySelectorAll('[data-hero-detail]');
  var marquee = document.querySelector('[data-hero-marquee]');

  if (brand) gsap.set(brand, { display: 'none' });
  if (message) gsap.set(message, { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' });
  if (details.length) gsap.set(details, { opacity: 1, y: 0 });
  if (marquee) gsap.set(marquee, { opacity: 1 });
}

function initHeroSequence() {
  var hero = document.querySelector('[data-hero]');
  var brand = document.querySelector('[data-hero-brand]');
  var letters = document.querySelectorAll('[data-hero-brand-letter]');
  var message = document.querySelector('[data-hero-message]');
  var details = document.querySelectorAll('[data-hero-detail]');
  var marquee = document.querySelector('[data-hero-marquee]');
  if (!hero || !brand || !letters.length || !message) return;

  gsap.set(letters, { yPercent: 115, opacity: 0, rotate: 2 });
  gsap.set(message, { opacity: 0, y: 36, clipPath: 'inset(0 0 100% 0)' });
  gsap.set(details, { opacity: 0, y: 20 });
  if (marquee) gsap.set(marquee, { opacity: 0 });

  var hasPlayed = false;
  var play = function () {
    if (hasPlayed) return;
    hasPlayed = true;

    var tl = gsap.timeline();
    tl.to(letters, {
      yPercent: 0,
      opacity: 1,
      rotate: 0,
      duration: 0.85,
      stagger: 0.055,
      ease: 'power4.out'
    });
    tl.to(letters, {
      yPercent: -115,
      opacity: 0,
      rotate: -1.5,
      duration: 0.65,
      stagger: 0.035,
      ease: 'power3.in'
    }, '+=0.9');
    tl.set(brand, { display: 'none' });
    tl.to(message, {
      opacity: 1,
      y: 0,
      clipPath: 'inset(0 0 0% 0)',
      duration: 1.05,
      ease: 'power4.out'
    }, '-=0.05');
    if (details.length) {
      tl.to(details, {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.1,
        ease: 'power3.out'
      }, '-=0.58');
    }
    if (marquee) tl.to(marquee, { opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.45');
  };

  var intro = document.querySelector('[data-site-intro]');
  if (!intro) {
    play();
    return;
  }

  var observer = new MutationObserver(function () {
    if (!document.body.contains(intro)) {
      observer.disconnect();
      play();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
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
   4. FEATURES — Clip-path curtain reveal (left to right)
   ═══════════════════════════════════════════════════════════════ */
function initFeatureReveal() {
  var section = document.querySelector('[data-services]');
  if (!section) return;

  var eyebrow = section.querySelector('[data-services-eyebrow]');
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

  if (eyebrow) tl.from(eyebrow, { opacity: 0, y: 14, duration: 0.45, ease: 'power3.out' });
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

  var eyebrow = section.querySelector('[data-process-eyebrow]');
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

  if (eyebrow) tl.from(eyebrow, { opacity: 0, y: 14, duration: 0.45, ease: 'power3.out' });
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
    showHeroStatic();
    document.querySelectorAll('[data-gsap], [data-tilt], [data-magnetic]').forEach(function (el) { gsap.set(el, { opacity: 1, clipPath: 'none', transform: 'none', x: 0, y: 0 }); });
    return;
  }

  initLenis();
  initCounter();
  initHeroSequence();
  initFeatureReveal();
  initProcessReveal();
  initMagneticButtons();
  initBgParallax();

  window.addEventListener('resize', function () { ScrollTrigger.refresh(); });
});
