$(function() {
    $(".photos_modal a").click(function(){
        $("#photos").hide();
        $(".footer").hide();
    });
    $('#lightbox').on('hidden.bs.modal', function (e) {
      $("#photos").show();
      $(".footer").show();
    });
});
