$(function () {
  var goTopButton = $('#goTop');

  $(window).scroll(function () {
    $(this).scrollTop() > 200
      ? goTopButton.fadeIn()
      : goTopButton.fadeOut();
  });

  goTopButton.click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
  });
});