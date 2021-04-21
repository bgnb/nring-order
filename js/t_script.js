(function ($) {

  var window_width = $(window).width();
  if (window_width < 768) {
    jQuery(".aside-blocks-wrapper").trigger("sticky_kit:detach");
  } else {
    make_sticky();
  }
  $(window).resize(function () {
    window_width = $(window).width();
    if (window_width < 768) {
      $(".aside-blocks-wrapper").trigger("sticky_kit:detach");
    } else {
      make_sticky();
    }
  });
  function make_sticky() {
    $(".aside-blocks-wrapper").stick_in_parent({
      parent: ".article__content",
      spacer: ".aside-blocks-spacer",
      inner_scrolling: false,
      offset_top: 130
    });
  }
  
  
  var gallerySlider = new Swiper (".gallery-slider__container", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    // centeredSlides: true,
    breakpoints: {
      767: {
        slidesPerView: "auto",
        spaceBetween: 0,
        autoHeight: true,
        centeredSlides: true
      }
    },
    navigation: {
      nextEl: ".gallery-slider__btn-next",
      prevEl: ".gallery-slider__btn-prev"
    }
  });
  
  var stepsSlider = new Swiper (".steps-slider__container", {
    direction: "horizontal",
    loop: false,
    slidesPerView: 1,
    breakpoints: {
      767: {
        slidesPerView: 2,
        // spaceBetween: 0,
        // centeredSlides: true
      }
    },
    navigation: {
      nextEl: ".steps-slider__btn-next",
      prevEl: ".steps-slider__btn-prev",
    }
  });
  
  var promosliderSwiper = new Swiper('.promoslider-container', {
    slidesPerView: 1,
    spaceBetween: 80,
    loop: true,
    speed: 1000,
    navigation: {
      nextEl: ".promoslider__right",
      prevEl: ".promoslider__left",
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    breakpoints: {
      1599: {
        spaceBetween: 80,
        slidesPerView: 2
      },
      1023: {
        spaceBetween: 40,
        slidesPerView: 2
      }
    }
  });
  /*разве этой опции нет в конструкторе?*/
  /*-- почему-то она не работает*/
  $(promosliderSwiper.el).on('mouseenter', function () {
    promosliderSwiper.autoplay.stop();
  }).on('mouseleave', function () {
    promosliderSwiper.autoplay.start();
  });
  
  var schoolSwiper_img = new Swiper('.school-slider-img__container', {
    slidesPerView: 1,
    effect: 'flip',
    speed: 700,
    simulateTouch: false,
    allowTouchMove: false,
    autoHeight: true,
    navigation: {
      nextEl: '.i-people__nav-right',
      prevEl: '.i-people__nav-left'
    }
  });
  var schoolSwiper_txt = new Swiper('.school-slider-txt__container', {
    slidesPerView: 1,
    speed: 700,
    simulateTouch: false,
    allowTouchMove: false,
    autoHeight: true,
    spaceBetween: 50,
    navigation: {
      nextEl: '.i-people__nav-right',
      prevEl: '.i-people__nav-left'
    }
  });
  
  
  $(".article__faq_question").on("click", function(){
    $(this).toggleClass("article__faq_question--active");
    $(this).next(".article__faq_answer").toggle(100);
  });

  $(".section-collapsible__header").on("click", function(){
    $(this).toggleClass("section-collapsible__header--active");
    $(this).next(".section-collapsible__container").toggle(100);
  });



  $("[data-fancybox='test']").fancybox({
    baseTpl:
      '<div class="fbt fancybox-container fancybox-container__h-popup " role="dialog" tabindex="-1">' +
      '<div class="fancybox-bg fancybox-bg__h-popup"></div>' +
      '<div class="fancybox-inner">' +
      '<div class="fancybox-stage"></div>' +
      '</div>' +
      '</div>'
    
  });

  $("[data-fancybox='event-order']").fancybox({
    baseTpl:
      '<div class="fbt fancybox-container fancybox-container__h-popup " role="dialog" tabindex="-1">' +
      '<div class="fancybox-bg fancybox-bg__h-popup"></div>' +
      '<div class="fancybox-inner">' +
      '<div class="fancybox-stage"></div>' +
      '</div>' +
      '</div>'

  });


  $("[data-fancybox='article__photos']").fancybox({
    infobar: false,
    touch: false,
    buttons: [
      'close'
    ],
    baseTpl:
      '<div class="ftb2 fancybox-container fancybox-container__hiw" role="dialog" tabindex="-1">' +
      '<div class="fancybox-bg fancybox-bg__hiw"></div>' +
      '<div class="fancybox-inner">' +
      '<div class="fancybox-infobar">' +
      '<span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span>' +
      '</div>' +
      '<div class="fancybox-toolbar">{{buttons}}</div>' +
      '<div class="fancybox-navigation">{{arrows}}</div>' +
      '<div class="fancybox-stage"></div>' +
      '<div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div>' +
      '</div>' +
      '</div>',
    btnTpl: {
      close: '<button data-fancybox-close class="fancybox-button fancybox-button--close fancybox-button--close__hiw" title="{{CLOSE}}">' +
        '</button>',
      arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left fancybox-button--arrow_left__hiw" title="{{PREV}}">' +
        '</button>',
      arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right fancybox-button--arrow_right__hiw" title="{{NEXT}}">' +
        '</button>'
    }
    
  });
  
  
  
})(jQuery);
