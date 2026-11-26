
// =========================================
// CEE YA. — LANGUAGES (EN / FR / AR)
// =========================================

const I18N = (() => {
    "use strict";

    const LANGS = ["en", "fr", "ar"];
    const LANG_KEY = "ceeya_lang";

    const D = {
        en: {
            title: "CEE YA. | Curated Finds & Everyday Essentials in Morocco",
            metaDesc: "Discover curated products, trending finds and everyday essentials at CEE YA. Explore our collection online in Morocco.",
            currency: "DH",

            navHome: "Home",
            navCollection: "Collection",
            navAbout: "About",
            navFaq: "FAQ",

            bag: "BAG",
            openBag: "Open shopping bag",
            openNav: "Open navigation",
            closeNav: "Close navigation",
            langLabel: "Language",

            heroEyebrow: "CEE YA. — CURATED DISCOVERY",
            heroTitle: "FIND YOUR NEXT <span>FAVOURITE.</span>",
            heroDesc: "Trending finds. Everyday essentials. A new standard of discovery.",
            heroCta: "EXPLORE COLLECTION",

            colEyebrow: "CURATED FOR YOU",
            colTitle: "THE COLLECTION",
            colSub: "Considered finds for everyday living.",

            filterAria: "Filter products",
            fAll: "ALL",
            cat_tech: "TECH",
            cat_style: "STYLE",
            cat_beauty: "BEAUTY",

            addToBag: "ADD TO BAG",
            added: "ADDED",
            soldOut: "SOLD OUT",
            badgeNew: "NEW",

            aboutEyebrow: "A DIFFERENT PERSPECTIVE",
            aboutTitle: "BEYOND <span>ORDINARY.</span>",
            aboutText: "Discover a different standard.",

            footer: "© 2026 CEE YA. ALL RIGHTS RESERVED.",

            cartAria: "Shopping bag",
            cartEyebrow: "YOUR SELECTION",
            cartTitle: "YOUR BAG",
            closeBag: "Close bag",
            subtotal: "SUBTOTAL",
            checkoutBtn: "CONTINUE TO CHECKOUT",
            cartNote: "This store is currently a preview. Ordering is not available yet.",

            emptyTitle: "YOUR BAG IS EMPTY",
            emptyDesc: "Discover something you love.",

            decrease: "Decrease quantity",
            increase: "Increase quantity",
            remove: "REMOVE",

            back: "← BACK TO SHOP",
            coEyebrow: "ALMOST YOURS",
            coTitle: "CHECKOUT",
            coSub: "Enter your details to prepare your order.",

            delivery: "DELIVERY DETAILS",
            lName: "Full name",
            pName: "Your full name",
            lPhone: "Phone number",
            pPhone: "06XXXXXXXX",
            lCity: "City",
            pCity: "Your city",
            lAddress: "Delivery address",
            pAddress: "Your full delivery address",

            prepare: "PREPARE MY ORDER",
            formNote: "Demo only. No payment is processed and no order is sent.",

            summary: "ORDER SUMMARY",
            total: "TOTAL",
            close: "Close",

            noteEmpty: "Your bag is empty.",
            noteIncomplete: "Please complete all delivery details.",
            noteDemo: "Demo mode: no information has been sent. Online ordering is not available yet.",
            alertDemo: "This store is currently in demo mode. No real order has been placed.",
            noteSent: "Your order message is ready in WhatsApp. Send it there to contact the store.",

            faqEyebrow: "GOOD TO KNOW",
            faqTitle: "FAQ",
            faqSub: "Quick answers before you order.",

            faqQ1: "How do I place an order?",
            faqA1: "The website is currently a preview. Online ordering is not available yet. We will announce when orders officially open.",

            faqQ2: "Where do you deliver?",
            faqA2: "Delivery locations will be announced when the store officially opens.",

            faqQ3: "How much is delivery and how long does it take?",
            faqA3: "Delivery costs and estimated times will be shared before ordering becomes available.",

            faqQ4: "How do I pay?",
            faqA4: "Payment methods will be announced before the store officially opens. No online payment is currently available.",

            faqQ5: "Can I return or exchange an item?",
            faqA5: "Our return and exchange policy will be published before orders open.",

            faqQ6: "How can I contact you?",
            faqA6: "Our official contact details will be published when the store opens."
        },

        fr: {
            title: "CEE YA. | Sélection tendance et essentiels du quotidien au Maroc",
            metaDesc: "Découvrez des produits sélectionnés, des trouvailles tendance et des essentiels du quotidien chez CEE YA. Explorez notre collection au Maroc.",
            currency: "DH",

            navHome: "Accueil",
            navCollection: "Collection",
            navAbout: "À propos",
            navFaq: "FAQ",

            bag: "PANIER",
            openBag: "Ouvrir le panier",
            openNav: "Ouvrir le menu",
            closeNav: "Fermer le menu",
            langLabel: "Langue",

            heroEyebrow: "CEE YA. — DÉCOUVERTE SÉLECTIONNÉE",
            heroTitle: "TROUVEZ VOTRE PROCHAIN <span>COUP DE CŒUR.</span>",
            heroDesc: "Des trouvailles tendance. Des essentiels du quotidien. Une nouvelle façon de découvrir.",
            heroCta: "EXPLORER LA COLLECTION",

            colEyebrow: "SÉLECTIONNÉ POUR VOUS",
            colTitle: "LA COLLECTION",
            colSub: "Des trouvailles choisies pour le quotidien.",

            filterAria: "Filtrer les produits",
            fAll: "TOUT",
            cat_tech: "TECH",
            cat_style: "STYLE",
            cat_beauty: "BEAUTÉ",

            addToBag: "AJOUTER AU PANIER",
            added: "AJOUTÉ",
            soldOut: "ÉPUISÉ",
            badgeNew: "NOUVEAU",

            aboutEyebrow: "UN AUTRE REGARD",
            aboutTitle: "AU-DELÀ DE <span>L’ORDINAIRE.</span>",
            aboutText: "Découvrez un autre standard.",

            footer: "© 2026 CEE YA. TOUS DROITS RÉSERVÉS.",

            cartAria: "Panier",
            cartEyebrow: "VOTRE SÉLECTION",
            cartTitle: "VOTRE PANIER",
            closeBag: "Fermer le panier",
            subtotal: "SOUS-TOTAL",
            checkoutBtn: "CONTINUER VERS LA COMMANDE",
            cartNote: "Cette boutique est actuellement en aperçu. Les commandes ne sont pas encore disponibles.",

            emptyTitle: "VOTRE PANIER EST VIDE",
            emptyDesc: "Découvrez quelque chose que vous aimerez.",

            decrease: "Diminuer la quantité",
            increase: "Augmenter la quantité",
            remove: "SUPPRIMER",

            back: "← RETOUR À LA BOUTIQUE",
            coEyebrow: "PRESQUE À VOUS",
            coTitle: "COMMANDE",
            coSub: "Saisissez vos informations pour préparer votre commande.",

            delivery: "INFORMATIONS DE LIVRAISON",
            lName: "Nom complet",
            pName: "Votre nom complet",
            lPhone: "Numéro de téléphone",
            pPhone: "06XXXXXXXX",
            lCity: "Ville",
            pCity: "Votre ville",
            lAddress: "Adresse de livraison",
            pAddress: "Votre adresse de livraison complète",

            prepare: "PRÉPARER MA COMMANDE",
            formNote: "Site de démonstration. Aucun paiement n’est traité et aucune commande n’est envoyée.",

            summary: "RÉCAPITULATIF",
            total: "TOTAL",
            close: "Fermer",

            noteEmpty: "Votre panier est vide.",
            noteIncomplete: "Veuillez remplir toutes les informations de livraison.",
            noteDemo: "Mode démo : aucune information n’a été envoyée. La commande en ligne n’est pas encore disponible.",
            alertDemo: "Cette boutique est actuellement en mode démo. Aucune vraie commande n’a été passée.",
            noteSent: "Votre message de commande est prêt dans WhatsApp. Envoyez-le pour contacter la boutique.",

            faqEyebrow: "BON À SAVOIR",
            faqTitle: "FAQ",
            faqSub: "Des réponses rapides avant de commander.",

            faqQ1: "Comment passer commande ?",
            faqA1: "Le site est actuellement en aperçu. Les commandes en ligne ne sont pas encore disponibles. Nous annoncerons leur ouverture officielle.",

            faqQ2: "Où livrez-vous ?",
            faqA2: "Les zones de livraison seront annoncées à l’ouverture officielle de la boutique.",

            faqQ3: "Quel est le prix et le délai de livraison ?",
            faqA3: "Les frais et délais de livraison seront communiqués avant l’ouverture des commandes.",

            faqQ4: "Comment payer ?",
            faqA4: "Les moyens de paiement seront annoncés avant l’ouverture officielle. Aucun paiement en ligne n’est actuellement disponible.",

            faqQ5: "Puis-je retourner ou échanger un article ?",
            faqA5: "Notre politique de retour et d’échange sera publiée avant l’ouverture des commandes.",

            faqQ6: "Comment vous contacter ?",
            faqA6: "Nos coordonnées officielles seront publiées à l’ouverture de la boutique."
        },

        ar: {
            title: "CEE YA. | منتجات مختارة وأساسيات الحياة اليومية في المغرب",
            metaDesc: "اكتشف منتجات مختارة وأحدث الصيحات وأساسيات الحياة اليومية في CEE YA. استكشف مجموعتنا في المغرب.",
            currency: "درهم",

            navHome: "الرئيسية",
            navCollection: "المجموعة",
            navAbout: "من نحن",
            navFaq: "الأسئلة الشائعة",

            bag: "السلة",
            openBag: "افتح السلة",
            openNav: "افتح القائمة",
            closeNav: "أغلق القائمة",
            langLabel: "اللغة",

            heroEyebrow: "CEE YA.\u200E — اكتشاف منتقى",
            heroTitle: "اكتشف <span>مفضّلك القادم.</span>",
            heroDesc: "أحدث الصيحات. أساسيات الحياة اليومية. معيار جديد للاكتشاف.",
            heroCta: "استكشف المجموعة",

            colEyebrow: "منتقاة لك",
            colTitle: "المجموعة",
            colSub: "قطع مختارة بعناية للحياة اليومية.",

            filterAria: "تصفية المنتجات",
            fAll: "الكل",
            cat_tech: "تقنية",
            cat_style: "أناقة",
            cat_beauty: "جمال",

            addToBag: "أضف إلى السلة",
            added: "تمت الإضافة",
            soldOut: "نفد المخزون",
            badgeNew: "جديد",

            aboutEyebrow: "نظرة مختلفة",
            aboutTitle: "ما وراء <span>المألوف.</span>",
            aboutText: "اكتشف معيارًا مختلفًا.",

            footer: "© 2026 CEE YA.\u200E جميع الحقوق محفوظة.",

            cartAria: "السلة",
            cartEyebrow: "اختياراتك",
            cartTitle: "سلتك",
            closeBag: "أغلق السلة",
            subtotal: "المجموع الفرعي",
            checkoutBtn: "المتابعة إلى إتمام الطلب",
            cartNote: "المتجر متاح حاليًا للمعاينة فقط. الطلبات غير متوفرة بعد.",

            emptyTitle: "سلتك فارغة",
            emptyDesc: "اكتشف شيئًا يعجبك.",

            decrease: "تقليل الكمية",
            increase: "زيادة الكمية",
            remove: "إزالة",

            back: "العودة إلى المتجر →",
            coEyebrow: "أوشكت أن تكون لك",
            coTitle: "إتمام الطلب",
            coSub: "أدخل معلوماتك لتحضير طلبك.",

            delivery: "معلومات التوصيل",
            lName: "الاسم الكامل",
            pName: "اسمك الكامل",
            lPhone: "رقم الهاتف",
            pPhone: "06XXXXXXXX",
            lCity: "المدينة",
            pCity: "مدينتك",
            lAddress: "عنوان التوصيل",
            pAddress: "عنوان التوصيل الكامل",

            prepare: "تحضير طلبي",
            formNote: "هذا موقع تجريبي. لا تتم أي عملية دفع ولا يتم إرسال أي طلب.",

            summary: "ملخص الطلب",
            total: "المجموع",
            close: "إغلاق",

            noteEmpty: "سلتك فارغة.",
            noteIncomplete: "المرجو إكمال جميع معلومات التوصيل.",
            noteDemo: "الوضع التجريبي: لم يتم إرسال أي معلومات. الطلب عبر الإنترنت غير متوفر بعد.",
            alertDemo: "المتجر في الوضع التجريبي حاليًا. لم يتم تقديم أي طلب حقيقي.",
            noteSent: "رسالة طلبك جاهزة في واتساب. أرسلها هناك للتواصل مع المتجر.",

            faqEyebrow: "معلومات مفيدة",
            faqTitle: "الأسئلة الشائعة",
            faqSub: "إجابات سريعة قبل أن تطلب.",

            faqQ1: "كيف أقدّم طلبي؟",
            faqA1: "الموقع متاح حاليًا للمعاينة فقط. الطلبات عبر الإنترنت غير متوفرة بعد. سنعلن عن موعد فتح الطلبات رسميًا.",

            faqQ2: "أين تقومون بالتوصيل؟",
            faqA2: "سيتم الإعلان عن مناطق التوصيل عند الافتتاح الرسمي للمتجر.",

            faqQ3: "كم تكلفة التوصيل وكم يستغرق؟",
            faqA3: "سيتم توضيح تكلفة التوصيل والمدة المتوقعة قبل فتح الطلبات.",

            faqQ4: "كيف أدفع؟",
            faqA4: "سيتم الإعلان عن طرق الدفع قبل الافتتاح الرسمي. الدفع عبر الإنترنت غير متوفر حاليًا.",

            faqQ5: "هل يمكنني إرجاع أو استبدال منتج؟",
            faqA5: "سيتم نشر سياسة الإرجاع والاستبدال قبل فتح الطلبات.",

            faqQ6: "كيف أتواصل معكم؟",
            faqA6: "سيتم نشر معلومات التواصل الرسمية عند افتتاح المتجر."
        }
    };


    /* PRODUCT TRANSLATIONS */

    const P = {
        fr: {
            "Sunglasses": {
                name: "Lunettes de soleil",
                tag: "Look net. Prêtes pour le soleil.",
                desc: "Monture légère à la forme intemporelle. Facile à associer à toutes les tenues, du matin au coucher du soleil."
            },

            "Phone Case": {
                name: "Coque de téléphone",
                tag: "Ajustement fin. Protection solide.",
                desc: "Coupe ajustée avec un rebord surélevé autour de l’écran et de la caméra. Une protection simple pour tous les jours."
            },

            "Backpack": {
                name: "Sac à dos",
                tag: "Au quotidien. Design spacieux.",
                desc: "Un sac à dos spacieux avec poche avant et bretelles rembourrées. Fait pour le travail, l’école et les week-ends."
            },

            "Perfume": {
                name: "Parfum",
                tag: "Notes fraîches. Sillage durable.",
                desc: "Un parfum frais et durable pour chaque jour. Assez léger pour la journée, assez marquant pour la soirée."
            },

            "Sneakers": {
                name: "Baskets",
                tag: "Confort urbain. Style facile.",
                desc: "Des baskets urbaines à semelle amortissante. Confortables dès le premier pas."
            },

            "Power Bank": {
                name: "Batterie externe",
                tag: "Charge rapide. Toujours prête.",
                desc: "Batterie externe compacte pour une charge rapide en déplacement. Gardez votre téléphone prêt toute la journée."
            }
        },

        ar: {
            "Sunglasses": {
                name: "نظارات شمسية",
                tag: "إطلالة أنيقة. جاهزة للشمس.",
                desc: "إطار خفيف بتصميم كلاسيكي لا يغيب. سهلة التنسيق مع أي إطلالة، من الصباح حتى الغروب."
            },

            "Phone Case": {
                name: "غطاء هاتف",
                tag: "نحيف. حماية قوية.",
                desc: "تصميم نحيف مع حافة مرتفعة حول الشاشة والكاميرا. حماية بسيطة للاستخدام اليومي."
            },

            "Backpack": {
                name: "حقيبة ظهر",
                tag: "رفيقة يومية. تصميم واسع.",
                desc: "حقيبة ظهر واسعة بجيب أمامي وأحزمة مبطّنة. مصممة للعمل والدراسة وعطلات نهاية الأسبوع."
            },

            "Perfume": {
                name: "عطر",
                tag: "نفحات منعشة. ثبات طويل.",
                desc: "عطر منعش يدوم طويلاً لكل يوم. خفيف للنهار ومميز للمساء."
            },

            "Sneakers": {
                name: "حذاء رياضي",
                tag: "راحة الشارع. أناقة سهلة.",
                desc: "حذاء رياضي عصري بنعل مبطّن. مريح من الخطوة الأولى."
            },

            "Power Bank": {
                name: "شاحن متنقل",
                tag: "شحن سريع. دائمًا جاهز.",
                desc: "شاحن متنقل صغير الحجم للشحن السريع أثناء التنقل. أبقِ هاتفك جاهزًا طوال اليوم."
            }
        }
    };


    /* LANGUAGE HELPERS */

    const listeners = [];
    let lang = detectLanguage();

    function detectLanguage() {
        try {
            const saved = localStorage.getItem(LANG_KEY);

            if (LANGS.includes(saved)) {
                return saved;
            }
        } catch (error) {
            // Storage may be unavailable.
        }

        const browser = (navigator.language || "en")
            .slice(0, 2)
            .toLowerCase();

        return LANGS.includes(browser) ? browser : "en";
    }

    function t(key) {
        return D[lang]?.[key] || D.en[key] || key;
    }

    function fmtPrice(value) {
        const number = Number(value);
        const safeNumber = Number.isFinite(number) ? number : 0;

        const locale = lang === "fr" ? "fr-FR" : "en-US";

        return safeNumber.toLocaleString(locale) + " " + t("currency");
    }

    function productEntry(name) {
        return P[lang]?.[name] || null;
    }

    function productName(name) {
        const product = productEntry(name);

        return product ? product.name : name;
    }

    function categoryLabel(category) {
        const key = "cat_" + category;

        return D[lang]?.[key] ||
            D.en[key] ||
            String(category || "").toUpperCase();
    }

    function cardInfo(card) {
        const product = productEntry(card.dataset.name);
        const original = card._orig || {};

        return {
            name: product
                ? product.name
                : (original.name || card.dataset.name),

            tag: product
                ? product.tag
                : (original.tag || ""),

            desc: product
                ? product.desc
                : (card.dataset.description || original.tag || "")
        };
    }


    /* APPLY LANGUAGE */

    function apply() {
        const root = document.documentElement;

        root.lang = lang;
        root.dir = lang === "ar" ? "rtl" : "ltr";

        document.title = t("title");

        const meta = document.querySelector(
            'meta[name="description"]'
        );

        if (meta) {
            meta.setAttribute("content", t("metaDesc"));
        }

        document.querySelectorAll("[data-i18n]").forEach(element => {
            element.textContent = t(element.dataset.i18n);
        });

        document.querySelectorAll("[data-i18n-html]").forEach(element => {
            element.innerHTML = t(element.dataset.i18nHtml);
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
            element.placeholder = t(element.dataset.i18nPlaceholder);
        });

        document.querySelectorAll("[data-i18n-aria]").forEach(element => {
            element.setAttribute(
                "aria-label",
                t(element.dataset.i18nAria)
            );
        });

        document.querySelectorAll(".product-card").forEach(card => {
            const heading = card.querySelector(".product-info h3");
            const tag = card.querySelector(".product-info p");
            const image = card.querySelector(".product-image img");
            const price = card.querySelector(".price");

            if (!card._orig) {
                card._orig = {
                    name: heading ? heading.textContent : "",
                    tag: tag ? tag.textContent : ""
                };
            }

            const info = cardInfo(card);

            if (heading) heading.textContent = info.name;
            if (tag) tag.textContent = info.tag;
            if (image) image.alt = info.name;

            if (price) {
                price.textContent = fmtPrice(card.dataset.price);
            }
        });

        document.querySelectorAll(".lang-btn").forEach(button => {
            const active = button.dataset.lang === lang;

            button.classList.toggle("active", active);
            button.setAttribute("aria-pressed", String(active));
        });
    }


    /* REFRESH + LANGUAGE CHANGE */

    function refresh() {
        apply();

        listeners.forEach(callback => {
            try {
                callback();
            } catch (error) {
                console.error("Language refresh error:", error);
            }
        });
    }

    function setLang(next) {
        if (!LANGS.includes(next) || next === lang) return;

        lang = next;

        try {
            localStorage.setItem(LANG_KEY, lang);
        } catch (error) {
            // Language still works for this session.
        }

        refresh();
    }

    function onChange(callback) {
        if (typeof callback === "function") {
            listeners.push(callback);
        }
    }

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    return {
        t,
        fmtPrice,
        productName,
        categoryLabel,
        cardInfo,
        setLang,
        onChange,
        refresh
    };
})();


