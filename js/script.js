//this is where we apply opacity to the arrow
$(window).scroll( function(){

  //get scroll position
  var topWindow = $(window).scrollTop();
  //multipl by 1.5 so the arrow will become transparent half-way up the page
  var topWindow = topWindow * 1.5;

  //get height of window
  var windowHeight = $(window).height();

  //set position as percentage of how far the user has scrolled
  var position = topWindow / windowHeight;
  //invert the percentage
  position = 1 - position;

  //define arrow opacity as based on how far up the page the user has scrolled
  //no scrolling = 1, half-way up the page = 0
  $('.arrow-wrap').css('opacity', position);

});




//Code stolen from css-tricks for smooth scrolling:
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        $('.nav').show();
        return false;
      }
    }
  });
  var showMenu = $("#content").offset().top;
    $(window).scroll(function() {
        if($(window).scrollTop() > showMenu) {
            $(".nav").show(200);
          }});
  $('.menu a').click(function(){
    $('.nav').show();
  });
  $('.col-md-3 a').click(function () {
           var getPage = $(this).attr("id");
           $("." + getPage ).show();
           $('.col-md-3').hide();
           $('#hide').hide();
           $('.nav').show();
           $("#content").css("background-color","rgba(0, 0, 0, 0.5)");
   });
    $(".col-md-4 a").click(function(){
        //First hide all the DIVs
        $("#sub-menu div").hide();
        //Then show the selected one.
        var getPage = $(this).attr("id");
        $("." + getPage ).show();
    });
    $(".about_landing a").click(function(){
        //First hide all the DIVs
        //$(".about_landing").hide();
        //Then show the selected one.
        var getPage = $(this).attr("id");
        $(".karen,.nadia,.brenda").hide();
        $('.about_type').css("border","4px solid #9CC4F5");
        $('#about-h1,.about_landing h5').slideUp("normal", function() { $(this).remove(); } );
        $("." + getPage).show();
        $(".about").show();
        $('.content').css("background-color","rgba(0, 0, 0, .5)");
        $('.' + getPage + "-img").css("border","6px solid #FFFAC8");

    });
});
