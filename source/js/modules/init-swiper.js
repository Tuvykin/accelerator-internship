import Swiper from 'swiper';
import {Pagination, Navigation, Autoplay, Scrollbar, Grid} from 'swiper/modules';

export const initHeroSlider = () => {
  const swiperWrapper = new Swiper('[data-hero-swiper]', {
    observer: true,
    loop: true,
    autoHeight: true,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    grabCursor: true,
    modules: [Pagination, Autoplay],
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
      320: {
        allowTouchMove: true,
      },
      768: {
        allowTouchMove: true,
      },
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
    modules: [Navigation, Scrollbar],
    scrollbar: {
      el: '[data-swiper-programs-scrollbar]',
      draggable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        initialSlide: 0,
        allowTouchMove: true,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        allowTouchMove: true,
        scrollbar: {
          dragSize: 324,
        },
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 32,
        allowTouchMove: false,
        scrollbar: {
          dragSize: 392,
        },
      },
    },
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
  });
};

export const initNewsSlider = () => {
  const swiperWrapper = document.querySelector('[data-news-swiper]');
  const buttonNext = document.querySelector('[data-news-swiper-btn-next]');
  const buttonPrev = document.querySelector('[data-news-swiper-btn-prev]');

  return new Swiper(swiperWrapper, {
    modules: [Navigation, Pagination, Grid],
    loop: false,
    breakpoints: {
      320: {
        slidesPerView: 1,
        grid: {
          rows: 2,
        },
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        grid: {
          rows: 2,
        }
      },
      1440: {
        slidesPerView: 'auto',
        spaceBetween: 32,
      },
    },
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    pagination: {
      el: '[data-swiper-news-pagination]',
      clickable: true,
      renderBullet: function (i, className) {
        return `<span class="${ className }">${ i + 1 }</span>`;
      },
    },
  });
};

export const initReviewsSlider = () => {
  const swiperWrapper = document.querySelector('[data-reviews-swiper]');
  const buttonNext = document.querySelector('[data-reviews-swiper-btn-next]');
  const buttonPrev = document.querySelector('[data-reviews-swiper-btn-prev]');

  return new Swiper(swiperWrapper, {
    modules: [Navigation, Scrollbar],
    loop: false,
    scrollbar: {
      el: '[data-swiper-reviews-scrollbar]',
      draggable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        initialSlide: 0,
      },
      768: {
        slidesPerView: 1.5,
        spaceBetween: 30,
        initialSlide: 0,
        scrollbar: {
          dragSize: 324,
        },
      },
      1440: {
        slidesPerView: 2,
        spaceBetween: 32,
        initialSlide: 0,
        scrollbar: {
          dragSize: 392,
        },
      },
    },
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
  });
};
