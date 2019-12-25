import Swiper from 'swiper';
import '../../../../node_modules/swiper/css/swiper.css'

export default function trailersCarousel() {
	// Initiates carousels

	const sliderEl = document.querySelectorAll(
		'.Trailers-container .swiper-container'
	);
	if (!sliderEl) {
		return;
	}
	new Swiper(sliderEl, {
		init: true,
		loop: true,
		observer: true,
		breakpoints: {
			1470: { slidesPerView: 3 },
			1050: { slidesPerView: 2 },
			300: { slidesPerView: 1 }
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		}
	});
}
