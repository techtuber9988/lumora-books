/* =====================================================
   LUMORA CART JAVASCRIPT
   LocalStorage Cart Management
===================================================== */

"use strict";

/* ================= CONFIGURATION ================= */

const CART_STORAGE_KEY = "lumoraCart";
const FREE_SHIPPING_LIMIT = 999;
const SHIPPING_CHARGE = 79;
const VALID_COUPON = "LUMORA10";
const COUPON_DISCOUNT_PERCENT = 10;

/* ================= DOM ELEMENTS ================= */

const cartItemsContainer = document.getElementById("cartItems");
const emptyCartElement = document.getElementById("emptyCart");

const cartCountElement = document.getElementById("cartCount");
const itemCountLabel = document.getElementById("itemCountLabel");

const subtotalElement = document.getElementById("subtotal");
const shippingElement = document.getElementById("shipping");
const discountElement = document.getElementById("discount");
const discountLine = document.getElementById("discountLine");
const totalElement = document.getElementById("total");

const shippingNotice = document.getElementById("shippingNotice");
const freeShippingAmount = document.getElementById("freeShippingAmount");

const couponInput = document.getElementById("couponInput");
const applyCouponButton = document.getElementById("applyCoupon");
const couponMessage = document.getElementById("couponMessage");

const checkoutButton = document.getElementById("checkoutButton");

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");

/* ================= STATE ================= */

let cart = loadCart();
let appliedCoupon = null;

/* ================= INITIALIZATION ================= */

document.addEventListener("DOMContentLoaded", () => {
  renderCart();
  updateCartCount();
  setupNavigation();
  setupCoupon();
  setupCheckout();
});

/* ================= LOCAL STORAGE ================= */

/**
 * Load cart from localStorage.
 * Handles invalid or missing data safely.
 */
function loadCart() {
  try {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);

    if (!savedCart) {
      return [];
    }

    const parsedCart = JSON.parse(savedCart);

    if (!Array.isArray(parsedCart)) {
      return [];
    }

    return parsedCart.map(normalizeCartItem);
  } catch (error) {
    console.error("Unable to load cart:", error);
    return [];
  }
}

/**
 * Save current cart to localStorage.
 */
function saveCart() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (error) {
    console.error("Unable to save cart:", error);
    showToast("Unable to save cart changes.");
  }
}

/**
 * Normalize different product object formats.
 */
function normalizeCartItem(item) {
  return {
    id: item.id ?? item.bookId ?? crypto.randomUUID(),

    title: item.title ?? item.name ?? "Untitled Book",

    author: item.author ?? item.writer ?? "Unknown Author",

    category: item.category ?? "Featured Collection",

    price: Number(item.price ?? item.currentPrice ?? 0),

    originalPrice: Number(
      item.originalPrice ??
      item.oldPrice ??
      item.comparePrice ??
      item.price ??
      0
    ),

    quantity: Math.max(1, Number(item.quantity ?? 1)),

    coverColor: item.coverColor ?? item.color ?? "#315b4a",

    coverText: item.coverText ?? "#f7ead7"
  };
}

/* ================= FORMATTERS ================= */

