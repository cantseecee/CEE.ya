
/* =====================================================
   CEE YA. — MASTER INTERACTION
   VERSION 17
   ENGLISH / FRENCH / ARABIC
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* 01 — TRANSLATIONS */

  const translations = {

    en: {
      navHome: "Home",
      navAbout: "About",
      navExplore: "Explore",
      navCollection: "Collection",
      navContact: "Contact",

      heroEyebrow: "INDEPENDENT CREATIVE DIGITAL STUDIO",
      heroTitle: "OWN THE<br>UNSEEN.",
      heroDescription: "A new perspective on creativity, ideas and the digital world. Made with intention. Designed to inspire.",
      heroButton: "EXPLORE CEE YA.",
      scrollText: "SCROLL TO DISCOVER",

      aboutLabel: "01 / ABOUT",
      aboutSub: "A DIFFERENT POINT OF VIEW",
      aboutTitle: "More than<br>a digital space.",
      aboutCopy: "CEE YA. is an independent Moroccan creative studio exploring ideas, creativity and the possibilities of the digital world. Driven by curiosity, shaped by intention, and built to see beyond the obvious.",
      aboutBrand: "CEE YA. — MOROCCO",

      exploreLabel: "02 / EXPLORATIONS",
      exploreDirections: "THREE DIRECTIONS",
      explorePerspective: "OUR PERSPECTIVE",
      exploreTitle: "Ideas beyond<br>the expected.",

      creativity: "Creativity",
      creativityCopy: "Seeing familiar things from unfamiliar perspectives.",
      innovation: "Innovation",
      innovationCopy: "Transforming original thinking into meaningful experiences.",
      discovery: "Discovery",
      discoveryCopy: "Finding possibilities where others see the ordinary.",

      collectionLabel: "03 / THE COLLECTION",
      collectionEdition: "A CURATED EDIT",
      collectionEyebrow: "THE ART OF EVERYDAY DETAILS",
      collectionTitle: "Objects of<br>quiet distinction.",
      collectionCopy: "A considered selection of beauty, accessories and little details that make everyday moments feel special.",

      conceptLabel: "CONCEPT",

      productCategoryOne: "BEAUTY",
      productTypeOne: "THE BEAUTY EDIT",
      productNameOne: "The Ritual",
      productDescriptionOne: "A concept in everyday beauty.",

      productCategoryTwo: "ACCESSORIES",
      productTypeTwo: "THE ACCESSORY EDIT",
      productNameTwo: "The Essential",
      productDescriptionTwo: "A study in form and simplicity.",

      productCategoryThree: "JEWELLERY",
      productTypeThree: "THE DETAIL EDIT",
      productNameThree: "The Finishing Touch",
      productDescriptionThree: "Small details, considered differently.",

      collectionNote: "An initial creative direction. Product selection and availability will be introduced in a future update.",

      manifestoEyebrow: "THE CEE YA. PERSPECTIVE",
      manifestoTitle: "We are not here to follow.<br>We are here to discover.",

      contactLabel: "04 / CONTACT",
      contactConnect: "LET'S CONNECT",
      contactEyebrow: "HAVE AN IDEA IN MIND?",
      contactTitle: "Let's start a<br>conversation.",
      contactTalk: "LET'S TALK",

      footerLocation: "MADE IN MOROCCO",
      backToTop: "BACK TO TOP ↑",
      copyright: "© 2026 CEE YA. ALL RIGHTS RESERVED.",

      openMenu: "Open menu",
      closeMenu: "Close menu"
    },


    fr: {
      navHome: "Accueil",
      navAbout: "À propos",
      navExplore: "Explorer",
      navCollection: "Collection",
      navContact: "Contact",

      heroEyebrow: "STUDIO CRÉATIF DIGITAL INDÉPENDANT",
      heroTitle: "OWN THE<br>UNSEEN.",
      heroDescription: "Une nouvelle perspective sur la créativité, les idées et l'univers digital. Créé avec intention. Conçu pour inspirer.",
      heroButton: "DÉCOUVRIR CEE YA.",
      scrollText: "DÉFILER POUR DÉCOUVRIR",

      aboutLabel: "01 / À PROPOS",
      aboutSub: "UN AUTRE POINT DE VUE",
      aboutTitle: "Plus qu'un<br>espace digital.",
      aboutCopy: "CEE YA. est un studio créatif marocain indépendant qui explore les idées, la créativité et les possibilités du monde digital. Guidé par la curiosité, façonné avec intention et conçu pour voir au-delà de l'évidence.",
      aboutBrand: "CEE YA. — MAROC",

      exploreLabel: "02 / EXPLORATIONS",
      exploreDirections: "TROIS DIRECTIONS",
      explorePerspective: "NOTRE PERSPECTIVE",
      exploreTitle: "Des idées au-delà<br>de l'évidence.",

      creativity: "Créativité",
      creativityCopy: "Voir les choses familières sous un angle nouveau.",
      innovation: "Innovation",
      innovationCopy: "Transformer une pensée originale en expériences significatives.",
      discovery: "Découverte",
      discoveryCopy: "Trouver des possibilités là où d'autres voient l'ordinaire.",

      collectionLabel: "03 / LA COLLECTION",
      collectionEdition: "UNE SÉLECTION",
      collectionEyebrow: "L'ART DES DÉTAILS DU QUOTIDIEN",
      collectionTitle: "Des objets<br>qui se distinguent.",
      collectionCopy: "Une sélection réfléchie de beauté, d'accessoires et de petits détails qui rendent les moments du quotidien particuliers.",

      conceptLabel: "CONCEPT",

      productCategoryOne: "BEAUTÉ",
      productTypeOne: "SÉLECTION BEAUTÉ",
      productNameOne: "Le Rituel",
      productDescriptionOne: "Un concept autour de la beauté au quotidien.",

      productCategoryTwo: "ACCESSOIRES",
      productTypeTwo: "SÉLECTION ACCESSOIRES",
      productNameTwo: "L'Essentiel",
      productDescriptionTwo: "Une étude de forme et de simplicité.",

      productCategoryThree: "BIJOUX",
      productTypeThree: "SÉLECTION DÉTAILS",
      productNameThree: "La Touche Finale",
      productDescriptionThree: "Les petits détails, autrement.",

      collectionNote: "Une première direction créative. La sélection et la disponibilité des produits seront présentées dans une prochaine mise à jour.",

      manifestoEyebrow: "LA VISION CEE YA.",
      manifestoTitle: "Nous ne sommes pas là pour suivre.<br>Nous sommes là pour découvrir.",

      contactLabel: "04 / CONTACT",
      contactConnect: "RESTONS EN CONTACT",
      contactEyebrow: "UNE IDÉE EN TÊTE ?",
      contactTitle: "Commençons<br>une conversation.",
      contactTalk: "PARLONS-EN",

      footerLocation: "CRÉÉ AU MAROC",
      backToTop: "RETOUR EN HAUT ↑",
      copyright: "© 2026 CEE YA. TOUS DROITS RÉSERVÉS.",

      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu"
    },


    ar: {
      navHome: "الرئيسية",
      navAbout: "من نحن",
      navExplore: "اكتشف",
      navCollection: "المجموعة",
      navContact: "تواصل",

      heroEyebrow: "استوديو إبداعي رقمي مستقل",
      heroTitle: "OWN THE<br>UNSEEN.",
      heroDescription: "رؤية جديدة للإبداع والأفكار وعالم الرقمنة. صُنع باهتمام، وصُمّم للإلهام.",
      heroButton: "اكتشف CEE YA.",
      scrollText: "اكتشف المزيد",

      aboutLabel: "01 / من نحن",
      aboutSub: "وجهة نظر مختلفة",
      aboutTitle: "أكثر من مجرد<br>مساحة رقمية.",
      aboutCopy: "CEE YA. استوديو إبداعي مغربي مستقل يستكشف الأفكار والإبداع وإمكانيات العالم الرقمي. نستلهم من الفضول، ونصنع برؤية واضحة، ونتطلع إلى ما وراء المألوف.",
      aboutBrand: "CEE YA. — المغرب",

      exploreLabel: "02 / استكشاف",
      exploreDirections: "ثلاثة توجهات",
      explorePerspective: "رؤيتنا",
      exploreTitle: "أفكار تتجاوز<br>المتوقع.",

      creativity: "الإبداع",
      creativityCopy: "رؤية الأشياء المألوفة من زوايا غير مألوفة.",
      innovation: "الابتكار",
      innovationCopy: "تحويل الأفكار الجديدة إلى تجارب ذات معنى.",
      discovery: "الاكتشاف",
      discoveryCopy: "اكتشاف الإمكانيات حيث يرى الآخرون الأشياء العادية.",

      collectionLabel: "03 / المجموعة",
      collectionEdition: "اختيارات منتقاة",
      collectionEyebrow: "فن التفاصيل اليومية",
      collectionTitle: "أشياء تتميز<br>بهدوء.",
      collectionCopy: "اختيارات مدروسة من الجمال والإكسسوارات والتفاصيل الصغيرة التي تضفي طابعاً مميزاً على اللحظات اليومية.",

      conceptLabel: "تصور أولي",

      productCategoryOne: "الجمال",
      productTypeOne: "اختيارات الجمال",
      productNameOne: "الطقس اليومي",
      productDescriptionOne: "تصور أولي للجمال في تفاصيل الحياة اليومية.",

      productCategoryTwo: "الإكسسوارات",
      productTypeTwo: "اختيارات الإكسسوارات",
      productNameTwo: "الأساسيات",
      productDescriptionTwo: "دراسة في الشكل والبساطة.",

      productCategoryThree: "المجوهرات",
      productTypeThree: "اختيارات التفاصيل",
      productNameThree: "اللمسة الأخيرة",
      productDescriptionThree: "تفاصيل صغيرة برؤية مختلفة.",

      collectionNote: "هذه بداية للتوجه الإبداعي. سيتم تقديم المنتجات وتفاصيل توفرها في تحديث قادم.",

      manifestoEyebrow: "رؤية CEE YA.",
      manifestoTitle: "لسنا هنا لنتبع الآخرين.<br>نحن هنا لنكتشف.",

      contactLabel: "04 / تواصل",
      contactConnect: "لنبقَ على تواصل",
      contactEyebrow: "هل لديك فكرة؟",
      contactTitle: "لنبدأ<br>حواراً جديداً.",
      contactTalk: "تواصل معنا",

      footerLocation: "صُنع في المغرب",
      backToTop: "العودة للأعلى ↑",
      copyright: "© 2026 CEE YA. جميع الحقوق محفوظة.",

      openMenu: "فتح القائمة",
      closeMenu: "إغلاق القائمة"
    }

  };


  /* 02 — ELEMENTS */

  const languageButtons = document.querySelectorAll(".lang-btn");
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const loader = document.querySelector(".loader");

  let currentLanguage = "en";


  /* 03 — LANGUAGE SYSTEM */

  function setLanguage(language) {

    if (!translations[language]) return;

    currentLanguage = language;

    const dictionary = translations[language];

    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    document.body.classList.toggle("arabic", language === "ar");

    document.querySelectorAll("[data-i18n]").forEach((element) => {

      const key = element.dataset.i18n;

      if (dictionary[key] !== undefined) {
        element.innerHTML = dictionary[key];
      }

    });

    languageButtons.forEach((button) => {

      const isActive = button.dataset.lang === language;

      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));

    });

    updateMenuLabel();

    try {
      localStorage.setItem("ceeya-language", language);
    } catch (error) {
      // Language selection still works if storage is unavailable.
    }

  }


  /* 04 — RESTORE LANGUAGE */

  function restoreLanguage() {

    let savedLanguage = "en";

    try {
      const storedLanguage = localStorage.getItem("ceeya-language");

      if (storedLanguage && translations[storedLanguage]) {
        savedLanguage = storedLanguage;
      }

    } catch (error) {
      savedLanguage = "en";
    }

    setLanguage(savedLanguage);

  }


  languageButtons.forEach((button) => {

    button.addEventListener("click", () => {
      setLanguage(button.dataset.lang);
    });

  });


  /* 05 — MOBILE MENU */

  function updateMenuLabel() {

    if (!menuToggle) return;

    const isOpen = menuToggle.classList.contains("active");

    const label = isOpen
      ? translations[currentLanguage].closeMenu
      : translations[currentLanguage].openMenu;

    menuToggle.setAttribute("aria-label", label);

  }


  function openMenu() {

    if (!menuToggle || !mobileMenu) return;

    mobileMenu.hidden = false;

    menuToggle.classList.add("active");
    menuToggle.setAttribute("aria-expanded", "true");

    document.body.classList.add("menu-open");

    updateMenuLabel();

  }


  function closeMenu() {

    if (!menuToggle || !mobileMenu) return;

    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");

    mobileMenu.hidden = true;

    document.body.classList.remove("menu-open");

    updateMenuLabel();

  }


  if (menuToggle && mobileMenu) {

    menuToggle.addEventListener("click", () => {

      const isOpen = menuToggle.classList.contains("active");

      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }

    });

    mobileMenu.querySelectorAll("a").forEach((link) => {

      link.addEventListener("click", closeMenu);

    });

    document.addEventListener("keydown", (event) => {

      if (event.key === "Escape") {
        closeMenu();
      }

    });

    window.addEventListener("resize", () => {

      if (window.innerWidth > 760) {
        closeMenu();
      }

    });

  }


  /* 06 — REVEAL ANIMATIONS */

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver((entries, observer) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        }

      });

    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -35px 0px"
    });

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });

  } else {

    revealElements.forEach((element) => {
      element.classList.add("visible");
    });

  }


  /* 07 — LOADER */

  function hideLoader() {

    if (!loader) return;

    loader.classList.add("hidden");

    window.setTimeout(() => {
      loader.remove();
    }, 800);

  }


  window.addEventListener("load", hideLoader);

  window.setTimeout(hideLoader, 2500);


  /* 08 — SMOOTH ANCHOR SCROLL */

  document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "start"
      });

    });

  });


  /* 09 — INITIALIZE */

  restoreLanguage();

  document.body.classList.add("js-ready");

});
