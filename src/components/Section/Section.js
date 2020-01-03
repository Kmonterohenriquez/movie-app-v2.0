import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import WOW from 'wowjs';
const Section = props => {
	useEffect(() => {
		new WOW.WOW().init();
	});
	return (
		<div className='Small-sliders wow fadeInUp' data-wow-delay='.5s'>
			<div className='swiper-container'>
				<h1>{props.title}</h1>
				<div className='swiper-wrapper'>
					{/* // loop to get all movies or show inside of the carousel */}
					{props.movieData.map( curr => (
						
							curr.poster_path ? (
								<div className='single-movie swiper-slide' key={curr.id}>
									<Link to={`/details/${curr.id}`}>
										<img
											src={`http://image.tmdb.org/t/p/w185/${curr.poster_path}`}
											alt={curr.title || curr.original_name}
											/>
										<p>{curr.title || curr.name}</p>
										<p className='rating'>
											<i className='fas fa-star'></i>
											{curr.vote_average}
										</p>
									</Link>
								</div>
							) : null
						
					))}
				</div>
				<div className='swiper-button-prev'></div>
				<div className='swiper-button-next'></div>
			</div>
		</div>
	);
	// }
};

export default Section;
