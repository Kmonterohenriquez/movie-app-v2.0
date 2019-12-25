import { SINGLE_DETAIL } from '../actions/types';

const initialState = {
	singleDetail: []
};

export default function singleDetailReducer(state = initialState, action) {
	switch (action.type) {
		case SINGLE_DETAIL:
			return { ...state, singleDetail: action.payload };

		default:
			return state;
	}
}
