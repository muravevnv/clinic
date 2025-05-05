document.addEventListener('DOMContentLoaded', () => {

  if(document.querySelector('.js-dir-services-slider')) {
    const servicesSlider = new Swiper('.js-dir-services-slider', {
      slidesPerView: 1.1,
      spaceBetween: 12,
      navigation: { 
        prevEl: '.js-dir-services-slider-prev',
        nextEl: '.js-dir-services-slider-next'
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 8,
        }
      }
    })
  }

  if(document.querySelector('.js-dir-doctors-slider')) {
    const servicesSlider = new Swiper('.js-dir-doctors-slider', {
      slidesPerView: 1.1,
      spaceBetween: 12,
      
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 8,
        }
      }
    })
  }

  if(document.querySelector('.js-dir-tech-slider')) {
    const servicesSlider = new Swiper('.js-dir-tech-slider', {
      slidesPerView: 1.15,
      spaceBetween: 8,
      navigation: { 
        prevEl: '.js-dir-tech-slider-prev',
        nextEl: '.js-dir-tech-slider-next'
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 1,
        }
      }
    })
  }
})