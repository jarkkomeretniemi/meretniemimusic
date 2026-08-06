// Hienovarainen esiinnousu vieritettäessä. Kunnioittaa liikkeenvähennysasetusta.
(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var items = document.querySelectorAll(".rise");

  if (reduce || !("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("seen"); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      var delay = parseInt(el.dataset.delay || 0, 10);
      setTimeout(function () { el.classList.add("seen"); }, delay);
      io.unobserve(el);
    });
  }, { rootMargin: "0px 0px -12% 0px", threshold: 0.05 });

  items.forEach(function (el) { io.observe(el); });
})();
