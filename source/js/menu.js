import {swiperHero} from './sliders';

const buttonIcon = document.querySelector('.main-header__button-icons-container');
const openIcon = document.querySelector('.main-header__button-open-menu-icon');
const closeIcon = document.querySelector('.main-header__button-close-menu-icon');
const navContainer = document.querySelector('.main-header__nav-list-container');
const button = document.querySelector('.main-header__nav-button');
const body = document.querySelector('body');

const changeClasses = () => {
  navContainer.classList.toggle('main-header__nav-list-container--active');
  button.classList.toggle('main-header__nav--active');
  buttonIcon.classList.toggle('main-header__button-icons-container--active');
  openIcon.classList.toggle('main-header__button-open-menu-icon--active');
  closeIcon.classList.toggle('main-header__button-close-menu-icon--active');
  body.classList.toggle('nav--active');
};

const runSlider = () => {
  if (button.classList.contains('main-header__nav--active')) {
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
