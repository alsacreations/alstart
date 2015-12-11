jQuery(document).ready(function($) {

  // Menu: fixed position when scrolling
  $(window).scroll(function() {

    if($(this).scrollTop()>165) {
      $('.sg-menu').addClass('is-fixed');
    } else {
      $('.sg-menu').removeClass('is-fixed');
    }

  });

});
