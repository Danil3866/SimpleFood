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

document.addEventListener('DOMContentLoaded', () => {

  const catalogBtn = document.querySelector('.catalog__btn');
  const catalogClose = document.querySelector('.filter-mobile__close');
  const filterMobile = document.querySelector('.filter-mobile');
  const bodyLockCatalog = document.querySelector('body');

  catalogBtn.addEventListener('click', () => {
    filterMobile.classList.toggle('filter-mobile--active');
    if (filterMobile.classList.contains('filter-mobile--active')) {
      bodyLockCatalog.classList.add('lock-catalog');
    }
    else {
      bodyLockCatalog.classList.remove('lock-catalog');
    }
  });

  catalogClose.addEventListener('click', () => {
    filterMobile.classList.remove('filter-mobile--active');
    bodyLockCatalog.classList.remove('lock-catalog');
  })

  document.addEventListener('click', function (e) {
    if (e.target !== catalogBtn && e.target !== filterMobile) {
      filterMobile.classList.remove('filter-mobile--active');
      bodyLockCatalog.classList.remove('lock-catalog');
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

  rangeSlider.noUiSlider.on('update', function (values, hadle) {
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
  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  })

  $('.select-style, .product__num').styler();

  $(".star").rateYo({
    starWidth: "16px",
    normalFill: "#C1C1C1",
    ratedFill: "#FFB800",
    readOnly: true
  });

  $(".product-form__star").rateYo({
    starWidth: "16px",
    normalFill: "#C1C1C1",
    ratedFill: "#FFB800",
    fullStar: true
  });

  $('.testimonials-slider').slick({
    dots: true,
    infinite: false,
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/sprite.svg#arrow" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"> <img src="images/sprite.svg#arrow" alt=""></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false
        }
      }
    ]
  });

  $('.recent__carousel').slick({
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/sprite.svg#arrow" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"> <img src="images/sprite.svg#arrow" alt=""></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false,
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          prevArrow: false,
          nextArrow: false,
          dots: true
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          prevArrow: false,
          nextArrow: false,
          dots: true
        }
      }
    ]
  });

  var mixer = mixitup('.popular__content');
});

$(window).on('load resize', function () {
  if ($(window).width() < 768) {
    $('.sale__list:not(.slick-initialized)').slick({
      arrows: false,
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1
    });
  } else {
    $(".sale__list.slick-initialized").slick("unslick");
  }
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

const myCarousel = new Carousel(document.querySelector("#myCarousel"), {
  preload: 2,
});

Fancybox.bind('[data-fancybox="gallery"]', {
  Thumbs: false,
  Toolbar: false,

  closeButton: "top",

  Carousel: {
    Dots: true,
    on: {
      change: (that) => {
        myCarousel.slideTo(myCarousel.findPageForSlide(that.page), {
          friction: 0,
        });
      },
    },
  },
});