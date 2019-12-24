import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Section extends Component {
	state = {};
	render() {
		return (
			<div className='Small-sliders'>
				<div className='swiper-container'>
					<h1>{this.props.title}</h1>
					<div className='swiper-wrapper'>
						{/* // loop to get all movies or show inside of the carousel */}
						{this.props.movieData.map(curr => (
							<Link to={`/movie/${curr.id}`}key={curr.id}>
								<div className='single-movie swiper-slide'>
									<p>{curr.title || curr.original_name}</p>
									<img
										src={`http://image.tmdb.org/t/p/w185/${curr.poster_path}`}
										alt={curr.title || curr.original_name}
									/>
									<p className='rating'>
										<i className='fas fa-star'></i>
										{curr.vote_average}
									</p>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default Section;
