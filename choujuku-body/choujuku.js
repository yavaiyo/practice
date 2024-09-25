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





// const thumb = document.querySelectorAll('.gallery02 .thumb-media');

// const switchThumb = (index) => {
//   document.querySelector('.gallery02 .thumb-media-active').classList.remove('thumb-media-active');
//   thumb[index].classList.add('thumb-media-active');
// }

// const mySwiper = new Swiper('.gallery02 .swiper', {
//   effect: 'fade',
//   fadeEffect: {
//     crossFade: true,
//   },
//   speed: 500,
//   navigation: {
//     nextEl: '.gallery02 .swiper-button-next',
//     prevEl: '.gallery02 .swiper-button-prev',
//   },
//   on: {
//     afterInit: (swiper) => {
//       thumb[swiper.realIndex].classList.add('thumb-media-active');
//       for (let i = 0; i < thumb.length; i++) {
//         thumb[i].onmouseover = () => {
//           swiper.slideTo(i);
//         };
//       }
//     },
//     slideChange: (swiper) => {
//       switchThumb(swiper.realIndex);
//     },
//   }
// });

const gallery02 = document.querySelector('.gallery02');
const thumb = document.querySelectorAll('.gallery02 .thumb-media');

// 初期化時にすべてのthumb-media-activeクラスを削除
document.querySelectorAll('.gallery02 .thumb-media-active').forEach((activeThumb) => {
  activeThumb.classList.remove('thumb-media-active');
});

const switchThumb = (index) => {
  if (index >= 0 && index < thumb.length) {
    const activeThumb = document.querySelector('.gallery02 .thumb-media-active');
    if (activeThumb) {
      activeThumb.classList.remove('thumb-media-active');
    }
    thumb[index].classList.add('thumb-media-active');
  }
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
      for (let i = 0; i < thumb.length; i++) {
        thumb[i].onmouseover = () => {
          if (i === 0) {
            swiper.slideTo(1);  // 1枚目のサムネイルで2枚目の画像に移動
          } else {
            swiper.slideTo(i + 1);  // それ以外はサムネイルとスライドを一致させる
          }
          switchThumb(i);
        };
      }
      
      gallery02.addEventListener('mouseleave', () => {
        // すべてのサムネイルからactiveクラスを削除し、最初のスライドに戻す
        document.querySelectorAll('.thumb-media-active').forEach((activeThumb) => {
          activeThumb.classList.remove('thumb-media-active');
        });
        swiper.slideTo(0);  // 1枚目の画像に戻す
      });
    },
    slideChange: (swiper) => {
      if (swiper.realIndex === 0) {
        // 1枚目の画像のときはサムネイルのactiveを付けない
        document.querySelectorAll('.thumb-media-active').forEach((activeThumb) => {
          activeThumb.classList.remove('thumb-media-active');
        });
      } else {
        switchThumb(swiper.realIndex - 1);  // サムネイルは-1
      }
    },
  }
});


// const meSwiper = new Swiper('.card03 .swiper', {
//   slidesPerView: 1,
//   spaceBetween: 16,
//   loop: true,
//   loopAdditionalSlides: 1,
//   speed: 1000,
//   autoplay: {
//     delay: 4000,
//     disableOnInteraction: false,
//   },
//   grabCursor: true,
//   watchSlidesProgress: true,
//   navigation: {
//     nextEl: '.card03 .swiper-button-next',
//     prevEl: '.card03 .swiper-button-prev',
//   },
//   breakpoints: {
//     600: {
//       slidesPerView: 2,
//     },
//     1025: {
//       slidesPerView: 4,
//       spaceBetween: 32,
//     }
//   },
// });

