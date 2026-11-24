/* =========================================
   CEE YA. — LANGUAGES (EN / FR / AR)
   Add a new text: put it in the 3 dictionaries (D),
   then use data-i18n="key" on the HTML element.
   Products: translate by English data-name in P.
========================================= */

const I18N = (() => {

    const LANGS = ["en", "fr", "ar"];
    const LANG_KEY = "ceeya_lang";

    const D = {
        en: {
            title: "CEE YA. | Discover Your Next Favourite",
            metaDesc: "Discover curated everyday essentials and trending finds at CEE YA.",
            currency: "DH",
            navHome: "Home", navCollection: "Collection", navAbout: "About",
            bag: "BAG", openBag: "Open shopping bag", openNav: "Open navigation", closeNav: "Close navigation",
            langLabel: "Language",
            heroEyebrow: "CEE YA. — CURATED DISCOVERY",
            heroTitle: "FIND YOUR NEXT <span>FAVOURITE.</span>",
            heroDesc: "Trending finds. Everyday essentials. A new standard of discovery.",
            heroCta: "EXPLORE COLLECTION",
            colEyebrow: "CURATED FOR YOU", colTitle: "THE COLLECTION",
            colSub: "Considered finds for everyday living.",
            filterAria: "Filter products",
            fAll: "ALL", cat_tech: "TECH", cat_style: "STYLE", cat_beauty: "BEAUTY",
            addToBag: "ADD TO BAG", added: "ADDED", soldOut: "SOLD OUT", badgeNew: "NEW",
            aboutEyebrow: "A DIFFERENT PERSPECTIVE",
            aboutTitle: "BEYOND <span>ORDINARY.</span>",
            aboutText: "Discover a different standard.",
            footer: "© 2026 CEE YA. ALL RIGHTS RESERVED.",
            cartAria: "Shopping bag", cartEyebrow: "YOUR SELECTION", cartTitle: "YOUR BAG",
            closeBag: "Close bag", subtotal: "SUBTOTAL", checkoutBtn: "CONTINUE TO CHECKOUT",
            cartNote: "Delivery details will be confirmed with your order.",
            emptyTitle: "YOUR BAG IS EMPTY", emptyDesc: "Discover something you love.",
            decrease: "Decrease quantity", increase: "Increase quantity", remove: "REMOVE",
            back: "← BACK TO SHOP", coEyebrow: "ALMOST YOURS", coTitle: "CHECKOUT",
            coSub: "Enter your details to prepare your order.",
            delivery: "DELIVERY DETAILS",
            lName: "Full name", pName: "Your full name",
            lPhone: "Phone number", lCity: "City", pCity: "Your city",
            lAddress: "Delivery address", pAddress: "Your full delivery address",
            prepare: "PREPARE MY ORDER",
            formNote: "No payment is processed on this demo website.",
            summary: "ORDER SUMMARY", total: "TOTAL", close: "Close",
            noteEmpty: "Your bag is empty.",
            noteIncomplete: "Please complete all delivery details.",
            noteDemo: "Demo mode: your details have not been sent. Add your WhatsApp business number in script.js to activate order sending.",
            alertDemo: "This store is currently in demo mode. No real order has been placed.",
            noteSent: "Your order message is ready in WhatsApp. Send it there to contact the store.",
            navFaq: "FAQ",
            faqEyebrow: "GOOD TO KNOW",
            faqTitle: "FAQ",
            faqSub: "Quick answers before you order.",
            faqQ1: "How do I place an order?",
            faqA1: "Add your favourites to the bag, continue to checkout and enter your delivery details. Your order message opens in WhatsApp. Send it to us to confirm.",
            faqQ2: "Where do you deliver?",
            faqA2: "We deliver across Morocco. Delivery details are confirmed with you when we receive your order.",
            faqQ3: "How much is delivery and how long does it take?",
            faqA3: "It depends on your city. We confirm the delivery cost and time with you on WhatsApp before your order is final.",
            faqQ4: "How do I pay?",
            faqA4: "No online payment is taken on the website. We confirm the payment method with you on WhatsApp when you place your order.",
            faqQ5: "Can I return or exchange an item?",
            faqA5: "Message us on WhatsApp as soon as you receive your order and we will find a solution together.",
            faqQ6: "How can I contact you?",
            faqA6: "Write to us on WhatsApp. We reply as soon as possible."
        },
        fr: {
            title: "CEE YA. | Découvrez votre prochain coup de cœur",
            metaDesc: "Découvrez des essentiels du quotidien et des trouvailles tendance chez CEE YA.",
            currency: "DH",
            navHome: "Accueil", navCollection: "Collection", navAbout: "À propos",
            bag: "PANIER", openBag: "Ouvrir le panier", openNav: "Ouvrir le menu", closeNav: "Fermer le menu",
            langLabel: "Langue",
            heroEyebrow: "CEE YA. — DÉCOUVERTE SÉLECTIONNÉE",
            heroTitle: "TROUVEZ VOTRE PROCHAIN <span>COUP DE CŒUR.</span>",
            heroDesc: "Des trouvailles tendance. Des essentiels du quotidien. Une nouvelle façon de découvrir.",
            heroCta: "EXPLORER LA COLLECTION",
            colEyebrow: "SÉLECTIONNÉ POUR VOUS", colTitle: "LA COLLECTION",
            colSub: "Des trouvailles choisies pour le quotidien.",
            filterAria: "Filtrer les produits",
            fAll: "TOUT", cat_tech: "TECH", cat_style: "STYLE", cat_beauty: "BEAUTÉ",
            addToBag: "AJOUTER AU PANIER", added: "AJOUTÉ", soldOut: "ÉPUISÉ", badgeNew: "NOUVEAU",
            aboutEyebrow: "UN AUTRE REGARD",
            aboutTitle: "AU-DELÀ DE <span>L’ORDINAIRE.</span>",
            aboutText: "Découvrez un autre standard.",
            footer: "© 2026 CEE YA. TOUS DROITS RÉSERVÉS.",
            cartAria: "Panier", cartEyebrow: "VOTRE SÉLECTION", cartTitle: "VOTRE PANIER",
            closeBag: "Fermer le panier", subtotal: "SOUS-TOTAL", checkoutBtn: "CONTINUER VERS LA COMMANDE",
            cartNote: "Les détails de livraison seront confirmés avec votre commande.",
            emptyTitle: "VOTRE PANIER EST VIDE", emptyDesc: "Découvrez quelque chose que vous aimerez.",
            decrease: "Diminuer la quantité", increase: "Augmenter la quantité", remove: "SUPPRIMER",
            back: "← RETOUR À LA BOUTIQUE", coEyebrow: "PRESQUE À VOUS", coTitle: "COMMANDE",
            coSub: "Saisissez vos informations pour préparer votre commande.",
            delivery: "INFORMATIONS DE LIVRAISON",
            lName: "Nom complet", pName: "Votre nom complet",
            lPhone: "Numéro de téléphone", lCity: "Ville", pCity: "Votre ville",
            lAddress: "Adresse de livraison", pAddress: "Votre adresse de livraison complète",
            prepare: "PRÉPARER MA COMMANDE",
            formNote: "Aucun paiement n’est traité sur ce site de démonstration.",
            summary: "RÉCAPITULATIF", total: "TOTAL", close: "Fermer",
            noteEmpty: "Votre panier est vide.",
            noteIncomplete: "Veuillez remplir toutes les informations de livraison.",
            noteDemo: "Mode démo : vos informations n’ont pas été envoyées. Ajoutez votre numéro WhatsApp Business dans script.js pour activer l’envoi des commandes.",
            alertDemo: "Cette boutique est en mode démo. Aucune vraie commande n’a été passée.",
            noteSent: "Votre message de commande est prêt dans WhatsApp. Envoyez-le pour contacter la boutique.",
            navFaq: "FAQ",
            faqEyebrow: "BON À SAVOIR",
            faqTitle: "FAQ",
            faqSub: "Des réponses rapides avant de commander.",
            faqQ1: "Comment passer commande ?",
            faqA1: "Ajoutez vos coups de cœur au panier, passez à la commande et renseignez vos informations de livraison. Le message de commande s’ouvre dans WhatsApp. Envoyez-le-nous pour confirmer.",
            faqQ2: "Où livrez-vous ?",
            faqA2: "Nous livrons partout au Maroc. Les détails de livraison sont confirmés avec vous dès la réception de votre commande.",
            faqQ3: "Quel est le prix et le délai de livraison ?",
            faqA3: "Cela dépend de votre ville. Nous confirmons avec vous le coût et le délai de livraison sur WhatsApp avant la validation finale de votre commande.",
            faqQ4: "Comment payer ?",
            faqA4: "Aucun paiement en ligne n’est demandé sur le site. Nous confirmons avec vous le mode de paiement sur WhatsApp lors de votre commande.",
            faqQ5: "Puis-je retourner ou échanger un article ?",
            faqA5: "Écrivez-nous sur WhatsApp dès la réception de votre commande et nous trouverons ensemble une solution.",
            faqQ6: "Comment vous contacter ?",
            faqA6: "Écrivez-nous sur WhatsApp. Nous répondons dès que possible."
        },
        ar: {
            title: "CEE YA. | اكتشف مفضّلك القادم",
            metaDesc: "اكتشف أساسيات الحياة اليومية وأحدث الصيحات المنتقاة في CEE YA.",
            currency: "درهم",
            navHome: "الرئيسية", navCollection: "المجموعة", navAbout: "من نحن",
            bag: "السلة", openBag: "افتح السلة", openNav: "افتح القائمة", closeNav: "أغلق القائمة",
            langLabel: "اللغة",
            heroEyebrow: "CEE YA.\u200E — اكتشاف منتقى",
            heroTitle: "اكتشف <span>مفضّلك القادم.</span>",
            heroDesc: "أحدث الصيحات. أساسيات الحياة اليومية. معيار جديد للاكتشاف.",
            heroCta: "استكشف المجموعة",
            colEyebrow: "منتقاة لك", colTitle: "المجموعة",
            colSub: "قطع مختارة بعناية للحياة اليومية.",
            filterAria: "تصفية المنتجات",
            fAll: "الكل", cat_tech: "تقنية", cat_style: "أناقة", cat_beauty: "جمال",
            addToBag: "أضف إلى السلة", added: "تمت الإضافة", soldOut: "نفد المخزون", badgeNew: "جديد",
            aboutEyebrow: "نظرة مختلفة",
            aboutTitle: "ما وراء <span>المألوف.</span>",
            aboutText: "اكتشف معيارًا مختلفًا.",
            footer: "© 2026 CEE YA.\u200E جميع الحقوق محفوظة.",
            cartAria: "السلة", cartEyebrow: "اختياراتك", cartTitle: "سلتك",
            closeBag: "أغلق السلة", subtotal: "المجموع الفرعي", checkoutBtn: "المتابعة إلى إتمام الطلب",
            cartNote: "سيتم تأكيد تفاصيل التوصيل مع طلبك.",
            emptyTitle: "سلتك فارغة", emptyDesc: "اكتشف شيئًا يعجبك.",
            decrease: "تقليل الكمية", increase: "زيادة الكمية", remove: "إزالة",
            back: "العودة إلى المتجر →", coEyebrow: "أوشكت أن تكون لك", coTitle: "إتمام الطلب",
            coSub: "أدخل معلوماتك لتحضير طلبك.",
            delivery: "معلومات التوصيل",
            lName: "الاسم الكامل", pName: "اسمك الكامل",
            lPhone: "رقم الهاتف", lCity: "المدينة", pCity: "مدينتك",
            lAddress: "عنوان التوصيل", pAddress: "عنوان التوصيل الكامل",
            prepare: "تحضير طلبي",
            formNote: "لا تتم أي عملية دفع على هذا الموقع التجريبي.",
            summary: "ملخص الطلب", total: "المجموع", close: "إغلاق",
            noteEmpty: "سلتك فارغة.",
            noteIncomplete: "المرجو إكمال جميع معلومات التوصيل.",
            noteDemo: "الوضع التجريبي: لم يتم إرسال معلوماتك. أضف رقم واتساب الخاص بالمتجر في script.js لتفعيل إرسال الطلبات.",
            alertDemo: "هذا المتجر في الوضع التجريبي حاليًا. لم يتم تقديم أي طلب حقيقي.",
            noteSent: "رسالة طلبك جاهزة في واتساب. أرسلها هناك للتواصل مع المتجر.",
            navFaq: "الأسئلة الشائعة",
            faqEyebrow: "معلومات مفيدة",
            faqTitle: "الأسئلة الشائعة",
            faqSub: "إجابات سريعة قبل أن تطلب.",
            faqQ1: "كيف أقدّم طلبي؟",
            faqA1: "أضف منتجاتك المفضلة إلى السلة، ثم تابع إلى إتمام الطلب وأدخل معلومات التوصيل. ستفتح رسالة الطلب في واتساب، أرسلها إلينا لتأكيد طلبك.",
            faqQ2: "أين تقومون بالتوصيل؟",
            faqA2: "نوصّل إلى مختلف مدن المغرب. نؤكد معك تفاصيل التوصيل فور استلام طلبك.",
            faqQ3: "كم تكلفة التوصيل وكم يستغرق؟",
            faqA3: "يختلف ذلك حسب مدينتك. نؤكد معك تكلفة التوصيل ومدته عبر واتساب قبل اعتماد طلبك نهائيًا.",
            faqQ4: "كيف أدفع؟",
            faqA4: "لا يتم أي دفع عبر الإنترنت على الموقع. نؤكد معك طريقة الدفع عبر واتساب عند تقديم طلبك.",
            faqQ5: "هل يمكنني إرجاع أو استبدال منتج؟",
            faqA5: "راسلنا عبر واتساب فور استلام طلبك وسنجد معًا الحل المناسب.",
            faqQ6: "كيف أتواصل معكم؟",
            faqA6: "راسلنا عبر واتساب. نجيب في أقرب وقت ممكن."
        }
    };

    // Product texts. Key = the English data-name of the card.
    // Missing product or language = the English text from index.html is used.
    const P = {
        fr: {
            "Sunglasses": { name: "Lunettes de soleil", tag: "Look net. Prêtes pour le soleil.", desc: "Monture légère à la forme intemporelle. Facile à associer à toutes les tenues, du matin au coucher du soleil." },
            "Phone Case": { name: "Coque de téléphone", tag: "Ajustement fin. Protection solide.", desc: "Coupe ajustée avec un rebord surélevé autour de l’écran et de la caméra. Une protection simple pour tous les jours." },
            "Backpack": { name: "Sac à dos", tag: "Au quotidien. Design spacieux.", desc: "Un sac à dos spacieux avec poche avant et bretelles rembourrées. Fait pour le travail, l’école et les week-ends." },
            "Perfume": { name: "Parfum", tag: "Notes fraîches. Sillage durable.", desc: "Un parfum frais et durable pour chaque jour. Assez léger pour la journée, assez marquant pour la soirée." },
            "Sneakers": { name: "Baskets", tag: "Confort urbain. Style facile.", desc: "Des baskets urbaines à semelle amortissante. Confortables dès le premier pas." },
            "Power Bank": { name: "Batterie externe", tag: "Charge rapide. Toujours prête.", desc: "Batterie externe compacte pour une charge rapide en déplacement. Gardez votre téléphone prêt toute la journée." }
        },
        ar: {
            "Sunglasses": { name: "نظارات شمسية", tag: "إطلالة أنيقة. جاهزة للشمس.", desc: "إطار خفيف بتصميم كلاسيكي لا يغيب. سهلة التنسيق مع أي إطلالة، من الصباح حتى الغروب." },
            "Phone Case": { name: "غطاء هاتف", tag: "نحيف. حماية قوية.", desc: "تصميم نحيف مع حافة مرتفعة حول الشاشة والكاميرا. حماية بسيطة للاستخدام اليومي." },
            "Backpack": { name: "حقيبة ظهر", tag: "رفيقة يومية. تصميم واسع.", desc: "حقيبة ظهر واسعة بجيب أمامي وأحزمة مبطّنة. مصممة للعمل والدراسة وعطلات نهاية الأسبوع." },
            "Perfume": { name: "عطر", tag: "نفحات منعشة. ثبات طويل.", desc: "عطر منعش يدوم طويلاً لكل يوم. خفيف للنهار ومميز للمساء." },
            "Sneakers": { name: "حذاء رياضي", tag: "راحة الشارع. أناقة سهلة.", desc: "حذاء رياضي عصري بنعل مبطّن. مريح من الخطوة الأولى." },
            "Power Bank": { name: "شاحن متنقل", tag: "شحن سريع. دائمًا جاهز.", desc: "شاحن متنقل صغير الحجم للشحن السريع أثناء التنقل. أبقِ هاتفك جاهزًا طوال اليوم." }
        }
    };

    const listeners = [];
    let lang = detect();

    function detect() {
        try {
            const saved = localStorage.getItem(LANG_KEY);
            if (LANGS.includes(saved)) return saved;
        } catch (error) { /* ignore */ }
        const browser = (navigator.language || "en").slice(0, 2).toLowerCase();
        return LANGS.includes(browser) ? browser : "en";
    }

    function t(key) {
        return (D[lang] && D[lang][key]) || D.en[key] || key;
    }

    function fmtPrice(value) {
        return value.toLocaleString(lang === "fr" ? "fr-FR" : "en-US") + " " + t("currency");
    }

    function productEntry(name) {
        return (P[lang] && P[lang][name]) || null;
    }

    function productName(name) {
        const p = productEntry(name);
        return p ? p.name : name;
    }

    function categoryLabel(category) {
        const key = "cat_" + category;
        return D[lang][key] || D.en[key] || String(category || "").toUpperCase();
    }

    function cardInfo(card) {
        const p = productEntry(card.dataset.name);
        const o = card._orig || {};
        return {
            name: p ? p.name : (o.name || card.dataset.name),
            tag: p ? p.tag : o.tag,
            desc: p ? p.desc : (card.dataset.description || o.tag)
        };
    }

    function apply() {
        const root = document.documentElement;
        root.lang = lang;
        root.dir = lang === "ar" ? "rtl" : "ltr";

        document.title = t("title");
        const meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute("content", t("metaDesc"));

        document.querySelectorAll("[data-i18n]").forEach(el => {
            el.textContent = t(el.dataset.i18n);
        });
        document.querySelectorAll("[data-i18n-html]").forEach(el => {
            el.innerHTML = t(el.dataset.i18nHtml);   // our own trusted strings
        });
        document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
            el.placeholder = t(el.dataset.i18nPlaceholder);
        });
        document.querySelectorAll("[data-i18n-aria]").forEach(el => {
            el.setAttribute("aria-label", t(el.dataset.i18nAria));
        });

        document.querySelectorAll(".product-card").forEach(card => {
            const h3 = card.querySelector(".product-info h3");
            const tag = card.querySelector(".product-info p");
            const img = card.querySelector(".product-image img");
            const price = card.querySelector(".price");

            if (!card._orig) {
                card._orig = {
                    name: h3 ? h3.textContent : "",
                    tag: tag ? tag.textContent : ""
                };
            }

            const info = cardInfo(card);
            if (h3) h3.textContent = info.name;
            if (tag) tag.textContent = info.tag;
            if (img) img.alt = info.name;
            if (price) price.textContent = fmtPrice(Number(card.dataset.price));
        });

        document.querySelectorAll(".lang-btn").forEach(btn => {
            const active = btn.dataset.lang === lang;
            btn.classList.toggle("active", active);
            btn.setAttribute("aria-pressed", String(active));
        });
    }

    function refresh() {
        apply();
        listeners.forEach(fn => fn());
    }

    function setLang(next) {
        if (!LANGS.includes(next) || next === lang) return;
        lang = next;
        try { localStorage.setItem(LANG_KEY, lang); } catch (error) { /* ignore */ }
        refresh();
    }

    function onChange(fn) { listeners.push(fn); }

    // set direction right away, before the page is built
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    return { t, fmtPrice, productName, categoryLabel, cardInfo, setLang, onChange, refresh };

})();


