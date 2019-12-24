import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.sass';

class Header extends Component {
	render() {
		const {
			title,
			backdrop_path,
			poster_path,
			vote_average,
			original_language,
			// genres
		} = this.props;

		return (
			<div className='Header-container'>
				<Link to='/'>
					<i className='back-arrow fas fa-chevron-left'></i>
				</Link>
				<i className='share-arrow fas fa-share'></i>
				<div className='Bg-pic'>
					<img
						src={`http://image.tmdb.org/t/p/w1280/${backdrop_path}`}
						alt={`${backdrop_path} backdrop`}
					/>
				</div>
				<div className='info-container'>
					<img
						className='Poster-pic'
						src={`http://image.tmdb.org/t/p/w154/${poster_path}`}
						alt={`${title} poster`}
					/>
					<div className='info'>
						<div className='info-left'>
							<h1> {title} </h1>
							<p id='rate'>
								<i className='star fas fa-star'></i> {vote_average}{' '}
							</p>
							<p>
								Released | <span> {original_language} </span>
							</p>
							{/* <div> {genres[0].name ? genres[0].name : <p>Genre</p>} </div> */}
						</div>
						<div className='info-right'>
							<i className='fas fa-heart heart-icon'></i>
						</div>
					</div>
				</div>
				{/* {this.props.title} */}
			</div>
		);
	}
}

export default Header;
