export const swiperHero = new Swiper('.swiper-1', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  allowTouchMove: false,

  autoplay: {
    delay: 3000,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    320: {
      allowTouchMove: true,
    },
    768: {
      allowTouchMove: true,
    },
    1200: {
      allowTouchMove: false,
    },
  },
});

export const swiperPrograms = new Swiper('.swiper-2', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 3,
  spaceBetween: 32,

  navigation: {
    nextEl: '.programs .swiper-buttons__next',
    prevEl: '.programs .swiper-buttons__back',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
      scrollbar: {
        el: '.programs__swiper-scrollbar',
        draggable: true,
        dragSize: 324,
      },
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 32,
      scrollbar: {
        el: '.programs__swiper-scrollbar',
        draggable: true,
        dragSize: 392,
      },
    },
  },
});

export const swiperFeedback = new Swiper('.swiper-4', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 2,
  spaceBetween: 32,

  navigation: {
    nextEl: '.feedback .swiper-buttons__next',
    prevEl: '.feedback .swiper-buttons__back',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
      scrollbar: {
        el: '.feedback__swiper-scrollbar',
        draggable: true,
        dragSize: 324,
      },
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 32,
      scrollbar: {
        el: '.feedback__swiper-scrollbar',
        draggable: true,
        dragSize: 392,
      },
    },
  },
});

export const swiperNews = new Swiper('.swiper-3', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 2,
  spaceBetween: 32,

  navigation: {
    nextEl: '.news .swiper-buttons__next',
    prevEl: '.news .swiper-buttons__back',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet(index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      grid: {
        rows: 2,
        fill: 'row',
      },
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: 'row',
      },
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 'auto',
      grid: {
        rows: 1,
        fill: 'row',
      },
      spaceBetween: 32,
    },
  },
});
