
document.addEventListener("DOMContentLoaded", function () {

    // 01 — LOADER
    const loader = document.getElementById("loader");

    function hideLoader() {
        if (loader) {
            loader.classList.add("hidden");
        }
    }

    window.addEventListener("load", hideLoader);

    // Fallback if the page takes too long to load
    setTimeout(hideLoader, 2500);


    // 02 — FOOTER YEAR
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    // 03 — MOBILE MENU
    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    function closeMenu() {
        if (!menuToggle || !mobileMenu) return;

        menuToggle.classList.remove("active");
        mobileMenu.classList.remove("open");
        document.body.classList.remove("menu-open");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
    }

    if (menuToggle && mobileMenu) {

        menuToggle.addEventListener("click", function () {

            const isOpen = mobileMenu.classList.toggle("open");

            menuToggle.classList.toggle("active", isOpen);
            document.body.classList.toggle("menu-open", isOpen);

            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation" : "Open navigation"
            );

        });

        mobileMenu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", closeMenu);
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                closeMenu();
            }
        });

        window.addEventListener("resize", function () {
            if (window.innerWidth > 650) {
                closeMenu();
            }
        });
    }


    // 04 — SMOOTH SCROLL
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

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


    // 05 — SCROLL REVEAL
    const revealSelectors = [
        ".about-content",
        ".vision-content",
        ".explorations-heading",
        ".exploration-card",
        ".collection-heading",
        ".product-card",
        ".contact-content",
        ".section-top"
    ];

    const revealElements = document.querySelectorAll(
        revealSelectors.join(", ")
    );

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -35px 0px"
            }
        );

        revealElements.forEach(function (element, index) {

            element.classList.add("reveal");

            element.style.transitionDelay =
                (index % 3) * 100 + "ms";

            revealObserver.observe(element);

        });

    }


    // 06 — ACTIVE SECTION TRACKING
    const sections = document.querySelectorAll("main section[id]");

    const sectionObserver = "IntersectionObserver" in window
        ? new IntersectionObserver(
            function (entries) {

                const visible = entries
                    .filter(function (entry) {
                        return entry.isIntersecting;
                    })
                    .sort(function (a, b) {
                        return b.intersectionRatio - a.intersectionRatio;
                    });

                if (visible.length) {
                    document.body.dataset.activeSection =
                        visible[0].target.id;
                }

            },
            {
                rootMargin: "-30% 0px -55% 0px",
                threshold: [0, 0.15, 0.35, 0.6]
            }
        )
        : null;

    if (sectionObserver) {
        sections.forEach(function (section) {
            sectionObserver.observe(section);
        });
    }


    // 07 — MARQUEE PAUSE
    const marquee = document.querySelector(".marquee-track");

    if (marquee) {

        marquee.addEventListener("mouseenter", function () {
            marquee.style.animationPlayState = "paused";
        });

        marquee.addEventListener("mouseleave", function () {
            marquee.style.animationPlayState = "running";
        });

        document.addEventListener("visibilitychange", function () {

            marquee.style.animationPlayState =
                document.hidden ? "paused" : "running";

        });

    }


    // 08 — HEADER / SCROLL STATE
    function updateScrollState() {

        document.body.classList.toggle(
            "is-scrolled",
            window.scrollY > 40
        );

    }

    window.addEventListener("scroll", updateScrollState, {
        passive: true
    });

    updateScrollState();


    // 09 — INITIALIZE
    console.log("CEE YA. — Obsidian Luxury initialized.");

});
