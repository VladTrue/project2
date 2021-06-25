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
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  function toggleSlide(item) {
    $(item).each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      });
    });
  }

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back'); 

  $(".footer__map-show").on("click", function() {
    $(".footer__map").css({
      "display": "block"
    });
    $(".footer__map-show").css({
      "display": "none"
    });
    $(".footer__map-hide").css({
      "display": "block"
    });
  });

  $(".footer__map-hide").on("click", function() {
    $(".footer__map").css({
      "display": "none"
    });
    $(".footer__map-show").css({
      "display": "block"
    });
    $(".footer__map-hide").css({
      "display": "none"
    });
  });

  //modal

  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn(200);
  });

  $('.modal__close').on('click', function (){
    $('.overlay, #consultation, #thanks, #order').fadeOut(200);
  });

  $('.button_mini').on('click', function() {
    $('.overlay, #order').fadeIn(200);
  }); 
  
  $('.button_mini').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn(200);
    });
  });

  function validateForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 5
        },
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Пожалуйста, введите своё имя",
          minlength: jQuery.validator.format("Ваше имя должно содержать хотя бы {0} символов")
        },
        phone: "Пожалуйста, введите свой номер телефона",
        email: {
          required: "Пожалуйста, введите свой почтовый адрес",
          email: "Неправильно введён адрес"
        }
      }
    });
  }

  validateForms('#consultation-form');
  validateForms('#consultation form');
  validateForms('#order form');

  $('input[name=phone]').mask("+7 (999) 999-9999");
});

