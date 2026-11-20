
/* =========================================
   CEE YA. — INTERACTIONS & TRANSLATIONS
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- 01. TRANSLATIONS ---------- */

  const translations = {

    en: {
      navHome: "Home",
      navAbout: "About",
      navExplore: "Explore",
      navContact: "Contact",

      heroEyebrow: "INDEPENDENT CREATIVE DIGITAL STUDIO",
      heroTitle: 'THINK BEYOND<br>THE ORDINARY<span>.</span>',
      heroDescription: "A new perspective on creativity, innovation and the digital world.",
      heroButton: "EXPLORE CEE YA",
      scrollText: "SCROLL TO DISCOVER ↓",

      aboutSub: "A DIFFERENT POINT OF VIEW",
      aboutTitle: "More than<br>a digital space<span>.</span>",
      aboutCopy: "CEE YA. is an independent Moroccan creative digital studio. A space built around ideas, curiosity and the desire to explore new possibilities.",

      exploreTitle: "Ideas without<br>boundaries<span>.</span>",

      creativity: "Creativity",
      creativityCopy: "Exploring original ideas and turning imagination into meaningful experiences.",

      innovation: "Innovation",
      innovationCopy: "Looking beyond the expected and discovering new ways to move forward.",

      discovery: "Discovery",
      discoveryCopy: "Staying curious, exploring different perspectives and finding inspiration everywhere.",

      manifestoTitle: 'Beyond ordinary.<br>Beyond expected.<br><em>Always exploring.</em>',

      contactEyebrow: "HAVE SOMETHING IN MIND?",
      contactTitle: "Let's create<br>something different<span>.</span>"
    },


    fr: {
      navHome: "Accueil",
      navAbout: "À propos",
      navExplore: "Explorer",
      navContact: "Contact",

      heroEyebrow: "STUDIO CRÉATIF DIGITAL INDÉPENDANT",
      heroTitle: 'PENSER AU-DELÀ<br>DE L’ORDINAIRE<span>.</span>',
      heroDescription: "Une nouvelle perspective sur la créativité, l’innovation et le monde numérique.",
      heroButton: "EXPLORER CEE YA",
      scrollText: "DÉFILER POUR DÉCOUVRIR ↓",

      aboutSub: "UN AUTRE POINT DE VUE",
      aboutTitle: "Bien plus<br>qu’un espace digital<span>.</span>",
      aboutCopy: "CEE YA. est un studio créatif digital indépendant marocain. Un espace construit autour des idées, de la curiosité et du désir d’explorer de nouvelles possibilités.",

      exploreTitle: "Des idées sans<br>frontières<span>.</span>",

      creativity: "Créativité",
      creativityCopy: "Explorer des idées originales et transformer l’imagination en expériences significatives.",

      innovation: "Innovation",
      innovationCopy: "Voir au-delà des attentes et découvrir de nouvelles façons d’avancer.",

      discovery: "Découverte",
      discoveryCopy: "Rester curieux, explorer différentes perspectives et trouver l’inspiration partout.",

      manifestoTitle: 'Au-delà de l’ordinaire.<br>Au-delà des attentes.<br><em>Toujours explorer.</em>',

      contactEyebrow: "UNE IDÉE EN TÊTE ?",
      contactTitle: "Créons<br>quelque chose de différent<span>.</span>"
    },


    ar: {
      navHome: "الرئيسية",
      navAbout: "من نحن",
      navExplore: "اكتشف",
      navContact: "اتصل بنا",

      heroEyebrow: "استوديو إبداعي رقمي مستقل",
      heroTitle: 'فكّر خارج<br>المألوف<span>.</span>',
      heroDescription: "رؤية جديدة للإبداع والابتكار والعالم الرقمي.",
      heroButton: "اكتشف CEE YA",
      scrollText: "مرّر لاكتشاف المزيد ↓",

      aboutSub: "وجهة نظر مختلفة",
      aboutTitle: "أكثر من<br>مجرد فضاء رقمي<span>.</span>",
      aboutCopy: "CEE YA. استوديو إبداعي رقمي مغربي مستقل. فضاء يجمع الأفكار والفضول والرغبة في اكتشاف إمكانيات جديدة.",

      exploreTitle: "أفكار بلا<br>حدود<span>.</span>",

      creativity: "الإبداع",
      creativityCopy: "اكتشاف أفكار أصلية وتحويل الخيال إلى تجارب ذات معنى.",

      innovation: "الابتكار",
      innovationCopy: "تجاوز المتوقع واكتشاف طرق جديدة للتقدم.",

      discovery: "الاكتشاف",
      discoveryCopy: "الحفاظ على الفضول واستكشاف وجهات نظر مختلفة والعثور على الإلهام في كل مكان.",

      manifestoTitle: 'ما وراء المألوف.<br>ما وراء المتوقع.<br><em>دائماً نكتشف.</em>',

      contactEyebrow: "هل لديك فكرة؟",
      contactTitle: "لنصنع<br>شيئاً مختلفاً<span>.</span>"
    }

  };


  /* ---------- 02. LANGUAGE SYSTEM ---------- */

  const languageButtons = document.querySelectorAll(".lang");

  function setLanguage(language) {

    if (!translations[language]) {
      language = "en";
    }

    const selectedTranslations = translations[language];

    document.documentElement.lang = language;

    document.documentElement.dir =
      language === "ar" ? "rtl" : "ltr";

    document.body.classList.toggle(
      "arabic",
      language === "ar"
    );

    document.querySelectorAll("[data-i18n]").forEach(element => {

      const key = element.dataset.i18n;

      if (Object.prototype.hasOwnProperty.call(selectedTranslations, key)) {
        element.innerHTML = selectedTranslations[key];
      }

    });

    languageButtons.forEach(button => {

      const isActive = button.dataset.lang === language;

      button.classList.toggle("active", isActive);

      button.setAttribute(
        "aria-pressed",
        String(isActive)
      );

    });

    try {
      localStorage.setItem("ceeya-language", language);
    } catch (error) {
      console.warn("Language preference could not be saved.");
    }

  }


  languageButtons.forEach(button => {

    button.addEventListener("click", () => {

      setLanguage(button.dataset.lang);

    });

  });


  /* ---------- 03. MOBILE MENU ---------- */

  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  function closeMenu() {

    if (!menuToggle || !mobileMenu) return;

    mobileMenu.classList.remove("open");
    menuToggle.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");

  }


  function toggleMenu() {

    if (!menuToggle || !mobileMenu) return;

    const isOpen = mobileMenu.classList.toggle("open");

    menuToggle.classList.toggle("active", isOpen);

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );

  }


  if (menuToggle && mobileMenu) {

    menuToggle.addEventListener("click", toggleMenu);

    mobileMenu.querySelectorAll("a").forEach(link => {

      link.addEventListener("click", closeMenu);

    });

    document.addEventListener("keydown", event => {

      if (event.key === "Escape") {
        closeMenu();
      }

    });

    window.addEventListener("resize", () => {

      if (window.innerWidth > 900) {
        closeMenu();
      }

    });

  }


  /* ---------- 04. REVEAL ANIMATIONS ---------- */

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            currentObserver.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.12
      }
    );

    revealElements.forEach(element => {

      observer.observe(element);

    });

  } else {

    revealElements.forEach(element => {

      element.classList.add("visible");

    });

  }


  /* ---------- 05. FOOTER YEAR ---------- */

  const footerYear = document.querySelector(".footer-year");

  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }


  /* ---------- 06. RESTORE LANGUAGE ---------- */

  let savedLanguage = "en";

  try {
    savedLanguage = localStorage.getItem("ceeya-language") || "en";
  } catch (error) {
    console.warn("Saved language could not be loaded.");
  }

  setLanguage(savedLanguage);


  /* ---------- 07. LOADER ---------- */

  window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

      setTimeout(() => {

        loader.style.display = "none";

      }, 1300);

    }

  });

});
