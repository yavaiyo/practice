// const One = document.querySelector('.one');
// const Two = document.querySelector('.two');
// const Three = document.querySelector('.three');
// const Four = document.querySelector('.four');
// const Five = document.querySelector('.five');
// const Six = document.querySelector('.six');
// const Hone = document.querySelector('.hoverone');
// const Htwo = document.querySelector('.hovertwo');
// const Hthree = document.querySelector('.hoverthree');
// const Hfour = document.querySelector('.hoverfour');
// const Hfive = document.querySelector('.hoverfive');
// const Hsix = document.querySelector('.hoversix');

// Hone.addEventListener('mouseover', () => {
//     One.classList.toggle('active');
// })
// Htwo.addEventListener('mouseover', () => {
//     Two.classList.toggle('active');    
// })
// Hthree.addEventListener('mouseover', () => {
//     Three.classList.toggle('active');    
// })
// Hfour.addEventListener('mouseover', () => {
//     Four.classList.toggle('active');    
// })
// Hfive.addEventListener('mouseover', () => {
//     Five.classList.toggle('active');    
// })
// Hsix.addEventListener('mouseover', () => {
//     Six.classList.toggle('active');    
// })





const thumb = document.querySelectorAll('.gallery02 .thumb-media');

const switchThumb = (index) => {
  document.querySelector('.gallery02 .thumb-media-active').classList.remove('thumb-media-active');
  thumb[index].classList.add('thumb-media-active');
}

const mySwiper = new Swiper('.gallery02 .swiper', {
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  speed: 500,
  navigation: {
    nextEl: '.gallery02 .swiper-button-next',
    prevEl: '.gallery02 .swiper-button-prev',
  },
  on: {
    afterInit: (swiper) => {
      thumb[swiper.realIndex].classList.add('thumb-media-active');
      for (let i = 0; i < thumb.length; i++) {
        thumb[i].onclick = () => {
          swiper.slideTo(i);
        };
      }
    },
    slideChange: (swiper) => {
      switchThumb(swiper.realIndex);
    },
  }
});
const meSwiper = new Swiper('.card03 .swiper', {
  slidesPerView: 1,
  spaceBetween: 16,
  loop: true,
  loopAdditionalSlides: 1,
  speed: 1000,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  grabCursor: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.card03 .swiper-button-next',
    prevEl: '.card03 .swiper-button-prev',
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    1025: {
      slidesPerView: 4,
      spaceBetween: 32,
    }
  },
});