/* =========================================
   CEE YA. — STORE INTERACTIONS
   CART / CHECKOUT / MOBILE MENU
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    // CONFIGURATION
    // Add your WhatsApp number later, with country code.
    // Example format: 2126XXXXXXXX
    const WHATSAPP_NUMBER = "";

    const STORAGE_KEY = "ceeya_cart_v1";

    // ELEMENTS
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

    let cart = loadCart();


    // STORAGE
    function loadCart() {
        try {
            const savedCart = JSON.parse(
                localStorage.getItem(STORAGE_KEY)
            );

            if (!Array.isArray(savedCart)) return [];

            return savedCart.filter(item => {
                return (
                    typeof item.name === "string" &&
                    Number.isFinite(item.price) &&
                    item.price > 0 &&
                    Number.isInteger(item.quantity) &&
                    item.quantity > 0
                );
            });

        } catch (error) {
            return [];
        }
    }

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


    // HELPERS
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
        mainNav.classList.remove("open");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", I18N.t("openNav"));
    }

    menuToggle.addEventListener("click", () => {
        const isOpen = mainNav.classList.toggle("open");

        menuToggle.classList.toggle("active", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? I18N.t("closeNav") : I18N.t("openNav")
        );
    });

    mainNav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });


    // CART OPEN / CLOSE
    function openCart() {
        cartPanel.classList.add("open");
        cartOverlay.classList.add("open");
        cartPanel.setAttribute("aria-hidden", "false");
        document.body.classList.add("no-scroll");
        closeMenu();
    }

    function closeCart() {
        cartPanel.classList.remove("open");
        cartOverlay.classList.remove("open");
        cartPanel.setAttribute("aria-hidden", "true");
        document.body.classList.remove("no-scroll");
    }

    cartToggle.addEventListener("click", openCart);
    closeCartButton.addEventListener("click", closeCart);
    cartOverlay.addEventListener("click", closeCart);

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeCart();
            closeMenu();
        }
    });


    // ADD PRODUCTS
    document.querySelectorAll(".add-cart").forEach(button => {

        button.addEventListener("click", () => {

            const product = button.closest(".product-card");

            const name = product.dataset.name;
            const price = Number(product.dataset.price);

            if (!name || !Number.isFinite(price) || price <= 0) {
                return;
            }

            const existing = cart.find(item => {
                return item.name === name;
            });

            if (existing) {
                existing.quantity++;
            } else {
                cart.push({
                    name,
                    price,
                    quantity: 1
                });
            }

            saveCart();
            updateCart();

            button.textContent = I18N.t("added");
            button.disabled = true;

            setTimeout(() => {
                button.textContent = I18N.t("addToBag");
                button.disabled = false;
            }, 900);

        });

    });


    // RENDER CART
    function updateCart() {

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
                minus.setAttribute("aria-label", I18N.t("decrease"));
                minus.dataset.action = "minus";
                minus.dataset.index = index;

                const quantity = document.createElement("span");
                quantity.textContent = item.quantity;

                const plus = document.createElement("button");
                plus.type = "button";
                plus.textContent = "+";
                plus.setAttribute("aria-label", I18N.t("increase"));
                plus.dataset.action = "plus";
                plus.dataset.index = index;

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
    cartItems.addEventListener("click", event => {

        const button = event.target.closest("button[data-action]");

        if (!button) return;

        const index = Number(button.dataset.index);

        if (!Number.isInteger(index) || !cart[index]) return;

        const action = button.dataset.action;

        if (action === "plus") {
            cart[index].quantity++;
        }

        if (action === "minus") {
            cart[index].quantity--;

            if (cart[index].quantity <= 0) {
                cart.splice(index, 1);
            }
        }

        if (action === "remove") {
            cart.splice(index, 1);
        }

        saveCart();
        updateCart();

    });


    // CHECKOUT SUMMARY
    function updateCheckout() {

        checkoutItems.replaceChildren();

        cart.forEach(item => {

            const row = document.createElement("div");
            row.className = "checkout-summary-item";

            const name = document.createElement("span");
            name.textContent = I18N.productName(item.name) + " × " + item.quantity;

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
    checkoutButton.addEventListener("click", () => {

        if (cart.length === 0) return;

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
    backToShop.addEventListener("click", () => {

        checkoutSection.style.display = "none";
        homePage.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    // PREPARE ORDER
    checkoutForm.addEventListener("submit", event => {

        event.preventDefault();

        if (cart.length === 0) {
            formNote.textContent = I18N.t("noteEmpty");
            return;
        }

        if (!checkoutForm.reportValidity()) {
            return;
        }

        const formData = new FormData(checkoutForm);

        const customer = {
            name: formData.get("name").trim(),
            phone: formData.get("phone").trim(),
            city: formData.get("city").trim(),
            address: formData.get("address").trim()
        };

        if (!customer.name || !customer.phone ||
            !customer.city || !customer.address) {
            formNote.textContent = I18N.t("noteIncomplete");
            return;
        }

        const orderLines = cart.map(item => {
            return (
                item.name + " x " + item.quantity +
                " = " + formatPrice(item.price * item.quantity)
            );
        });

        const message = [
            "CEE YA. — NEW ORDER",
            "",
            "Name: " + customer.name,
            "Phone: " + customer.phone,
            "City: " + customer.city,
            "Address: " + customer.address,
            "",
            "ORDER DETAILS",
            ...orderLines,
            "",
            "TOTAL: " + formatPrice(getTotal())
        ].join("\n");

        // No real order is submitted until WhatsApp is configured.
        if (!WHATSAPP_NUMBER) {
            formNote.textContent = I18N.t("noteDemo");

            alert(I18N.t("alertDemo"));

            return;
        }

        const whatsappURL =
            "https://wa.me/" +
            WHATSAPP_NUMBER +
            "?text=" +
            encodeURIComponent(message);

        window.open(whatsappURL, "_blank", "noopener,noreferrer");

        formNote.textContent = I18N.t("noteSent");

    });


    // LANGUAGE CHANGE: redraw the parts that JS builds
    I18N.onChange(() => {
        menuToggle.setAttribute(
            "aria-label",
            mainNav.classList.contains("open") ? I18N.t("closeNav") : I18N.t("openNav")
        );
        updateCart();
        if (checkoutSection.style.display === "block") updateCheckout();
    });


    // INITIALIZE
    updateCart();

});

/* =========================================
   CEE YA. — EXTRAS
   FILTERS / BADGES / PRODUCT DETAILS
   (loaded after script.js)
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    const cards = Array.from(document.querySelectorAll(".product-card"));


    // BADGES (data-status="new" or "soldout")
    cards.forEach(card => {

        const status = card.dataset.status;
        if (status !== "new" && status !== "soldout") return;

        const badge = document.createElement("span");
        badge.className = "badge badge-" + status;
        badge.dataset.i18n = status === "new" ? "badgeNew" : "soldOut";
        badge.textContent = I18N.t(badge.dataset.i18n);
        card.appendChild(badge);

        if (status === "soldout") {
            const button = card.querySelector(".add-cart");
            card.classList.add("is-soldout");
            button.disabled = true;
            button.dataset.i18n = "soldOut";
            button.textContent = I18N.t("soldOut");
        }

    });


    // FILTERS
    const filterBar = document.getElementById("filters");

    filterBar.addEventListener("click", event => {

        const clicked = event.target.closest("button[data-filter]");
        if (!clicked) return;

        filterBar.querySelectorAll("button[data-filter]").forEach(btn => {
            const isActive = btn === clicked;
            btn.classList.toggle("active", isActive);
            btn.setAttribute("aria-pressed", String(isActive));
        });

        const filter = clicked.dataset.filter;

        cards.forEach(card => {
            const hide = filter !== "all" &&
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

    function fillModal(card) {

        const info = I18N.cardInfo(card);

        modalCategory.textContent = I18N.categoryLabel(card.dataset.category);
        modalName.textContent = info.name;
        modalDesc.textContent = info.desc;
        modalPrice.textContent = I18N.fmtPrice(Number(card.dataset.price));

        const soldOut = card.classList.contains("is-soldout");
        modalAdd.disabled = soldOut;
        modalAdd.textContent = soldOut ? I18N.t("soldOut") : I18N.t("addToBag");

        const modalImage = modalMedia.querySelector("img");
        if (modalImage) modalImage.alt = info.name;

    }

    function openModal(card) {

        currentCard = card;
        lastFocused = document.activeElement;

        modalMedia.replaceChildren();

        const sourceImage = card.querySelector(".product-image img");

        if (sourceImage) {
            const image = document.createElement("img");
            image.src = sourceImage.getAttribute("src");
            image.alt = sourceImage.alt;
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
        document.body.classList.add("no-scroll");
        modalClose.focus();

    }

    function closeModal() {

        if (!modal.classList.contains("open")) return;

        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("no-scroll");

        if (lastFocused && lastFocused.focus) lastFocused.focus();

    }

    cards.forEach(card => {

        card.addEventListener("click", event => {
            if (event.target.closest(".add-cart")) return;
            openModal(card);
        });

        card.addEventListener("keydown", event => {
            if (event.target !== card) return;
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openModal(card);
            }
        });

    });

    modalClose.addEventListener("click", closeModal);
    modalBackdrop.addEventListener("click", closeModal);

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") closeModal();
    });

    // "ADD TO BAG" inside the modal uses the card's own button,
    // so the cart logic in script.js stays the only one.
    modalAdd.addEventListener("click", () => {

        if (!currentCard) return;

        const cardButton = currentCard.querySelector(".add-cart");
        if (!cardButton || cardButton.disabled) return;

        cardButton.click();

        modalAdd.textContent = I18N.t("added");
        modalAdd.disabled = true;

        setTimeout(() => {
            modalAdd.textContent = I18N.t("addToBag");
            modalAdd.disabled = false;
        }, 900);

    });



    // LANGUAGE SWITCH
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", () => I18N.setLang(btn.dataset.lang));
    });

    I18N.onChange(() => {
        if (modal.classList.contains("open") && currentCard) fillModal(currentCard);
    });

    I18N.refresh();

});
