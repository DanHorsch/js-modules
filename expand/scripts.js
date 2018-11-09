
var previousId = "";

$('.expand-cell-container').on("click", function() {
  var id = '#' + $(this).attr("id") + '-text';
  if($(window).width() < 992) {
    if(previousId != "") {
      $(previousId).css("display", "none");
    }
    $(id).css("display", "block");
    previousId = id;
  } else {
    if($(id + ' .expand-text').outerHeight() > $('.expanding-row').outerHeight()) {
      console.log($('.expanding-row').outerHeight());
      console.log($(id + ' .expand-text').outerHeight());
      $(id + ' .expand-text').css("top", "0");
      $(id + ' .expand-text').css("left", "auto");
      $(id + ' .expand-text').css("transform", "none");
    }
    $(id).css("bottom", "0");
    $(id).append("<div class=\"close-button\"></div>");
    $('.close-button').on("click", function() {
      console.log("clicked");
      $(id).css("bottom", "100%");
    });
  }
});
