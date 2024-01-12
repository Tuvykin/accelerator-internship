// https://swiperjs.com/get-started#installation
// import Swiper from 'swiper';
// import {Navigation, Pagination} from 'swiper/modules';
// import 'swiper/css';

// import {iosVhFix} from './utils/ios-vh-fix';


import {initHeroSlider} from './modules/hero-swiper';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  // iosVhFix();

  // Modules
  // ---------------------------------
  initHeroSlider();

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  // window.addEventListener('load', () => {
  //   const form = new Form();
  //   window.form = form;
  //   form.init();
  // });
});
