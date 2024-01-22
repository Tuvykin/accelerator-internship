import Swiper from 'swiper';
import {Pagination, Navigation} from 'swiper/modules';

export const initHeroSlider = () => {
  const swiperWrapper = new Swiper('[data-hero-swiper]', {
    observer: true,
    loop: true,
    autoHeight: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    grabCursor: true,
    modules: [Pagination],
    pagination: {
      el: '.swiper-slide-active [data-swiper-hero-pagination]',
      clickable: true,
      type: 'bullets',
    },
    on: {
      slideChangeTransitionStart: function () {
        swiperWrapper.pagination.init();
        swiperWrapper.pagination.render();
        swiperWrapper.pagination.update();
      }
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        allowTouchMove: true,
      },
      // when window width is >= 768px
      768: {

        allowTouchMove: true,
      },
      // when window width is >= 1440px
      1440: {
        allowTouchMove: false,
      },
    },
  });
};

export const initProgramsSlider = () => {
  const swiperWrapper = document.querySelector('[data-programs-swiper]');
  const buttonNext = document.querySelector('[data-programs-swiper-btn-next]');
  const buttonPrev = document.querySelector('[data-programs-swiper-btn-prev]');

  return new Swiper(swiperWrapper, {
    modules: [Navigation, Pagination],
    loop: false,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        initialSlide: 0,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        initialSlide: 0.5,
      },
      // when window width is >= 1440px
      1440: {
        slidesPerView: 3,
        spaceBetween: 32,
        initialSlide: 3,
      },
    },
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    pagination: {
      el: '[data-swiper-programs-pagination]',
      clickable: true,
    },
  });
};
