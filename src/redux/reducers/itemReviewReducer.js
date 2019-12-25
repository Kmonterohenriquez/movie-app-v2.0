import { ITEM_REVIEWS } from '../actions/types'

const initialState = {
	itemReviews: []
};

export default function itemReviewReducer(state = initialState, action) {
	switch (action.type) {
        case ITEM_REVIEWS:
            // console.log('reducer fired(payload): ', action.payload)
            return { ...state , itemReviews: action.payload};
		default:
			return state
	}
}