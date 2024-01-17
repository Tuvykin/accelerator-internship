import Swiper from 'swiper';
import {Pagination, Navigation} from 'swiper/modules';

export const initHeroSlider = () => {
  const menu = ['', '', ''];
  const swiperWrapper = document.querySelector('[data-hero-swiper]');

  return new Swiper(swiperWrapper, {
    modules: [Pagination],
    loop: true,
    grabCursor: true,
    pagination: {
      el: '[data-swiper-hero-pagination]',
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${ className }">${ menu[index] }</span>`;
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
      // when window width is >= 1200px
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
