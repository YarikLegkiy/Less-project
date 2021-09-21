// Header

(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 120) {
            header.classList.add('header--active');
        } else {
            header.classList.remove('header--active');
        };
    };
}());

// Carousel-Slider

$(function(){
    $('.owl-carousel').owlCarousel({
        center: true,
        autoplay: true,
        autoplayTimeout: 2000,
        loop: true,
        margin: 30,
        nav: false,
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 1
            },
            1000:{
                items: 1
            }
        }
    })
});