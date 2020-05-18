/* Custom script only used by internal styleguide */
jQuery(document).ready(function($) {

  $('.sg-menu .sg-toc').append('<ul></ul>');
  $('.sg-content h2').each(function() {
    $('.sg-menu .sg-toc>ul').append('<li><a href="#'+$(this).attr('id')+'">'+$(this).text()+'</a></li>');
  });

  var $window = $(window);
  var $styleguideMenu = $('.sg-menu');
  var to = false;

  // Menu: fixed position when scrolling
  if ($styleguideMenu.length > 0) {
    $window.on('scroll', function() {

      clearTimeout(to);
      to = setTimeout(function() {
        if ($window.scrollTop() > 165) {
          $styleguideMenu.addClass('is-fixed');
        } else {
          $styleguideMenu.removeClass('is-fixed');
        }
      }, 30);

    });
  }

});
