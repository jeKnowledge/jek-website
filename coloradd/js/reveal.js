jQuery("#home").ready(function($) {
  var circle = $("#circle")
  $("#home").mousemove(function(e) {
    if (document.elementFromPoint(e.pageX, e.pageY)) {
      circle.addClass("circle")
    } else {
      circle.removeClass("circle")
    }
    circle.css({
      top: e.pageY - circle.height() /2,
      left: e.pageX - circle.width() /2
    })
  });
});
