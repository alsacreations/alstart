jQuery(document).ready(function($) {

  var $window = $(window);
  var $styleguideMenu = $('.sg-menu');
  var to = false;

  // Menu: fixed position when scrolling
  if($styleguideMenu.length>0) $window.on('scroll',function() {

    clearTimeout(to);
    to = setTimeout(function() {
      if($window.scrollTop()>165) {
        $styleguideMenu.addClass('is-fixed');
      } else {
        $styleguideMenu.removeClass('is-fixed');
      }
    },30);

  });

});
