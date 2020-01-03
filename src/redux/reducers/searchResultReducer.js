import { SEARCH_MOVIE, SEARCH_TV } from '../actions/types';

const initialState = {
    movieSearch: [],
    tvSearch: [],
};

export default function createUserReducer(state = initialState, action) {
	switch (action.type) {
        case SEARCH_TV:
            return { ...state, tvSearch: action.payload };
		case SEARCH_MOVIE:
            return { ...state, movieSearch: action.payload };
        default:
			return state;
	}
}
