import { SET_ITEM_TYPE_MOVIE, SET_ITEM_TYPE_TV } from './types';

const setItemType = type => ({
	type: type === 'tv' ? SET_ITEM_TYPE_TV : SET_ITEM_TYPE_MOVIE
});

export default setItemType;