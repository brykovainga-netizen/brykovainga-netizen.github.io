document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const toggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-menu-nav]");
  if (toggle && nav) {
    const setOpen = (open) => {
      nav.classList.toggle("nav--open", open);
      toggle.setAttribute("aria-expanded", String(open));
    };

    setOpen(false);

    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.contains("nav--open");
      setOpen(!isOpen);
    });

    // Close menu when clicking a nav link (mobile)
    nav.addEventListener("click", (e) => {
      const a = e.target.closest("a");
      if (!a) return;
      setOpen(false);
    });
  }

  // Contact form (simple front-end only)
  const form = document.querySelector("#contact-form");
  const status = document.querySelector("#contact-form-status");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (status) status.textContent = "Спасибо! Мы скоро свяжемся с вами.";
      form.reset();
    });
  }
});

