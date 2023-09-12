let button = document.querySelectorAll('.accordion__button-container');
let accordion = document.querySelector('.accordion');

if (accordion) {

  // focus

  accordion.addEventListener('focusin', (evt) => {
    button.forEach((item) => {
      let element = item.closest('.accordion__element');
      if (evt.target === item && !item.closest('.accordion__element').classList.contains('is-active')) {
        element.classList.add('accordion__element--hover');
      } else if (evt.target === item && item.closest('.accordion__element').classList.contains('is-active')) {
        element.classList.add('accordion__element--hover-opened');
      }
    });
  });

  accordion.addEventListener('focusout', (evt) => {
    button.forEach((item) => {
      let element = item.closest('.accordion__element');
      if (evt.target === item) {
        element.classList.remove('accordion__element--hover');
        element.classList.remove('accordion__element--hover-opened');
      }
    });
  });

  // hover
  accordion.addEventListener('mouseover', (evt) => {
    button.forEach((item) => {
      let element = item.closest('.accordion__element');
      if (evt.target === item && !item.closest('.accordion__element').classList.contains('is-active')) {
        element.classList.add('accordion__element--hover');
      } else if (evt.target === item && item.closest('.accordion__element').classList.contains('is-active')) {
        element.classList.add('accordion__element--hover-opened');
      }
    });
  });

  accordion.addEventListener('mouseout', (evt) => {
    button.forEach((item) => {
      let element = item.closest('.accordion__element');
      if (evt.target === item) {
        element.classList.remove('accordion__element--hover');
        element.classList.remove('accordion__element--hover-opened');
      }
    });
  });

  // active

  accordion.addEventListener('mousedown', (evt) => {
    button.forEach((item) => {
      let element = item.closest('.accordion__element');
      if (evt.target === item && !item.closest('.accordion__element').classList.contains('is-active')) {
        element.classList.add('accordion__element--active');
      } else if (evt.target === item && item.closest('.accordion__element').classList.contains('is-active')) {
        element.classList.remove('accordion__element--hover-opened');
        element.classList.add('accordion__element--active-opened');
      }
    });
  });

  accordion.addEventListener('mouseup', (evt) => {
    button.forEach((item) => {
      let element = item.closest('.accordion__element');
      if (evt.target === item) {
        element.classList.remove('accordion__element--active');
        element.classList.remove('accordion__element--active-opened');
      }
    });
  });
}
