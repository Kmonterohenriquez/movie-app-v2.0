import Swiper from 'swiper';
import '../../../../node_modules/swiper/css/swiper.css';

export default function castCarousel() {
	// Initiates carousels

	const sliderEl = document.querySelectorAll(
		'.Cast-container .swiper-container'
	);
	if (!sliderEl) {
		return;
	}
	new Swiper(sliderEl, {
		init: true,
		loop: true,
		spaceBetween: 1,
		observer: true,
		initialSlide: 1,
		breakpoints: {
			1200: {
				slidesPerView: 8
			},
			1150: {
				slidesPerView: 6
			},
			900: {
				slidesPerView: 5
			},
			750: {
				slidesPerView: 4
			},
			500: {
				slidesPerView: 3
			},
			300: {
				slidesPerView: 2,
				width: 200
			}
		},
		navigation: {
			nextEl: '.Cast-container .swiper-button-next',
			prevEl: '.Cast-container .swiper-button-prev'
		}
	});
}
