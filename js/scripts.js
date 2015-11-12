$(function(){
  $(".contact").click(function() {
      $('html,body').animate({
          scrollTop: $("#contact").offset().top+320},
          'slow');
  });
});
