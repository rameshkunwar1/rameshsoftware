AOS.init({
    duration: 500,
    once: true,
    mirror: true,
    easing: "ease-in-out"
});
/*==============================
     PRELOADER
   ==============================*/
const preloader = document.querySelector("#preloader");
const status = document.querySelector("#status");

window.addEventListener('load', function () {
    preloader.style.display = "none";
    status.style.display = "none";

})

/*==============================
    END OF   PRELOADER
    ==============================*/

/*===================================
       team section
==================================*/
$(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 600,
        loop: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            600: {
                items: 2

            },
            // breakpoint from 768 up
            900: {
                items: 3


            }
        }
    });
});
// client riview carousel
$(function () {
    $(".client-container").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 600,
        loop: true
    });
});
