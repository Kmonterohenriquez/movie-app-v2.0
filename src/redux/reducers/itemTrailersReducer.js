import { ITEM_TRAILERS } from '../actions/types';

const initialState = {
	itemTrailers: []
};

export default function itemTrailersReducer(state = initialState, action) {
	switch (action.type) {
		case ITEM_TRAILERS:
			return { ...state, itemTrailers: action.payload };
		default:
			return state;
	}
}
