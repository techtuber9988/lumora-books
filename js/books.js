/* =========================================================
   LUMORA BOOKS
   Dynamic Book Catalogue
   Search, Filters, Sorting, Cart State
========================================================= */


/* =========================================================
   BOOK DATA
========================================================= */

const books = [
  {
    id: 1,
    title: "The Creative Habit",
    author: "Twyla Tharp",
    category: "art",
    categoryLabel: "Creativity",
    price: 699,
    oldPrice: 899,
    badge: "Bestseller",
    color: "brown",
    featured: true
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    category: "wellness",
    categoryLabel: "Self Development",
    price: 549,
    oldPrice: 799,
    badge: "Editor's Pick",
    color: "green",
    featured: true
  },
  {
    id: 3,
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "fiction",
    categoryLabel: "Literary Fiction",
    price: 399,
    oldPrice: 499,
    badge: "Limited Edition",
    color: "purple",
    featured: true
  },
  {
    id: 4,
    title: "Ikigai",
    author: "Héctor García",
    category: "lifestyle",
    categoryLabel: "Lifestyle",
    price: 479,
    oldPrice: 650,
    badge: "New Arrival",
    color: "terracotta",
    featured: true
  },
  {
    id: 5,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "business",
    categoryLabel: "Finance",
    price: 599,
    oldPrice: 799,
    badge: "Popular",
    color: "blue",
    featured: true
  },
  {
    id: 6,
    title: "Deep Work",
    author: "Cal Newport",
    category: "business",
    categoryLabel: "Productivity",
    price: 649,
    oldPrice: 899,
    badge: "Editor's Pick",
    color: "navy",
    featured: true
  },
  {
    id: 7,
    title: "The Mountain Is You",
    author: "Brianna Wiest",
    category: "wellness",
    categoryLabel: "Mindfulness",
    price: 529,
    oldPrice: 699,
    badge: "Trending",
    color: "rose",
    featured: true
  },
  {
    id: 8,
    title: "The Art of Thinking Clearly",
    author: "Rolf Dobelli",
    category: "science",
    categoryLabel: "Psychology",
    price: 579,
    oldPrice: 749,
    badge: "Popular",
    color: "orange",
    featured: true
  },
  {
    id: 9,
    title: "The Midnight Library",
    author: "Matt Haig",
    category: "fiction",
    categoryLabel: "Contemporary Fiction",
    price: 449,
    oldPrice: 599,
    badge: "Bestseller",
    color: "midnight",
    featured: true
  },
  {
    id: 10,
    title: "Eleanor Oliphant Is Completely Fine",
    author: "Gail Honeyman",
    category: "fiction",
    categoryLabel: "Fiction",
    price: 499,
    oldPrice: 699,
    badge: "Reader Favourite",
    color: "yellow",
    featured: true
  },
  {
    id: 11,
    title: "The Book Thief",
    author: "Markus Zusak",
    category: "fiction",
    categoryLabel: "Historical Fiction",
    price: 529,
    oldPrice: 749,
    badge: "Classic",
    color: "red",
    featured: true
  },
  {
    id: 12,
    title: "Norwegian Wood",
    author: "Haruki Murakami",
    category: "fiction",
    categoryLabel: "Literary Fiction",
    price: 599,
    oldPrice: 799,
    badge: "Classic",
    color: "olive",
    featured: true
  },
  {
    id: 13,
    title: "Start With Why",
    author: "Simon Sinek",
    category: "business",
    categoryLabel: "Leadership",
    price: 579,
    oldPrice: 799,
    badge: "Business Pick",
    color: "teal",
    featured: true
  },
  {
    id: 14,
    title: "The Lean Startup",
    author: "Eric Ries",
    category: "business",
    categoryLabel: "Entrepreneurship",
    price: 699,
    oldPrice: 899,
    badge: "Business",
    color: "charcoal",
    featured: true
  },
  {
    id: 15,
    title: "Good Vibes, Good Life",
    author: "Vex King",
    category: "wellness",
    categoryLabel: "Personal Growth",
    price: 449,
    oldPrice: 599,
    badge: "New Arrival",
    color: "lavender",
    featured: true
  },
  {
    id: 16,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    category: "wellness",
    categoryLabel: "Spirituality",
    price: 499,
    oldPrice: 699,
    badge: "Reader Favourite",
    color: "sage",
    featured: true
  },
  {
    id: 17,
    title: "Steal Like an Artist",
    author: "Austin Kleon",
    category: "art",
    categoryLabel: "Creativity",
    price: 399,
    oldPrice: 549,
    badge: "Creative Pick",
    color: "cream",
    featured: true
  },
  {
    id: 18,
    title: "Show Your Work!",
    author: "Austin Kleon",
    category: "art",
    categoryLabel: "Creative Practice",
    price: 429,
    oldPrice: 599,
    badge: "Popular",
    color: "coral",
    featured: true
  },
  {
    id: 19,
    title: "Ways of Seeing",
    author: "John Berger",
    category: "art",
    categoryLabel: "Art & Culture",
    price: 749,
    oldPrice: 999,
    badge: "Classic",
    color: "beige",
    featured: true
  },
  {
    id: 20,
    title: "The Design of Everyday Things",
    author: "Don Norman",
    category: "art",
    categoryLabel: "Design",
    price: 799,
    oldPrice: 1099,
    badge: "Design Pick",
    color: "bluegray",
    featured: true
  },
  {
    id: 21,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "science",
    categoryLabel: "History & Science",
    price: 699,
    oldPrice: 899,
    badge: "Bestseller",
    color: "sand",
    featured: true
  },
  {
    id: 22,
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    category: "science",
    categoryLabel: "Science",
    price: 599,
    oldPrice: 799,
    badge: "Classic",
    color: "space",
    featured: true
  },
  {
    id: 23,
    title: "The Code Book",
    author: "Simon Singh",
    category: "science",
    categoryLabel: "Technology",
    price: 649,
    oldPrice: 849,
    badge: "Science Pick",
    color: "cyan",
    featured: true
  },
  {
    id: 24,
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    category: "lifestyle",
    categoryLabel: "Classic",
    price: 349,
    oldPrice: 499,
    badge: "Timeless",
    color: "sky",
    featured: true
  }
];


