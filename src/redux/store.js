import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// MOVIES
import getPopularMovies from './reducers/movieReducer';
import getUpcomingMovies from './reducers/movieReducer';
import getTopRatedMovies from './reducers/movieReducer';
import getNowPlayingMovies from './reducers/movieReducer';

// TV SHOWS
import getAiringTodayShows from './reducers/tvReducers';
import getOnTheAirShows from './reducers/tvReducers'
import getPopularShows from './reducers/tvReducers'
import getTopRatedShows from './reducers/tvReducers'


const rootReducer = combineReducers({
	getPopularMovies,
	getUpcomingMovies,
	getTopRatedMovies,
	getNowPlayingMovies,
	getAiringTodayShows,
	getOnTheAirShows,
	getPopularShows,
	getTopRatedShows
});

const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
