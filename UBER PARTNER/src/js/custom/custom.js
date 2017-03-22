console.log('hello!');

$('.slider_container').slick({
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    prevArrow: '<div class="slick-prev">&lsaquo;</div>',
    nextArrow: '<div class="slick-next">&rsaquo;</div>'
});