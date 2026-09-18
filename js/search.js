/* =====================================================
   LUMORA SEARCH PAGE JAVASCRIPT
   Search, Filters, Sorting and Cart State
===================================================== */


/* ================= BOOK DATA ================= */

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
    coverTitle: "The\nCreative\nHabit",
    coverAuthor: "TWYLA THARP",
    coverBackground: "cover-green",
    coverDesign: "cover-design-brown"
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    category: "business",
    categoryLabel: "Self Development",
    price: 549,
    oldPrice: 799,
    badge: "Editor's Pick",
    coverTitle: "Atomic\nHabits",
    coverAuthor: "JAMES CLEAR",
    coverBackground: "cover-cream",
    coverDesign: "cover-design-green"
  },
  {
    id: 3,
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "fiction",
    categoryLabel: "Literary Fiction",
    price: 399,
    oldPrice: 499,
    badge: "Popular",
    coverTitle: "The\nAlchemist",
    coverAuthor: "PAULO COELHO",
    coverBackground: "cover-lilac",
    coverDesign: "cover-design-purple"
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
    coverTitle: "Ikigai",
    coverAuthor: "HÉCTOR GARCÍA",
    coverBackground: "cover-peach",
    coverDesign: "cover-design-orange"
  },
  {
    id: 5,
    title: "The Last Light",
    author: "Amelia Ross",
    category: "fiction",
    categoryLabel: "Contemporary Fiction",
    price: 799,
    oldPrice: 999,
    badge: "New",
    coverTitle: "The\nLast\nLight",
    coverAuthor: "AMELIA ROSS",
    coverBackground: "cover-rose",
    coverDesign: "cover-design-red"
  },
  {
    id: 6,
    title: "Design Your Day",
    author: "Elena Park",
    category: "business",
    categoryLabel: "Productivity",
    price: 599,
    oldPrice: 749,
    badge: "Editor's Pick",
    coverTitle: "Design\nYour\nDay",
    coverAuthor: "ELENA PARK",
    coverBackground: "cover-sage",
    coverDesign: "cover-design-green"
  },
  {
    id: 7,
    title: "The Minimal Mind",
    author: "Jon Bell",
    category: "wellness",
    categoryLabel: "Mindfulness",
    price: 649,
    oldPrice: 799,
    badge: "Popular",
    coverTitle: "The\nMinimal\nMind",
    coverAuthor: "JON BELL",
    coverBackground: "cover-lilac",
    coverDesign: "cover-design-purple"
  },
  {
    id: 8,
    title: "Quiet Horizons",
    author: "Mira Lane",
    category: "fiction",
    categoryLabel: "Literary Fiction",
    price: 729,
    oldPrice: 899,
    badge: "New",
    coverTitle: "Quiet\nHorizons",
    coverAuthor: "MIRA LANE",
    coverBackground: "cover-cream",
    coverDesign: "cover-design-tan"
  },
  {
    id: 9,
    title: "Deep Work",
    author: "Cal Newport",
    category: "business",
    categoryLabel: "Productivity",
    price: 599,
    oldPrice: 799,
    badge: "Bestseller",
    coverTitle: "Deep\nWork",
    coverAuthor: "CAL NEWPORT",
    coverBackground: "cover-blue",
    coverDesign: "cover-design-navy"
  },
  {
    id: 10,
    title: "The Art of Rest",
    author: "Clara Wells",
    category: "wellness",
    categoryLabel: "Wellness",
    price: 499,
    oldPrice: 649,
    badge: "Featured",
    coverTitle: "The Art\nof Rest",
    coverAuthor: "CLARA WELLS",
    coverBackground: "cover-sage",
    coverDesign: "cover-design-olive"
  },
  {
    id: 11,
    title: "Steal Like an Artist",
    author: "Austin Kleon",
    category: "art",
    categoryLabel: "Creativity",
    price: 449,
    oldPrice: 599,
    badge: "Popular",
    coverTitle: "Steal Like\nan Artist",
    coverAuthor: "AUSTIN KLEON",
    coverBackground: "cover-yellow",
    coverDesign: "cover-design-black"
  },
  {
    id: 12,
    title: "The Design of Everyday Things",
    author: "Don Norman",
    category: "art",
    categoryLabel: "Design",
    price: 899,
    oldPrice: 1099,
    badge: "Editor's Pick",
    coverTitle: "The Design\nof Everyday\nThings",
    coverAuthor: "DON NORMAN",
    coverBackground: "cover-blue",
    coverDesign: "cover-design-navy"
  },
  {
    id: 13,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "business",
    categoryLabel: "Finance",
    price: 699,
    oldPrice: 899,
    badge: "Bestseller",
    coverTitle: "The\nPsychology\nof Money",
    coverAuthor: "MORGAN HOUSEL",
    coverBackground: "cover-cream",
    coverDesign: "cover-design-brown"
  },
  {
    id: 14,
    title: "Think Again",
    author: "Adam Grant",
    category: "business",
    categoryLabel: "Ideas",
    price: 649,
    oldPrice: 799,
    badge: "Popular",
    coverTitle: "Think\nAgain",
    coverAuthor: "ADAM GRANT",
    coverBackground: "cover-peach",
    coverDesign: "cover-design-green"
  },
  {
    id: 15,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    category: "wellness",
    categoryLabel: "Mindfulness",
    price: 599,
    oldPrice: 749,
    badge: "Classic",
    coverTitle: "The Power\nof Now",
    coverAuthor: "ECKHART TOLLE",
    coverBackground: "cover-sage",
    coverDesign: "cover-design-olive"
  },
  {
    id: 16,
    title: "Meditations",
    author: "Marcus Aurelius",
    category: "wellness",
    categoryLabel: "Philosophy",
    price: 349,
    oldPrice: 499,
    badge: "Classic",
    coverTitle: "Meditations",
    coverAuthor: "MARCUS AURELIUS",
    coverBackground: "cover-lilac",
    coverDesign: "cover-design-purple"
  },
  {
    id: 17,
    title: "The Midnight Library",
    author: "Matt Haig",
    category: "fiction",
    categoryLabel: "Contemporary Fiction",
    price: 549,
    oldPrice: 699,
    badge: "Bestseller",
    coverTitle: "The Midnight\nLibrary",
    coverAuthor: "MATT HAIG",
    coverBackground: "cover-blue",
    coverDesign: "cover-design-navy"
  },
  {
    id: 18,
    title: "Norwegian Wood",
    author: "Haruki Murakami",
    category: "fiction",
    categoryLabel: "Literary Fiction",
    price: 499,
    oldPrice: 650,
    badge: "Popular",
    coverTitle: "Norwegian\nWood",
    coverAuthor: "HARUKI MURAKAMI",
    coverBackground: "cover-rose",
    coverDesign: "cover-design-red"
  },
  {
    id: 19,
    title: "Show Your Work",
    author: "Austin Kleon",
    category: "art",
    categoryLabel: "Creativity",
    price: 399,
    oldPrice: 549,
    badge: "Featured",
    coverTitle: "Show\nYour\nWork",
    coverAuthor: "AUSTIN KLEON",
    coverBackground: "cover-yellow",
    coverDesign: "cover-design-black"
  },
  {
    id: 20,
    title: "The Creative Act",
    author: "Rick Rubin",
    category: "art",
    categoryLabel: "Art & Design",
    price: 999,
    oldPrice: 1299,
    badge: "New",
    coverTitle: "The\nCreative\nAct",
    coverAuthor: "RICK RUBIN",
    coverBackground: "cover-cream",
    coverDesign: "cover-design-brown"
  },
  {
    id: 21,
    title: "Essentialism",
    author: "Greg McKeown",
    category: "lifestyle",
    categoryLabel: "Lifestyle",
    price: 579,
    oldPrice: 749,
    badge: "Bestseller",
    coverTitle: "Essentialism",
    coverAuthor: "GREG MCKEOWN",
    coverBackground: "cover-sage",
    coverDesign: "cover-design-green"
  },
  {
    id: 22,
    title: "The Comfort Book",
    author: "Matt Haig",
    category: "wellness",
    categoryLabel: "Wellness",
    price: 499,
    oldPrice: 649,
    badge: "New",
    coverTitle: "The\nComfort\nBook",
    coverAuthor: "MATT HAIG",
    coverBackground: "cover-peach",
    coverDesign: "cover-design-orange"
  },
  {
    id: 23,
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    category: "science",
    categoryLabel: "Science",
    price: 699,
    oldPrice: 899,
    badge: "Classic",
    coverTitle: "A Brief\nHistory\nof Time",
    coverAuthor: "STEPHEN HAWKING",
    coverBackground: "cover-blue",
    coverDesign: "cover-design-navy"
  },
  {
    id: 24,
    title: "The Innovators",
    author: "Walter Isaacson",
    category: "science",
    categoryLabel: "Technology",
    price: 849,
    oldPrice: 999,
    badge: "Featured",
    coverTitle: "The\nInnovators",
    coverAuthor: "WALTER ISAACSON",
    coverBackground: "cover-yellow",
    coverDesign: "cover-design-black"
  }
];


