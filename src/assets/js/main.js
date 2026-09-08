(function () {
  document.documentElement.classList.add("js");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  var mobile = window.matchMedia("(max-width: 900px)");

  function setMenu(open) {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    if (mobile.matches) nav.hidden = !open;
  }
  function syncMenu() {
    if (!toggle || !nav) return;
    if (mobile.matches) setMenu(false);
    else nav.hidden = false;
  }
  if (toggle && nav) {
    toggle.addEventListener("click", function () { setMenu(toggle.getAttribute("aria-expanded") !== "true"); });
    nav.addEventListener("click", function (event) { if (event.target.closest("a") && mobile.matches) setMenu(false); });
    document.addEventListener("keydown", function (event) { if (event.key === "Escape" && mobile.matches) { setMenu(false); toggle.focus(); } });
    if (mobile.addEventListener) mobile.addEventListener("change", syncMenu);
    syncMenu();
  }

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.addEventListener("click", function (event) {
      var link = event.target.closest("a[href^='#']");
      if (!link) return;
      var target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", link.getAttribute("href"));
    });
  }
})();
