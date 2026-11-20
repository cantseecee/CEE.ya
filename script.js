
document.addEventListener("DOMContentLoaded", function () {

  // MOBILE MENU
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuToggle && mobileMenu) {

    function closeMenu() {
      mobileMenu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      mobileMenu.setAttribute("aria-hidden", "true");
    }

    function openMenu() {
      mobileMenu.classList.add("open");
      menuToggle.setAttribute("aria-expanded", "true");
      mobileMenu.setAttribute("aria-hidden", "false");
    }

    menuToggle.addEventListener("click", function () {
      const isOpen = mobileMenu.classList.contains("open");

      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    const menuLinks = mobileMenu.querySelectorAll("a");

    menuLinks.forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) {
        closeMenu();
      }
    });
  }

  // FOOTER YEAR
  const footerYear = document.querySelector("footer > span");

  if (footerYear) {
    footerYear.textContent =
      "© " + new Date().getFullYear() + " CEE YA. ALL RIGHTS RESERVED.";
  }

  // SMOOTH SCROLL
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

        history.replaceState(null, "", targetId);
      }
    });

  });

});
