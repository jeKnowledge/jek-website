jQuery("#home").ready(function($) {

  $('#1').click(function() {
    $('#bckg1').removeClass();
    $('#bckg1').addClass("mask-bg-color1");
    $('#bckg1').addClass("full-size")
  });
  $('#2').click(function() {
    $('#bckg1').removeClass();
    $('#bckg1').addClass("mask-bg-color2");
    $('#bckg1').addClass("full-size")
  });
  $('#3').click(function() {
    $('#bckg1').removeClass();
    $('#bckg1').addClass("mask-bg-color3");
    $('#bckg1').addClass("full-size")
  });

});
