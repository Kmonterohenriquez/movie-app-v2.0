import { SET_ITEM_TYPE_MOVIE, SET_ITEM_TYPE_TV } from '../actions/types';

const initialState = {
	itemType: 'movie'
};

const setItemType = (state = initialState, action) => {
	// console.log('setItem reducer fired')
	switch (action.type) {
		case SET_ITEM_TYPE_MOVIE:
			return {
				itemType: 'movie'
			};
		case SET_ITEM_TYPE_TV:
			return {
				itemType: 'tv'
			};
		default:
			return state;
	}
};

export default setItemType;
