(function () {
  var sidebar = document.getElementById('sidebar');
  var overlay = document.getElementById('sidebarOverlay');
  var toggle = document.getElementById('sidebarToggle');

  function openNav() {
    sidebar.classList.add('open');
    overlay.classList.add('show');
  }

  function closeNav() {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
  }

  if (toggle) toggle.addEventListener('click', function () {
    sidebar.classList.contains('open') ? closeNav() : openNav();
  });
  if (overlay) overlay.addEventListener('click', closeNav);

  var links = document.querySelectorAll('.side-nav a');
  var sections = [];
  links.forEach(function (link) {
    var id = link.getAttribute('href');
    if (id && id.charAt(0) === '#') {
      sections.push({ link: link, el: document.getElementById(id.slice(1)) });
    }
  });

  function setActive() {
    var pos = window.scrollY + 90;
    var current = sections[0];
    sections.forEach(function (item) {
      if (item.el && item.el.offsetTop <= pos) current = item;
    });
    sections.forEach(function (item) {
      if (item.link.classList.contains('active') && item !== current) {
        item.link.classList.remove('active');
      }
    });
    if (current && current.link) {
      current.link.classList.add('active');
      if (window.innerWidth <= 900) closeNav();
    }
  }

  links.forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 900) closeNav();
    });
  });

  window.addEventListener('scroll', setActive, { passive: true });
  window.addEventListener('resize', setActive);
  setActive();
})();
