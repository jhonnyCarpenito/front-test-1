document.addEventListener('DOMContentLoaded', function () {

    const header = document.querySelector('.container_header');
    const hero = document.querySelector('.hero');
    const heroHeight = hero.offsetHeight;
    window.addEventListener('scroll', scrollHeader);

    function scrollHeader() {
        if (window.scrollY >= heroHeight) {
            header.classList.add('scroll-header');
        } else {
            header.classList.remove('scroll-header');
        }
    }

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        //direction: 'vertical',
        loop: true,
        controls: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },


    });

    // codigo carousel
    $('#recipeCarousel').carousel({
        interval: 10000
    })


    $('.carousel .carousel-item').each(function () {
        var minPerSlide = 3;
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i = 0; i < minPerSlide; i++) {
            next = next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }

            next.children(':first-child').clone().appendTo($(this));
        }
    });

});


