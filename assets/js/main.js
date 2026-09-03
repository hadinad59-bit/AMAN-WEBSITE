// أمان — سكربت مشترك: القائمة الجوّالة، شريط إمكانية الوصول، عداد الزيارات المحلي

(function () {
  // ===== اللغة (عربي / إنجليزي) =====
  var urlLang = new URLSearchParams(location.search).get('lang');
  var lang = (urlLang === 'ar' || urlLang === 'en') ? urlLang : (localStorage.getItem('aman_lang') || 'ar');
  if (urlLang === 'ar' || urlLang === 'en') localStorage.setItem('aman_lang', lang);

  function applyLang() {
    document.documentElement.setAttribute('lang', lang === 'ar' ? 'ar' : 'en');
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.body.classList.toggle('lang-en', lang === 'en');

    document.querySelectorAll('[data-ar][data-en]').forEach(function (el) {
      el.textContent = lang === 'ar' ? el.getAttribute('data-ar') : el.getAttribute('data-en');
    });
    document.querySelectorAll('[data-ar-html][data-en-html]').forEach(function (el) {
      el.innerHTML = lang === 'ar' ? el.getAttribute('data-ar-html') : el.getAttribute('data-en-html');
    });
    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      btn.textContent = lang === 'ar' ? 'English' : 'العربية';
    });
  }
  applyLang();

  document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      lang = lang === 'ar' ? 'en' : 'ar';
      localStorage.setItem('aman_lang', lang);
      var url = new URL(location.href);
      url.searchParams.set('lang', lang);
      history.replaceState(null, '', url);
      applyLang();
    });
  });

  // ===== قائمة الجوال =====
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('nav.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      var expanded = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
  }

  // ===== شريط إمكانية الوصول =====
  var a11yToggle = document.querySelector('.a11y-toggle');
  var a11yPanel = document.querySelector('.a11y-panel');
  var fontScale = parseFloat(localStorage.getItem('aman_font_scale')) || 1;
  var highContrast = localStorage.getItem('aman_contrast') === 'on';

  function applyA11y() {
    document.documentElement.style.setProperty('--font-scale', fontScale);
    document.body.classList.toggle('high-contrast', highContrast);
    var contrastSwitch = document.querySelector('.contrast-switch');
    if (contrastSwitch) contrastSwitch.classList.toggle('on', highContrast);
  }
  applyA11y();

  if (a11yToggle && a11yPanel) {
    a11yToggle.addEventListener('click', function () {
      a11yPanel.classList.toggle('open');
    });
    document.addEventListener('click', function (e) {
      if (!a11yPanel.contains(e.target) && !a11yToggle.contains(e.target)) {
        a11yPanel.classList.remove('open');
      }
    });
  }

  document.querySelectorAll('[data-font-step]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var step = parseFloat(btn.getAttribute('data-font-step'));
      fontScale = Math.min(1.4, Math.max(0.85, fontScale + step));
      localStorage.setItem('aman_font_scale', fontScale);
      applyA11y();
    });
  });

  var contrastSwitch = document.querySelector('.contrast-switch');
  if (contrastSwitch) {
    contrastSwitch.addEventListener('click', function () {
      highContrast = !highContrast;
      localStorage.setItem('aman_contrast', highContrast ? 'on' : 'off');
      applyA11y();
    });
  }

  // رابط "إمكانية الوصول" بالتذييل يفتح نفس اللوحة
  document.querySelectorAll('[data-open-a11y]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (a11yPanel) {
        e.preventDefault();
        a11yPanel.classList.add('open');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });

  // ===== عداد الزيارات المحلي (بدون أي حفظ خارج المتصفح) =====
  var counterEl = document.querySelector('[data-visit-counter]');
  if (counterEl) {
    var count = parseInt(localStorage.getItem('aman_visits'), 10) || 0;
    count += 1;
    localStorage.setItem('aman_visits', count);

    var start = 0;
    var duration = 900;
    var startTime = null;
    function step(ts) {
      if (!startTime) startTime = ts;
      var progress = Math.min(1, (ts - startTime) / duration);
      var value = Math.round(start + (count - start) * progress);
      counterEl.textContent = value.toLocaleString('ar-SA');
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
})();
