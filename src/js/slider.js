const productsSwiper = new Swiper(".products__swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 18,

  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 18,
    },
    768: {
      slidesPerView: 2.6,
      spaceBetween: 18,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const feedbackSwiper = new Swiper(".feedback__swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 16,

  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const buyNowModalSwiper = new Swiper(".buy-now-modal__swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 16,

  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
