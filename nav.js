(function(){
  // Desktop: dropdowns are CSS :hover — no JS needed.
  // Mobile: hamburger toggles .menu-open on <nav>, revealing the full nav-links overlay.

  var btn = document.querySelector('.mobile-menu-btn');
  var nav = document.querySelector('nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', function(e){
    e.stopPropagation();
    nav.classList.toggle('menu-open');
  });

  // Close when any nav link is tapped
  nav.querySelectorAll('.nav-links a').forEach(function(link){
    link.addEventListener('click', function(){
      nav.classList.remove('menu-open');
    });
  });

  // Close on tap outside the nav
  document.addEventListener('click', function(e){
    if (!nav.contains(e.target)) {
      nav.classList.remove('menu-open');
    }
  });
})();
