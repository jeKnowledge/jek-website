$(document).ready(function() {
  $(".panel").css("display", "none")

  $(".accordion").click(function() {
    var $panel = $(this).next()
    $(".panel").slideUp()
    $(".accordion::after").css("content", "\2212")

    if ($panel.css("display") == "none") {
      $panel.slideDown()
    } else {
      $panel.slideUp()
      console.log(this.childNodes)
    }
  })
})