/* =========================================================
   DOM ELEMENTS
========================================================= */

const booksGrid = document.getElementById("booksGrid");
const skeletonGrid = document.getElementById("skeletonGrid");
const emptyState = document.getElementById("emptyState");
const errorBanner = document.getElementById("errorBanner");

const bookSearch = document.getElementById("bookSearch");
const categoryFilter = document.getElementById("categoryFilter");
const sortBooks = document.getElementById("sortBooks");

const categoryPills = document.querySelectorAll(".category-pill");
const resultsText = document.getElementById("resultsText");
const bookTotal = document.getElementById("bookTotal");

const resetFilters = document.getElementById("resetFilters");
const retryButton = document.getElementById("retryButton");

const cartCount = document.getElementById("cartCount");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");


/* =========================================================
   APPLICATION STATE
========================================================= */

let currentBooks = [...books];

let state = {
  search: "",
  category: "all",
  sort: "featured"
};


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initializePage();
});


function initializePage() {
  updateBookTotal();
  setupEventListeners();
  loadBooks();
  updateCartCount();
}


/* =========================================================
   LOAD BOOKS
========================================================= */

function loadBooks() {
  showSkeleton();

  /*
    Simulated async loading to create a smooth
    catalogue loading experience.

    This can later be replaced with a real
    REST API fetch request.
  */

  setTimeout(() => {
    try {
      currentBooks = [...books];

      hideSkeleton();
      renderBooks();

    } catch (error) {
      console.error("Book loading error:", error);
      showError();
    }
  }, 700);
}


/* =========================================================
   RENDER BOOKS
========================================================= */

function renderBooks() {
  const filteredBooks = getFilteredBooks();

  booksGrid.innerHTML = "";

  if (filteredBooks.length === 0) {
    booksGrid.classList.add("hidden");
    emptyState.classList.remove("hidden");

    resultsText.textContent = "No books found";
    return;
  }

  booksGrid.classList.remove("hidden");
  emptyState.classList.add("hidden");
  errorBanner.classList.add("hidden");

  filteredBooks.forEach((book, index) => {
    const bookCard = createBookCard(book, index);
    booksGrid.insertAdjacentHTML("beforeend", bookCard);
  });

  updateResultsText(filteredBooks.length);
  attachCartButtons();
}


