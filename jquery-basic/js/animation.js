$(function() {
  $('#slideUp').on('click', function(){
    $('.box').css('height', 0);
  });

  $('#slideDown').on('click', function(){
    $('.box').css('height', 200);
  });

  $('#fadeOut').on('click', function(){
    $('.box').css('opacity', 0);
  });
  $('#fadeIn').on('click', function(){
    $('.box').css('opacity', 1);
  });
});