import '../utils/focus-lock';
import '../utils/scroll-lock';

const burgerButton = document.querySelector('[data-burger-button]');
const nav = document.querySelector('[data-navigation]');
const navList = document.querySelector('[data-navigation-list]');
const wrapper = document.querySelector('[data-wrapper]');

const isEscapeKey = (evt) => evt.key === 'Escape';
const isActive = navList.classList.contains('navigation__list--is-active');

burgerButton.addEventListener('click', onBurgerButtonClick);

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMenu();
  }
};

const menuLinks = document.querySelectorAll('[data-menu-link]');

if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });
}

function onMenuLinkClick() {
  closeMenu();
}

function onBurgerButtonClick(evt) {
  evt.stopPropagation();

  burgerButton.classList.toggle('navigation__button--is-active');
  nav.classList.toggle('navigation--is-active');
  navList.classList.toggle('navigation__list--is-active');
  wrapper.classList.toggle('menu');

  document.addEventListener('click', documentClick);
  document.addEventListener('keydown', onDocumentKeydown);

  if (nav.classList.contains('navigation--is-active')) {
    window.focusLock.lock('[data-navigation-wrapper]', false);
    window.scrollLock.disableScrolling();
  } else {
    window.focusLock.unlock();
    window.scrollLock.enableScrolling();
  }
}

function documentClick(evt) {
  if (!isActive && !navList.contains(evt.target) && !burgerButton.contains(evt.target)) {
    closeMenu();
  }
}


function closeMenu() {
  burgerButton.classList.remove('navigation__button--is-active');
  nav.classList.remove('navigation--is-active');
  navList.classList.remove('navigation__list--is-active');
  wrapper.classList.remove('menu');

  document.removeEventListener('click', documentClick);
  document.removeEventListener('keydown', onDocumentKeydown);

  window.focusLock.unlock();
  window.scrollLock.enableScrolling();
}
