/* =========================================================
   LUMORA JOURNAL JAVASCRIPT
========================================================= */


/* =========================================================
   CART COUNT
========================================================= */

const cartCount = document.getElementById("cartCount");

function getCart() {
  try {
    return JSON.parse(localStorage.getItem("lumoraCart")) || [];
  } catch (error) {
    console.error("Unable to read cart:", error);
    return [];
  }
}

function updateCartCount() {
  if (!cartCount) {
    return;
  }

  const cart = getCart();

  const totalItems = cart.reduce((total, item) => {
    return total + Number(item.quantity || 0);
  }, 0);

  cartCount.textContent = totalItems;

  if (totalItems > 0) {
    cartCount.classList.add("visible");
  } else {
    cartCount.classList.remove("visible");
  }
}


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    const icon = menuToggle.querySelector("i");

    if (icon) {
      icon.classList.toggle("fa-bars", !isOpen);
      icon.classList.toggle("fa-xmark", isOpen);
    }
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      const icon = menuToggle.querySelector("i");

      if (icon) {
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-xmark");
      }
    });
  });
}


/* =========================================================
   NEWSLETTER FORM
========================================================= */

const newsletterForm = document.getElementById("newsletterForm");
const newsletterEmail = document.getElementById("newsletterEmail");
const newsletterMessage = document.getElementById("newsletterMessage");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = newsletterEmail.value.trim();

    if (!email) {
      newsletterMessage.textContent =
        "Please enter your email address.";
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      newsletterMessage.textContent =
        "Please enter a valid email address.";
      return;
    }

    localStorage.setItem(
      "lumoraNewsletterEmail",
      email
    );

    newsletterMessage.textContent =
      "Thank you for subscribing to the Lumora Journal.";

    newsletterEmail.value = "";

    newsletterForm.querySelector("button").innerHTML = `
      Subscribed
      <i class="fa-solid fa-check"></i>
    `;

    setTimeout(() => {
      newsletterForm.querySelector("button").innerHTML = `
        Subscribe
        <i class="fa-solid fa-arrow-right"></i>
      `;
    }, 2500);
  });
}


/* =========================================================
   STORY LINK INTERACTION
========================================================= */

const storyLinks = document.querySelectorAll(
  ".story-link, .text-link"
);

storyLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = link.getAttribute("href");

    if (target && target.startsWith("#")) {
      event.preventDefault();

      showJournalMessage(
        "This journal article will be available soon."
      );
    }
  });
});


function showJournalMessage(message) {
  const existingMessage = document.querySelector(
    ".journal-toast"
  );

  if (existingMessage) {
    existingMessage.remove();
  }

  const toast = document.createElement("div");

  toast.className = "journal-toast";

  toast.innerHTML = `
    <i class="fa-solid fa-book-open"></i>
    <span>${message}</span>
  `;

  Object.assign(toast.style, {
    position: "fixed",
    right: "24px",
    bottom: "24px",
    zIndex: "9999",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "15px 19px",
    borderRadius: "14px",
    background: "#193d31",
    color: "#ffffff",
    fontFamily: "Manrope, sans-serif",
    fontSize: "12px",
    fontWeight: "700",
    boxShadow: "0 15px 35px rgba(25, 61, 49, 0.2)",
    opacity: "0",
    transform: "translateY(15px)",
    transition: "opacity 0.3s ease, transform 0.3s ease"
  });

  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.opacity = "1";
    toast.style.transform = "translateY(0)";
  });

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(15px)";

    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 2500);
}


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
});