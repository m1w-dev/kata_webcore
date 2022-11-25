import Swiper, {Pagination} from "swiper";
Swiper.use ([Pagination]);

const windowInnerWidth = window.innerWidth;
console.log(windowInnerWidth);

function swiper_handler(el) {
    const swiper = new Swiper(el, {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        spaceBetween: 32,
        //centeredSlides: true,
        slidesPerView: 1,
    });
}

window.addEventListener('load', () => {
    if (windowInnerWidth <= 540) {
        console.log('init swiper');

        var sliders = document.querySelectorAll('.swiper');

        for (var i = sliders.length - 1; i >= 0; i--) {
            swiper_handler(sliders[i]);
        }
            
    }
}, false);