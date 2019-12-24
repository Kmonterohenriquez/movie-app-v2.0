import React from 'react';
import { Link } from 'react-router-dom';
const Section =(props)=> {
	// render() {
		return (
			<div className='Small-sliders'>
				<div className='swiper-container'>
					<h1>{props.title}</h1>
					<div className='swiper-wrapper'>
						{/* // loop to get all movies or show inside of the carousel */}
						{props.movieData.map(curr => (
							<div className='single-movie swiper-slide'>
								<Link to={`/movie/${curr.id}`} key={curr.id}>
									<p>{curr.title || curr.original_name}</p>
									<img
										src={`http://image.tmdb.org/t/p/w185/${curr.poster_path}`}
										alt={curr.title || curr.original_name}
									/>
									<p className='rating'>
										<i className='fas fa-star'></i>
										{curr.vote_average}
									</p>
								</Link>
							</div>
						))}
					</div>
					<div className='swiper-button-prev'></div>
					<div className='swiper-button-next'></div>
				</div>
			</div>
		);
	// }
}

export default Section;
