/* =====================================================
   LUMORA NEW BOOKS
   Dynamic JavaScript + REST API + Cart State
===================================================== */


/* ================= DOM ELEMENTS ================= */

const booksGrid = document.getElementById("booksGrid");
const skeletonGrid = document.getElementById("skeletonGrid");
const emptyState = document.getElementById("emptyState");
const errorBanner = document.getElementById("errorBanner");
const retryButton = document.getElementById("retryButton");

const bookSearch = document.getElementById("bookSearch");
const categoryFilter = document.getElementById("categoryFilter");
const sortBooks = document.getElementById("sortBooks");
const categoryPills = document.querySelectorAll(".category-pill");

const resultsText = document.getElementById("resultsText");
const cartCount = document.getElementById("cartCount");

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

const searchTrigger = document.getElementById("searchTrigger");
const resetFilters = document.getElementById("resetFilters");


/* ================= STATE ================= */

let allBooks = [];
let filteredBooks = [];

let currentCategory = "all";
let currentSearch = "";
let currentSort = "newest";

const API_URL = "https://fakestoreapi.com/products";


/* ================= FALLBACK DATA ================= */
/*
  This data is used if the external API is unavailable.
  It also keeps the Lumora visual theme consistent.
*/

const fallbackBooks = [
  {
    id: 101,
    title: "The Last Light",
    author: "Amelia Ross",
    category: "fiction",
    categoryLabel: "Contemporary Fiction",
    price: 799,
    badge: "New Arrival",
    coverClass: "cover-rust",
    coverTitle: "THE LAST LIGHT"
  },
  {
    id: 102,
    title: "Design Your Day",
    author: "Elena Park",
    category: "business",
    categoryLabel: "Productivity",
    price: 599,
    badge: "New Arrival",
    coverClass: "cover-green",
    coverTitle: "DESIGN YOUR DAY"
  },
  {
    id: 103,
    title: "The Minimal Mind",
    author: "Jon Bell",
    category: "wellness",
    categoryLabel: "Mindfulness",
    price: 649,
    badge: "Fresh Pick",
    coverClass: "cover-purple",
    coverTitle: "THE MINIMAL MIND"
  },
  {
    id: 104,
    title: "The Art of Noticing",
    author: "Mara Ellis",
    category: "art",
    categoryLabel: "Art & Design",
    price: 849,
    badge: "New Arrival",
    coverClass: "cover-cream",
    coverTitle: "THE ART OF NOTICING"
  },
  {
    id: 105,
    title: "A Better Beginning",
    author: "Nora Fields",
    category: "lifestyle",
    categoryLabel: "Lifestyle",
    price: 549,
    badge: "Recently Added",
    coverClass: "cover-sage",
    coverTitle: "A BETTER BEGINNING"
  },
  {
    id: 106,
    title: "The Creative Life",
    author: "Oliver James",
    category: "art",
    categoryLabel: "Creativity",
    price: 699,
    badge: "New Arrival",
    coverClass: "cover-orange",
    coverTitle: "THE CREATIVE LIFE"
  },
  {
    id: 107,
    title: "Small Ideas, Big Impact",
    author: "Daniel Moore",
    category: "business",
    categoryLabel: "Business",
    price: 749,
    badge: "Editor's Pick",
    coverClass: "cover-blue",
    coverTitle: "SMALL IDEAS BIG IMPACT"
  },
  {
    id: 108,
    title: "The Quiet Chapter",
    author: "Sophie Lane",
    category: "fiction",
    categoryLabel: "Literary Fiction",
    price: 499,
    badge: "New Arrival",
    coverClass: "cover-charcoal",
    coverTitle: "THE QUIET CHAPTER"
  },
  {
    id: 109,
    title: "The Science of Sleep",
    author: "Dr. Evan Reed",
    category: "science",
    categoryLabel: "Science",
    price: 899,
    badge: "New Arrival",
    coverClass: "cover-blue",
    coverTitle: "THE SCIENCE OF SLEEP"
  },
  {
    id: 110,
    title: "The Modern Home",
    author: "Clara Woods",
    category: "lifestyle",
    categoryLabel: "Lifestyle",
    price: 729,
    badge: "Fresh Pick",
    coverClass: "cover-cream",
    coverTitle: "THE MODERN HOME"
  },
  {
    id: 111,
    title: "Learning to Begin",
    author: "Mia Carter",
    category: "wellness",
    categoryLabel: "Personal Growth",
    price: 579,
    badge: "New Arrival",
    coverClass: "cover-sage",
    coverTitle: "LEARNING TO BEGIN"
  },
  {
    id: 112,
    title: "Future in Focus",
    author: "Adrian Cole",
    category: "science",
    categoryLabel: "Technology",
    price: 949,
    badge: "Recently Added",
    coverClass: "cover-green",
    coverTitle: "FUTURE IN FOCUS"
  }
];


/* ================= API FETCH ================= */

