/* =========================================================
   Medsure — Homepage interactions
   No dependencies. Every effect degrades to a static,
   fully readable page without JS or with reduced motion.
   ========================================================= */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var root = document.documentElement;

  /* ---------- Current year ---------- */
  var yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- Scroll reveals ---------- */
  var revealSections = document.querySelectorAll('[data-reveal]');
  if (!reduceMotion && 'IntersectionObserver' in window && revealSections.length) {
    root.classList.add('js-armed');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    revealSections.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Hero counters ---------- */
  var counters = document.querySelectorAll('[data-count]');
  function formatCount(el, value) {
    var target = Number(el.getAttribute('data-count'));
    var suffix = el.getAttribute('data-suffix') || '';
    var n = Math.round(target * value);
    el.textContent = n.toLocaleString('en-US') + (value >= 1 ? suffix : '');
  }
  if (!reduceMotion && counters.length) {
    counters.forEach(function (el) { formatCount(el, 0); });
    var delay = 1350;
    var duration = 1900;
    var start = performance.now() + delay;
    var tick = function (now) {
      var t = Math.max(0, Math.min(1, (now - start) / duration));
      var eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t); // easeOutExpo
      counters.forEach(function (el) { formatCount(el, eased); });
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  /* ---------- Nav: frosted on scroll, hide on scroll down ---------- */
  var nav = document.querySelector('[data-nav]');
  if (nav) {
    var lastY = window.scrollY;
    var ticking = false;
    var updateNav = function () {
      var y = window.scrollY;
      nav.classList.toggle('is-scrolled', y > 60);
      if (y > 720 && y > lastY + 2) nav.classList.add('is-hidden');
      else if (y < lastY - 2 || y <= 720) nav.classList.remove('is-hidden');
      lastY = y;
      ticking = false;
    };
    window.addEventListener('scroll', function () {
      if (!ticking) { requestAnimationFrame(updateNav); ticking = true; }
    }, { passive: true });
    // Show nav again when anything inside it receives keyboard focus
    nav.addEventListener('focusin', function () { nav.classList.remove('is-hidden'); });
    updateNav();
  }

  /* ---------- Specialties rail ---------- */
  var rail = document.querySelector('[data-rail]');
  if (rail) {
    var scrollRail = function (dir) {
      rail.scrollBy({ left: dir * Math.max(300, rail.clientWidth * 0.6), behavior: reduceMotion ? 'auto' : 'smooth' });
    };
    var prev = document.querySelector('[data-rail-prev]');
    var next = document.querySelector('[data-rail-next]');
    if (prev) prev.addEventListener('click', function () { scrollRail(-1); });
    if (next) next.addEventListener('click', function () { scrollRail(1); });
  }

  /* ---------- Generic stacked-state helper ----------
     Marks the active item and tells the others whether they
     sit before or after it, so they animate in the right direction. */
  function setActive(items, index) {
    items.forEach(function (el, i) {
      el.classList.toggle('is-active', i === index);
      el.classList.toggle('is-before', i < index);
      if (el.hasAttribute('data-why-item') || el.hasAttribute('data-band-item')) {
        el.setAttribute('aria-hidden', i === index ? 'false' : 'true');
      }
    });
  }

  /* ---------- Why Medsure switcher ---------- */
  var why = document.querySelector('[data-why]');
  if (why) {
    // Items are grouped by their position in each set: labels, texts, slides
    var labels = Array.prototype.slice.call(why.querySelectorAll('.switcher__labels [data-why-item]'));
    var texts = Array.prototype.slice.call(why.querySelectorAll('.why__text[data-why-item]'));
    var slides = Array.prototype.slice.call(why.querySelectorAll('.why__slide[data-why-item]'));
    var thumbs = Array.prototype.slice.call(why.querySelectorAll('[data-why-thumb]'));
    var countEl = why.querySelector('[data-why-count]');
    var barEl = why.querySelector('[data-why-bar]');
    var total = texts.length;
    var current = 0;
    var pad = function (n) { return (n < 10 ? '0' : '') + n; };

    var goWhy = function (i) {
      current = (i + total) % total;
      setActive(labels, current);
      setActive(texts, current);
      setActive(slides, current);
      thumbs.forEach(function (t, k) {
        t.classList.toggle('is-active', k === current);
        t.setAttribute('aria-pressed', k === current ? 'true' : 'false');
      });
      if (countEl) countEl.textContent = pad(current + 1) + ' / ' + pad(total);
      if (barEl) barEl.style.transform = 'scaleX(' + (current + 1) / total + ')';
    };

    var whyPrev = why.querySelector('[data-why-prev]');
    var whyNext = why.querySelector('[data-why-next]');
    if (whyPrev) whyPrev.addEventListener('click', function () { goWhy(current - 1); });
    if (whyNext) whyNext.addEventListener('click', function () { goWhy(current + 1); });
    thumbs.forEach(function (t, k) { t.addEventListener('click', function () { goWhy(k); }); });
    goWhy(0);
  }

  /* ---------- Statement band (story-style autoplay) ---------- */
  var band = document.querySelector('[data-band]');
  if (band) {
    var numbers = Array.prototype.slice.call(band.querySelectorAll('.band__num [data-band-item]'));
    var lines = Array.prototype.slice.call(band.querySelectorAll('.band__line[data-band-item]'));
    var bars = Array.prototype.slice.call(band.querySelectorAll('[data-band-bar]'));
    var DURATION = 5500;
    var bandIndex = 0;
    var timer = null;
    var inView = false;

    band.style.setProperty('--dur', DURATION + 'ms');

    var goBand = function (i) {
      bandIndex = (i + lines.length) % lines.length;
      setActive(numbers, bandIndex);
      setActive(lines, bandIndex);
      bars.forEach(function (b, k) {
        b.classList.toggle('is-done', k < bandIndex);
        // Re-trigger the fill animation on the active bar
        b.classList.remove('is-active');
        if (k === bandIndex) { void b.offsetWidth; b.classList.add('is-active'); }
        b.setAttribute('aria-current', k === bandIndex ? 'true' : 'false');
      });
    };

    var stop = function () { clearInterval(timer); timer = null; };
    var play = function () {
      stop();
      if (reduceMotion || !inView) return;
      timer = setInterval(function () { goBand(bandIndex + 1); }, DURATION);
    };

    bars.forEach(function (b, k) {
      b.addEventListener('click', function () { goBand(k); play(); });
    });

    if (reduceMotion) band.classList.add('is-paused');

    // Only autoplay while the band is on screen
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          inView = entry.isIntersecting;
          if (inView) { goBand(bandIndex); play(); } else { stop(); }
        });
      }, { threshold: 0.35 }).observe(band);
    } else {
      inView = true;
      play();
    }

    // Pause when the tab is hidden
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stop(); else if (inView) { goBand(bandIndex); play(); }
    });

    goBand(0);
  }

  /* ---------- FAQ accordion (one open at a time) ---------- */
  var faq = document.querySelector('[data-faq]');
  if (faq) {
    var faqItems = Array.prototype.slice.call(faq.querySelectorAll('.faq__item'));
    faqItems.forEach(function (item) {
      var btn = item.querySelector('.faq__q');
      btn.addEventListener('click', function () {
        var willOpen = !item.classList.contains('is-open');
        faqItems.forEach(function (other) {
          other.classList.remove('is-open');
          other.querySelector('.faq__q').setAttribute('aria-expanded', 'false');
        });
        if (willOpen) {
          item.classList.add('is-open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }
})();
