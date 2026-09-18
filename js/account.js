/* =====================================================
   LUMORA ACCOUNT PAGE JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* ================= ELEMENTS ================= */

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  const accountMenuItems = document.querySelectorAll(".account-menu-item");
  const accountPanels = document.querySelectorAll(".account-panel");

  const profileForm = document.getElementById("profileForm");

  const fullNameInput = document.getElementById("fullName");
  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const bioInput = document.getElementById("bio");

  const heroName = document.getElementById("heroName");
  const sidebarName = document.getElementById("sidebarName");
  const sidebarEmail = document.getElementById("sidebarEmail");
  const profileAvatar = document.getElementById("profileAvatar");

  const profileSuccess = document.getElementById("profileSuccess");

  const logoutButton = document.getElementById("logoutButton");

  const recommendationToggle =
    document.getElementById("recommendationToggle");

  const offersToggle =
    document.getElementById("offersToggle");

  const readingModeToggle =
    document.getElementById("readingModeToggle");

  const savePreferencesButton =
    document.getElementById("savePreferences");

  const preferenceStatus =
    document.getElementById("preferenceStatus");

  const securityForm =
    document.getElementById("securityForm");

  const securitySuccess =
    document.getElementById("securitySuccess");

  const securityError =
    document.getElementById("securityError");

  const passwordToggles =
    document.querySelectorAll(".password-toggle");

  const toast =
    document.getElementById("toast");

  const toastMessage =
    document.getElementById("toastMessage");

  const cartCount =
    document.getElementById("cartCount");


  /* ================= STORAGE KEYS ================= */

  const PROFILE_STORAGE_KEY = "lumoraProfile";
  const PREFERENCES_STORAGE_KEY = "lumoraPreferences";


  /* ================= DEFAULT DATA ================= */

  const defaultProfile = {
    fullName: "Ayush Reader",
    username: "ayushreader",
    email: "reader@lumora.books",
    phone: "+91 98765 43210",
    bio: "A curious reader who enjoys thoughtful stories, creative ideas, and books that inspire new perspectives."
  };

  const defaultPreferences = {
    recommendations: true,
    offers: true,
    readingMode: false
  };


  /* ================= MOBILE NAVIGATION ================= */

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("show");

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      menuToggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("show");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.innerHTML =
          '<i class="fa-solid fa-bars"></i>';
      });
    });
  }


  /* ================= LOAD PROFILE ================= */

  function getStoredProfile() {
    try {
      const storedProfile = localStorage.getItem(PROFILE_STORAGE_KEY);

      return storedProfile
        ? {
            ...defaultProfile,
            ...JSON.parse(storedProfile)
          }
        : defaultProfile;
    } catch (error) {
      console.error("Unable to load profile:", error);
      return defaultProfile;
    }
  }


  function saveProfile(profile) {
    localStorage.setItem(
      PROFILE_STORAGE_KEY,
      JSON.stringify(profile)
    );
  }


  function loadProfileIntoForm() {
    const profile = getStoredProfile();

    fullNameInput.value = profile.fullName;
    usernameInput.value = profile.username;
    emailInput.value = profile.email;
    phoneInput.value = profile.phone;
    bioInput.value = profile.bio;

    updateProfileUI(profile);
  }


  function updateProfileUI(profile) {
    const name = profile.fullName.trim() || "Reader";
    const firstName = name.split(" ")[0];

    heroName.textContent = `${firstName}.`;
    sidebarName.textContent = name;
    sidebarEmail.textContent = profile.email;

    profileAvatar.textContent =
      name.charAt(0).toUpperCase();
  }


  /* ================= PROFILE FORM ================= */

  if (profileForm) {
    profileForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const profile = {
        fullName: fullNameInput.value.trim(),
        username: usernameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: phoneInput.value.trim(),
        bio: bioInput.value.trim()
      };

      if (!profile.fullName || !profile.email) {
        showToast("Please fill in your name and email.");
        return;
      }

      saveProfile(profile);
      updateProfileUI(profile);

      profileSuccess.classList.add("show");
      showToast("Profile updated successfully.");

      setTimeout(() => {
        profileSuccess.classList.remove("show");
      }, 3500);
    });
  }


  /* ================= ACCOUNT TABS ================= */

  accountMenuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", () => {
      const selectedSection = menuItem.dataset.section;

      accountMenuItems.forEach((item) => {
        item.classList.remove("active");
      });

      accountPanels.forEach((panel) => {
        panel.classList.remove("active-panel");
      });

      menuItem.classList.add("active");

      const selectedPanel = document.getElementById(
        `${selectedSection}Panel`
      );

      if (selectedPanel) {
        selectedPanel.classList.add("active-panel");
      }
    });
  });


  /* ================= PREFERENCES ================= */

  function getStoredPreferences() {
    try {
      const storedPreferences =
        localStorage.getItem(PREFERENCES_STORAGE_KEY);

      return storedPreferences
        ? {
            ...defaultPreferences,
            ...JSON.parse(storedPreferences)
          }
        : defaultPreferences;
    } catch (error) {
      console.error("Unable to load preferences:", error);
      return defaultPreferences;
    }
  }


  function loadPreferences() {
    const preferences = getStoredPreferences();

    recommendationToggle.checked =
      preferences.recommendations;

    offersToggle.checked =
      preferences.offers;

    readingModeToggle.checked =
      preferences.readingMode;
  }


  function savePreferences() {
    const preferences = {
      recommendations: recommendationToggle.checked,
      offers: offersToggle.checked,
      readingMode: readingModeToggle.checked
    };

    localStorage.setItem(
      PREFERENCES_STORAGE_KEY,
      JSON.stringify(preferences)
    );

    preferenceStatus.textContent =
      "Preferences saved just now.";

    showToast("Preferences saved successfully.");

    setTimeout(() => {
      preferenceStatus.textContent =
        "Preferences are saved automatically.";
    }, 3000);
  }


  if (savePreferencesButton) {
    savePreferencesButton.addEventListener(
      "click",
      savePreferences
    );
  }


  /* ================= PASSWORD VISIBILITY ================= */

  passwordToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const targetId = toggle.dataset.target;
      const targetInput = document.getElementById(targetId);
      const icon = toggle.querySelector("i");

      if (targetInput.type === "password") {
        targetInput.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
        toggle.setAttribute("aria-label", "Hide password");
      } else {
        targetInput.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
        toggle.setAttribute("aria-label", "Show password");
      }
    });
  });


  /* ================= SECURITY FORM ================= */

  if (securityForm) {
    securityForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const currentPassword =
        document.getElementById("currentPassword").value.trim();

      const newPassword =
        document.getElementById("newPassword").value.trim();

      const confirmPassword =
        document.getElementById("confirmPassword").value.trim();

      securitySuccess.classList.remove("show");
      securityError.classList.remove("show");

      if (!currentPassword || !newPassword || !confirmPassword) {
        securityError.textContent =
          "Please fill in all password fields.";

        securityError.classList.add("show");
        return;
      }

      if (newPassword.length < 6) {
        securityError.innerHTML =
          '<i class="fa-solid fa-circle-exclamation"></i> Password must contain at least 6 characters.';

        securityError.classList.add("show");
        return;
      }

      if (newPassword !== confirmPassword) {
        securityError.innerHTML =
          '<i class="fa-solid fa-circle-exclamation"></i> New passwords do not match.';

        securityError.classList.add("show");
        return;
      }

      securitySuccess.classList.add("show");
      showToast("Password updated successfully.");

      securityForm.reset();

      setTimeout(() => {
        securitySuccess.classList.remove("show");
      }, 3500);
    });
  }


  /* ================= LOGOUT ================= */

  if (logoutButton) {
    logoutButton.addEventListener("click", () => {
      const shouldLogout = confirm(
        "Are you sure you want to sign out?"
      );

      if (!shouldLogout) {
        return;
      }

      showToast("You have been signed out.");

      setTimeout(() => {
        window.location.href = "index.html";
      }, 1200);
    });
  }


  /* ================= CART COUNT ================= */

  function updateCartCount() {
    try {
      const cartItems = JSON.parse(
        localStorage.getItem("lumoraCart")
      ) || [];

      const totalItems = cartItems.reduce((total, item) => {
        return total + (item.quantity || 1);
      }, 0);

      cartCount.textContent = totalItems;
    } catch (error) {
      cartCount.textContent = "0";
    }
  }


  /* ================= TOAST ================= */

  let toastTimeout;

  function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimeout);

    toastTimeout = setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }


  /* ================= INITIALIZE ================= */

  loadProfileIntoForm();
  loadPreferences();
  updateCartCount();

});