function formatCurrency(amount) {
  return `₹${Math.round(amount).toLocaleString("en-IN")}`;
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/* ================= CART RENDERING ================= */

function renderCart() {
  if (!cart.length) {
    cartItemsContainer.innerHTML = "";
    emptyCartElement.classList.remove("hidden");

    itemCountLabel.textContent = "0 items";

    updateSummary();
    return;
  }

  emptyCartElement.classList.add("hidden");

  cartItemsContainer.innerHTML = cart
    .map((item, index) => createCartItemHTML(item, index))
    .join("");

  attachCartItemEvents();
  updateSummary();
}

/**
 * Generate one cart item card.
 */
function createCartItemHTML(item, index) {
  const itemTotal = item.price * item.quantity;

  return `
    <article
      class="cart-item"
      data-id="${escapeHTML(item.id)}"
      style="animation-delay: ${index * 0.06}s;"
    >

      <div
        class="cart-product-cover"
        style="
          --cover-color: ${escapeHTML(item.coverColor)};
          --cover-text: ${escapeHTML(item.coverText)};
        "
      >
        <div class="cover-title">
          ${escapeHTML(item.title)}
        </div>

        <span class="cover-author">
          ${escapeHTML(item.author)}
        </span>
      </div>

      <div class="cart-product-details">

        <span class="product-category">
          ${escapeHTML(item.category)}
        </span>

        <h3 class="product-title">
          ${escapeHTML(item.title)}
        </h3>

        <p class="product-author">
          By ${escapeHTML(item.author)}
        </p>

        <div class="product-price">
          <span class="current-price">
            ${formatCurrency(item.price)}
          </span>

          ${
            item.originalPrice > item.price
              ? `
                <span class="original-price">
                  ${formatCurrency(item.originalPrice)}
                </span>
              `
              : ""
          }
        </div>

      </div>

      <div class="cart-item-actions">

        <button
          class="remove-item"
          type="button"
          data-action="remove"
          data-id="${escapeHTML(item.id)}"
          aria-label="Remove ${escapeHTML(item.title)} from cart"
        >
          <i class="fa-regular fa-trash-can"></i>
          Remove
        </button>

        <div class="quantity-control">

          <button
            class="quantity-button"
            type="button"
            data-action="decrease"
            data-id="${escapeHTML(item.id)}"
            aria-label="Decrease quantity"
          >
            <i class="fa-solid fa-minus"></i>
          </button>

          <span class="quantity-value">
            ${item.quantity}
          </span>

          <button
            class="quantity-button"
            type="button"
            data-action="increase"
            data-id="${escapeHTML(item.id)}"
            aria-label="Increase quantity"
          >
            <i class="fa-solid fa-plus"></i>
          </button>

        </div>

      </div>

    </article>
  `;
}

/**
 * Attach click events to cart item buttons.
 */
function attachCartItemEvents() {
  const actionButtons = document.querySelectorAll("[data-action]");

  actionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const itemId = button.dataset.id;
      const action = button.dataset.action;

      if (action === "increase") {
        changeQuantity(itemId, 1);
      }

      if (action === "decrease") {
        changeQuantity(itemId, -1);
      }

      if (action === "remove") {
        removeItem(itemId);
      }
    });
  });
}

/* ================= CART OPERATIONS ================= */

/**
 * Change quantity of a cart item.
 */
function changeQuantity(itemId, amount) {
  const item = cart.find((cartItem) => String(cartItem.id) === String(itemId));

  if (!item) {
    return;
  }

  item.quantity += amount;

  if (item.quantity <= 0) {
    removeItem(itemId);
    return;
  }

  saveCart();
  renderCart();
  updateCartCount();

  showToast(
    amount > 0
      ? `${item.title} quantity increased.`
      : `${item.title} quantity decreased.`
  );
}

/**
 * Remove item from cart.
 */
function removeItem(itemId) {
  const item = cart.find((cartItem) => String(cartItem.id) === String(itemId));

  if (!item) {
    return;
  }

  cart = cart.filter(
    (cartItem) => String(cartItem.id) !== String(itemId)
  );

  saveCart();
  renderCart();
  updateCartCount();

  showToast(`${item.title} removed from cart.`);
}

/**
 * Add a product to the cart.
 * This function can also be used from books.js or new-books.js.
 */
function addToCart(product) {
  const normalizedProduct = normalizeCartItem(product);

  const existingItem = cart.find(
    (item) => String(item.id) === String(normalizedProduct.id)
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push(normalizedProduct);
  }

  saveCart();
  updateCartCount();

  showToast(`${normalizedProduct.title} added to cart.`);
}

/* ================= SUMMARY CALCULATIONS ================= */

function calculateSubtotal() {
  return cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}

function calculateItemCount() {
  return cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
}

function calculateShipping(subtotal) {
  if (subtotal === 0) {
    return 0;
  }

  if (subtotal >= FREE_SHIPPING_LIMIT) {
    return 0;
  }

  return SHIPPING_CHARGE;
}

function calculateDiscount(subtotal) {
  if (appliedCoupon !== VALID_COUPON) {
    return 0;
  }

  return subtotal * (COUPON_DISCOUNT_PERCENT / 100);
}

