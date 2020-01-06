import Swiper from 'swiper';
import '../../../node_modules/swiper/css/swiper.css';
export default function carousels() {
	// Initiates carousels

	const sliderEl = document.querySelectorAll(
		'.Showcase-container .swiper-container'
	);
	if (!sliderEl) {
        return;
    }
    new Swiper(sliderEl, {
        init: true,
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        observer: true,
        speed: 2200,
        autoplay: {
            delay: 1700,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar'
        }
	});
}
