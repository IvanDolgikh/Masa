
let list = document.querySelector('.news__list');
let elements = document.querySelectorAll('.news .swiper-slide');
let buttons = document.querySelectorAll('.news__item');


function changeActiveClass() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      buttons.forEach((link) => link.classList.remove('news__item--active'));
      this.classList.add('news__item--active');
    });
  }
}

changeActiveClass();


const resetFilter = () => {
  elements.forEach((item) => {
    item.style.display = 'block';
  });
};

const filterArray = (evt) => {
  const target = evt.target.dataset;
  evt.preventDefault();

  resetFilter();

  elements.forEach((item) => {
    if (evt.target.hasAttribute('data-general')) {
      resetFilter();
    } else if (target.volunteering !== item.dataset.volunteering) {
      item.style.display = 'none';
    } else if (target.internship !== item.dataset.internship) {
      item.style.display = 'none';
    } else if (target.career !== item.dataset.career) {
      item.style.display = 'none';
    } else if (target.journey !== item.dataset.journey) {
      item.style.display = 'none';
    }
  });

  changeActiveClass();
};

list.addEventListener('click', filterArray);