/* =========================================================
   CREATE BOOK CARD
========================================================= */

function createBookCard(book, index) {
  return `
    <article
      class="book-card"
      data-book-id="${book.id}"
      style="--card-index: ${index};"
    >

      <div class="book-card-visual ${book.color}">

        <span class="book-badge">
          ${book.badge}
        </span>

        <button
          class="wishlist-button"
          type="button"
          aria-label="Add ${book.title} to wishlist"
          title="Add to wishlist"
        >
          <i class="fa-regular fa-heart"></i>
        </button>

        <div class="book-cover">

          <div class="book-cover-brand">
            LUMORA
          </div>

          <h3 class="book-cover-title">
            ${book.title}
          </h3>

          <span class="book-cover-author">
            ${book.author}
          </span>

        </div>

      </div>

      <div class="book-card-content">

        <span class="book-category">
          ${book.categoryLabel}
        </span>

        <h2 class="book-title">
          ${book.title}
        </h2>

        <p class="book-author">
          By ${book.author}
        </p>

        <div class="book-card-bottom">

          <div class="book-price">
            <strong>₹${book.price}</strong>
            <del>₹${book.oldPrice}</del>
          </div>

          <button
            class="add-cart-button"
            type="button"
            data-book-id="${book.id}"
            aria-label="Add ${book.title} to cart"
            title="Add to cart"
          >
            <i class="fa-solid fa-plus"></i>
          </button>

        </div>

      </div>

    </article>
  `;
}


/* =========================================================
   FILTERING AND SORTING
========================================================= */

function getFilteredBooks() {
  let filtered = [...currentBooks];

  const searchTerm = state.search.toLowerCase().trim();

  if (searchTerm !== "") {
    filtered = filtered.filter((book) => {
      const titleMatch = book.title
        .toLowerCase()
        .includes(searchTerm);

      const authorMatch = book.author
        .toLowerCase()
        .includes(searchTerm);

      const categoryMatch = book.categoryLabel
        .toLowerCase()
        .includes(searchTerm);

      return titleMatch || authorMatch || categoryMatch;
    });
  }

  if (state.category !== "all") {
    filtered = filtered.filter(
      (book) => book.category === state.category
    );
  }

  switch (state.sort) {
    case "title-asc":
      filtered.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      break;

    case "title-desc":
      filtered.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      break;

    case "price-low":
      filtered.sort((a, b) => a.price - b.price);
      break;

    case "price-high":
      filtered.sort((a, b) => b.price - a.price);
      break;

    case "featured":
    default:
      filtered.sort((a, b) => a.id - b.id);
      break;
  }

  return filtered;
}


/* =========================================================
   SEARCH EVENT
========================================================= */

if (bookSearch) {
  bookSearch.addEventListener("input", (event) => {
    state.search = event.target.value;
    renderBooks();
  });
}


/* =========================================================
   CATEGORY SELECT EVENT
========================================================= */

if (categoryFilter) {
  categoryFilter.addEventListener("change", (event) => {
    state.category = event.target.value;

    updateActiveCategoryPill();
    renderBooks();
  });
}


/* =========================================================
   SORT EVENT
========================================================= */

if (sortBooks) {
  sortBooks.addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderBooks();
  });
}


/* =========================================================
   CATEGORY PILLS
========================================================= */

function setupCategoryPills() {
  categoryPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      const selectedCategory = pill.dataset.category;

      state.category = selectedCategory;

      if (categoryFilter) {
        categoryFilter.value = selectedCategory;
      }

      updateActiveCategoryPill();
      renderBooks();
    });
  });
}


function updateActiveCategoryPill() {
  categoryPills.forEach((pill) => {
    pill.classList.toggle(
      "active",
      pill.dataset.category === state.category
    );
  });
}


/* =========================================================
   EVENT LISTENERS
========================================================= */

function setupEventListeners() {
  setupCategoryPills();

  if (resetFilters) {
    resetFilters.addEventListener("click", resetAllFilters);
  }

  if (retryButton) {
    retryButton.addEventListener("click", () => {
      errorBanner.classList.add("hidden");
      loadBooks();
    });
  }

  setupMobileNavigation();
}


