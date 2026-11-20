document.addEventListener("DOMContentLoaded", function () {

    // UPDATE FOOTER YEAR
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // SCROLL REVEAL
    const revealSelectors = [
        ".hero-content",
        ".hero-index",
        ".section-label",
        ".about-layout",
        ".vision-visual",
        ".explorations-heading",
        ".exploration-card",
        ".explorations-note",
        ".contact-content"
    ];

    const revealElements = document.querySelectorAll(
        revealSelectors.join(", ")
    );

    if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        revealElements.forEach(function (element) {
            element.classList.add("reveal");
            revealObserver.observe(element);
        });
    } else {
        revealElements.forEach(function (element) {
            element.classList.add("visible");
        });
    }

    // SMOOTH SCROLL
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(function (link) {
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
            }
        });
    });

    // HEADER SCROLL EFFECT
    const header = document.querySelector(".header");

    function updateHeader() {
        if (!header) return;

        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", updateHeader, {
        passive: true
    });

    updateHeader();

    // ACTIVE NAVIGATION
    const navLinks = document.querySelectorAll(
        ".navigation a[href^='#']"
    );

    const sections = document.querySelectorAll(
        "section[id]"
    );

    function setActiveLink(sectionId) {
        navLinks.forEach(function (link) {
            const isActive =
                link.getAttribute("href") === "#" + sectionId;

            link.classList.toggle("active", isActive);
        });
    }

    if ("IntersectionObserver" in window && navLinks.length) {
        const sectionObserver = new IntersectionObserver(
            function (entries) {
                const visibleSections = entries
                    .filter(function (entry) {
                        return entry.isIntersecting;
                    })
                    .sort(function (a, b) {
                        return b.intersectionRatio - a.intersectionRatio;
                    });

                if (visibleSections.length) {
                    setActiveLink(visibleSections[0].target.id);
                }
            },
            {
                rootMargin: "-25% 0px -60% 0px",
                threshold: [0, 0.1, 0.25, 0.5]
            }
        );

        sections.forEach(function (section) {
            sectionObserver.observe(section);
        });
    }

    // EXPLORATION CARDS
    const cards = document.querySelectorAll(".exploration-card");

    cards.forEach(function (card, index) {
        card.style.transitionDelay = (index * 100) + "ms";
    });

    // MARQUEE PAUSE
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

    console.log("CEEYA — Digital experience initialized.");

});