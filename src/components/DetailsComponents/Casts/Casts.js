import React, { Component } from 'react';
import './Casts.sass';
import castCarousel from './castCarousel'

class Casts extends Component {
	render() {
        castCarousel();
		return (
			<div className='Cast-container'>
				<h1 className='title'>Cast</h1>
				<div className='swiper-container'>
					<div className='swiper-wrapper'>
						{this.props.cast.map((curr, key) =>
							curr.profile_path ? (
								<div className='swiper-slide' key={key}>
									<div className='cast-box'>
										<img
											src={`http://image.tmdb.org/t/p/w185/${curr.profile_path}`}
											alt={curr.name}
										/>
										<h1>{curr.name}</h1>
									</div>
								</div>
							) : null
						)}
					</div>
					<div className='swiper-button-prev'></div>
					<div className='swiper-button-next'></div>
				</div>
			</div>
		);
	}
}

export default Casts;
