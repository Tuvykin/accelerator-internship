import {iosVhFix} from './utils/ios-vh-fix';
import './utils/scroll-lock';
import {initHeroSlider, initProgramsSlider} from './modules/init-swiper';
import './vendor/accordion';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  initHeroSlider();
  initProgramsSlider();

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  // window.addEventListener('load', () => {
  //   const form = new Form();
  //   window.form = form;
  //   form.init();
  // });
});
