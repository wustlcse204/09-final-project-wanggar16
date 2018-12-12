$(document).ready(function(){
  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
     // $('.counter').html(scrollTop);

    if (scrollTop >= 30) {
      $('#navNameBar').addClass('scrolled-nameBar');
    } else if (scrollTop < 30) {
      $('#navNameBar').removeClass('scrolled-nameBar');
    }

  });

});