// =========================================
// CEE YA. — SHARED PAGE HELPERS
// =========================================

function updateBodyScrollLock() {
    const cartOpen = document
        .getElementById("cart-panel")
        ?.classList.contains("open");

    const modalOpen = document
        .getElementById("product-modal")
        ?.classList.contains("open");

    document.body.classList.toggle(
        "no-scroll",
        Boolean(cartOpen || modalOpen)
    );
}


// =========================================
// CEE YA. — STORE INTERACTIONS
// CART / CHECKOUT / MOBILE MENU
// =========================================

document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    const STORAGE_KEY = "ceeya_cart_v1";
    const MAX_QUANTITY = 99;

    const homePage = document.getElementById("home-page");
    const checkoutSection = document.getElementById("checkout");

    const menuToggle = document.getElementById("menu-toggle");
    const mainNav = document.getElementById("main-nav");

    const cartToggle = document.getElementById("cart-toggle");
    const cartPanel = document.getElementById("cart-panel");
    const cartOverlay = document.getElementById("cart-overlay");
    const closeCartButton = document.getElementById("close-cart");

    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    const checkoutButton = document.getElementById("checkout-btn");
    const checkoutItems = document.getElementById("checkout-items");
    const checkoutTotal = document.getElementById("checkout-total");

    const checkoutForm = document.getElementById("checkout-form");
    const formNote = document.getElementById("form-note");
    const backToShop = document.getElementById("back-to-shop");

    let lastCartFocus = null;


    // PRODUCT CATALOGUE

    const productCatalog = new Map();

    document.querySelectorAll(".product-card").forEach(card => {
        const name = card.dataset.name;
        const price = Number(card.dataset.price);

        if (!name || !Number.isFinite(price) || price <= 0) {
            return;
        }

        productCatalog.set(name, {
            name,
            price,
            soldOut: card.dataset.status === "soldout"
        });
    });


    // CART STORAGE

    function loadCart() {
        try {
            const saved = JSON.parse(
                localStorage.getItem(STORAGE_KEY)
            );

            if (!Array.isArray(saved)) return [];

            const cleaned = new Map();

            saved.forEach(item => {
                if (!item || typeof item.name !== "string") {
                    return;
                }

                const product = productCatalog.get(item.name);
                const quantity = Number(item.quantity);

                if (!product || product.soldOut) return;

                if (
                    !Number.isInteger(quantity) ||
                    quantity < 1
                ) {
                    return;
                }

                const previous = cleaned.get(item.name) || 0;

                cleaned.set(
                    item.name,
                    Math.min(MAX_QUANTITY, previous + quantity)
                );
            });

            return Array.from(cleaned, ([name, quantity]) => ({
                name,
                price: productCatalog.get(name).price,
                quantity
            }));

        } catch (error) {
            return [];
        }
    }

    let cart = loadCart();

    function saveCart() {
        try {
            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(cart)
            );
        } catch (error) {
            console.warn("Cart could not be saved.");
        }
    }

    function getTotal() {
        return cart.reduce((sum, item) => {
            return sum + item.price * item.quantity;
        }, 0);
    }

    function getCount() {
        return cart.reduce((sum, item) => {
            return sum + item.quantity;
        }, 0);
    }

    function formatPrice(value) {
        return I18N.fmtPrice(value);
    }


    // MOBILE MENU

    function closeMenu() {
        if (!mainNav || !menuToggle) return;

        mainNav.classList.remove("open");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", I18N.t("openNav"));
    }

    function openMenu() {
        if (!mainNav || !menuToggle) return;

        mainNav.classList.add("open");
        menuToggle.classList.add("active");

        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.setAttribute("aria-label", I18N.t("closeNav"));
    }

    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", () => {
            const isOpen = mainNav.classList.contains("open");

            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        mainNav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", closeMenu);
        });

        // Close menu when clicking outside.
        document.addEventListener("click", event => {
            if (!mainNav.classList.contains("open")) return;

            if (
                mainNav.contains(event.target) ||
                menuToggle.contains(event.target)
            ) {
                return;
            }

            closeMenu();
        });
    }


    // CART OPEN / CLOSE

    function openCart() {
        if (!cartPanel || !cartOverlay) return;

        lastCartFocus = document.activeElement;

        cartPanel.classList.add("open");
        cartOverlay.classList.add("open");

        cartPanel.setAttribute("aria-hidden", "false");

        updateBodyScrollLock();
        closeMenu();

        closeCartButton?.focus();
    }

    function closeCart() {
        if (!cartPanel || !cartOverlay) return;

        const wasOpen = cartPanel.classList.contains("open");

        cartPanel.classList.remove("open");
        cartOverlay.classList.remove("open");

        cartPanel.setAttribute("aria-hidden", "true");

        updateBodyScrollLock();

        if (
            wasOpen &&
            lastCartFocus &&
            typeof lastCartFocus.focus === "function"
        ) {
            lastCartFocus.focus();
        }
    }

    cartToggle?.addEventListener("click", openCart);
    closeCartButton?.addEventListener("click", closeCart);
    cartOverlay?.addEventListener("click", closeCart);


    // ADD PRODUCTS

    document.querySelectorAll(".add-cart").forEach(button => {
        button.addEventListener("click", () => {
            const card = button.closest(".product-card");

            if (!card) return;

            const name = card.dataset.name;
            const product = productCatalog.get(name);

            if (!product || product.soldOut) return;

            const existing = cart.find(item => item.name === name);

            if (existing) {
                if (existing.quantity >= MAX_QUANTITY) return;

                existing.quantity++;
            } else {
                cart.push({
                    name: product.name,
                    price: product.price,
                    quantity: 1
                });
            }

            saveCart();
            updateCart();

            button.textContent = I18N.t("added");
            button.disabled = true;

            window.setTimeout(() => {
                if (!card.isConnected) return;

                button.textContent = I18N.t("addToBag");
                button.disabled = false;
            }, 900);
        });
    });


    // RENDER CART

    function updateCart() {
        if (
            !cartItems ||
            !cartCount ||
            !cartTotal ||
            !checkoutButton
        ) {
            return;
        }

        cartCount.textContent = getCount();
        cartItems.replaceChildren();

        if (cart.length === 0) {
            const empty = document.createElement("div");
            empty.className = "empty-cart";

            const title = document.createElement("h3");
            title.textContent = I18N.t("emptyTitle");

            const description = document.createElement("p");
            description.textContent = I18N.t("emptyDesc");

            empty.append(title, description);
            cartItems.appendChild(empty);

        } else {
            cart.forEach((item, index) => {
                const row = document.createElement("div");
                row.className = "cart-item";

                const info = document.createElement("div");
                info.className = "cart-item-info";

                const name = document.createElement("h4");
                name.textContent = I18N.productName(item.name);

                const price = document.createElement("p");
                price.className = "cart-item-price";
                price.textContent = formatPrice(item.price);

                const controls = document.createElement("div");
                controls.className = "quantity-controls";

                const minus = document.createElement("button");
                minus.type = "button";
                minus.textContent = "−";
                minus.setAttribute(
                    "aria-label",
                    I18N.t("decrease")
                );
                minus.dataset.action = "minus";
                minus.dataset.index = index;

                const quantity = document.createElement("span");
                quantity.textContent = item.quantity;

                const plus = document.createElement("button");
                plus.type = "button";
                plus.textContent = "+";
                plus.setAttribute(
                    "aria-label",
                    I18N.t("increase")
                );
                plus.dataset.action = "plus";
                plus.dataset.index = index;
                plus.disabled = item.quantity >= MAX_QUANTITY;

                controls.append(minus, quantity, plus);
                info.append(name, price, controls);

                const remove = document.createElement("button");
                remove.type = "button";
                remove.className = "remove-item";
                remove.textContent = I18N.t("remove");
                remove.dataset.action = "remove";
                remove.dataset.index = index;

                row.append(info, remove);
                cartItems.appendChild(row);
            });
        }

        cartTotal.textContent = formatPrice(getTotal());

        checkoutButton.disabled = cart.length === 0;
    }


    // CART BUTTON ACTIONS

    cartItems?.addEventListener("click", event => {
        const button = event.target.closest("button[data-action]");

        if (!button) return;

        const index = Number(button.dataset.index);

        if (!Number.isInteger(index) || !cart[index]) {
            return;
        }

        const action = button.dataset.action;

        if (action === "plus") {
            if (cart[index].quantity < MAX_QUANTITY) {
                cart[index].quantity++;
            }

        } else if (action === "minus") {
            cart[index].quantity--;

            if (cart[index].quantity <= 0) {
                cart.splice(index, 1);
            }

        } else if (action === "remove") {
            cart.splice(index, 1);

        } else {
            return;
        }

        saveCart();
        updateCart();
    });


    // CHECKOUT SUMMARY

    function updateCheckout() {
        if (!checkoutItems || !checkoutTotal) return;

        checkoutItems.replaceChildren();

        cart.forEach(item => {
            const row = document.createElement("div");
            row.className = "checkout-summary-item";

            const name = document.createElement("span");

            name.textContent =
                I18N.productName(item.name) +
                " × " +
                item.quantity;

            const price = document.createElement("strong");

            price.textContent = formatPrice(
                item.price * item.quantity
            );

            row.append(name, price);
            checkoutItems.appendChild(row);
        });

        checkoutTotal.textContent = formatPrice(getTotal());
    }


    // OPEN CHECKOUT

    checkoutButton?.addEventListener("click", () => {
        if (
            cart.length === 0 ||
            !homePage ||
            !checkoutSection
        ) {
            return;
        }

        closeCart();
        updateCheckout();

        homePage.style.display = "none";
        checkoutSection.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });


    // BACK TO SHOP

    backToShop?.addEventListener("click", () => {
        if (!homePage || !checkoutSection) return;

        checkoutSection.style.display = "none";
        homePage.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });


    // DEMO CHECKOUT — NO DATA SENT

    checkoutForm?.addEventListener("submit", event => {
        event.preventDefault();

        if (!formNote) return;

        if (cart.length === 0) {
            formNote.textContent = I18N.t("noteEmpty");
            return;
        }

        // Demo only.
        // Form details are not stored or transmitted.
        checkoutForm.reset();

        formNote.textContent = I18N.t("noteDemo");

        alert(I18N.t("alertDemo"));
    });


    // LANGUAGE CHANGE

    I18N.onChange(() => {
        closeMenu();

        updateCart();

        if (checkoutSection?.style.display === "block") {
            updateCheckout();
        }
    });


    // INITIALIZE

    saveCart();
    updateCart();
});


