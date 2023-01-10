$(function(){
  $('.testimonials-slider').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/sprite.svg#arrow" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"> <img src="images/sprite.svg#arrow" alt=""></button>',
  });
});

var mixer = mixitup('.popular__content');