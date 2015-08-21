$(function(){

  var numOfSlides = $('.slide').size(),
      slideWidth = $('.slide').width(),
      slidePos = 0,
      speed = 600;

  $('.tray').width(numOfSlides * slideWidth);

  function animateTray() {
    var distance = slidePos * slideWidth;
    $('.tray').animate({right: distance}, speed);
  }

  $('.next').click(function(event){
    event.preventDefault();
    if (slidePos < numOfSlides - 1) {
      slidePos += 1;
    } else {
      slidePos = 0;
    }
    animateTray();
  });

  $('.prev').click(function(event){
    event.preventDefault();
    if (slidePos > 0) {
      slidePos -= 1;
    } else {
      slidePos = numOfSlides - 1;
    }
    animateTray();
  });
});