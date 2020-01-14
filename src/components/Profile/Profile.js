import React from 'react';
// STYLE
import './Profile.sass';
// import categories from ''
// COMPONENTS
import { Switch, Route } from 'react-router-dom';

import LeftPanel from './LeftPanel/LeftPanel.js';
import NavCategories from './NavCategories/NavCategories.js';
// import CategorySliderCategory from './CategorySliderCategory/CategorySliderCategory'
<<<<<<< HEAD
import FavoriteMovies from './FavoriteMovies/FavoriteMovies';
=======
// import FavoriteMovies from './FavoriteMovies/FavoriteMovies';
>>>>>>> 662d577d9cfadc60a90cc5bf40ecf6c4dbad2043
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
					{/* <CategorySliderCategory /> */}
					{/* {categories} */}
					<Switch>
<<<<<<< HEAD
						<Route component={FavoriteMovies} exact path='/profile/' />
=======
						{/* <Route component={FavoriteMovies} exact path='/profile/' /> */}
>>>>>>> 662d577d9cfadc60a90cc5bf40ecf6c4dbad2043
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