/* ================= DOM ELEMENTS ================= */

const searchInput = document.getElementById("searchInput");
const searchSubmit = document.getElementById("searchSubmit");
const clearSearch = document.getElementById("clearSearch");

const booksGrid = document.getElementById("booksGrid");
const loadingState = document.getElementById("loadingState");
const emptyState = document.getElementById("emptyState");

const resultsCount = document.getElementById("resultsCount");
const sortSelect = document.getElementById("sortSelect");
const resetButton = document.getElementById("resetButton");

const filterPills = document.querySelectorAll(".filter-pill");
const suggestions = document.querySelectorAll(".suggestion");

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const cartCount = document.getElementById("cartCount");


/* ================= STATE ================= */

let activeCategory = "all";
let currentSearch = "";
let currentSort = "featured";


/* ================= INITIALIZATION ================= */

document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();

  setTimeout(() => {
    loadingState.classList.add("hidden");
    renderBooks();
  }, 650);
});


/* ================= GET CART ================= */

function getCart() {
  try {
    return JSON.parse(localStorage.getItem("lumoraCart")) || [];
  } catch (error) {
    console.error("Unable to read cart:", error);
    return [];
  }
}


/* ================= SAVE CART ================= */

function saveCart(cart) {
  localStorage.setItem("lumoraCart", JSON.stringify(cart));
}


