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

const rangeSlider = document.getElementById('range-slider');

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [100, 1000],
    connect: true,
    step: 1,
    range: {
      'min': 50,
      'max': 1100
    }
  });

  const input0 = document.getElementById('input-0')
  const input1 = document.getElementById('input-1')
  const inputs = [input0, input1];

  rangeSlider.noUiSlider.on('update', function(values, hadle){
    inputs[hadle].value = Math.round(values[hadle]);
  })

  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    console.log(arr);

    rangeSlider.noUiSlider.set(arr);
  };

  inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      console.log(index);
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}

$(function () {
  $('.select-style').styler();

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

