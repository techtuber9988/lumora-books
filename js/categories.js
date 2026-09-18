/* =====================================================
   LUMORA CATEGORIES PAGE JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ================= MOBILE NAVIGATION ================= */

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", isOpen);

      menuToggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
    });
  }


  /* ================= CART COUNT ================= */

  function updateCartCount() {
    const cartCountElement = document.getElementById("cartCount");

    if (!cartCountElement) return;

    try {
      const cart = JSON.parse(localStorage.getItem("lumora-cart")) || [];

      const totalItems = cart.reduce((total, item) => {
        return total + Number(item.quantity || 1);
      }, 0);

      cartCountElement.textContent = totalItems;
    } catch (error) {
      cartCountElement.textContent = "0";
    }
  }

  updateCartCount();


  /* ================= SMOOTH PAGE TRANSITION ================= */

  document.querySelectorAll("a[href$='.html']").forEach(link => {
    link.addEventListener("click", event => {
      const destination = link.getAttribute("href");

      if (
        !destination ||
        destination.startsWith("#") ||
        link.target === "_blank"
      ) {
        return;
      }

      event.preventDefault();

      document.body.classList.add("page-leaving");

      setTimeout(() => {
        window.location.href = destination;
      }, 180);
    });
  });

});
