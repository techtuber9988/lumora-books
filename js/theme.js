/* =====================================================
   LUMORA THEME TOGGLE
   Dynamic Dark/Light Theme with localStorage
===================================================== */

(() => {
  "use strict";

  const STORAGE_KEY = "lumora-theme";
  const DARK = "dark";
  const LIGHT = "light";

  /* ================= APPLY SAVED THEME ================= */

  function getSavedTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  }

  function getSystemPreference() {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return DARK;
    }
    return LIGHT;
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    updateToggleIcon(theme);
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* storage unavailable */
    }
  }

  /* ================= TOGGLE ICON ================= */

  function updateToggleIcon(theme) {
    const toggleButtons = document.querySelectorAll(".theme-toggle");

    toggleButtons.forEach(btn => {
      const icon = btn.querySelector("i");
      if (!icon) return;

      btn.setAttribute("aria-label", theme === DARK ? "Switch to light mode" : "Switch to dark mode");

      icon.className = theme === DARK ? "fa-solid fa-sun" : "fa-solid fa-moon";
    });
  }

  /* ================= INIT ================= */

  function init() {
    const saved = getSavedTheme();
    const initial = saved || getSystemPreference();
    applyTheme(initial);

    document.addEventListener("click", e => {
      const toggle = e.target.closest(".theme-toggle");
      if (!toggle) return;

      const current = document.documentElement.getAttribute("data-theme") || LIGHT;
      const next = current === DARK ? LIGHT : DARK;

      applyTheme(next);
      saveTheme(next);
    });

    if (window.matchMedia) {
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
        if (!getSavedTheme()) {
          applyTheme(e.matches ? DARK : LIGHT);
        }
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
