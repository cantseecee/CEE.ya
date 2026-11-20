
// CEEYA - MAIN JAVASCRIPT

document.addEventListener("DOMContentLoaded", function () {

    // SMOOTH SCROLL
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {
        link.addEventListener("click", function (event) {

            const target = document.querySelector(
                link.getAttribute("href")
            );

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // CURRENT YEAR
    const footer = document.querySelector("footer p");

    if (footer) {
        footer.textContent =
            `© ${new Date().getFullYear()} CEEYA. ALL RIGHTS RESERVED.`;
    }

    console.log("CEEYA website initialized successfully.");

});
