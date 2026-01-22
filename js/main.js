const swiperTop = new Swiper('.swiper__slider', {
    // Optional parameters
    effect: 'slide',
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
