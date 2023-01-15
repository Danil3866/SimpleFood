document.addEventListener('DOMContentLoaded', () => {

  const burger = document.querySelector('.header__burger');
  const burgerClose = document.querySelector('.menu-mobile__close');
  const mobileMenu = document.querySelector('.menu-mobile');
  const bodyLock = document.querySelector('body');

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('menu-mobile--active');
    if (mobileMenu.classList.contains('menu-mobile--active')) {
      bodyLock.classList.add('lock');
    }
    else {
      bodyLock.classList.remove('lock');
    }
  });

  burgerClose.addEventListener('click', () => {
    mobileMenu.classList.remove('menu-mobile--active');
    bodyLock.classList.remove('lock');
  })

  document.addEventListener('click', function (e) {
    if (e.target !== burger && e.target !== mobileMenu) {
      mobileMenu.classList.remove('menu-mobile--active');
      bodyLock.classList.remove('lock');
    }
  });

});

$(function () {
  $('.testimonials-slider').slick({
    dots: true,
    infinite: false,
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/sprite.svg#arrow" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"> <img src="images/sprite.svg#arrow" alt=""></button>',
  });
});

$(window).on('load resize', function () {
  if ($(window).width() < 768) {
    $('.places__list:not(.slick-initialized)').slick({
      arrows: false,
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1
    });
  } else {
    $(".places__list.slick-initialized").slick("unslick");
  }
});

var mixer = mixitup('.popular__content');

