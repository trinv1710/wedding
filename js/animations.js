(function () {
  var STAGGER = 75; // ms between siblings

  function revealChildren(parent) {
    parent
      .querySelectorAll(':scope > [data-animate]')
      .forEach(function (child) {
        child.classList.add('in-view');
      });
  }

  function setup() {
    var parents = document.querySelectorAll('.animate-parent');

    // Auto-stagger direct [data-animate] children
    parents.forEach(function (parent) {
      var children = parent.querySelectorAll(':scope > [data-animate]');
      children.forEach(function (child, i) {
        if (!child.style.getPropertyValue('--anim-delay')) {
          child.style.setProperty('--anim-delay', i * STAGGER + 'ms');
        }
      });
    });

    // Trigger when the viewport bottom first touches the parent
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            revealChildren(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px' }
    );

    parents.forEach(function (parent) {
      observer.observe(parent);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup);
  } else {
    setup();
  }
})();
