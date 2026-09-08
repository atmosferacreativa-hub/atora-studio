(function () {
  document.documentElement.classList.add("js");

  var prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) return;

  // Smooth scroll for same-page anchor links (progressive enhancement).
  document.addEventListener("click", function (event) {
    var target = event.target;
    if (!target || target.tagName !== "A") return;
    var href = target.getAttribute("href");
    if (!href || href.charAt(0) !== "#") return;

    var el = document.querySelector(href);
    if (!el) return;

    event.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.pushState(null, "", href);
  });
})();