/* ================= UPDATE CART COUNT ================= */

function updateCartCount() {
  const cart = getCart();

  const totalItems = cart.reduce((total, item) => {
    return total + (item.quantity || 1);
  }, 0);

  cartCount.textContent = totalItems;
}


/* ================= FILTER BOOKS ================= */

function getFilteredBooks() {
  let filteredBooks = [...books];

  if (currentSearch.trim() !== "") {
    const searchTerm = currentSearch.toLowerCase().trim();

    filteredBooks = filteredBooks.filter(book => {
      return (
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm) ||
        book.category.toLowerCase().includes(searchTerm) ||
        book.categoryLabel.toLowerCase().includes(searchTerm)
      );
    });
  }

  if (activeCategory !== "all") {
    filteredBooks = filteredBooks.filter(book => {
      return book.category === activeCategory;
    });
  }

  switch (currentSort) {
    case "title-asc":
      filteredBooks.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      break;

    case "title-desc":
      filteredBooks.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      break;

    case "price-low":
      filteredBooks.sort((a, b) => a.price - b.price);
      break;

    case "price-high":
      filteredBooks.sort((a, b) => b.price - a.price);
      break;

    case "featured":
    default:
      break;
  }

  return filteredBooks;
}


/* ================= RENDER BOOKS ================= */

function renderBooks() {
  const filteredBooks = getFilteredBooks();

  booksGrid.innerHTML = "";

  resultsCount.textContent = filteredBooks.length;

  if (filteredBooks.length === 0) {
    emptyState.classList.remove("hidden");
    booksGrid.classList.add("hidden");
    return;
  }

  emptyState.classList.add("hidden");
  booksGrid.classList.remove("hidden");

  filteredBooks.forEach((book, index) => {
    const bookCard = createBookCard(book, index);
    booksGrid.appendChild(bookCard);
  });
}


/* ================= CREATE BOOK CARD ================= */

function createBookCard(book, index) {
  const card = document.createElement("article");

  card.className = "book-card";
  card.style.animationDelay = `${index * 0.045}s`;

  card.innerHTML = `
    <div class="book-cover-area ${book.coverBackground}">

      <span class="book-badge">
        ${book.badge}
      </span>

      <button
        class="book-wishlist"
        aria-label="Add ${book.title} to wishlist"
        title="Add to wishlist"
      >
        <i class="fa-regular fa-heart"></i>
      </button>

      <div class="book-cover ${book.coverDesign}">
        <span class="book-cover-title">
          ${book.coverTitle.replace(/\n/g, "<br>")}
        </span>

        <span class="book-cover-author">
          ${book.coverAuthor}
        </span>
      </div>

    </div>

    <div class="book-info">

      <span class="book-category">
        ${book.categoryLabel}
      </span>

      <h3 class="book-title">
        ${book.title}
      </h3>

      <p class="book-author">
        By ${book.author}
      </p>

      <div class="book-bottom">

        <div class="book-price">
          ₹${book.price}
          <span class="book-old-price">
            ₹${book.oldPrice}
          </span>
        </div>

        <button
          class="add-cart-button"
          data-id="${book.id}"
          aria-label="Add ${book.title} to cart"
          title="Add to cart"
        >
          <i class="fa-solid fa-plus"></i>
        </button>

      </div>

    </div>
  `;

  const addButton = card.querySelector(".add-cart-button");
  const wishlistButton = card.querySelector(".book-wishlist");

  addButton.addEventListener("click", () => {
    addToCart(book, addButton);
  });

  wishlistButton.addEventListener("click", () => {
    wishlistButton.classList.toggle("liked");

    const icon = wishlistButton.querySelector("i");

    if (wishlistButton.classList.contains("liked")) {
      icon.classList.remove("fa-regular");
      icon.classList.add("fa-solid");
      wishlistButton.style.color = "#c66f58";
    } else {
      icon.classList.remove("fa-solid");
      icon.classList.add("fa-regular");
      wishlistButton.style.color = "";
    }
  });

  return card;
}


