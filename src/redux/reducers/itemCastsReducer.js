import { ITEM_CASTS } from '../actions/types';

const initialState = {
	itemCasts: []
};

export default function itemCastsReducer(state = initialState, action) {
	switch (action.type) {
		case ITEM_CASTS:
			return { ...state, itemCasts: action.payload };
		default:
			return state;
	}
}
