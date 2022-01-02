//================================================================
//Слайдер Swiper
//================================================================
// Слайдер full screen
const fullSlider = document.querySelector('.fullscreen__swiper');
if(fullSlider){
    const fullSwiper = new Swiper(fullSlider,{
        observer: true,
        observerParents: true,
        observerSlideChildren: true,
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            prevEl: '.fullscreen__button-prev',
            nextEl: '.fullscreen__button-next',
        },
        pagination: {
            el: '.fullscreen__progress',
            type: 'progressbar',
        },
        thumbs:{
            swiper:{
                el: '.thumbs-fullscreen__swiper',
                slidesPerView: 1,
                spaceBetween: 10,
                freeMode: true,
                watchSlidesProgress: true,
                breakpoints: {
                    320: {
                        slidesPerView: 1,  
                        slidesPerGroup: 1,              
                    },
                    600: {
                        slidesPerView: 2,  
                    },
                    840: {
                        slidesPerView: 3,
                    },
                },
            }
        },
    });
}