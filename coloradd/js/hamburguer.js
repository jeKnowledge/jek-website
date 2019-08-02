$(document).ready(function() {

  $(".menu").hide();
  $(".hamburger").click(function() {
    $(".menu").slideToggle("slow", function() {
      $(".hamburger").hide();
    });
  });

  $(".menu-select").click(function() {
    $(".menu").slideToggle("slow", function() {
      $(".hamburger").show();
    });
  });

});
