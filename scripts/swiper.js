const swiper = new Swiper('.swiper', {

    lazy: true,
    direction: 'horizontal',
    loop: true,
    speed: 500,
    effect: 'slider',
    freeMode: true,
    slidesPerView: 1,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3500,
    },
});


