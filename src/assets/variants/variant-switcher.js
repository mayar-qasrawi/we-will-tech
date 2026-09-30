// Review-only: tab switching between style variants of one section.
// Keyboard: arrow keys move between tabs, Home/End jump; the choice is kept in the URL (?hero=3).
(function () {
  document.querySelectorAll('[data-vsw]').forEach(function (root) {
    var id = root.dataset.vsw;
    var tabs = Array.prototype.slice.call(root.querySelectorAll('[role="tab"]'));
    var panels = tabs.map(function (t) { return document.getElementById(t.getAttribute('aria-controls')); });

    function select(i, focusTab) {
      tabs.forEach(function (t, n) {
        var on = n === i;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
        panels[n].hidden = !on;
      });
      if (focusTab) tabs[i].focus();
      try {
        var url = new URL(window.location.href);
        url.searchParams.set(id, String(i + 1));
        window.history.replaceState(null, '', url);
      } catch (e) { /* ignore */ }
    }

    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { select(i, false); });
      t.addEventListener('keydown', function (e) {
        var rtl = document.documentElement.dir === 'rtl';
        var next = { ArrowRight: rtl ? -1 : 1, ArrowLeft: rtl ? 1 : -1 }[e.key];
        if (next) { e.preventDefault(); select((i + next + tabs.length) % tabs.length, true); }
        if (e.key === 'Home') { e.preventDefault(); select(0, true); }
        if (e.key === 'End') { e.preventDefault(); select(tabs.length - 1, true); }
      });
    });

    var start = parseInt(new URLSearchParams(window.location.search).get(id), 10);
    if (start >= 1 && start <= tabs.length) select(start - 1, false);
  });
})();
