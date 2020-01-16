import { SEARCH_VALUE } from '../actions/types';

const initialState = {
	newValue: '...'
};

export default function getSearchValueReducer(state = initialState, action) {
	switch (action.type) {
		case SEARCH_VALUE:
			return { ...state, newValue: action.payload };
		default:
			return state;
	}
}
