
document.addEventListener("DOMContentLoaded", () => {

  // ==================================
  // 1. MOBILE NAVIGATION
  // ==================================

  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  function closeMenu() {
    if (!menuToggle || !mobileMenu) return;

    menuToggle.classList.remove("active");
    mobileMenu.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-hidden", "true");

    document.body.classList.remove("menu-open");
  }

  function openMenu() {
    if (!menuToggle || !mobileMenu) return;

    menuToggle.classList.add("active");
    mobileMenu.classList.add("open");

    menuToggle.setAttribute("aria-expanded", "true");
    mobileMenu.setAttribute("aria-hidden", "false");

    document.body.classList.add("menu-open");
  }

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.contains("open");

      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 760) closeMenu();
    });
  }


  // ==================================
  // 2. SMOOTH SCROLLING
  // ==================================

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });


  // ==================================
  // 3. SCROLL REVEAL ANIMATIONS
  // ==================================

  const revealElements = document.querySelectorAll(
    ".section-heading, .about-content, .vision-content, " +
    ".exploration-card, .salmaty-intro, .salmaty-card, " +
    ".collection-card, .contact-content"
  );

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if ("IntersectionObserver" in window && !reducedMotion) {

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }

        });

      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px"
      }
    );

    revealElements.forEach(element => {
      element.classList.add("reveal");
      revealObserver.observe(element);
    });

  } else {
    revealElements.forEach(element => {
      element.classList.add("revealed");
    });
  }


  // ==================================
  // 4. ACTIVE NAVIGATION
  // ==================================

  const sections = document.querySelectorAll(
    "main section[id]"
  );

  const navigationLinks = document.querySelectorAll(
    ".side-navigation a, .mobile-menu a"
  );

  if ("IntersectionObserver" in window) {

    const sectionObserver = new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            const activeId = entry.target.id;

            navigationLinks.forEach(link => {

              const linkTarget = link.getAttribute("href");

              if (linkTarget === "#" + activeId) {
                link.classList.add("active");
              } else {
                link.classList.remove("active");
              }

            });

          }

        });

      },
      {
        threshold: 0,
        rootMargin: "-35% 0px -55% 0px"
      }
    );

    sections.forEach(section => {
      sectionObserver.observe(section);
    });
  }


  // ==================================
  // 5. BACK TO TOP
  // ==================================

  const backToTop = document.querySelector(".back-to-top");

  if (backToTop) {

    backToTop.addEventListener("click", event => {
      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: reducedMotion ? "auto" : "smooth"
      });
    });

  }


  // ==================================
  // 6. DYNAMIC COPYRIGHT YEAR
  // ==================================

  const copyright = document.querySelector(".footer-bottom");

  if (copyright) {
    copyright.innerHTML = copyright.innerHTML.replace(
      /©\s*\d{4}/,
      "© " + new Date().getFullYear()
    );
  }


  // ==================================
  // 7. DESKTOP CURSOR GLOW
  // ==================================

  const isFinePointer = window.matchMedia(
    "(hover: hover) and (pointer: fine)"
  ).matches;

  if (isFinePointer && !reducedMotion) {

    const cursorGlow = document.createElement("div");

    cursorGlow.className = "cursor-glow";

    document.body.appendChild(cursorGlow);

    document.addEventListener("mousemove", event => {

      cursorGlow.style.left = event.clientX + "px";
      cursorGlow.style.top = event.clientY + "px";

    });

  }


  // ==================================
  // 8. BUTTON INTERACTION
  // ==================================

  document.querySelectorAll(
    ".hero-button, .contact-button"
  ).forEach(button => {

    button.addEventListener("mouseenter", () => {
      button.classList.add("button-hover");
    });

    button.addEventListener("mouseleave", () => {
      button.classList.remove("button-hover");
    });

  });


  console.log("CEE YA. — Experience initialized.");

});
