import Swiper, {Pagination} from "swiper";
Swiper.use ([Pagination]);

const windowInnerWidth = window.innerWidth;

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

        var sliders = document.querySelectorAll('.swiper');

        for (var i = sliders.length - 1; i >= 0; i--) {
            swiper_handler(sliders[i]);
        }
            
    }
}, false);