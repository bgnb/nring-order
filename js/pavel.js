$(document).ready(function () {

    $(".form_ajax_go").submit(function() {
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: th.serialize()
        }).done(function() {
            th.trigger("reset");
            $.fancybox.close();
            $.fancybox.open({src: '#h-popup-msg'});
        });
        return false;
    });

    //fix masonry
    function masonryReload () {
        //    masonry media
        setTimeout(function () {
            var $masonryContainer = $(document).find('.media__block_masonry');

            var $masonryGutter = $(document).find('.media__gutter');
            if(!$masonryGutter.length) {
                $masonryContainer.prepend('<div class="media__gutter"></div>');
            }
            console.log($masonryContainer.length);
            if ($masonryContainer.length) {
                $masonryContainer.masonry({
                    itemSelector: '.media__item',
                    gutter: '.media__gutter',
                    horizontalOrder: true
                }).masonry( 'reloadItems' ).masonry( 'layout' );
            }
        }, 0)
    }

    $(document).on('mse2_load', function(e, data) {
        //masonryReload ();
/*        $('.media__item').matchHeight(
            {
                byRow: true,
                property: 'height',
                target: null,
                remove: false
            });*/
        console.log('load');
    });

    //filter-media

    //zrx need to fill the array of ids that already set
    var parents = [];

    var media_url_string = window.location.href; //window.location.href
    var media_url = new URL(media_url_string);
    // console.log(media_url);
    var media_c = media_url.searchParams.get("resource|parent");
    // console.log('c'+ media_c);
    if (media_c) {
      //$('.i-filter-item').addClass('i-filter-item_active');
      media_arr = media_c.split(',');
      media_arr.forEach(function(item,i) {
          parents.push(item);
          $('.i-filter-item[data-parent="'+item+'"]').addClass('i-filter-item_active');
      });
    }



    $('.i-filter-item').click(function () {
      console.log(parents);
        var $container = $('#pdopage .rows');
        //var btn_load = $container.find('.media__load')[0].outerHTML;

       var parent = $(this).data('parent');
       // console.log(typeof(parent));
       console.log('parent'+parent);
       str_parent = parent.toString()
       var idx = parents.indexOf(str_parent);
       console.log('idx' + idx);
       // if ($(this).hasClass('i-filter-item_active')) {
          if (idx == -1) {
              parents.push(str_parent);
              console.log('parents after push' + parents);
              // $(this).toggleClass('i-filter-item_active');
          } else {
              parents.splice(idx, 1);
              console.log('parents after splice' + parents);

          }

       // } else {
/*           if (idx != -1) {
               parents.splice(idx, 1);
           }*/
       // }

       var str_parents = parents.join(',');
       if (str_parents) {
           $('#filter_parents').val(str_parents).change();
       }  else {
           $('#filter_parents').val('').change();
       }
       //$('#filter_parents').val(str_parents).change();
       // $.ajax({
       //     type: 'POST',
       //     url: window.location.href,
       //     data: {
       //       parents: str_parents,
       //         action: 'setConfig',
       //     },
       //     dataType: 'html',
       //     success: function (resp) {
       //         var $resp_container = $(resp).find('#pdopage .rows').html();
       //         console.log($resp_container);
       //         $container.html($resp_container);
       //         //$container.append(pdoPage.configs.page.moreTpl);
       //         masonryReload ();
       //     }
       // })
    });
    if ($('.big-info__nav-element').length) {
        $($('.big-info__nav-element')[0]).click();
    } else {
        $('.section__big-info').hide();
    }

    $('.hard__skew-info-btns .btn a').click(function () {
       var id = $(this).data('id');
       console.log(id);
       var form = $('#h-popup-competition');
       form.find('[name=res_id]').val(id);
    });
    // $('#subs_submit').click(function() {
    //   $('.footer__subscribe form').submit();
    //   return false;
    // });
    $('.footer__subscribe form').submit(function() {
        var th = $(this);
        var data = th.serialize();
        $.ajax({
            type: "POST",
			url: window.location.href,
			data: data,
			success: function() {
			    myMessage.info('Внимание!', 'На вашу почту отправлено письмо для подтверждения');
			}
        });
        return false;
    });

    var search = window.location.search.substr(1),
	keys = {};

    search.split('&').forEach(function(item) {
    	item = item.split('=');
    	keys[item[0]] = item[1];
    });
    console.log(keys);
    if (keys.sx_confirmed) {
        myMessage.success('Отлично', 'Вы успешно подтвердили свою почту! Спасибо!');
    }


});
