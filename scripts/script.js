// const humberger = document.querySelector('.humberger');
// const navMenu = document.querySelector('.nav-menu');

// humberger.addEventListener('click', () => {
//   humberger.classList.toggle('active');
//   navMenu.classList.toggle('active');
// });
// document.querySelectorAll('.nav-link').forEach(n =>
//   n.addEventListener('click', () => {
//     humberger.classList.remove('active');
//     navMenu.classList.remove('active');
//   })
// );
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  autoplay:{
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints:{
    0:{
      slidesPerView: 1,
    },
    768:{
      slidesPerView: 2,
    },
    1100:{
      slidesPerView: 3,
    }
  }
});