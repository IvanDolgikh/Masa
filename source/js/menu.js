const button = document.querySelector('.main-header__button-open-menu');
const openIcon = document.querySelector('.main-header__button-open-menu-icon');
const closeIcon = document.querySelector('.main-header__button-close-menu-icon');
const navContainer = document.querySelector('.main-header__nav-list-container');
const nav = document.querySelector('.main-header__nav');
// const navList = document.querySelector('.main-header__nav-list');
const body = document.querySelector('body');

const changeClasses = () => {
  navContainer.classList.toggle('main-header__nav-list-container--active');
  nav.classList.toggle('main-header__nav--active');
  button.classList.toggle('main-header__button-open-menu--active');
  openIcon.classList.toggle('main-header__button-open-menu-icon--active');
  closeIcon.classList.toggle('main-header__button-close-menu-icon--active');
  body.classList.toggle('nav--active');
};

const onOpenMenu = () => {
  changeClasses();
};

// const onClickLink = (evt) => {
//   if (evt.target.closest('LI')) {
//     changeClasses();
//   }
// };

const onClickOutside = (evt) => {
  if (evt.target.className === 'nav--active') {
    changeClasses();
  }
};


button.addEventListener('click', onOpenMenu);

// navList.addEventListener('click', onClickLink);

body.addEventListener('click', onClickOutside);
