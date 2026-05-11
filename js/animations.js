(function () {
  var STAGGER = 75; // ms between siblings

  function setup() {
    // Auto-tag album items so HTML stays clean
    document.querySelectorAll('.album-grid .album-item').forEach(function (el) {
      if (!el.hasAttribute('data-animate')) {
        el.setAttribute('data-animate', '');
      }
    });

    // Auto-stagger direct [data-animate] children within the same parent
    var parents = new Set();
    document.querySelectorAll('[data-animate]').forEach(function (el) {
      parents.add(el.parentElement);
    });

    parents.forEach(function (parent) {
      var children = Array.from(
        parent.querySelectorAll(':scope > [data-animate]')
      );
      children.forEach(function (child, i) {
        if (!child.style.getPropertyValue('--anim-delay')) {
          child.style.setProperty('--anim-delay', i * STAGGER + 'ms');
        }
      });
    });

    // Observe
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('[data-animate]').forEach(function (el) {
      observer.observe(el);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup);
  } else {
    setup();
  }
})();
