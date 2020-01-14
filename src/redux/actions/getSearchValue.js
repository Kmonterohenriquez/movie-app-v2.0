import { SEARCH_VALUE } from './types';

const getSearchValue = value => {
	return {
		type: SEARCH_VALUE,
		payload: value
	};
};

export default getSearchValue;
