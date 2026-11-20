
(() => {
  "use strict";

  const translations = {
    en: {
      navHome: "Home",
      navAbout: "About",
      navExplore: "Explore",
      navContact: "Contact",
      heroEyebrow: "A DIFFERENT POINT OF VIEW",
      heroTitle: 'Think beyond <em>the ordinary.</em>',
      heroDescription: "A new perspective on creativity, ideas and the digital world. Built with intention. Designed to inspire.",
      heroButton: "DISCOVER CEE YA",
      scrollText: "SCROLL TO DISCOVER ↓",
      aboutTitle: "More than a digital space.",
      aboutCopy: "CEE YA. is an independent Moroccan creative space exploring new ideas, modern culture and meaningful digital experiences.",
      aboutSub: "We believe in looking closer, thinking differently and creating with purpose. Every detail has a reason.",
      exploreTitle: "Ideas worth exploring.",
      creativity: "Creativity",
      creativityCopy: "Ideas that challenge the familiar and inspire new perspectives.",
      innovation: "Innovation",
      innovationCopy: "Exploring digital possibilities and the ideas shaping tomorrow.",
      discovery: "Discovery",
      discoveryCopy: "Finding inspiration in unexpected places and everyday details.",
      salmatyIntro: "An expression of everyday style. A feminine perspective shaped by detail, character and individuality.",
      bags: "Bags",
      jewelry: "Jewelry",
      caps: "Caps",
      wallets: "Wallets",
      comingSoon: "Coming soon",
      manifestoTitle: 'Not here to follow.<br><em>Here to discover.</em>',
      contactEyebrow: "HAVE SOMETHING IN MIND?",
      contactTitle: 'Let’s start<br><em>a conversation.</em>'
    },

    fr: {
      navHome: "Accueil",
      navAbout: "À propos",
      navExplore: "Explorer",
      navContact: "Contact",
      heroEyebrow: "UN AUTRE POINT DE VUE",
      heroTitle: 'Pensez au-delà <em>de l’ordinaire.</em>',
      heroDescription: "Une nouvelle perspective sur la créativité, les idées et le monde numérique. Pensé avec intention. Conçu pour inspirer.",
      heroButton: "DÉCOUVRIR CEE YA",
      scrollText: "DÉFILER POUR DÉCOUVRIR ↓",
      aboutTitle: "Bien plus qu’un espace numérique.",
      aboutCopy: "CEE YA. est un espace créatif indépendant marocain qui explore les nouvelles idées, la culture moderne et les expériences numériques.",
      aboutSub: "Nous croyons en l’observation, la réflexion différente et la création avec intention. Chaque détail a sa raison.",
      exploreTitle: "Des idées à explorer.",
      creativity: "Créativité",
      creativityCopy: "Des idées qui remettent en question l’habituel et inspirent de nouvelles perspectives.",
      innovation: "Innovation",
      innovationCopy: "Explorer les possibilités numériques et les idées qui façonnent demain.",
      discovery: "Découverte",
      discoveryCopy: "Trouver l’inspiration dans les endroits inattendus et les détails du quotidien.",
      salmatyIntro: "Une expression du style quotidien. Une perspective féminine façonnée par le détail, le caractère et l’individualité.",
      bags: "Sacs",
      jewelry: "Bijoux",
      caps: "Casquettes",
      wallets: "Portefeuilles",
      comingSoon: "Bientôt disponible",
      manifestoTitle: 'Pas ici pour suivre.<br><em>Ici pour découvrir.</em>',
      contactEyebrow: "UNE IDÉE EN TÊTE ?",
      contactTitle: 'Commençons<br><em>une conversation.</em>'
    },

    ar: {
      navHome: "الرئيسية",
      navAbout: "من نحن",
      navExplore: "اكتشف",
      navContact: "تواصل معنا",
      heroEyebrow: "رؤية مختلفة",
      heroTitle: 'فكّر أبعد من <em>المألوف.</em>',
      heroDescription: "رؤية جديدة للإبداع والأفكار والعالم الرقمي. نصنع باهتمام، ونصمّم لنُلهم.",
      heroButton: "اكتشف CEE YA",
      scrollText: "اكتشف المزيد ↓",
      aboutTitle: "أكثر من مجرد مساحة رقمية.",
      aboutCopy: "CEE YA. مساحة إبداعية مغربية مستقلة تستكشف الأفكار الجديدة والثقافة الحديثة والتجارب الرقمية الهادفة.",
      aboutSub: "نؤمن بالتأمل والتفكير المختلف والإبداع بهدف. لكل تفصيل معنى.",
      exploreTitle: "أفكار تستحق الاكتشاف.",
      creativity: "الإبداع",
      creativityCopy: "أفكار تتحدى المألوف وتلهم وجهات نظر جديدة.",
      innovation: "الابتكار",
      innovationCopy: "استكشاف الإمكانيات الرقمية والأفكار التي تصنع المستقبل.",
      discovery: "الاكتشاف",
      discoveryCopy: "العثور على الإلهام في الأماكن غير المتوقعة والتفاصيل اليومية.",
      salmatyIntro: "تعبير عن الأسلوب اليومي. رؤية أنثوية تصنعها التفاصيل والشخصية والتفرّد.",
      bags: "حقائب",
      jewelry: "مجوهرات",
      caps: "قبعات",
      wallets: "محافظ",
      comingSoon: "قريباً",
      manifestoTitle: 'لسنا هنا لنتبع.<br><em>بل هنا لنكتشف.</em>',
      contactEyebrow: "هل لديك فكرة؟",
      contactTitle: 'لنبدأ<br><em>حواراً.</em>'
    }
  };

  const languageButtons = document.querySelectorAll(".lang");
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  function setLanguage(language) {
    const dictionary = translations[language];

    if (!dictionary) return;

    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.body.dir = language === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(element => {
      const key = element.dataset.i18n;

      if (dictionary[key] !== undefined) {
        element.innerHTML = dictionary[key];
      }
    });

    languageButtons.forEach(button => {
      const selected = button.dataset.lang === language;

      button.classList.toggle("active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });

    try {
      localStorage.setItem("ceeya-language", language);
    } catch (error) {
      // Language selection still works if storage is unavailable.
    }
  }

  languageButtons.forEach(button => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.lang);
    });
  });

  let savedLanguage = "en";

  try {
    savedLanguage = localStorage.getItem("ceeya-language") || "en";
  } catch (error) {
    savedLanguage = "en";
  }

  setLanguage(translations[savedLanguage] ? savedLanguage : "en");

  // MOBILE MENU

  function closeMenu() {
    if (!menuToggle || !mobileMenu) return;

    mobileMenu.classList.remove("open");
    menuToggle.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
    document.body.classList.remove("menu-open");
  }

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("open");

      menuToggle.classList.toggle("open", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
      );

      document.body.classList.toggle("menu-open", isOpen);
    });

    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 700) closeMenu();
    });
  }

  // SCROLL REVEAL

  const revealElements = document.querySelectorAll(
    ".section-label, .intro-grid, .explore-card, .salmaty-heading, .salmaty-card, .manifesto h2, .contact-content"
  );

  revealElements.forEach(element => {
    element.classList.add("reveal");
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12
    });

    revealElements.forEach(element => observer.observe(element));
  } else {
    revealElements.forEach(element => {
      element.classList.add("visible");
    });
  }

  // FOOTER YEAR

  const footerYear = document.querySelector(".footer > span");

  if (footerYear) {
    footerYear.textContent = footerYear.textContent.replace(
      "2026",
      new Date().getFullYear()
    );
  }

})();