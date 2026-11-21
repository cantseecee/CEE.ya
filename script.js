
/* =====================================================
   CEE YA. — MULTILINGUAL EXPERIENCE
   VERSION 15
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
      heroTitle: "THINK BEYOND<br>THE ORDINARY.",
      heroDescription: "A new perspective on creativity, ideas and the digital world. Made with intention. Designed to inspire.",
      heroButton: "EXPLORE CEE YA.",
      scrollText: "SCROLL TO DISCOVER",

      aboutLabel: "01 / ABOUT",
      aboutSub: "A DIFFERENT POINT OF VIEW",
      aboutTitle: "More than<br>a digital space.",
      aboutCopy: "CEE YA. is an independent Moroccan creative space exploring ideas, design and new possibilities. A place where curiosity meets intention and every detail has a purpose.",
      aboutBrand: "CEE YA. — MOROCCO",

      exploreLabel: "02 / EXPLORATIONS",
      exploreDirections: "THREE DIRECTIONS",
      explorePerspective: "OUR PERSPECTIVE",
      exploreTitle: "Ideas worth<br>discovering.",

      creativity: "Creativity",
      creativityCopy: "Finding new ways to express what matters.",
      innovation: "Innovation",
      innovationCopy: "Turning thoughtful ideas into meaningful experiences.",
      discovery: "Discovery",
      discoveryCopy: "Exploring possibilities beyond the familiar.",

      collectionLabel: "03 / THE COLLECTION",
      collectionEdition: "A CURATED EDIT",
      collectionEyebrow: "THE ART OF EVERYDAY DETAILS",
      collectionTitle: "Objects of<br>quiet distinction.",
      collectionCopy: "A considered selection of beauty, accessories and little details that make everyday moments feel special.",

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

      conceptLabel: "CONCEPT",

      collectionNote: "An initial creative direction. Product selection and availability will be introduced in a future update.",

      manifestoEyebrow: "THE CEE YA. PERSPECTIVE",
      manifestoTitle: "We are not here to follow.<br>We are here to discover.",

      contactLabel: "04 / CONTACT",
      contactConnect: "LET'S CONNECT",
      contactEyebrow: "HAVE AN IDEA IN MIND?",
      contactTitle: "Let's start a<br>conversation.",
      contactTalk: "LET'S TALK",

      backToTop: "BACK TO TOP",
      copyright: "© 2026 CEE YA. ALL RIGHTS RESERVED.",
      footerLocation: "MADE IN MOROCCO"
    },

    fr: {
      navHome: "Accueil",
      navAbout: "À propos",
      navExplore: "Explorer",
      navCollection: "Collection",
      navContact: "Contact",

      heroEyebrow: "STUDIO CRÉATIF DIGITAL INDÉPENDANT",
      heroTitle: "PENSER AU-DELÀ<br>DE L'ORDINAIRE.",
      heroDescription: "Une nouvelle perspective sur la créativité, les idées et le monde digital. Pensé avec intention. Conçu pour inspirer.",
      heroButton: "EXPLORER CEE YA.",
      scrollText: "DÉFILER POUR DÉCOUVRIR",

      aboutLabel: "01 / À PROPOS",
      aboutSub: "UN AUTRE POINT DE VUE",
      aboutTitle: "Bien plus<br>qu'un espace digital.",
      aboutCopy: "CEE YA. est un espace créatif marocain indépendant qui explore les idées, le design et de nouvelles possibilités. Un lieu où la curiosité rencontre l'intention et où chaque détail a un sens.",
      aboutBrand: "CEE YA. — MAROC",

      exploreLabel: "02 / EXPLORATIONS",
      exploreDirections: "TROIS DIRECTIONS",
      explorePerspective: "NOTRE PERSPECTIVE",
      exploreTitle: "Des idées à<br>découvrir.",

      creativity: "Créativité",
      creativityCopy: "Trouver de nouvelles façons d'exprimer l'essentiel.",
      innovation: "Innovation",
      innovationCopy: "Transformer des idées réfléchies en expériences significatives.",
      discovery: "Découverte",
      discoveryCopy: "Explorer des possibilités au-delà du familier.",

      collectionLabel: "03 / LA COLLECTION",
      collectionEdition: "UNE SÉLECTION SIGNATURE",
      collectionEyebrow: "L'ART DES DÉTAILS DU QUOTIDIEN",
      collectionTitle: "Des objets<br>au caractère subtil.",
      collectionCopy: "Une sélection réfléchie de beauté, d'accessoires et de petits détails qui rendent chaque instant plus spécial.",

      productCategoryOne: "BEAUTÉ",
      productTypeOne: "SÉLECTION BEAUTÉ",
      productNameOne: "Le Rituel",
      productDescriptionOne: "Un concept autour de la beauté quotidienne.",

      productCategoryTwo: "ACCESSOIRES",
      productTypeTwo: "SÉLECTION ACCESSOIRES",
      productNameTwo: "L'Essentiel",
      productDescriptionTwo: "Une étude de la forme et de la simplicité.",

      productCategoryThree: "BIJOUX",
      productTypeThree: "SÉLECTION DÉTAILS",
      productNameThree: "La Touche Finale",
      productDescriptionThree: "Les petits détails, autrement.",

      conceptLabel: "CONCEPT",

      collectionNote: "Une première direction créative. La sélection des produits et leur disponibilité seront présentées dans une prochaine mise à jour.",

      manifestoEyebrow: "LA VISION CEE YA.",
      manifestoTitle: "Nous ne sommes pas là pour suivre.<br>Nous sommes là pour découvrir.",

      contactLabel: "04 / CONTACT",
      contactConnect: "RESTONS EN CONTACT",
      contactEyebrow: "UNE IDÉE EN TÊTE ?",
      contactTitle: "Commençons une<br>conversation.",
      contactTalk: "PARLONS-EN",

      backToTop: "RETOUR EN HAUT",
      copyright: "© 2026 CEE YA. TOUS DROITS RÉSERVÉS.",
      footerLocation: "FAIT AU MAROC"
    },

    ar: {
      navHome: "الرئيسية",
      navAbout: "من نحن",
      navExplore: "اكتشف",
      navCollection: "المجموعة",
      navContact: "تواصل معنا",

      heroEyebrow: "استوديو إبداعي رقمي مستقل",
      heroTitle: "فكّر خارج<br>حدود المألوف.",
      heroDescription: "نظرة جديدة إلى الإبداع والأفكار والعالم الرقمي. صُمّم بشغف، ونُفّذ بهدف الإلهام.",
      heroButton: "اكتشف CEE YA.",
      scrollText: "مرّر لاكتشاف المزيد",

      aboutLabel: "01 / من نحن",
      aboutSub: "وجهة نظر مختلفة",
      aboutTitle: "أكثر من<br>مجرد مساحة رقمية.",
      aboutCopy: "CEE YA. مساحة إبداعية مغربية مستقلة تستكشف الأفكار والتصميم والاحتمالات الجديدة. مساحة يلتقي فيها الفضول بالهدف، وتكتسب فيها كل التفاصيل معنى خاصاً.",
      aboutBrand: "CEE YA. — المغرب",

      exploreLabel: "02 / استكشافات",
      exploreDirections: "ثلاثة اتجاهات",
      explorePerspective: "رؤيتنا",
      exploreTitle: "أفكار تستحق<br>الاكتشاف.",

      creativity: "الإبداع",
      creativityCopy: "اكتشاف طرق جديدة للتعبير عمّا يستحق الاهتمام.",
      innovation: "الابتكار",
      innovationCopy: "تحويل الأفكار المدروسة إلى تجارب ذات معنى.",
      discovery: "الاكتشاف",
      discoveryCopy: "استكشاف آفاق تتجاوز حدود المألوف.",

      collectionLabel: "03 / المجموعة",
      collectionEdition: "اختيارات منتقاة",
      collectionEyebrow: "فن التفاصيل اليومية",
      collectionTitle: "قطع تحمل<br>تميّزاً هادئاً.",
      collectionCopy: "اختيارات مدروسة من الجمال والإكسسوارات والتفاصيل الصغيرة التي تضفي على اللحظات اليومية إحساساً خاصاً.",

      productCategoryOne: "الجمال",
      productTypeOne: "اختيارات الجمال",
      productNameOne: "الطقس اليومي",
      productDescriptionOne: "تصوّر إبداعي للجمال اليومي.",

      productCategoryTwo: "الإكسسوارات",
      productTypeTwo: "اختيارات الإكسسوارات",
      productNameTwo: "الأساسيات",
      productDescriptionTwo: "تصوّر يجمع بين الشكل والبساطة.",

      productCategoryThree: "المجوهرات",
      productTypeThree: "اختيارات التفاصيل",
      productNameThree: "اللمسة الأخيرة",
      productDescriptionThree: "تفاصيل صغيرة برؤية مختلفة.",

      conceptLabel: "تصوّر إبداعي",

      collectionNote: "هذه رؤية إبداعية أولية. سيتم تقديم المنتجات المختارة وتفاصيل توفرها في تحديث لاحق.",

      manifestoEyebrow: "رؤية CEE YA.",
      manifestoTitle: "لسنا هنا لنتبع الآخرين.<br>نحن هنا لنكتشف.",

      contactLabel: "04 / التواصل",
      contactConnect: "لنبقَ على تواصل",
      contactEyebrow: "هل لديك فكرة؟",
      contactTitle: "لنبدأ<br>حواراً جديداً.",
      contactTalk: "تواصل معنا",

      backToTop: "العودة إلى الأعلى",
      copyright: "© 2026 CEE YA. جميع الحقوق محفوظة.",
      footerLocation: "صُنع في المغرب"
    }

  };


  /* 02 — LANGUAGE SYSTEM */

  const languageButtons = document.querySelectorAll(".lang-btn");

  function setLanguage(language) {

    const selectedLanguage = translations[language];

    if (!selectedLanguage) return;

    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    document.body.classList.toggle("arabic", language === "ar");

    document.querySelectorAll("[data-i18n]").forEach(element => {

      const key = element.dataset.i18n;

      if (selectedLanguage[key] !== undefined) {
        element.innerHTML = selectedLanguage[key];
      }

    });

    languageButtons.forEach(button => {

      const isActive = button.dataset.lang === language;

      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));

    });

    try {
      localStorage.setItem("ceeya-language", language);
    } catch (error) {
      // Language still works if localStorage is unavailable.
    }

  }


  languageButtons.forEach(button => {

    button.addEventListener("click", () => {
      setLanguage(button.dataset.lang);
    });

  });


  /* 03 — RESTORE SAVED LANGUAGE */

  let savedLanguage = "en";

  try {
    savedLanguage = localStorage.getItem("ceeya-language") || "en";
  } catch (error) {
    savedLanguage = "en";
  }

  setLanguage(
    translations[savedLanguage] ? savedLanguage : "en"
  );


  /* 04 — MOBILE MENU */

  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  function closeMenu() {

    if (!menuToggle || !mobileMenu) return;

    menuToggle.classList.remove("active");
    mobileMenu.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");

  }


  if (menuToggle && mobileMenu) {

    menuToggle.addEventListener("click", () => {

      const isOpen = mobileMenu.classList.toggle("open");

      menuToggle.classList.toggle("active", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
      );

    });


    mobileMenu.querySelectorAll("a").forEach(link => {

      link.addEventListener("click", closeMenu);

    });


    document.addEventListener("keydown", event => {

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


  /* 05 — REVEAL ANIMATIONS */

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver((entries, observer) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");
          observer.unobserve(entry.target);

        }

      });

    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -35px 0px"
    });


    revealElements.forEach(element => {
      revealObserver.observe(element);
    });

  } else {

    revealElements.forEach(element => {
      element.classList.add("visible");
    });

  }


  /* 06 — HERO BUTTON */

  const heroButton = document.querySelector(".primary-button");

  if (heroButton) {

    heroButton.addEventListener("click", () => {
      closeMenu();
    });

  }


  /* 07 — LOADER */

  const loader = document.querySelector(".loader");

  function hideLoader() {

    if (!loader) return;

    loader.classList.add("is-hidden");

    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
    loader.style.pointerEvents = "none";

    setTimeout(() => {
      loader.style.display = "none";
    }, 700);

  }

  if (loader) {

    window.addEventListener("load", hideLoader, { once: true });

    // Backup: prevents the loader from staying on screen.
    setTimeout(hideLoader, 1800);

  }


  /* 08 — FOOTER */

  const copyright = document.querySelector('[data-i18n="copyright"]');

  if (copyright) {
    copyright.setAttribute("aria-label", "CEE YA. Copyright 2026");
  }


  /* 09 — SMOOTH ANCHOR NAVIGATION */

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

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


  /* 10 — READY */

  document.body.classList.add("js-ready");

  console.log("CEE YA. — Version 15 ready.");

});
