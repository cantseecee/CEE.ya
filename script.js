
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
      aboutCopy: "CEE YA. est un espace créatif indépendant marocain qui explore les nouvelles idées, la culture moderne et les expériences numériques porteuses de sens.",
      aboutSub: "Nous croyons en l'observation, la réflexion différente et la création avec intention. Chaque détail a sa raison.",
      exploreTitle: "Des idées à explorer.",
      creativity: "Créativité",
      creativityCopy: "Des idées qui remettent en question l'habituel et inspirent de nouvelles perspectives.",
      innovation: "Innovation",
      innovationCopy: "Explorer les possibilités numériques et les idées qui façonnent demain.",
      discovery: "Découverte",
      discoveryCopy: "Trouver l'inspiration dans les endroits inattendus et les détails du quotidien.",
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
      manifestoTitle: 'لسنا هنا لنتبع.<br><em>بل هنا لنكتشف.</em>',
      contactEyebrow: "هل لديك فكرة؟",
      contactTitle: 'لنبدأ<br><em>حواراً.</em>'
    }
  };

  const buttons = document.querySelectorAll(".lang");
  const menuButton = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  function setLanguage(lang) {
    const dictionary = translations[lang];
    if (!dictionary) return;

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.classList.toggle("arabic", lang === "ar");

    document.querySelectorAll("[data-i18n]").forEach(element => {
      const key = element.getAttribute("data-i18n");
      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.innerHTML = dictionary[key];
      }
    });

    buttons.forEach(button => {
      const active = button.dataset.lang === lang;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    try {
      localStorage.setItem("ceeya-language", lang);
    } catch (_) {}
  }

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.lang);
    });
  });

  let initialLanguage = "en";
  try {
    initialLanguage = localStorage.getItem("ceeya-language") || "en";
  } catch (_) {}

  setLanguage(translations[initialLanguage] ? initialLanguage : "en");

  // MOBILE NAVIGATION

  function closeMenu() {
    if (!menuButton || !mobileMenu) return;

    mobileMenu.classList.remove("open");
    menuButton.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open menu");
    document.body.classList.remove("menu-open");
  }

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      const open = !mobileMenu.classList.contains("open");

      mobileMenu.classList.toggle("open", open);
      menuButton.classList.toggle("open", open);
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute(
        "aria-label",
        open ? "Close menu" : "Open menu"
      );

      document.body.classList.toggle("menu-open", open);
    });

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

  // SCROLL ANIMATIONS

  const revealElements = document.querySelectorAll(
    ".section-label, .intro-grid, .explore-card, .manifesto h2, .contact-content"
  );

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach(element => {
      element.classList.add("reveal");
      observer.observe(element);
    });
  } else {
    revealElements.forEach(element => {
      element.classList.add("visible");
    });
  }

})();