/* =========================================================
   RESET FILTERS
========================================================= */

function resetAllFilters() {
  state.search = "";
  state.category = "all";
  state.sort = "featured";

  if (bookSearch) {
    bookSearch.value = "";
  }

  if (categoryFilter) {
    categoryFilter.value = "all";
  }

  if (sortBooks) {
    sortBooks.value = "featured";
  }

  updateActiveCategoryPill();
  renderBooks();
}


/* =========================================================
   CART FUNCTIONALITY
========================================================= */

function getCart() {
  try {
    return JSON.parse(localStorage.getItem("lumoraCart")) || [];
  } catch (error) {
    console.error("Cart data error:", error);
    return [];
  }
}


function saveCart(cart) {
  localStorage.setItem("lumoraCart", JSON.stringify(cart));
}


function attachCartButtons() {
  const addCartButtons = document.querySelectorAll(".add-cart-button");

  addCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const bookId = Number(button.dataset.bookId);
      addToCart(bookId);

      button.classList.add("added");

      button.innerHTML = `
        <i class="fa-solid fa-check"></i>
      `;

      setTimeout(() => {
        button.classList.remove("added");

        button.innerHTML = `
          <i class="fa-solid fa-plus"></i>
        `;
      }, 1000);
    });
  });

  const wishlistButtons = document.querySelectorAll(".wishlist-button");

  wishlistButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const icon = button.querySelector("i");

      icon.classList.toggle("fa-regular");
      icon.classList.toggle("fa-solid");

      button.classList.toggle("active");
    });
  });
}


function addToCart(bookId) {
  const book = books.find((item) => item.id === bookId);

  if (!book) {
    return;
  }

  const cart = getCart();

  const existingItem = cart.find(
    (item) => item.id === bookId
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...book,
      quantity: 1
    });
  }

  saveCart(cart);
  updateCartCount();

  showCartToast(`${book.title} added to cart`);
}


function updateCartCount() {
  const cart = getCart();

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  if (cartCount) {
    cartCount.textContent = totalItems;

    if (totalItems > 0) {
      cartCount.classList.add("visible");
    } else {
      cartCount.classList.remove("visible");
    }
  }
}


/* =========================================================
   CART TOAST
========================================================= */

function showCartToast(message) {
  const existingToast = document.querySelector(".cart-toast");

  if (existingToast) {
    existingToast.remove();
  }

  const toast = document.createElement("div");

  toast.className = "cart-toast";

  toast.innerHTML = `
    <i class="fa-solid fa-check"></i>
    <span>${message}</span>
  `;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 20);

  setTimeout(() => {
    toast.classList.remove("show");

    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 2200);
}


/* =========================================================
   LOADING STATE
========================================================= */

function showSkeleton() {
  if (skeletonGrid) {
    skeletonGrid.classList.remove("hidden");
  }

  if (booksGrid) {
    booksGrid.classList.add("hidden");
  }

  if (emptyState) {
    emptyState.classList.add("hidden");
  }
}


function hideSkeleton() {
  if (skeletonGrid) {
    skeletonGrid.classList.add("hidden");
  }

  if (booksGrid) {
    booksGrid.classList.remove("hidden");
  }
}


/* =========================================================
   ERROR STATE
========================================================= */

function showError() {
  hideSkeleton();

  if (booksGrid) {
    booksGrid.classList.add("hidden");
  }

  if (emptyState) {
    emptyState.classList.add("hidden");
  }

  if (errorBanner) {
    errorBanner.classList.remove("hidden");
  }
}


/* =========================================================
   RESULT TEXT
========================================================= */

function updateResultsText(count) {
  if (!resultsText) {
    return;
  }

  if (state.search || state.category !== "all") {
    resultsText.textContent =
      `Showing ${count} ${count === 1 ? "book" : "books"}`;
  } else {
    resultsText.textContent = "Showing all books";
  }
}


function updateBookTotal() {
  if (bookTotal) {
    bookTotal.textContent = books.length;
  }
}


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

function setupMobileNavigation() {
  if (!menuToggle || !navLinks) {
    return;
  }

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