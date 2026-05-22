const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const year = document.querySelector("#year");
const qrOpen = document.querySelector("[data-qr-open]");
const qrClose = document.querySelector("[data-qr-close]");
const qrModal = document.querySelector("[data-qr-modal]");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

if (qrOpen && qrClose && qrModal) {
  const openModal = () => {
    qrModal.removeAttribute("hidden");
    qrClose.focus();
  };

  const closeModal = () => {
    qrModal.setAttribute("hidden", "");
    qrOpen.focus();
  };

  qrOpen.addEventListener("click", openModal);
  qrClose.addEventListener("click", closeModal);

  qrModal.addEventListener("click", (event) => {
    if (event.target === qrModal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !qrModal.hasAttribute("hidden")) {
      closeModal();
    }
  });
}
