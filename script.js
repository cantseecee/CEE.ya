
/* =================================
   CEEYA — INTERACTIVE EXPERIENCE
================================= */

document.addEventListener("DOMContentLoaded", function () {

    // 1. PRELOADER
    const preloader = document.querySelector(".preloader");

    window.addEventListener("load", function () {
        if (preloader) {
            setTimeout(function () {
                preloader.style.display = "none";
            }, 2300);
        }
    });


    // 2. SCROLL REVEAL
    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }

            });

        }, {
            threshold: 0.15
        });

        revealElements.forEach(function (element) {
            observer.observe(element);
        });

    } else {

        revealElements.forEach(function (element) {
            element.classList.add("visible");
        });

    }


    // 3. CURRENT YEAR
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    // 4. SMOOTH NAVIGATION
    const navigationLinks = document.querySelectorAll('a[href^="#"]');

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");
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


    // 5. CONSOLE MESSAGE
    console.log("CEEYA — Experience initialized successfully.");

});
