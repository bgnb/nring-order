(function ($) {

  function formInit () {

    //установка current-service исходя из значения атрибута
    setCurrentService($('.service-item[data-active = true]'));

    //инициализация всех позиций заказа
    $('.order-item').each(function () {
      let orderItem = $(this);
      orderItem.find('.order-item__text').text(orderItem.attr('data-text'));
      orderItem.find('.order-item__price')
        .text(orderItem.attr('data-price') == 0
          ? 'Бесплатно'
          : addThousandsSeparator(orderItem.attr('data-price')) + '\u00A0₽'
        );
      let orderItemCheck = orderItem.find('.order-item__check input');
      orderItemCheck
        .attr('name', orderItem.attr('data-name'))
        .attr('value', orderItem.attr('data-text'));
      orderItem.attr('data-active') == 'true'
        ? orderItemCheck.attr('checked', 'checked')
        : orderItemCheck.removeAttr('checked');
      //установка имён скрытых инпутов
      orderItem.find('.order-item__text-hidden').attr('name', orderItem.attr('data-name') + 'Text');
      orderItem.find('.order-item__description-hidden').attr('name', orderItem.attr('data-name') + 'Description');
      orderItem.find('.order-item__price-hidden').attr('name', orderItem.attr('data-name') + 'Price');
      orderItem.find('.order-item__active-hidden').attr('name', orderItem.attr('data-name') + 'Active');
    });

    //показ панели доставки + скрытие инпутов желаемого времени (и наоборот)
    $('.order-gift__toggle .check__input:checkbox').triggerHandler('change');

    calcTotal();
  };

  function checkoutInit () {
    //инициализация всех позиций заказа
    $('.checkout-item').each(function () {
      let checkoutItem = $(this);
      checkoutItem.find('.checkout-item__text').text(checkoutItem.attr('data-text'));
      checkoutItem.find('.checkout-item__description').text(checkoutItem.attr('data-description'));
      checkoutItem.find('.checkout-item__value').text(checkoutItem.attr('data-value'));
      checkoutItem.find('.checkout-item__price')
        .text(checkoutItem.attr('data-price') == 0
          ? 'Бесплатно'
          : addThousandsSeparator(checkoutItem.attr('data-price')) + '\u00A0₽'
        );
    });

    let total = $('.checkout-total__price').attr('data-price');
    $('.checkout-total__price').text(addThousandsSeparator(total) + '\u00A0₽');
  }

  function calcTotal () {
    let total = 0;
    console.log('recalc');

    //выбранная услуга
    let serviceCurrent = $('.current-service');
    //установка значений скрытых инпутов
    serviceCurrent.find('.order-item__text-hidden').val(serviceCurrent.attr('data-text'));
    serviceCurrent.find('.order-item__price-hidden').val(serviceCurrent.attr('data-price'));
    //цена выбранной услуги
    total += parseInt(serviceCurrent.attr('data-price'));

    //плюс цены отмеченных доп.услуг
    $('.order-extras .order-item[data-active = true]').each(function () {
      let orderItem = $(this);
      //установка значений скрытых инпутов
      orderItem.find('.order-item__text-hidden').val(orderItem.attr('data-text'));
      orderItem.find('.order-item__description-hidden').val(orderItem.attr('data-description'));
      orderItem.find('.order-item__price-hidden').val(orderItem.attr('data-price'));
      total += parseInt(orderItem.attr("data-price"));
    });

    //плюс цена доставки при отмеченном сертификате
    if($('.order-gift__toggle').attr('data-active') == 'true') {
      $('.order-delivery .order-item[data-active = true]').each(function () {
        let deliveryItem = $(this);
        total += parseInt(deliveryItem.attr('data-price'));
        // установка значения скрытых инпутов
        $('.order-delivery__price-hidden').val(deliveryItem.attr('data-price'));
      });
    }
    $('.order-total__price')
      .attr('data-price', total)
      .text(addThousandsSeparator(total) + '\u00A0₽');
    $('.order-total__price-hidden').val(total);
  };

  function setCurrentService (serviceActive) {
    let serviceCurrent = serviceActive.closest('.order-services').find('.current-service');
    serviceActive.attr('data-active', true).addClass('service-item--active').siblings().attr('data-active', false).removeClass('service-item--active');

    serviceCurrent
      .attr('data-text', serviceActive.attr('data-text'))
      .attr('data-price', serviceActive.attr('data-price'))
      .attr('data-priceExtraLaps1', serviceActive.attr('data-priceExtraLaps1'))
      .attr('data-priceExtraLaps2', serviceActive.attr('data-priceExtraLaps2'))
      .attr('data-priceExtraLaps3', serviceActive.attr('data-priceExtraLaps3')) ;

    //установка соответствующих цен доп.кругов в селекте
    let extraLapsItem = $('.extra-item--extra-laps');
    let extraLapsSelect = extraLapsItem.find('.order-item__select');
    extraLapsSelect.find('option').each(function (i) {
      $(this).attr('data-price', serviceCurrent.attr('data-priceExtralaps' + (i + 1)));
    });
    //установка цены выбранного доп.круга для позиции
    $('.extra-item--extra-laps .order-item__select').triggerHandler('change');

    serviceCurrent.find('.current-service__text').text(serviceCurrent.attr('data-text'));
    serviceCurrent.find('.current-service__price').text(addThousandsSeparator(serviceCurrent.attr('data-price')) + '\u00A0₽');
  }

  function setCurrentExtraLapsPrice () {
    let extraLapsSelect = $('.extra-item--extra-laps .order-item__select');
    let extraLapsItem = extraLapsSelect.closest('.extra-item--extra-laps');
    extraLapsItem
      .attr('data-price', extraLapsSelect.find('option:selected').attr('data-price'))
      .find('.order-item__price')
      .text(extraLapsItem.attr('data-price') == 0 ? 'Бесплатно' : addThousandsSeparator(extraLapsItem.attr('data-price')) + '\u00A0₽');
    extraLapsItem
      .attr('data-description', extraLapsSelect.find('option:selected').attr('data-description'));
  }

  function addThousandsSeparator (numberText) {
    return parseInt(numberText).toLocaleString('ru-RU');
  };

  $('.service-item').on('click', function () {
    let serviceActive = $(this);
    let serviceCurrent = serviceActive.closest('.order-services').find('.current-service');
    setCurrentService(serviceActive);
    serviceActive.closest('.order-services').find('.order-services__list').toggleClass('order-services__list--active').toggle(100);
    serviceCurrent.find('.current-service__btn').toggleClass('current-service__btn--active');
    calcTotal();
  });

  $('.current-service').on('click', function () {
    $(this).find('.current-service__btn').toggleClass('current-service__btn--active');
    $('.order-services__list').toggleClass('order-services__list--active').toggle(100);
  });

  $('.extra-item--extra-laps .order-item__select').on('change', function () {
    setCurrentExtraLapsPrice();
    calcTotal();
  });

  //при изменении чекбокса или радиокнопки устанавливаем соответствующий дата-атрибут у позиции
  $('.order-item .check__input:checkbox').on('change', function() {
    $(this).closest('.order-item')
      .attr('data-active', $(this).prop('checked'));
    calcTotal();
  });
  $('.order-item .check__input:radio').on('change', function() {
    $(this).closest('.order-item')
      .attr('data-active', $(this).prop('checked'))
      .siblings().attr('data-active', false);
    calcTotal();
    console.log('radio changed 1')
  });
  //для радиокнопок доставки, если цена == 0, скрываем ниже инфу о доставке
  $('.order-delivery .order-item .check__input:radio').on('change', function() {
    $(this).closest('.order-item').attr('data-price') == '0'
      ? $('.order-delivery__customer-data').hide(100)
      : $('.order-delivery__customer-data').show(100);
    console.log('radio changed 2')
  });

  //показ панели доставки + скрытие инпутов желаемого времени (и наоборот)
  $('.order-gift__toggle .check__input:checkbox').on('change', function() {
    if($('.order-gift__toggle').attr('data-active') == 'true') {
      $('.order-delivery').show(100);
      $('.not-gift').hide(100);
      $('.order-gift__toggle .order-item__active-hidden').val('true');
    } else {
      $('.order-delivery').hide(100);
      $('.not-gift').show();
      $('.order-gift__toggle .order-item__active-hidden').val('false');
    }
    calcTotal();
  });

  $('.order-delivery__nav').on('click', 'a:not(.order-delivery__link--active)', function(event) {
    event.preventDefault();
    $(this)
      .addClass('order-delivery__link--active')
      .siblings().removeClass('order-delivery__link--active')
      .closest('.order-delivery')
      .find('.order-delivery__panel')
      .removeClass('order-delivery__panel--active')
      .eq($(this).index())
      .addClass('order-delivery__panel--active');
  });

  $('[data-warning]').fancybox({
    baseTpl:
      '<div class="fbt fancybox-container warning-order" role="dialog" tabindex="-1">' +
      '<div class="fancybox-bg warning-order__bg"></div>' +
      '<div class="fancybox-inner">' +
      '<div class="fancybox-stage"></div>' +
      '</div>' +
      '</div>'
  });

  //временная заглушка для кнопок попапа
  $('.warning-order__actions > button').on('click', function () {
    $.fancybox.close();
  });

  formInit();

  checkoutInit();


})(jQuery);
