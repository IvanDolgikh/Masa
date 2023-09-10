import {swiperHero} from './sliders';

const button = document.querySelector('.main-header__button-open-menu');
const openIcon = document.querySelector('.main-header__button-open-menu-icon');
const closeIcon = document.querySelector('.main-header__button-close-menu-icon');
const navContainer = document.querySelector('.main-header__nav-list-container');
const nav = document.querySelector('.main-header__nav');
const body = document.querySelector('body');

const changeClasses = () => {
  navContainer.classList.toggle('main-header__nav-list-container--active');
  nav.classList.toggle('main-header__nav--active');
  button.classList.toggle('main-header__button-open-menu--active');
  openIcon.classList.toggle('main-header__button-open-menu-icon--active');
  closeIcon.classList.toggle('main-header__button-close-menu-icon--active');
  body.classList.toggle('nav--active');
};

const runSlider = () => {
  if (nav.classList.contains('main-header__nav--active')) {
    swiperHero.autoplay.stop();
  } else {
    swiperHero.autoplay.start();
  }
};

const onOpenMenu = () => {
  changeClasses();
  runSlider();
};

const onClickOutside = (evt) => {
  if (evt.target.className === 'nav--active') {
    changeClasses();
    runSlider();
  }
};


button.addEventListener('click', onOpenMenu);
body.addEventListener('click', onClickOutside);
