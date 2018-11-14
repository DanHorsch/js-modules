
// config variables
var columnWidth = 33;
var transitionSpeed = 1; // in seonds
var lastColumnNumber = 5;
var windowWidth = $(window).width();

console.log(windowWidth);
if(windowWidth < 992 && windowWidth >= 576) {
  columnWidth = 50;
} else if (windowWidth < 576) {
  columnWidth = 100;
}

var isTransitioning = false;

// align the columns so the first is behind the first show element on left
// and the rest are to the right
$(document).ready(function() {
  var leftPosition = (-(columnWidth));
  $('.slide-column').each(function(index, element) {
    $('#slide-' + (index + 1)).css("left", leftPosition + "%");
    leftPosition += columnWidth;
    $(element).css("background-color", "blue");
    $(element).css("transition", "all " + transitionSpeed + "s");
  })
});

// move elements to the left
$('#slide-left').on("click", function() {
  if(isTransitioning == false) {
    isTransitioning = true;
    var lastColumnLeft = $('.slide-last').css("left");
    $('.slide-last').show();
    $('.slide-last').removeClass('slide-last');
    $('.slide-column').each(function(index, element) {
      var leftPosition =  $('#slide-' + (index + 1)).css("left");
      leftPosition = "calc(" + leftPosition + " - " + columnWidth + "%";
      $('#slide-' + (index + 1)).css("left", leftPosition);
    });
    setupClasses("left", lastColumnLeft);
  }
});

// move elements to the right
$('#slide-right').on("click", function() {
  if(isTransitioning == false) {
    isTransitioning = true;
    $('.slide-first').show();
    $('.slide-first').removeClass('slide-first');
    $('.slide-column').each(function(index, element) {
      var leftPosition =  $('#slide-' + (index + 1)).css("left");
      leftPosition = "calc(" + leftPosition + " + " + columnWidth + "%";
      $('#slide-' + (index + 1)).css("left", leftPosition);
    });
    setupClasses("right");
  }
});


// give the appropriate slide-column's the slide-first and slide-last class
// the lastColumnLeft is only used for when clicking left
// because clicking right always sends the slide-last
// to a columns width left of the slider container
function setupClasses(direction, lastColumnLeft = 0) {

  if(direction == "left") {
    setTimeout(function() {
      // hide and move the first element to the last
      $('.slide-first').hide();

      var newSlideNumber = $('.slide-first').attr("id");
      newSlideNumber = Number(newSlideNumber.replace("slide-", ""));
      newSlideNumber += 1;
      if(newSlideNumber > lastColumnNumber) {
        newSlideNumber = 1;
      }

      $('.slide-first').css("left", lastColumnLeft);
      $('.slide-first').addClass('slide-last');
      $('.slide-last').removeClass('slide-first');
      $('#slide-' + newSlideNumber).addClass('slide-first');
      isTransitioning = false;
    }, transitionSpeed * 1000);
  }

  else {
    setTimeout(function() {
      // hide and move the last element to the first
      $('.slide-last').hide();

      var newSlideNumber = $('.slide-last').attr("id");
      newSlideNumber = Number(newSlideNumber.replace("slide-", ""));
      newSlideNumber -= 1;
      if(newSlideNumber < 1) {
        newSlideNumber = lastColumnNumber;
      }

      $('.slide-last').css("left", (-(columnWidth)) + "%");
      $('.slide-last').addClass('slide-first');
      $('.slide-first').removeClass('slide-last');
      $('#slide-' + newSlideNumber).addClass('slide-last');
      isTransitioning = false;
    }, transitionSpeed * 1000);
  }

}