async function fetchNewBooks() {
  showLoading();

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("API request failed");
    }

    const apiData = await response.json();

    /*
      FakeStoreAPI does not provide real book data.
      We transform its products into a book-like structure.
    */

    const apiBooks = apiData.slice(0, 8).map((product, index) => {
      const categoryMap = [
        "fiction",
        "business",
        "wellness",
        "art",
        "lifestyle",
        "science",
        "fiction",
        "business"
      ];

      const categoryLabelMap = {
        fiction: "Contemporary Fiction",
        business: "Business",
        wellness: "Mind & Wellness",
        art: "Art & Design",
        lifestyle: "Lifestyle",
        science: "Science & Technology"
      };

      const coverClasses = [
        "cover-rust",
        "cover-green",
        "cover-purple",
        "cover-cream",
        "cover-sage",
        "cover-blue",
        "cover-charcoal",
        "cover-orange"
      ];

      const selectedCategory = categoryMap[index];

      return {
        id: `api-${product.id}`,
        title: formatTitle(product.title),
        author: "Lumora Editions",
        category: selectedCategory,
        categoryLabel: categoryLabelMap[selectedCategory],
        price: Math.round(product.price * 80),
        badge: "New Arrival",
        coverClass: coverClasses[index],
        coverTitle: formatCoverTitle(product.title)
      };
    });

    /*
      Combining curated Lumora books with API books gives
      the page a richer collection.
    */

    allBooks = [...fallbackBooks, ...apiBooks];

    hideLoading();
    hideError();
    applyFilters();

  } catch (error) {
    console.warn("Live API unavailable:", error);

    allBooks = fallbackBooks;

    hideLoading();
    showError();
    applyFilters();
  }
}


/* ================= TEXT HELPERS ================= */

function formatTitle(title) {
  return title
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .slice(0, 34);
}

function formatCoverTitle(title) {
  return title
    .split(" ")
    .slice(0, 4)
    .join(" ")
    .toUpperCase();
}


/* ================= FILTER LOGIC ================= */

function applyFilters() {
  currentSearch = bookSearch.value.trim().toLowerCase();
  currentCategory = categoryFilter.value;
  currentSort = sortBooks.value;

  filteredBooks = allBooks.filter(book => {
    const matchesSearch =
      book.title.toLowerCase().includes(currentSearch) ||
      book.author.toLowerCase().includes(currentSearch) ||
      book.categoryLabel.toLowerCase().includes(currentSearch);

    const matchesCategory =
      currentCategory === "all" ||
      book.category === currentCategory;

    return matchesSearch && matchesCategory;
  });

  sortFilteredBooks();
  renderBooks();
  updateResultsText();
}


/* ================= SORT LOGIC ================= */

