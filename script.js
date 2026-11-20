
/* =========================================
   CEEYA — INTERACTIVE EXPERIENCE
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    // 1. CURRENT YEAR

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    // 2. SCROLL REVEAL

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

        const observer = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach(function (element) {
            element.classList.add("reveal");
            observer.observe(element);
        });

    } else {

        revealElements.forEach(function (element) {
            element.classList.add("visible");
        });

    }


    // 3. SMOOTH NAVIGATION

    const navigationLinks = document.querySelectorAll(
        'a[href^="#"]'
    );

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

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


    // 4. HEADER SCROLL EFFECT

    const header = document.querySelector(".header");

    function updateHeader() {

        if (!header) {
            return;
        }

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


    // 5. EXPLORATION CARD ANIMATION

    const cards = document.querySelectorAll(".exploration-card");

    cards.forEach(function (card, index) {

        card.style.transitionDelay = (index * 100) + "ms";

    });


    // 6. MARQUEE PAUSE ON HOVER

    const marquee = document.querySelector(".marquee-track");

    if (marquee) {

        marquee.addEventListener("mouseenter", function () {
            marquee.style.animationPlayState = "paused";
        });

        marquee.addEventListener("mouseleave", function () {
            marquee.style.animationPlayState = "running";
        });

    }


    // 7. ACCESSIBILITY

    document.addEventListener("visibilitychange", function () {

        if (document.hidden && marquee) {
            marquee.style.animationPlayState = "paused";
        } else if (marquee) {
            marquee.style.animationPlayState = "running";
        }

    });


    // 8. INITIALIZATION

    console.log("CEEYA — Digital experience initialized.");

});
