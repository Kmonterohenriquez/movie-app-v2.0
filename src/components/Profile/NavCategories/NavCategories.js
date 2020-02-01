import React from 'react';
import './NavCategories.sass';
import { Link } from 'react-router-dom';

const NavCategories = () => {
	return (
		<div className='NavCategories NavCategories-grid'>
			<Link to='/profile/' className='option'>
				<div className='icon-container'>
					<i className='fas fa-heart'></i>
				</div>
				<p>Favorite Movies</p>
			</Link>
			<Link to='/profile/favorite-tv-shows' className='option'>
				<div className='icon-container'>
					<i className='fas fa-heart'></i>
				</div>
				<p>Favorite Tv Shows</p>
			</Link>
			<Link to='/profile/rated-movies' className='option'>
				<div className='icon-container'>
					<i className='fas fa-medal'></i>
				</div>
				<p>Rated Movies</p>
			</Link>
			<Link to='/profile/rated-tv-shows' className='option'>
				<div className='icon-container'>
					<i className='fas fa-medal'></i>
				</div>
				<p>Rated Tv Shows</p>
			</Link>
		</div>
	);
};

export default NavCategories;
