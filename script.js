/* =====================================================
   CEE YA. — MASTER INTERACTION
   VERSION 21
   ENGLISH / FRENCH / ARABIC
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  "use strict";

  /* 00 — YOUR CONTACT DETAILS
     Fill these in when they are ready. Empty = the button stays hidden.
     whatsapp : number with country code, digits only (example: "212612345678")
     instagram: your handle (example: "ceeya.ma")
     email    : your professional email (example: "contact@ceeya.ma") */

  const SITE = {
    whatsapp: "",
    instagram: "",
    email: ""
  };


  /* 01 — TRANSLATIONS */

  const translations = {

    en: {
      titleTag: "CEE YA. — OWN THE UNSEEN.",
      metaDescription: "CEE YA. is a Moroccan fashion accessories brand: bags, jewellery, caps and wallets with a quiet signature. Cash on delivery across Morocco.",
      skipLink: "Skip to content",

      navHome: "Home",
      navAbout: "About",
      navCollection: "Collection",
      navBrand: "Brand",
      navContact: "Contact",

      heroEyebrow: "MOROCCAN FASHION ACCESSORIES",
      heroTitle: "OWN THE<br>UNSEEN.",
      heroDescription: "Bags, jewellery, caps and wallets with a quiet signature. Chosen with intention, delivered across Morocco.",
      heroButton: "DISCOVER THE COLLECTION",
      scrollText: "SCROLL TO DISCOVER",

      marqueeText: "Bags ✦ Jewellery ✦ Caps ✦ Wallets ✦ Made for everyday ✦",

      aboutLabel: "01 / ABOUT",
      aboutSub: "THE BRAND",
      aboutTitle: "Small details.<br>Quiet distinction.",
      aboutCopy: "<bdi>CEE YA.</bdi> is a Moroccan accessories brand built around one idea: the smallest details change how an outfit feels. We choose each piece with intention, check it with care, and bring it to you at a fair price.",
      aboutBrand: "<bdi>CEE YA.</bdi> — MOROCCO",
      statOneLabel: "CATEGORIES",
      statTwoLabel: "PAY WHEN YOU RECEIVE",
      statThreeLabel: "DELIVERY ACROSS MOROCCO",

      exploreLabel: "02 / VALUES",
      exploreDirections: "THREE PRINCIPLES",
      explorePerspective: "WHAT WE STAND FOR",
      exploreTitle: "Made with<br>intention.",
      valueOne: "Intention",
      valueOneCopy: "Every piece is chosen on purpose, never added by default.",
      valueTwo: "Quality",
      valueTwoCopy: "Each item is checked before it reaches you.",
      valueThree: "Detail",
      valueThreeCopy: "Finishes, shapes and colours that feel considered.",

      collectionLabel: "03 / THE COLLECTION",
      collectionEdition: "FOUR CATEGORIES",
      collectionEyebrow: "THE ART OF EVERYDAY DETAILS",
      collectionTitle: "Objects of<br>quiet distinction.",
      collectionCopy: "Bags, jewellery, caps and wallets: a considered selection that makes everyday moments feel special.",
      conceptLabel: "CONCEPT",
      badgePreorder: "PRE-ORDER",
      badgeSoon: "COMING SOON",

      productCategoryOne: "BAGS",
      productTypeOne: "SHOULDER BAG",
      productNameOne: "The Heart Bag",
      productDescriptionOne: "A soft pink shoulder bag with a heart on the flap.",

      productCategoryTwo: "JEWELLERY",
      productTypeTwo: "RINGS",
      productNameTwo: "The Finishing Touch",
      productDescriptionTwo: "Small gold-tone details, worn every day.",

      productCategoryThree: "CAPS",
      productTypeThree: "EVERYDAY CAP",
      productNameThree: "The Essential Cap",
      productDescriptionThree: "A clean shape for easy days.",

      productCategoryFour: "WALLETS",
      productTypeFour: "COMPACT WALLET",
      productNameFour: "The Pocket Ritual",
      productDescriptionFour: "Small, structured, made to be carried.",

      collectionNote: "These are concept visuals. Final products and prices will be announced soon. Order by message and pay on delivery.",

      identityLabel: "04 / BRAND",
      identitySub: "THE CEE YA. SYSTEM",
      identityTitle: "A quiet,<br>warm signature.",
      logoTitle: "LOGO",
      logoCopy: "A serif wordmark with a gold full stop. The CY. monogram is used on small formats and social media.",
      paletteTitle: "COLOURS",
      paletteCopy: "Black leads. Gold is the accent, Ivory carries the text, Muted supports.",
      typeTitle: "TYPOGRAPHY",
      typeCopy: "Amiri and Cairo are used for Arabic.",
      signatureTitle: "SIGNATURE",
      signatureCopy: "A handwritten mark for packaging and thank-you cards.",

      orderLabel: "05 / HOW TO ORDER",
      orderSub: "SIMPLE AND SAFE",
      orderTitle: "Three steps,<br>no stress.",
      stepOne: "Choose",
      stepOneCopy: "Pick your piece from the collection.",
      stepTwo: "Message us",
      stepTwoCopy: "Send your order on WhatsApp or Instagram.",
      stepThree: "Pay on delivery",
      stepThreeCopy: "Receive it anywhere in Morocco and pay when it arrives.",

      manifestoEyebrow: "THE CEE YA. PERSPECTIVE",
      manifestoTitle: "We are not here to follow.<br>We are here to discover.",

      contactLabel: "06 / CONTACT",
      contactConnect: "LET'S CONNECT",
      contactEyebrow: "READY TO ORDER, OR JUST CURIOUS?",
      contactTitle: "Let's start a<br>conversation.",
      contactWhatsapp: "WHATSAPP",
      contactInstagram: "INSTAGRAM",
      contactEmail: "EMAIL",
      contactSoon: "Contact details are coming soon.",
      waMessage: "Hello CEE YA., I would like to place an order.",

      footerLocation: "MADE IN MOROCCO",
      backToTop: "BACK TO TOP ↑",
      copyright: "© 2026 CEE YA. ALL RIGHTS RESERVED.",

      openMenu: "Open menu",
      closeMenu: "Close menu"
    },

    fr: {
      titleTag: "CEE YA. — OWN THE UNSEEN.",
      metaDescription: "CEE YA. est une marque marocaine d'accessoires de mode : sacs, bijoux, casquettes et portefeuilles à la signature discrète. Paiement à la livraison partout au Maroc.",
      skipLink: "Aller au contenu",

      navHome: "Accueil",
      navAbout: "À propos",
      navCollection: "Collection",
      navBrand: "Marque",
      navContact: "Contact",

      heroEyebrow: "ACCESSOIRES DE MODE MAROCAINS",
      heroTitle: "OWN THE<br>UNSEEN.",
      heroDescription: "Sacs, bijoux, casquettes et portefeuilles à la signature discrète. Choisis avec intention, livrés partout au Maroc.",
      heroButton: "DÉCOUVRIR LA COLLECTION",
      scrollText: "DÉFILER POUR DÉCOUVRIR",

      marqueeText: "Sacs ✦ Bijoux ✦ Casquettes ✦ Portefeuilles ✦ Pensés pour le quotidien ✦",

      aboutLabel: "01 / À PROPOS",
      aboutSub: "LA MARQUE",
      aboutTitle: "Petits détails.<br>Distinction discrète.",
      aboutCopy: "<bdi>CEE YA.</bdi> est une marque marocaine d'accessoires née d'une idée : les plus petits détails changent la façon dont une tenue se porte. Nous choisissons chaque pièce avec intention, la vérifions avec soin et vous la proposons à un prix juste.",
      aboutBrand: "<bdi>CEE YA.</bdi> — MAROC",
      statOneLabel: "CATÉGORIES",
      statTwoLabel: "PAYEZ À LA RÉCEPTION",
      statThreeLabel: "LIVRAISON DANS TOUT LE MAROC",

      exploreLabel: "02 / VALEURS",
      exploreDirections: "TROIS PRINCIPES",
      explorePerspective: "CE QUI NOUS GUIDE",
      exploreTitle: "Créé avec<br>intention.",
      valueOne: "Intention",
      valueOneCopy: "Chaque pièce est choisie à dessein, jamais ajoutée par défaut.",
      valueTwo: "Qualité",
      valueTwoCopy: "Chaque article est vérifié avant de vous parvenir.",
      valueThree: "Détail",
      valueThreeCopy: "Des finitions, des formes et des couleurs réfléchies.",

      collectionLabel: "03 / LA COLLECTION",
      collectionEdition: "QUATRE CATÉGORIES",
      collectionEyebrow: "L'ART DES DÉTAILS DU QUOTIDIEN",
      collectionTitle: "Des objets<br>qui se distinguent.",
      collectionCopy: "Sacs, bijoux, casquettes et portefeuilles : une sélection réfléchie qui rend le quotidien plus spécial.",
      conceptLabel: "CONCEPT",
      badgePreorder: "PRÉCOMMANDE",
      badgeSoon: "BIENTÔT",

      productCategoryOne: "SACS",
      productTypeOne: "SAC BANDOULIÈRE",
      productNameOne: "Le Sac Cœur",
      productDescriptionOne: "Un sac bandoulière rose tendre avec un cœur sur le rabat.",

      productCategoryTwo: "BIJOUX",
      productTypeTwo: "BAGUES",
      productNameTwo: "La Touche Finale",
      productDescriptionTwo: "De petits détails dorés, à porter chaque jour.",

      productCategoryThree: "CASQUETTES",
      productTypeThree: "CASQUETTE QUOTIDIENNE",
      productNameThree: "La Casquette Essentielle",
      productDescriptionThree: "Une forme épurée pour les jours faciles.",

      productCategoryFour: "PORTEFEUILLES",
      productTypeFour: "PORTEFEUILLE COMPACT",
      productNameFour: "Le Rituel de Poche",
      productDescriptionFour: "Petit, structuré, fait pour être emporté.",

      collectionNote: "Ces visuels sont des concepts. Les produits et les prix définitifs seront annoncés bientôt. Commandez par message et payez à la livraison.",

      identityLabel: "04 / MARQUE",
      identitySub: "LE SYSTÈME CEE YA.",
      identityTitle: "Une signature<br>discrète et chaleureuse.",
      logoTitle: "LOGO",
      logoCopy: "Un logotype serif avec un point doré. Le monogramme CY. sert pour les petits formats et les réseaux sociaux.",
      paletteTitle: "COULEURS",
      paletteCopy: "Le noir domine. L'or est l'accent, l'ivoire porte le texte, le gris soutient.",
      typeTitle: "TYPOGRAPHIE",
      typeCopy: "Amiri et Cairo sont utilisées pour l'arabe.",
      signatureTitle: "SIGNATURE",
      signatureCopy: "Une marque manuscrite pour les emballages et les cartes de remerciement.",

      orderLabel: "05 / COMMENT COMMANDER",
      orderSub: "SIMPLE ET SÛR",
      orderTitle: "Trois étapes,<br>zéro stress.",
      stepOne: "Choisissez",
      stepOneCopy: "Sélectionnez votre pièce dans la collection.",
      stepTwo: "Écrivez-nous",
      stepTwoCopy: "Envoyez votre commande sur WhatsApp ou Instagram.",
      stepThree: "Payez à la livraison",
      stepThreeCopy: "Recevez-la partout au Maroc et payez à l'arrivée.",

      manifestoEyebrow: "LA VISION CEE YA.",
      manifestoTitle: "Nous ne sommes pas là pour suivre.<br>Nous sommes là pour découvrir.",

      contactLabel: "06 / CONTACT",
      contactConnect: "RESTONS EN CONTACT",
      contactEyebrow: "PRÊT·E À COMMANDER, OU SIMPLEMENT CURIEUX ?",
      contactTitle: "Commençons<br>une conversation.",
      contactWhatsapp: "WHATSAPP",
      contactInstagram: "INSTAGRAM",
      contactEmail: "E-MAIL",
      contactSoon: "Les coordonnées arrivent bientôt.",
      waMessage: "Bonjour CEE YA., je souhaite passer une commande.",

      footerLocation: "CRÉÉ AU MAROC",
      backToTop: "RETOUR EN HAUT ↑",
      copyright: "© 2026 CEE YA. TOUS DROITS RÉSERVÉS.",

      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu"
    },

    ar: {
      titleTag: "CEE YA. — OWN THE UNSEEN.",
      metaDescription: "CEE YA. علامة مغربية لإكسسوارات الأزياء: حقائب ومجوهرات وقبعات ومحافظ بلمسة هادئة. الدفع عند الاستلام في كل المغرب.",
      skipLink: "انتقل إلى المحتوى",

      navHome: "الرئيسية",
      navAbout: "من نحن",
      navCollection: "المجموعة",
      navBrand: "العلامة",
      navContact: "تواصل",

      heroEyebrow: "إكسسوارات أزياء مغربية",
      heroTitle: "OWN THE<br>UNSEEN.",
      heroDescription: "حقائب ومجوهرات وقبعات ومحافظ بلمسة هادئة. مختارة بعناية وتصل إلى كل مدن المغرب.",
      heroButton: "اكتشف المجموعة",
      scrollText: "اكتشف المزيد",

      marqueeText: "حقائب ✦ مجوهرات ✦ قبعات ✦ محافظ ✦ لكل يوم ✦",

      aboutLabel: "01 / من نحن",
      aboutSub: "العلامة",
      aboutTitle: "تفاصيل صغيرة.<br>تميّز هادئ.",
      aboutCopy: "<bdi>CEE YA.</bdi> علامة مغربية للإكسسوارات تقوم على فكرة واحدة: أصغر التفاصيل تغيّر إحساس الإطلالة. نختار كل قطعة بعناية، ونفحصها جيداً، ونقدمها لك بسعر عادل.",
      aboutBrand: "<bdi>CEE YA.</bdi> — المغرب",
      statOneLabel: "أصناف",
      statTwoLabel: "ادفع عند الاستلام",
      statThreeLabel: "توصيل إلى كل المغرب",

      exploreLabel: "02 / قيمنا",
      exploreDirections: "ثلاثة مبادئ",
      explorePerspective: "ما نؤمن به",
      exploreTitle: "صُنع<br>بعناية.",
      valueOne: "العناية",
      valueOneCopy: "كل قطعة مختارة عن قصد، ولا تُضاف بشكل عشوائي.",
      valueTwo: "الجودة",
      valueTwoCopy: "كل منتج يُفحص قبل أن يصل إليك.",
      valueThree: "التفاصيل",
      valueThreeCopy: "تشطيبات وأشكال وألوان مدروسة.",

      collectionLabel: "03 / المجموعة",
      collectionEdition: "أربعة أصناف",
      collectionEyebrow: "فن التفاصيل اليومية",
      collectionTitle: "أشياء تتميز<br>بهدوء.",
      collectionCopy: "حقائب ومجوهرات وقبعات ومحافظ: اختيارات مدروسة تضفي طابعاً مميزاً على لحظاتك اليومية.",
      conceptLabel: "تصور أولي",
      badgePreorder: "حجز مسبق",
      badgeSoon: "قريباً",

      productCategoryOne: "حقائب",
      productTypeOne: "حقيبة كتف",
      productNameOne: "حقيبة القلب",
      productDescriptionOne: "حقيبة كتف وردية ناعمة بقلب على الغطاء.",

      productCategoryTwo: "مجوهرات",
      productTypeTwo: "خواتم",
      productNameTwo: "اللمسة الأخيرة",
      productDescriptionTwo: "تفاصيل صغيرة بلمعة ذهبية، لكل يوم.",

      productCategoryThree: "قبعات",
      productTypeThree: "قبعة يومية",
      productNameThree: "القبعة الأساسية",
      productDescriptionThree: "شكل بسيط للأيام الهادئة.",

      productCategoryFour: "محافظ",
      productTypeFour: "محفظة صغيرة",
      productNameFour: "طقس الجيب",
      productDescriptionFour: "صغيرة ومنظمة، صُنعت لتُحمل معك.",

      collectionNote: "هذه تصورات أولية. سيتم الإعلان عن المنتجات والأسعار النهائية قريباً. اطلب برسالة وادفع عند الاستلام.",

      identityLabel: "04 / العلامة",
      identitySub: "هوية CEE YA.",
      identityTitle: "توقيع هادئ<br>ودافئ.",
      logoTitle: "الشعار",
      logoCopy: "كتابة بخط سيريف مع نقطة ذهبية. يُستخدم الرمز المختصر CY. في المساحات الصغيرة ووسائل التواصل.",
      paletteTitle: "الألوان",
      paletteCopy: "الأسود هو الأساس. الذهبي لمسة التميّز، والعاجي للنص، والرمادي للدعم.",
      typeTitle: "الخطوط",
      typeCopy: "يُستخدم خطا Amiri وCairo للعربية.",
      signatureTitle: "التوقيع",
      signatureCopy: "علامة بخط اليد للتغليف وبطاقات الشكر.",

      orderLabel: "05 / كيف تطلب",
      orderSub: "بسيط وآمن",
      orderTitle: "ثلاث خطوات،<br>بلا تعقيد.",
      stepOne: "اختر",
      stepOneCopy: "اختر قطعتك من المجموعة.",
      stepTwo: "راسلنا",
      stepTwoCopy: "أرسل طلبك عبر واتساب أو إنستغرام.",
      stepThree: "ادفع عند الاستلام",
      stepThreeCopy: "استلم طلبك في أي مدينة بالمغرب وادفع عند وصوله.",

      manifestoEyebrow: "رؤية <bdi>CEE YA.</bdi>",
      manifestoTitle: "لسنا هنا لنتبع الآخرين.<br>نحن هنا لنكتشف.",

      contactLabel: "06 / تواصل",
      contactConnect: "لنبقَ على تواصل",
      contactEyebrow: "جاهز للطلب، أو فضولي فقط؟",
      contactTitle: "لنبدأ<br>حواراً جديداً.",
      contactWhatsapp: "واتساب",
      contactInstagram: "إنستغرام",
      contactEmail: "البريد الإلكتروني",
      contactSoon: "بيانات التواصل قريباً.",
      waMessage: "مرحباً CEE YA.، أرغب في تقديم طلب.",

      footerLocation: "صُنع في المغرب",
      backToTop: "العودة للأعلى ↑",
      copyright: "© 2026 CEE YA. جميع الحقوق محفوظة.",

      openMenu: "فتح القائمة",
      closeMenu: "إغلاق القائمة"
    }

  };


  /* 02 — ELEMENT REFERENCES */

  const languageButtons = document.querySelectorAll(".lang-btn");
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const loader = document.querySelector(".loader");
  const metaDescription = document.querySelector('meta[name="description"]');

  const MENU_BREAKPOINT = 900;

  let currentLanguage = "en";


  /* 03 — CONTACT LINKS */

  function applyContacts() {

    const message = translations[currentLanguage].waMessage;

    const links = {
      whatsapp: SITE.whatsapp
        ? "https://wa.me/" + SITE.whatsapp.replace(/\D/g, "") + "?text=" + encodeURIComponent(message)
        : "",
      instagram: SITE.instagram
        ? "https://instagram.com/" + SITE.instagram.replace(/^@/, "")
        : "",
      email: SITE.email
        ? "mailto:" + SITE.email
        : ""
    };

    let hasAny = false;

    document.querySelectorAll("[data-contact]").forEach((element) => {

      const href = links[element.dataset.contact];

      element.hidden = !href;

      if (href) {
        element.href = href;
        hasAny = true;
      }

    });

    const emailLine = document.querySelector("[data-email]");

    if (emailLine) {
      emailLine.textContent = SITE.email;
      emailLine.hidden = !SITE.email;
    }

    const soon = document.querySelector(".contact-soon");

    if (soon) {
      soon.hidden = hasAny;
    }

  }


  /* 04 — LANGUAGE SYSTEM */

  function updateMenuLabel() {

    if (!menuToggle) return;

    const isOpen = menuToggle.classList.contains("active");

    menuToggle.setAttribute(
      "aria-label",
      isOpen
        ? translations[currentLanguage].closeMenu
        : translations[currentLanguage].openMenu
    );

  }


  function setLanguage(language) {

    if (!Object.prototype.hasOwnProperty.call(translations, language)) {
      return;
    }

    currentLanguage = language;

    const dictionary = translations[language];

    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    document.title = dictionary.titleTag;

    if (metaDescription) {
      metaDescription.setAttribute("content", dictionary.metaDescription);
    }

    document.querySelectorAll("[data-i18n]").forEach((element) => {

      const key = element.dataset.i18n;

      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.innerHTML = dictionary[key];
      }

    });

    languageButtons.forEach((button) => {

      const isActive = button.dataset.lang === language;

      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));

    });

    updateMenuLabel();
    applyContacts();

    try {
      localStorage.setItem("ceeya-language", language);
    } catch (error) {
      // The language system works without storage.
    }

  }


  function detectLanguage() {

    try {

      const stored = localStorage.getItem("ceeya-language");

      if (Object.prototype.hasOwnProperty.call(translations, stored)) {
        return stored;
      }

    } catch (error) {
      // Fall through to the browser language.
    }

    const browser = (navigator.language || "").slice(0, 2).toLowerCase();

    return Object.prototype.hasOwnProperty.call(translations, browser)
      ? browser
      : "en";

  }


  languageButtons.forEach((button) => {

    button.addEventListener("click", (event) => {

      event.preventDefault();

      setLanguage(button.dataset.lang);

    });

  });


  /* 05 — MOBILE MENU */

  function openMenu() {

    if (!menuToggle || !mobileMenu) return;

    mobileMenu.hidden = false;

    menuToggle.classList.add("active");
    menuToggle.setAttribute("aria-expanded", "true");

    document.body.classList.add("menu-open");

    updateMenuLabel();

  }


  function closeMenu(restoreFocus = false) {

    if (!menuToggle || !mobileMenu) return;

    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");

    mobileMenu.hidden = true;

    document.body.classList.remove("menu-open");

    updateMenuLabel();

    if (restoreFocus) {
      menuToggle.focus();
    }

  }


  if (menuToggle && mobileMenu) {

    menuToggle.setAttribute("aria-expanded", "false");

    if (mobileMenu.id) {
      menuToggle.setAttribute("aria-controls", mobileMenu.id);
    }

    mobileMenu.hidden = true;

    menuToggle.addEventListener("click", () => {

      if (menuToggle.classList.contains("active")) {
        closeMenu();
      } else {
        openMenu();
      }

    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => closeMenu());
    });

    document.addEventListener("click", (event) => {

      if (!menuToggle.classList.contains("active")) return;

      const insideMenu = mobileMenu.contains(event.target);
      const onToggle = menuToggle.contains(event.target);

      if (!insideMenu && !onToggle) {
        closeMenu();
      }

    });

    document.addEventListener("keydown", (event) => {

      if (event.key === "Escape" && menuToggle.classList.contains("active")) {
        closeMenu(true);
      }

    });

    window.addEventListener("resize", () => {

      if (window.innerWidth > MENU_BREAKPOINT) {
        closeMenu();
      }

    });

  }


  /* 06 — MOTION PREFERENCE */

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const canObserve = "IntersectionObserver" in window;


  /* 07 — REVEAL ANIMATIONS */

  function observe(selector, className, options) {

    const elements = document.querySelectorAll(selector);

    if (reduceMotion || !canObserve) {

      elements.forEach((element) => element.classList.add(className));

      return;

    }

    const observer = new IntersectionObserver((entries, instance) => {

      entries.forEach((entry) => {

        if (!entry.isIntersecting) return;

        entry.target.classList.add(className);

        instance.unobserve(entry.target);

      });

    }, options);

    elements.forEach((element) => observer.observe(element));

  }


  observe(".reveal", "visible", {
    threshold: 0.12,
    rootMargin: "0px 0px -35px 0px"
  });

  observe(".product-card", "product-visible", {
    threshold: 0.2,
    rootMargin: "0px 0px -40px 0px"
  });


  /* 08 — LOADER */

  let loaderHidden = false;
  let loaderFallback;


  function hideLoader() {

    if (loaderHidden) return;

    loaderHidden = true;

    window.clearTimeout(loaderFallback);

    if (!loader) return;

    loader.classList.add("hidden");

    window.setTimeout(() => {

      if (loader.isConnected) {
        loader.remove();
      }

    }, 800);

  }


  if (document.readyState === "complete") {
    hideLoader();
  } else {
    window.addEventListener("load", hideLoader, { once: true });
  }

  loaderFallback = window.setTimeout(hideLoader, 2500);


  /* 09 — INITIALIZE */

  setLanguage(detectLanguage());

  document.body.classList.add("js-ready");

});
