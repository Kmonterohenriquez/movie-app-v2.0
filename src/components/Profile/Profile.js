import React from 'react';
import { Switch, Route } from 'react-router-dom';
// STYLE
import './Profile.sass';

// COMPONENTS
import LeftPanel from './LeftPanel/LeftPanel.js';
import NavCategories from './NavCategories/NavCategories.js';
// import CategorySliderCategory from './CategorySliderCategory/CategorySliderCategory'
import FavoriteMovies from './FavoriteMovies/FavoriteMovies';
import FavoriteTvShows from './FavoriteTvShows/FavoriteTvShows';
import RatedMovies from './RatedMovies/RatedMovies';
import RatedTvShows from './RatedTvShows/RatedTVShows';

const Profile = () => {
	return (
		<div className='Profile '>
			<div className='Profile-grid lg-container'>
				<div className='LeftPanel'>
					<LeftPanel />
				</div>
				<div className='RightPanel'>
					<NavCategories />
					<Switch>
						<Route component={FavoriteMovies} exact path='/profile/' />
						<Route
							component={FavoriteTvShows}
							exact
							path='/profile/favorite-tv-shows'
						/>
						<Route component={RatedMovies} exact path='/profile/rated-movies' />
						<Route
							component={RatedTvShows}
							exact
							path='/profile/rated-tv-shows'
						/>
					</Switch>
				</div>
			</div>
		</div>
	);
};

export default Profile;
