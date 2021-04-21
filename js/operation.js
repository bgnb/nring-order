function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function disableBodyScroll() {
  $('body').addClass('modal-active');
}

function enableBodyScroll() {
  $('body').removeClass('modal-active');
}
/*function setCarItem(dataVal){
  $("input[name='rec_Car']").val(dataVal).parent().hide();
}*/
$(function(){
  $('.burger__block-burger').click(function (e) {
    //console.log("burger full");
    $('body').toggleClass('burger-active');
    $('.header__burger').toggleClass('header__burger_open');
    if ($('.burger__block').hasClass('burger__block_active')) {
      $('.burger__block').removeClass('burger__block_active');
      enableBodyScroll();
    } else {
      $('.burger__block').addClass('burger__block_active');
      disableBodyScroll();
    }

  });
  $('.header__burger').click(function (e) {
    //console.log("burger operation");
    if (($(window).width() < 768) && !$(this).hasClass('header__burger_open')) {
      $('html, body').animate({scrollTop: 0}, 300);
    }
    $('body').toggleClass('burger-active');

    $('.header__burger').toggleClass('header__burger_open');
    if ($('.burger__block').hasClass('burger__block_active')) {
      $('.burger__block').removeClass('burger__block_active');
      enableBodyScroll();
      e.stopPropagation();
    } else {
      $('.burger__block').addClass('burger__block_active');
      disableBodyScroll();
    }

  });
  $('.btn-share').click(function () {
    $(this).toggleClass('btn-share_active');
  });
  /*$('.services__main-select').each(function (index) {
    if (index == 0) {

      var mainItem = $(this).find('li.services__main-select-body_current').html();
      $(this).find('.services__main-select-title ').html('' + mainItem);
      var nInfo = $(this).find('li.services__main-select-body_current').attr('data-ninfo');
      var dInfo = $(this).find('li.services__main-select-body_current').attr('data-price');
      $('.services__main-select_j-info .services__main-select-title span').text(dInfo);

      if (typeof nInfo !== typeof undefined && nInfo !== false) {
        $('#h-popup-track .h-popup__info-item-ninfo h4').text('' + nInfo);
        $('.h-popup__info-n').val('' + nInfo);
        setCarItem(nInfo);
        //!!! console.log(nInfo);
      }

      if (typeof dInfo !== typeof undefined && nInfo !== false) {
        $('#h-popup-track .h-popup__info-item-dinfo h4').text('' + dInfo);
        $('.h-popup__info-d').val('' + dInfo);
      }
    }
  });
  $('.services__main-select-body li').click(function () {
    $(this).addClass('services__main-select-body_current')
      .siblings().removeClass('services__main-select-body_current');

    var nInfo = $(this).attr('data-ninfo');
    var dInfo = $(this).attr('data-price');

    if (typeof nInfo !== typeof undefined && nInfo !== false) {
      $('#h-popup-track .h-popup__info-item-ninfo h4').text('' + nInfo);
      $('.h-popup__info-n').val('' + nInfo);
      setCarItem(nInfo);
      //console.log(nInfo);
    }

    if (typeof dInfo !== typeof undefined && nInfo !== false) {
      $('#h-popup-track .h-popup__info-item-dinfo h4').text('' + dInfo);
      $('.h-popup__info-d').val('' + dInfo);
    }

    // var mainItem = $(this).find('span').text();
    var mainItem = $(this).html();
    $(this).closest('.services__main-select-body')
      .prev('.services__main-select-header')
      .find('.services__main-select-title')
      .html('' + mainItem);

    $('.services__main-select_j-info .services__main-select-title span').text(dInfo);
  });*/

  $("input[name='sx_action']").closest("form").on("submit", function(){
    let obj = $(this);
    let email = $(this).find("input[name='email']").val();
    if(email && validateEmail(email)){
      $.ajax({
        type: "POST",
        url: "/local/ajax/subscribe.php",
        data: { email:email }
      }).done(function( msg ) {
        $(obj).find(".footer__subscribe-error").html(msg).addClass("footer__subscribe-error_active").css({
          'background':'#fff',
          'font-size':'12px',
          'color':'#000'
        });
      });
    }
    return false;
  });

  $("form.form_ajax_go").on("submit", function(){
    let th = $(this);
    let path = $('body').attr('data-path');
    /* let item_str = $(".h-popup__info-item.h-popup__info-item-ninfo h4").text();
    $("input[name='rec_Car']").val(item_str).parent().hide(); */
    $.ajax({
      type: 'POST',
      url: `/local/ajax/send_order.php?path=${path}`,
      data: th.serialize(),
    }).done((msg) => {
      $("input[name='rec_Car']").parent().show();
      // console.log(msg);
      th.trigger('reset');
      $.fancybox.close();
      $.fancybox.open({ src: '#h-popup-msg' });
    });
    return false;
  });

  if ($('#elementid').length) {
    let elementid = $('#elementid')
      .attr('data-elementid');
    $('input[name=res_id]').val(elementid);
  }

  $('a[data-src="#cams"]').on('click', function(){
    $('#cams').find('iframe').each(function(i, obj){
      $(obj).attr('src', $(obj).attr('data-src'));
    });
  });

  if($('.blackyblack').length){
    let widthVal = $(document).width();
    $('.blackyblack, footer').css('width', widthVal);
  }

  /*
  if($('.article__text-mutation').find('table').length){
    console.log('table mod');
    let $table = $('.article__text-mutation').find('table');
    $table.wrap('<div class="article__table"><div class="article__table_wrap">');
    $table.removeAttr('border');
    if(!$table.find('thead').length && $table.find('tbody').length){
      $table.find('tbody').before('<thead></thead>');
      $table.find('thead').append($table.find('tbody tr:first'));
      $table.find('thead tr td').each(function(i, obj){
        $(obj).replaceWith("<th>" + $(this).text() + "</th>");
      });
      $table.find('tbody tr').each(function (i, obj){
        $(obj).find('td:first').addClass('event__schedule-time');
      });
    }
  }
  */
  $('.article__lead, .article__text').find('img').removeAttr('height').attr('width', '100%');
  $('.article .article__content .article__main').find('iframe').attr({
    width: '100%',
    height: '500',
  });

});
