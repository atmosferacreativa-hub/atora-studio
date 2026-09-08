(function () {
  document.documentElement.classList.add("js");

  var prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function setupMobileMenu() {
    var toggleButton = document.querySelector(".nav-toggle");
    if (!toggleButton) return;

    var navId = toggleButton.getAttribute("aria-controls");
    if (!navId) return;

    var nav = document.getElementById(navId);
    if (!nav) return;

    var mobileQuery =
      typeof window !== "undefined" && window.matchMedia
        ? window.matchMedia("(max-width: 920px)")
        : null;

    function setExpanded(expanded) {
      toggleButton.setAttribute("aria-expanded", expanded ? "true" : "false");
      toggleButton.setAttribute("aria-label", expanded ? "Cerrar menú" : "Abrir menú");
      if (mobileQuery && mobileQuery.matches) {
        nav.hidden = !expanded;
      }
    }

    function syncForViewport() {
      if (!mobileQuery) return;
      if (mobileQuery.matches) {
        nav.hidden = toggleButton.getAttribute("aria-expanded") !== "true";
      } else {
        nav.hidden = false;
        setExpanded(false);
      }
    }

    toggleButton.addEventListener("click", function () {
      var expanded = toggleButton.getAttribute("aria-expanded") === "true";
      setExpanded(!expanded);
    });

    nav.addEventListener("click", function (event) {
      var link = event.target && event.target.closest ? event.target.closest("a") : null;
      if (!link) return;
      if (!mobileQuery || !mobileQuery.matches) return;
      setExpanded(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key !== "Escape") return;
      if (!mobileQuery || !mobileQuery.matches) return;
      if (toggleButton.getAttribute("aria-expanded") !== "true") return;
      setExpanded(false);
      toggleButton.focus();
    });

    if (mobileQuery && mobileQuery.addEventListener) {
      mobileQuery.addEventListener("change", syncForViewport);
    } else if (mobileQuery && mobileQuery.addListener) {
      mobileQuery.addListener(syncForViewport);
    }

    syncForViewport();
  }

  function setupAnchorScroll() {
    if (prefersReducedMotion) return;

    document.addEventListener("click", function (event) {
      var link = event.target && event.target.closest ? event.target.closest("a") : null;
      if (!link) return;

      var href = link.getAttribute("href");
      if (!href || href.charAt(0) !== "#") return;

      var el = document.querySelector(href);
      if (!el) return;

      event.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      if (window.location && window.location.hash !== href) {
        history.pushState(null, "", href);
      }
    });
  }

  setupMobileMenu();
  setupAnchorScroll();
})();
