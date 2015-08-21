$(function(){

  var numOfSlides = $('.slide').size(),
      slideWidth = $('.slide').width(),
      slidePos = 0,
      speed = 600;

  $('.tray').width(numOfSlides * slideWidth);

  $('.next').click(function(event){
    event.preventDefault();
    if (slidePos < numOfSlides - 1) {
      slidePos += 1;
    } else {
      slidePos = 0;
    }
    var distance = slidePos * slideWidth;
    $('.tray').animate({right: distance}, speed);
  });

  $('.prev').click(function(event){
    event.preventDefault();
    if (slidePos > 0) {
      slidePos -= 1;
    } else {
      slidePos = numOfSlides - 1;
    }
    var distance = slidePos * slideWidth;
    $('.tray').animate({right: distance}, speed);
  });
});