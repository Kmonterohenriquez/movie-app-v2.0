// import React from 'react'
import Swiper from 'swiper';
import '../../../node_modules/swiper/css/swiper.css'
export default function carousels(){
    // Initiates carousels
		// () => {
			const sliderEl = document.querySelectorAll(
				'.Small-sliders .swiper-container'
			);
			if (!sliderEl) {
				return;
			}
			new Swiper(sliderEl, {
				init: true,
				slidesPerView: 7,
				loop: true,
				spaceBetween: 10,
				observer: true,

				breakpoints: {
					1300: {
						slidesPerView: 6
					},
					1100: {
						slidesPerView: 5
					},
					820: {
						slidesPerView: 4
					},
					600: {
						slidesPerView: 3
					},
					300: {
						slidesPerView: 2
					}
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				}
			});
		}
        // }