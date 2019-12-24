// import axios from 'axios';
import {
	POPULAR_MOVIES,
	UPCOMING_MOVIES,
	TOP_RATED_MOVIES,
	NOW_PLAYING_MOVIES
} from '../actions/types';

const initialState = {
	popularMovies: [],
	upcomingMovies: [],
	topRatedMovies: [],
	nowPlayingMovies: [],
	latestShows: []
};

export default function movieReducer(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case POPULAR_MOVIES:
			return { ...state, popularMovies: payload };
		case UPCOMING_MOVIES:
			return { ...state, upcomingMovies: payload };
		case TOP_RATED_MOVIES:
			return { ...state, topRatedMovies: payload };
		case NOW_PLAYING_MOVIES:
			return { ...state, nowPlayingMovies: payload };
		default:
			return state;
	}
}
