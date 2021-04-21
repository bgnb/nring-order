$(function () {
  $('#mse2_mfilter')
    .on('click', '.btn_more', function () {
      let href = $(this)
        .attr('data-href');
      href += '&ajax=Y';
      $.ajax({
        url: href,
        success(data) {
          let content = $(data)
            .find('#mse2_results')
            .html();
          let nav_obj = $(data)
            .find('.btn_more');
          if ($(nav_obj).length) {
            let nav = $(nav_obj)
              .attr('data-href');
            $('.btn_more')
              .attr('data-href', nav);
          } else {
            $('.btn_more')
              .remove();
          }
          $('#mse2_results')
            .append(content);
        }
      });
    });

  $('.i-filter-item').on('click', function () {
    $(this).toggleClass('i-filter-item_active');
      let tag_arr = [];
      $('.i-filter-item_active')
        .each(function (i, obj) {
          tag_arr[i] = $(obj)
            .attr('data-parent');
        });

      let arr = JSON.stringify(tag_arr);
      $.ajax({
        type: 'POST',
        url: '/media/',
        data: { arr: arr },
      })
        .done((data) => {
          let content = $(data)
            .find('#mse2_results')
            .html();
          let nav_obj = $(data)
            .find('.btn_more');
          if ($(nav_obj).length) {
            let nav = $(nav_obj)
              .attr('data-href');
            $('.btn_more')
              .attr('data-href', nav);
          } else {
            $('.btn_more')
              .remove();
          }
          $('#mse2_results')
            .html(content);
        });
    });

  if (typeof tags !== 'undefined') {
    for (var i in tags) {
      $('.i-filter-item')
        .each((n, obj) => {
          if ($(obj)
            .attr('data-parent') == tags[i]) {
            $(obj)
              .click();
          }
        });
    }
  }

  const path = document.location.pathname;
  const hash = document.location.hash;
  if (path == '/media/' && typeof hash !== 'undefined') {
    console.log(hash);

  }
});
