/* =====================================================
   LUMORA ABOUT PAGE JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* ================= MOBILE NAVIGATION ================= */

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));

      menuToggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      });
    });
  }


  /* ================= CART COUNT ================= */

  const cartCount = document.getElementById("cartCount");

  function updateCartCount() {
    if (!cartCount) return;

    let cart = [];

    try {
      cart = JSON.parse(localStorage.getItem("lumoraCart")) || [];
    } catch (error) {
      cart = [];
    }

    const totalItems = cart.reduce((total, item) => {
      return total + Number(item.quantity || 1);
    }, 0);

    cartCount.textContent = totalItems;
  }

  updateCartCount();


  /* ================= SCROLL REVEAL ================= */

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12
      }
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach((element) => {
      element.classList.add("visible");
    });
  }


  /* ================= COUNTER ANIMATION ================= */

  const counters = document.querySelectorAll(".counter");

  let countersStarted = false;

  function animateCounters() {
    if (countersStarted) return;

    countersStarted = true;

    counters.forEach((counter) => {
      const target = Number(counter.dataset.target);
      const duration = 1600;
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Smooth ease-out animation
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(target * easedProgress);

        counter.textContent = currentValue.toLocaleString();

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target.toLocaleString();
        }
      }

      requestAnimationFrame(updateCounter);
    });
  }

  const statsSection = document.querySelector(".stats-section");

  if (statsSection && "IntersectionObserver" in window) {
    const statsObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.35
      }
    );

    statsObserver.observe(statsSection);
  }


  /* ================= FAQ ACCORDION ================= */

  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    if (!question || !answer) return;

    question.addEventListener("click", () => {
      const isAlreadyOpen = item.classList.contains("open");

      // Close all other FAQ items
      faqItems.forEach((otherItem) => {
        const otherQuestion = otherItem.querySelector(".faq-question");
        const otherAnswer = otherItem.querySelector(".faq-answer");

        otherItem.classList.remove("open");

        if (otherQuestion) {
          otherQuestion.setAttribute("aria-expanded", "false");
        }

        if (otherAnswer) {
          otherAnswer.style.maxHeight = null;
        }
      });

      // Open clicked item if it was closed
      if (!isAlreadyOpen) {
        item.classList.add("open");
        question.setAttribute("aria-expanded", "true");
        answer.style.maxHeight = `${answer.scrollHeight}px`;
      }
    });
  });


  /* ================= HERO BOOK PARALLAX ================= */

  const heroVisual = document.querySelector(".hero-visual");
  const frontBook = document.querySelector(".book-front");
  const backBook = document.querySelector(".book-back");

  if (heroVisual && frontBook && backBook && window.matchMedia("(pointer: fine)").matches) {
    heroVisual.addEventListener("mousemove", (event) => {
      const rect = heroVisual.getBoundingClientRect();

      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      frontBook.style.transform = `
        rotate(${2 + x * 4}deg)
        translate(${x * 10}px, ${y * 10}px)
      `;

      backBook.style.transform = `
        rotate(${-12 + x * 4}deg)
        translate(${x * -12}px, ${y * -8}px)
      `;
    });

    heroVisual.addEventListener("mouseleave", () => {
      frontBook.style.transform = "rotate(2deg)";
      backBook.style.transform = "rotate(-12deg)";
    });
  }


  /* ================= ACTIVE NAV ON SCROLL ================= */

  const sections = document.querySelectorAll("main section[id]");
  const pageLinks = document.querySelectorAll(".nav-links a");

  if (sections.length > 0) {
    window.addEventListener("scroll", () => {
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute("id");
        }
      });

      pageLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
          link.classList.add("active");
        }
      });
    });
  }
});