function sortFilteredBooks() {
  if (currentSort === "title-asc") {
    filteredBooks.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  if (currentSort === "title-desc") {
    filteredBooks.sort((a, b) =>
      b.title.localeCompare(a.title)
    );
  }

  if (currentSort === "price-low") {
    filteredBooks.sort((a, b) =>
      a.price - b.price
    );
  }

  if (currentSort === "price-high") {
    filteredBooks.sort((a, b) =>
      b.price - a.price
    );
  }

  /*
    Fallback and API books are arranged with newest
    additions appearing first.
  */

  if (currentSort === "newest") {
    filteredBooks.sort((a, b) => {
      const aId = String(a.id);
      const bId = String(b.id);

      return bId.localeCompare(aId);
    });
  }
}


/* ================= RENDER BOOKS ================= */

function renderBooks() {
  booksGrid.innerHTML = "";

  if (filteredBooks.length === 0) {
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");

  filteredBooks.forEach((book, index) => {
    const card = createBookCard(book, index);
    booksGrid.appendChild(card);
  });
}


/* ================= CREATE BOOK CARD ================= */

function createBookCard(book, index) {
  const card = document.createElement("article");

  card.className = "book-card";
  card.style.animationDelay = `${index * 0.06}s`;

  card.innerHTML = `
    <div class="book-cover-area">

      <span class="book-badge">
        ${book.badge}
      </span>

      <button
        class="favorite-button"
        type="button"
        aria-label="Save ${escapeHTML(book.title)}"
      >
        <i class="fa-regular fa-heart"></i>
      </button>

      <div class="book-cover ${book.coverClass}">
        <span class="book-cover-title">
          ${escapeHTML(book.coverTitle)}
        </span>

        <span class="book-cover-author">
          ${escapeHTML(book.author)}
        </span>
      </div>

    </div>

    <div class="book-info">

      <span class="book-category">
        ${escapeHTML(book.categoryLabel)}
      </span>

      <h3 class="book-title">
        ${escapeHTML(book.title)}
      </h3>

      <p class="book-author">
        By ${escapeHTML(book.author)}
      </p>

      <div class="book-bottom">
        <strong class="book-price">
          ₹${book.price}
        </strong>

        <button
          class="add-cart-button"
          type="button"
          data-book-id="${book.id}"
          aria-label="Add ${escapeHTML(book.title)} to cart"
        >
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>

    </div>
  `;

  const favoriteButton = card.querySelector(".favorite-button");
  const addCartButton = card.querySelector(".add-cart-button");

  favoriteButton.addEventListener("click", () => {
    favoriteButton.classList.toggle("saved");

    const icon = favoriteButton.querySelector("i");

    if (favoriteButton.classList.contains("saved")) {
      icon.classList.remove("fa-regular");
      icon.classList.add("fa-solid");
      favoriteButton.style.color = "#b46c51";
    } else {
      icon.classList.remove("fa-solid");
      icon.classList.add("fa-regular");
      favoriteButton.style.color = "";
    }
  });

  addCartButton.addEventListener("click", () => {
    addToCart(book, addCartButton);
  });

  return card;
}


/* ================= CART LOGIC ================= */

function getCart() {
  try {
    return JSON.parse(localStorage.getItem("lumoraCart")) || [];
  } catch (error) {
    console.warn("Unable to read cart:", error);
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem("lumoraCart", JSON.stringify(cart));
}

function addToCart(book, button) {
  const cart = getCart();

  const existingItem = cart.find(item =>
    String(item.id) === String(book.id)
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: book.id,
      title: book.title,
      author: book.author,
      price: book.price,
      category: book.category,
      categoryLabel: book.categoryLabel,
      coverClass: book.coverClass,
      coverTitle: book.coverTitle,
      quantity: 1
    });
  }

  saveCart(cart);
  updateCartCount();

  button.classList.add("added");
  button.innerHTML = `<i class="fa-solid fa-check"></i>`;

  showToast("Book added to your cart.");

  setTimeout(() => {
    button.classList.remove("added");
    button.innerHTML = `<i class="fa-solid fa-plus"></i>`;
  }, 1200);
}

function updateCartCount() {
  const cart = getCart();

  const totalItems = cart.reduce((total, item) => {
    return total + Number(item.quantity || 1);
  }, 0);

  cartCount.textContent = totalItems;
}


/* ================= TOAST ================= */

function showToast(message) {
  let toast = document.querySelector(".lumora-toast");

  if (!toast) {
    toast = document.createElement("div");
    toast.className = "lumora-toast";

    Object.assign(toast.style, {
      position: "fixed",
      right: "25px",
      bottom: "25px",
      zIndex: "2000",
      padding: "14px 20px",
      borderRadius: "50px",
      color: "#ffffff",
      background: "#1d3b2f",
      boxShadow: "0 15px 35px rgba(29, 59, 47, 0.2)",
      fontFamily: "Manrope, sans-serif",
      fontSize: "12px",
      fontWeight: "700",
      opacity: "0",
      transform: "translateY(15px)",
      transition: "0.3s ease"
    });

    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.style.opacity = "1";
  toast.style.transform = "translateY(0)";

  clearTimeout(toast.hideTimer);

  toast.hideTimer = setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(15px)";
  }, 2200);
}


/* ================= LOADING / ERROR ================= */

function showLoading() {
  skeletonGrid.classList.remove("hidden");
  booksGrid.innerHTML = "";
  emptyState.classList.add("hidden");
}

function hideLoading() {
  skeletonGrid.classList.add("hidden");
}

function showError() {
  errorBanner.classList.remove("hidden");
}

function hideError() {
  errorBanner.classList.add("hidden");
}


/* ================= RESULT TEXT ================= */

function updateResultsText() {
  const count = filteredBooks.length;

  if (currentSearch || currentCategory !== "all") {
    resultsText.textContent =
      `${count} book${count !== 1 ? "s" : ""} found`;
  } else {
    resultsText.textContent =
      `${count} new books to explore`;
  }
}


/* ================= RESET FILTERS ================= */

function resetAllFilters() {
  bookSearch.value = "";
  categoryFilter.value = "all";
  sortBooks.value = "newest";

  currentCategory = "all";
  currentSearch = "";
  currentSort = "newest";

  categoryPills.forEach(pill => {
    pill.classList.toggle(
      "active",
      pill.dataset.category === "all"
    );
  });

  applyFilters();
}


/* ================= MOBILE NAVIGATION ================= */

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute(
    "aria-expanded",
    String(isOpen)
  );

  const icon = menuToggle.querySelector("i");

  if (isOpen) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});


/* ================= EVENT LISTENERS ================= */

bookSearch.addEventListener("input", applyFilters);

categoryFilter.addEventListener("change", () => {
  currentCategory = categoryFilter.value;

  categoryPills.forEach(pill => {
    pill.classList.toggle(
      "active",
      pill.dataset.category === currentCategory
    );
  });

  applyFilters();
});

sortBooks.addEventListener("change", applyFilters);

categoryPills.forEach(pill => {
  pill.addEventListener("click", () => {
    const selectedCategory = pill.dataset.category;

    categoryFilter.value = selectedCategory;
    currentCategory = selectedCategory;

    categoryPills.forEach(item => {
      item.classList.remove("active");
    });

    pill.classList.add("active");

    applyFilters();
  });
});

resetFilters.addEventListener("click", resetAllFilters);

retryButton.addEventListener("click", fetchNewBooks);

searchTrigger.addEventListener("click", () => {
  bookSearch.focus();

  bookSearch.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
});


/* ================= HTML ESCAPE ================= */

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


/* ================= INITIALIZE ================= */

document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  fetchNewBooks();
});