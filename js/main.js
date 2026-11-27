/* Stockley Park Golf — progressive enhancement only.
   Navigation works without this file; it adds the mobile drawer,
   dropdown disclosure, header shadow and the click-to-load map. */
(function () {
  "use strict";

  var doc = document;
  var body = doc.body;

  /* ---------------------------------------------------------------- header */

  var header = doc.querySelector(".site-header");
  if (header) {
    var markStuck = function () {
      header.classList.toggle("is-stuck", window.scrollY > 8);
    };
    markStuck();
    window.addEventListener("scroll", markStuck, { passive: true });
  }

  /* ------------------------------------------------------- mobile drawer */

  var nav = doc.getElementById("site-nav");
  var trigger = doc.querySelector(".nav-trigger");
  var closeBtn = doc.querySelector(".nav-close");
  var scrim = doc.querySelector(".nav-scrim");
  var drawerQuery = window.matchMedia("(max-width: 900px)");

  function setDrawer(open) {
    if (!nav || !trigger) return;
    nav.setAttribute("data-open", open ? "true" : "false");
    trigger.setAttribute("aria-expanded", open ? "true" : "false");
    if (scrim) scrim.setAttribute("data-open", open ? "true" : "false");
    body.style.overflow = open && drawerQuery.matches ? "hidden" : "";

    if (open && closeBtn) {
      closeBtn.focus();
    } else if (!open && drawerQuery.matches) {
      trigger.focus();
    }
  }

  if (nav && trigger) {
    nav.setAttribute("data-open", "false");
    trigger.addEventListener("click", function () {
      setDrawer(nav.getAttribute("data-open") !== "true");
    });

    if (closeBtn) {
      closeBtn.addEventListener("click", function () {
        setDrawer(false);
      });
    }

    if (scrim) {
      scrim.addEventListener("click", function () {
        setDrawer(false);
      });
    }

    doc.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.getAttribute("data-open") === "true") {
        setDrawer(false);
      }
    });

    drawerQuery.addEventListener("change", function (event) {
      if (!event.matches) {
        setDrawer(false);
        body.style.overflow = "";
      }
    });
  }

  /* --------------------------------------------------- dropdown menus */

  var dropItems = Array.prototype.slice.call(
    doc.querySelectorAll(".nav-item--has-menu")
  );

  function closeMenus(except) {
    dropItems.forEach(function (item) {
      if (item === except) return;
      item.setAttribute("data-open", "false");
      var toggle = item.querySelector(".nav-toggle");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    });
  }

  dropItems.forEach(function (item) {
    var toggle = item.querySelector(".nav-toggle");
    if (!toggle) return;

    toggle.addEventListener("click", function (event) {
      event.preventDefault();
      var open = item.getAttribute("data-open") !== "true";
      closeMenus(item);
      item.setAttribute("data-open", open ? "true" : "false");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });

  doc.addEventListener("click", function (event) {
    if (!event.target.closest(".nav-item--has-menu")) closeMenus(null);
  });

  doc.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeMenus(null);
  });

  /* ------------------------------------------------------ map facade */

  var facades = Array.prototype.slice.call(doc.querySelectorAll("[data-map]"));

  facades.forEach(function (facade) {
    facade.addEventListener("click", function () {
      var frame = doc.createElement("iframe");
      frame.src = facade.getAttribute("data-map");
      frame.title = facade.getAttribute("data-map-title") || "Location map";
      frame.loading = "lazy";
      frame.referrerPolicy = "no-referrer-when-downgrade";
      frame.setAttribute("allowfullscreen", "");

      var host = facade.parentNode;
      host.innerHTML = "";
      host.appendChild(frame);
      facade.remove();
    });
  });

  /* --------------------------------------------- current year in footer */

  var yearEls = Array.prototype.slice.call(doc.querySelectorAll("[data-year]"));
  var year = String(new Date().getFullYear());
  yearEls.forEach(function (el) {
    el.textContent = year;
  });
})();
