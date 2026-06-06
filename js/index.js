/* Header Load */
fetch("header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    initNavbar(); // Header loaded apram navbar initialize
  });

/* Footer Load */
fetch("footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });

function initNavbar() {

  const desktopDropdowns =
    document.querySelectorAll(".swadhra-dropdown");

  desktopDropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector(".swadhra-dropdown-btn");

    button.addEventListener("click", (e) => {
      e.stopPropagation();

      desktopDropdowns.forEach((item) => {
        if (item !== dropdown) {
          item.classList.remove("active");
          item.querySelector(".swadhra-dropdown-btn")
            .setAttribute("aria-expanded", "false");
        }
      });

      dropdown.classList.toggle("active");

      const expanded =
        button.getAttribute("aria-expanded") === "true";

      button.setAttribute("aria-expanded", !expanded);
    });
  });

  document.addEventListener("click", () => {
    desktopDropdowns.forEach((dropdown) => {
      dropdown.classList.remove("active");
      dropdown.querySelector(".swadhra-dropdown-btn")
        .setAttribute("aria-expanded", "false");
    });
  });

  const mobileToggle =
    document.querySelector(".swadhra-mobile-toggle");

  const mobileMenu =
    document.querySelector(".swadhra-mobile-menu");

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
    });
  }
}