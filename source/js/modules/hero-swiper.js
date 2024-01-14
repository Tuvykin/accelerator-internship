import Swiper from 'swiper';
import {Pagination} from 'swiper/modules';

export const initHeroSlider = () => {
  const menu = ['', ''];
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
