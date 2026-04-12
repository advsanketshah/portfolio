(function () {
  var btn = document.querySelector('.mobile-menu-btn');
  var navEl = document.querySelector('nav');
  if (!btn || !navEl) return;

  // Toggle menu open/closed
  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    var isOpen = navEl.classList.toggle('menu-open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close when any nav link is tapped
  navEl.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function () {
      navEl.classList.remove('menu-open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  // Close on tap outside
  document.addEventListener('click', function (e) {
    if (!navEl.contains(e.target)) {
      navEl.classList.remove('menu-open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();
