document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.menu-toggle');
  var closeBtn = document.querySelector('.mobile-nav-close');
  var nav = document.querySelector('.mobile-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }
  if (closeBtn && nav) {
    closeBtn.addEventListener('click', function () {
      nav.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
  if (nav) {
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
});