// =========================================
// CEE YA. — EXTRAS
// FILTERS / BADGES / PRODUCT DETAILS
// =========================================

document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    const cards = Array.from(
        document.querySelectorAll(".product-card")
    );


    // BADGES

    cards.forEach(card => {
        const status = card.dataset.status;

        if (status !== "new" && status !== "soldout") {
            return;
        }

        const badge = document.createElement("span");

        badge.className = "badge badge-" + status;

        badge.dataset.i18n =
            status === "new" ? "badgeNew" : "soldOut";

        badge.textContent = I18N.t(badge.dataset.i18n);

        card.appendChild(badge);

        if (status === "soldout") {
            const button = card.querySelector(".add-cart");

            card.classList.add("is-soldout");

            if (button) {
                button.disabled = true;
                button.dataset.i18n = "soldOut";
                button.textContent = I18N.t("soldOut");
            }
        }
    });


    // FILTERS

    const filterBar = document.getElementById("filters");

    filterBar?.addEventListener("click", event => {
        const clicked = event.target.closest("button[data-filter]");

        if (!clicked) return;

        filterBar.querySelectorAll("button[data-filter]").forEach(button => {
            const active = button === clicked;

            button.classList.toggle("active", active);
            button.setAttribute("aria-pressed", String(active));
        });

        const filter = clicked.dataset.filter;

        cards.forEach(card => {
            const hide =
                filter !== "all" &&
                card.dataset.category !== filter;

            card.classList.toggle("is-hidden", hide);
        });
    });


    // PRODUCT DETAILS MODAL

    const modal = document.getElementById("product-modal");
    const modalBackdrop = document.getElementById("modal-backdrop");
    const modalClose = document.getElementById("modal-close");
    const modalMedia = document.getElementById("modal-media");
    const modalCategory = document.getElementById("modal-category");
    const modalName = document.getElementById("modal-name");
    const modalDesc = document.getElementById("modal-desc");
    const modalPrice = document.getElementById("modal-price");
    const modalAdd = document.getElementById("modal-add");

    let currentCard = null;
    let lastFocused = null;


    // FILL MODAL

    function fillModal(card) {
        if (
            !card ||
            !modalCategory ||
            !modalName ||
            !modalDesc ||
            !modalPrice ||
            !modalAdd ||
            !modalMedia
        ) {
            return;
        }

        const info = I18N.cardInfo(card);

        modalCategory.textContent =
            I18N.categoryLabel(card.dataset.category);

        modalName.textContent = info.name;
        modalDesc.textContent = info.desc;

        modalPrice.textContent = I18N.fmtPrice(
            Number(card.dataset.price)
        );

        const soldOut = card.classList.contains("is-soldout");

        modalAdd.disabled = soldOut;

        modalAdd.textContent = soldOut
            ? I18N.t("soldOut")
            : I18N.t("addToBag");

        const image = modalMedia.querySelector("img");

        if (image) {
            image.alt = info.name;
        }
    }


    // OPEN MODAL

    function openModal(card) {
        if (!modal || !modalMedia || !modalClose) {
            return;
        }

        currentCard = card;
        lastFocused = document.activeElement;

        modalMedia.replaceChildren();

        const sourceImage = card.querySelector(
            ".product-image img"
        );

        if (sourceImage) {
            const image = document.createElement("img");

            image.src = sourceImage.getAttribute("src");
            image.alt = sourceImage.alt;
            image.decoding = "async";

            modalMedia.appendChild(image);

        } else {
            const placeholder = document.createElement("div");

            placeholder.className = "product-placeholder";
            placeholder.textContent = "CEE YA.";

            modalMedia.appendChild(placeholder);
        }

        fillModal(card);

        modal.classList.add("open");
        modal.setAttribute("aria-hidden", "false");

        updateBodyScrollLock();

        modalClose.focus();
    }


    // CLOSE MODAL

    function closeModal() {
        if (!modal || !modal.classList.contains("open")) {
            return;
        }

        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");

        updateBodyScrollLock();

        if (
            lastFocused &&
            typeof lastFocused.focus === "function"
        ) {
            lastFocused.focus();
        }

        currentCard = null;
    }


    // CARD CLICK + KEYBOARD

    cards.forEach(card => {
        card.addEventListener("click", event => {
            if (event.target.closest(".add-cart")) {
                return;
            }

            openModal(card);
        });

        card.addEventListener("keydown", event => {
            if (event.target !== card) return;

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {
                event.preventDefault();
                openModal(card);
            }
        });
    });


    modalClose?.addEventListener("click", closeModal);
    modalBackdrop?.addEventListener("click", closeModal);


    // ADD TO BAG FROM MODAL

    modalAdd?.addEventListener("click", () => {
        if (!currentCard) return;

        const cardButton = currentCard.querySelector(".add-cart");

        if (!cardButton || cardButton.disabled) {
            return;
        }

        cardButton.click();

        modalAdd.textContent = I18N.t("added");
        modalAdd.disabled = true;

        window.setTimeout(() => {
            if (!modal || !modal.classList.contains("open")) {
                return;
            }

            if (!currentCard) return;

            fillModal(currentCard);
        }, 900);
    });


    // LANGUAGE SWITCH

    document.querySelectorAll(".lang-btn").forEach(button => {
        button.addEventListener("click", () => {
            I18N.setLang(button.dataset.lang);
        });
    });


    // UPDATE MODAL WHEN LANGUAGE CHANGES

    I18N.onChange(() => {
        if (
            modal?.classList.contains("open") &&
            currentCard
        ) {
            fillModal(currentCard);
        }
    });


    // INITIALIZE LANGUAGE

    I18N.refresh();


    // KEYBOARD: ESCAPE + MODAL FOCUS TRAP

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            if (modal?.classList.contains("open")) {
                closeModal();
                return;
            }

            const cartPanel = document.getElementById("cart-panel");

            if (cartPanel?.classList.contains("open")) {
                document.getElementById("close-cart")?.click();
                return;
            }

            const menu = document.getElementById("main-nav");

            if (menu?.classList.contains("open")) {
                document.getElementById("menu-toggle")?.click();
            }

            return;
        }

        // Keep keyboard focus inside the modal while open.
        if (
            event.key !== "Tab" ||
            !modal?.classList.contains("open")
        ) {
            return;
        }

        const dialog = modal.querySelector(".modal-dialog");

        if (!dialog) return;

        const focusable = Array.from(
            dialog.querySelectorAll(
                'button:not([disabled]), a[href], input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
            )
        ).filter(element => {
            return element.offsetWidth > 0 || element.offsetHeight > 0;
        });

        if (focusable.length === 0) {
            event.preventDefault();
            dialog.focus();
            return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();

        } else if (
            !event.shiftKey &&
            document.activeElement === last
        ) {
            event.preventDefault();
            first.focus();
        }
    });
});
