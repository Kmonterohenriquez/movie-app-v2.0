import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Section.sass';
import WOW from 'wowjs';
import separator from '../../img/separator.png';

const Section = props => {
	useEffect(() => {
		new WOW.WOW({ live: false }).init();
	});
	return (
		<div className='Small-sliders wow fadeInUp' data-wow-delay='.5s'>
			<div className='Section swiper-container'>
				<h1 className='Section-title'>{props.title}</h1>
				<div className='swiper-wrapper'>
					{/* // loop to get all movies or show inside of the carousel */}
					{props.movieData.map(curr =>
						curr.poster_path ? (
							<div className='Movie-container swiper-slide' key={curr.id}>
								<Link to={`/details/${curr.id}`}>
									<div className='movie-box '>
										<div className='img-container'>
											<img
												src={`http://image.tmdb.org/t/p/w185/${curr.poster_path}`}
												alt={curr.title || curr.original_name}
											/>
											<p className='rating'>
												<i className='star fas fa-star'></i>
												{curr.vote_average}
											</p>
										</div>
										<p className='title'>{curr.title || curr.name}</p>
									</div>
								</Link>
							</div>
						) : null
					)}
				</div>
				<div className='swiper-button-prev'></div>
				<div className='swiper-button-next'></div>
			</div>
			<div className='separator'>
				<img src={separator} alt='separator' />
			</div>
		</div>
	);
	// }
};

export default Section;