/* ================= ADD TO CART ================= */

function addToCart(book, button) {
  const cart = getCart();

  const existingItem = cart.find(item => item.id === book.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: book.id,
      title: book.title,
      author: book.author,
      price: book.price,
      oldPrice: book.oldPrice,
      category: book.category,
      categoryLabel: book.categoryLabel,
      coverTitle: book.coverTitle,
      coverAuthor: book.coverAuthor,
      coverBackground: book.coverBackground,
      coverDesign: book.coverDesign,
      quantity: 1
    });
  }

  saveCart(cart);
  updateCartCount();

  button.classList.add("added");
  button.innerHTML = `<i class="fa-solid fa-check"></i>`;

  showToast(`${book.title} added to your cart`);

  setTimeout(() => {
    button.classList.remove("added");
    button.innerHTML = `<i class="fa-solid fa-plus"></i>`;
  }, 1200);
}


/* ================= TOAST MESSAGE ================= */

function showToast(message) {
  let toast = document.querySelector(".lumora-toast");

  if (!toast) {
    toast = document.createElement("div");
    toast.className = "lumora-toast";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <i class="fa-solid fa-check"></i>
    <span>${message}</span>
  `;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}


/* ================= SEARCH EVENTS ================= */

searchInput.addEventListener("input", () => {
  currentSearch = searchInput.value;

  if (searchInput.value.trim() !== "") {
    clearSearch.classList.add("visible");
  } else {
    clearSearch.classList.remove("visible");
  }

  renderBooks();
});


searchSubmit.addEventListener("click", () => {
  currentSearch = searchInput.value;
  renderBooks();

  document.querySelector(".results-section").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});


searchInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    searchSubmit.click();
  }
});


clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  currentSearch = "";
  clearSearch.classList.remove("visible");
  renderBooks();
  searchInput.focus();
});


/* ================= SUGGESTION EVENTS ================= */

suggestions.forEach(suggestion => {
  suggestion.addEventListener("click", () => {
    const searchValue = suggestion.dataset.search;

    searchInput.value = searchValue;
    currentSearch = searchValue;

    clearSearch.classList.add("visible");
    renderBooks();

    document.querySelector(".results-section").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});


/* ================= CATEGORY FILTER EVENTS ================= */

filterPills.forEach(pill => {
  pill.addEventListener("click", () => {
    filterPills.forEach(item => {
      item.classList.remove("active");
    });

    pill.classList.add("active");

    activeCategory = pill.dataset.category;

    renderBooks();
  });
});


/* ================= SORT EVENT ================= */

sortSelect.addEventListener("change", () => {
  currentSort = sortSelect.value;
  renderBooks();
});


/* ================= RESET EVENT ================= */

resetButton.addEventListener("click", () => {
  searchInput.value = "";
  currentSearch = "";
  activeCategory = "all";
  currentSort = "featured";

  sortSelect.value = "featured";
  clearSearch.classList.remove("visible");

  filterPills.forEach(pill => {
    pill.classList.remove("active");

    if (pill.dataset.category === "all") {
      pill.classList.add("active");
    }
  });

  renderBooks();
});


/* ================= MOBILE NAVIGATION ================= */

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", isOpen);

  menuToggle.innerHTML = isOpen
    ? `<i class="fa-solid fa-xmark"></i>`
    : `<i class="fa-solid fa-bars"></i>`;
});


document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  });
});


/* ================= TOAST CSS INJECTION ================= */

const toastStyles = document.createElement("style");

toastStyles.textContent = `
  .lumora-toast {
    position: fixed;
    right: 25px;
    bottom: 25px;
    z-index: 9999;
    display: flex;
    align-items: center;
    gap: 11px;
    max-width: 330px;
    padding: 15px 19px;
    border: 1px solid rgba(255, 255, 255, 0.7);
    border-radius: 13px;
    background: #214e3d;
    color: #fff;
    box-shadow: 0 15px 35px rgba(20, 50, 38, 0.22);
    font-family: "Manrope", sans-serif;
    font-size: 11px;
    font-weight: 700;
    opacity: 0;
    pointer-events: none;
    transform: translateY(20px);
    transition: all 0.35s ease;
  }

  .lumora-toast.show {
    opacity: 1;
    transform: translateY(0);
  }

  .lumora-toast i {
    color: #e5b17b;
  }

  .book-wishlist.liked {
    background: #fff;
    color: #c66f58;
  }

  @media (max-width: 480px) {
    .lumora-toast {
      right: 14px;
      left: 14px;
      bottom: 15px;
      max-width: none;
    }
  }
`;

document.head.appendChild(toastStyles);