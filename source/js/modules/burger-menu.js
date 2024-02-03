const burgerButton = document.querySelector('[data-burger-button]');
const nav = document.querySelector('[data-navigation]');
const navList = document.querySelector('[data-navigation-list]');

const isEscapeKey = (evt) => evt.key === 'Escape';

burgerButton.addEventListener('click', onBurgerButtonClick);

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMenu();
  }
};

function onBurgerButtonClick() {
  burgerButton.classList.toggle('navigation__button--is-active');
  nav.classList.toggle('navigation--is-active');
  navList.classList.toggle('navigation__list--is-active');
  document.body.classList.toggle('menu');

  document.addEventListener('click', documentClick);
  document.addEventListener('keydown', onDocumentKeydown);
}

function documentClick(evt) {
  const isOpen = navList.classList.contains('navigation__list--is-active');

  if (isOpen && !navList.contains(evt.target) && !burgerButton.contains(evt.target)) {
    closeMenu();
  }
}

function closeMenu() {
  nav.classList.remove('navigation--is-active');
  navList.classList.remove('navigation__list--is-active');
  document.body.classList.remove('menu');

  document.removeEventListener('click', documentClick);
  document.removeEventListener('keydown', onDocumentKeydown);
}
