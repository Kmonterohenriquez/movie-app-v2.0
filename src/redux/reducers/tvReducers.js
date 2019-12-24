import {
	AIRING_TODAY_SHOWS,
	ON_THE_AIR_SHOWS,
	POPULAR_SHOWS,
	TOP_RATED_SHOWS
} from '../actions/types';

const initialState = {
	airingTodayShows: [],
	onTheAirShows: [],
	popularShows: [],
	topRatedShows: []
};

export default function tvReducer(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case AIRING_TODAY_SHOWS:
			return { ...state, airingTodayShows: payload };
		case ON_THE_AIR_SHOWS:
			return { ...state, onTheAirShows: payload };
		case POPULAR_SHOWS:
			return { ...state, popularShows: payload };
		case TOP_RATED_SHOWS:
			return { ...state, topRatedShows: payload };
		default:
			return state;
	}
}
