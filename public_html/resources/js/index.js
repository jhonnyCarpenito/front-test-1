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

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

});


