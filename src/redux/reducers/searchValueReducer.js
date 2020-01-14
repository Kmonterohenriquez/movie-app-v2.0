import { SEARCH_VALUE } from '../actions/types';

const initialState = {
	newValue: 'no hay valor en redux'
};

export default function getSearchValueReducer(state = initialState, action) {
	switch (action.type) {
		case SEARCH_VALUE:
			return { ...state, newValue: action.payload };
		default:
			return state;
	}
}
