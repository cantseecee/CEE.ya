
/* =========================================
   CEE YA. — MULTILINGUAL EXPERIENCE
   ENGLISH / FRENCH / ARABIC
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* 01 — TRANSLATIONS */

  const translations = {

    en: {
      navHome: "Home",
      navAbout: "About",
      navExplore: "Explore",
      navContact: "Contact",

      heroEyebrow: "INDEPENDENT CREATIVE DIGITAL STUDIO",
      heroTitle: "THINK BEYOND<br>THE ORDINARY<span>.</span>",
      heroDescription: "A new perspective on creativity, ideas and the digital world. Made with intention. Designed to inspire.",
      heroButton: "EXPLORE CEE YA",
      scrollText: "SCROLL TO DISCOVER ↓",

      aboutLabel: "01 / ABOUT",
      aboutSub: "A DIFFERENT POINT OF VIEW",
      aboutTitle: "More than<br>a digital space<span>.</span>",
      aboutCopy: "CEE YA. is an independent Moroccan creative space exploring new ideas, modern culture and meaningful digital experiences.",
      aboutBrand: "CEE YA. — MOROCCO",

      exploreLabel: "02 / EXPLORATIONS",
      exploreDirections: "THREE DIRECTIONS",
      explorePerspective: "OUR PERSPECTIVE",
      exploreTitle: "Ideas worth<br>discovering<span>.</span>",

      creativity: "Creativity",
      creativityCopy: "Ideas that challenge the ordinary and inspire new perspectives.",

      innovation: "Innovation",
      innovationCopy: "Exploring digital possibilities and ideas that shape tomorrow.",

      discovery: "Discovery",
      discoveryCopy: "Finding inspiration in unexpected places and everyday details.",

      manifestoEyebrow: "THE CEE YA. PERSPECTIVE",
      manifestoTitle: "We are not here to follow.<br><em>We are here to discover.</em>",

      contactLabel: "03 / CONTACT",
      contactConnect: "LET'S CONNECT",
      contactEyebrow: "HAVE AN IDEA IN MIND?",
      contactTitle: "Let's start<br><em>a conversation.</em>",
      contactTalk: "LET'S TALK",

      backToTop: "BACK TO TOP ↑",
      copyright: "© 2026 CEE YA. ALL RIGHTS RESERVED.",
      footerLocation: "MADE IN MOROCCO.",

      pageTitle: "CEE YA. — Beyond the Ordinary",
      pageDescription: "CEE YA. is an independent Moroccan creative digital space exploring ideas, modern culture and meaningful digital experiences.",

      menuOpen: "Open navigation menu",
      menuClose: "Close navigation menu"
    },


    fr: {
      navHome: "Accueil",
      navAbout: "À propos",
      navExplore: "Explorer",
      navContact: "Contact",

      heroEyebrow: "STUDIO CRÉATIF DIGITAL INDÉPENDANT",
      heroTitle: "PENSEZ AU-DELÀ<br>DE L’ORDINAIRE<span>.</span>",
      heroDescription: "Une nouvelle perspective sur la créativité, les idées et le monde numérique. Pensé avec intention. Conçu pour inspirer.",
      heroButton: "DÉCOUVRIR CEE YA",
      scrollText: "DÉFILER POUR DÉCOUVRIR ↓",

      aboutLabel: "01 / À PROPOS",
      aboutSub: "UN AUTRE POINT DE VUE",
      aboutTitle: "Bien plus<br>qu’un espace numérique<span>.</span>",
      aboutCopy: "CEE YA. est un espace créatif indépendant marocain qui explore les idées nouvelles, la culture contemporaine et les expériences numériques porteuses de sens.",
      aboutBrand: "CEE YA. — MAROC",

      exploreLabel: "02 / EXPLORATIONS",
      exploreDirections: "TROIS DIRECTIONS",
      explorePerspective: "NOTRE VISION",
      exploreTitle: "Des idées à<br>découvrir<span>.</span>",

      creativity: "Créativité",
      creativityCopy: "Des idées qui remettent en question l’ordinaire et inspirent de nouvelles perspectives.",

      innovation: "Innovation",
      innovationCopy: "Explorer les possibilités numériques et les idées qui façonnent demain.",

      discovery: "Découverte",
      discoveryCopy: "Trouver l’inspiration dans les lieux inattendus et les détails du quotidien.",

      manifestoEyebrow: "LA VISION CEE YA.",
      manifestoTitle: "Nous ne sommes pas ici pour suivre.<br><em>Nous sommes ici pour découvrir.</em>",

      contactLabel: "03 / CONTACT",
      contactConnect: "RESTONS EN CONTACT",
      contactEyebrow: "UNE IDÉE EN TÊTE ?",
      contactTitle: "Commençons<br><em>une conversation.</em>",
      contactTalk: "PARLONS-EN",

      backToTop: "RETOUR EN HAUT ↑",
      copyright: "© 2026 CEE YA. TOUS DROITS RÉSERVÉS.",
      footerLocation: "CRÉÉ AU MAROC.",

      pageTitle: "CEE YA. — Au-delà de l’ordinaire",
      pageDescription: "CEE YA. est un espace créatif indépendant marocain qui explore les nouvelles idées, la culture contemporaine et les expériences numériques porteuses de sens.",

      menuOpen: "Ouvrir le menu de navigation",
      menuClose: "Fermer le menu de navigation"
    },


    ar: {
      navHome: "الرئيسية",
      navAbout: "من نحن",
      navExplore: "اكتشف",
      navContact: "تواصل معنا",

      heroEyebrow: "استوديو إبداعي رقمي مستقل",
      heroTitle: "فكّر أبعد<br>من المألوف<span>.</span>",
      heroDescription: "رؤية جديدة للإبداع والأفكار والعالم الرقمي. نصنع باهتمام، ونصمّم لنُلهم.",
      heroButton: "اكتشف CEE YA",
      scrollText: "اكتشف المزيد ↓",

      aboutLabel: "01 / من نحن",
      aboutSub: "رؤية مختلفة",
      aboutTitle: "أكثر من<br>مجرد مساحة رقمية<span>.</span>",
      aboutCopy: "CEE YA. مساحة إبداعية مغربية مستقلة تستكشف الأفكار الجديدة والثقافة الحديثة والتجارب الرقمية الهادفة.",
      aboutBrand: "CEE YA. — المغرب",

      exploreLabel: "02 / استكشافات",
      exploreDirections: "ثلاثة اتجاهات",
      explorePerspective: "رؤيتنا",
      exploreTitle: "أفكار تستحق<br>الاكتشاف<span>.</span>",

      creativity: "الإبداع",
      creativityCopy: "أفكار تتحدى المألوف وتلهم وجهات نظر جديدة.",

      innovation: "الابتكار",
      innovationCopy: "استكشاف الإمكانيات الرقمية والأفكار التي تصنع المستقبل.",

      discovery: "الاكتشاف",
      discoveryCopy: "العثور على الإلهام في الأماكن غير المتوقعة والتفاصيل اليومية.",

      manifestoEyebrow: "رؤية CEE YA.",
      manifestoTitle: "لسنا هنا لنتبع.<br><em>بل هنا لنكتشف.</em>",

      contactLabel: "03 / التواصل",
      contactConnect: "لنبقَ على تواصل",
      contactEyebrow: "هل لديك فكرة؟",
      contactTitle: "لنبدأ<br><em>حواراً.</em>",
      contactTalk: "لنتحدث",

      backToTop: "العودة إلى الأعلى ↑",
      copyright: "© 2026 CEE YA. جميع الحقوق محفوظة.",
      footerLocation: "صُنع في المغرب.",

      pageTitle: "CEE YA. — ما وراء المألوف",
      pageDescription: "CEE YA. مساحة إبداعية مغربية مستقلة تستكشف الأفكار الجديدة والثقافة الحديثة والتجارب الرقمية الهادفة.",

      menuOpen: "فتح قائمة التنقل",
      menuClose: "إغلاق قائمة التنقل"
    }

  };


  /* 02 — ELEMENTS */

  const languageButtons = document.querySelectorAll(".lang");
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");


  /* 03 — LANGUAGE SYSTEM */

  function setLanguage(language) {

    if (!translations[language]) {
      language = "en";
    }

    const content = translations[language];
    const isArabic = language === "ar";

    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";

    document.body.classList.toggle("arabic", isArabic);

    /* Translate all marked elements */

    document.querySelectorAll("[data-i18n]").forEach(element => {

      const key = element.dataset.i18n;

      if (Object.prototype.hasOwnProperty.call(content, key)) {
        element.innerHTML = content[key];
      }

    });

    /* Update page title */

    document.title = content.pageTitle;

    /* Update SEO description */

    const description = document.querySelector(
      'meta[name="description"]'
    );

    if (description) {
      description.setAttribute("content", content.pageDescription);
    }

    /* Update language buttons */

    languageButtons.forEach(button => {

      const active = button.dataset.lang === language;

      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));

    });

    /* Update menu accessibility */

    if (menuToggle) {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

      menuToggle.setAttribute(
        "aria-label",
        isOpen ? content.menuClose : content.menuOpen
      );
    }

    /* Save preference */

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


  /* 04 — MOBILE MENU */

  function closeMenu() {

    if (!menuToggle || !mobileMenu) return;

    mobileMenu.classList.remove("open");
    menuToggle.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");

    const language = document.documentElement.lang || "en";

    menuToggle.setAttribute(
      "aria-label",
      translations[language].menuOpen
    );

  }


  function toggleMenu() {

    if (!menuToggle || !mobileMenu) return;

    const isOpen = mobileMenu.classList.toggle("open");

    menuToggle.classList.toggle("active", isOpen);

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    const language = document.documentElement.lang || "en";

    menuToggle.setAttribute(
      "aria-label",
      isOpen
        ? translations[language].menuClose
        : translations[language].menuOpen
    );

  }


  if (menuToggle && mobileMenu) {

    menuToggle.addEventListener("click", toggleMenu);

    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) closeMenu();
    });

  }


  /* 05 — REVEAL ANIMATIONS */

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver((entries, currentObserver) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");
          currentObserver.unobserve(entry.target);

        }

      });

    }, {
      threshold: 0.12
    });

    revealElements.forEach(element => {
      observer.observe(element);
    });

  } else {

    revealElements.forEach(element => {
      element.classList.add("visible");
    });

  }


  /* 06 — RESTORE SAVED LANGUAGE */

  let savedLanguage = "en";

  try {
    const saved = localStorage.getItem("ceeya-language");

    if (saved && translations[saved]) {
      savedLanguage = saved;
    }

  } catch (error) {
    console.warn("Saved language could not be loaded.");
  }

  setLanguage(savedLanguage);


  /* 07 — LOADER */

  const loader = document.getElementById("loader");

  if (loader) {

    window.addEventListener("load", () => {

      setTimeout(() => {
        loader.style.display = "none";
      }, 1000);

    });

  }

});