/**
 * Update all summary values.
 */
function updateSummary() {
  const subtotal = calculateSubtotal();
  const shipping = calculateShipping(subtotal);
  const discount = calculateDiscount(subtotal);
  const total = subtotal + shipping - discount;
  const itemCount = calculateItemCount();

  subtotalElement.textContent = formatCurrency(subtotal);
  shippingElement.textContent =
    shipping === 0 && subtotal > 0
      ? "Free"
      : formatCurrency(shipping);

  discountElement.textContent = `-${formatCurrency(discount)}`;
  totalElement.textContent = formatCurrency(Math.max(0, total));

  itemCountLabel.textContent =
    `${itemCount} ${itemCount === 1 ? "item" : "items"}`;

  discountLine.classList.toggle("hidden", discount === 0);

  updateShippingNotice(subtotal);

  checkoutButton.disabled = cart.length === 0;
}

/**
 * Update free shipping notice.
 */
function updateShippingNotice(subtotal) {
  if (subtotal === 0) {
    shippingNotice.classList.add("hidden");
    return;
  }

  if (subtotal >= FREE_SHIPPING_LIMIT) {
    shippingNotice.classList.remove("hidden");

    shippingNotice.innerHTML = `
      <i class="fa-solid fa-circle-check"></i>
      <p>
        You qualify for <strong>free shipping</strong>.
      </p>
    `;

    return;
  }

  const remainingAmount = FREE_SHIPPING_LIMIT - subtotal;

  shippingNotice.classList.remove("hidden");

  shippingNotice.innerHTML = `
    <i class="fa-solid fa-truck-fast"></i>
    <p>
      Add books worth
      <strong>${formatCurrency(remainingAmount)}</strong>
      more for free shipping.
    </p>
  `;
}

/**
 * Update cart badge in navbar.
 */
function updateCartCount() {
  const totalItems = calculateItemCount();

  cartCountElement.textContent = totalItems > 99 ? "99+" : totalItems;
}

/* ================= COUPON SYSTEM ================= */

function setupCoupon() {
  applyCouponButton.addEventListener("click", applyCoupon);

  couponInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      applyCoupon();
    }
  });
}

function applyCoupon() {
  const enteredCoupon = couponInput.value.trim().toUpperCase();

  couponMessage.className = "coupon-message";

  if (!enteredCoupon) {
    couponMessage.textContent = "Please enter a coupon code.";
    couponMessage.classList.add("error");
    return;
  }

  if (enteredCoupon === VALID_COUPON) {
    appliedCoupon = VALID_COUPON;

    couponMessage.textContent =
      `Coupon applied. ${COUPON_DISCOUNT_PERCENT}% discount added.`;

    couponMessage.classList.add("success");

    couponInput.value = VALID_COUPON;
    couponInput.disabled = true;
    applyCouponButton.textContent = "Applied";

    updateSummary();
    showToast("Coupon applied successfully.");
    return;
  }

  couponMessage.textContent = "This coupon code is not valid.";
  couponMessage.classList.add("error");

  appliedCoupon = null;
  updateSummary();
}

/* ================= CHECKOUT ================= */

function setupCheckout() {
  checkoutButton.addEventListener("click", () => {
    if (!cart.length) {
      showToast("Your cart is empty.");
      return;
    }

    showToast("Checkout is ready for integration.");

    /*
      For a real project, redirect to:
      window.location.href = "checkout.html";
    */
  });
}

/* ================= NAVIGATION ================= */

function setupNavigation() {
  if (!menuToggle || !navLinks) {
    return;
  }

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

/* ================= TOAST ================= */

let toastTimeout;

function showToast(message) {
  toastMessage.textContent = message;

  toast.classList.add("show");

  clearTimeout(toastTimeout);

  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

/* ================= GLOBAL ACCESS ================= */

/*
  This allows other JavaScript files to call:

  window.addToCart({
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self Development",
    price: 549,
    originalPrice: 799,
    coverColor: "#315b4a",
    coverText: "#f7ead7"
  });
*/

window.addToCart = addToCart;