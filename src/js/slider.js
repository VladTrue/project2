$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.svg"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                arrows: false,
              }
            }
        ]
    });
});