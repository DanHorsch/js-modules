// all of the columns must be same height and width
// slide-first is hidden and to the left by default
// slide-last is hidden and to the righ by default
// on click the elements slide over and the slide-last now get the class slide-first


// config variables
var columnWidth = 33;
var transitionSpeed = 2;

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

$('#slide-left').on("click", function() {
  $('.slide-first').show();
  $('.slide-column').each(function(index, element) {
    var leftPosition =  $('#slide-' + (index + 1)).css("left");
    leftPosition = "calc(" + leftPosition + " + " + columnWidth + "%";
    $('#slide-' + (index + 1)).css("left", leftPosition);
  });
  setupClasses();
});

$('#slide-right').on("click", function() {
  $('.slide-first').show();
  $('.slide-column').each(function(index, element) {
    var leftPosition =  $('#slide-' + (index + 1)).css("left");
    leftPosition = "calc(" + leftPosition + " + " + columnWidth + "%";
    $('#slide-' + (index + 1)).css("left", leftPosition);
  });
  setupClasses();
});

function setupClasses() {
  setTimeout(function() {
    // hide and move the last element to the first
    $('.slide-last').hide();
    var newSlideNumber = $('.slide-last').attr("id");
    newSlideNumber = newSlideNumber.replace("slide-", "");
    newSlideNumber -= 1;
    if(newSlideNumber < 1) {
      newSlideNumber = 5;
    }
    console.log(newSlideNumber);
    $('.slide-last').css("left", (-(columnWidth)) + "%");
    $('.slide-last').addClass('slide-first');
    $('.slide-first').removeClass('slide-last');
    $('#slide-' + newSlideNumber).addClass('slide-last');
  }, transitionSpeed * 1000);
}
