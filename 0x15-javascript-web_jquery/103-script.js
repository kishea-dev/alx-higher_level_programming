$(document).ready(function () {
  const url = 'https://www.fourtonfish.com/hellosalut/?';
  $('INPUT#btn_translate').click(function () {
    $.get(url + $.param({ lang: $('INPUT#language_code').val() }), function (data) {
      $('DIV#hello').text(data.hello);
    });
  });
  $('INPUT#language_code').focus(function () {
    $(this).keydown(function (e) {
      if (e.keyCode === 13) {
        $.get(url + $.param({ lang: $('INPUT#language_code').val() }), function (data) {
          $('DIV#hello').text(data.hello);
        });
      }
    });
  });
});