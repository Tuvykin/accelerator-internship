export const initHeroSlider = () => {
  const swiperWrapper = document.querySelector('[data-hero-swiper]');

  return new window.Swiper(swiperWrapper, {
    loop: true,
    grabCursor: true,
    // pagination: {
    //   el: '[data-swiper-hero-pagination]',
    //   clickable: true,
    // },
  });
};
