import axios from 'axios';
import { ITEM_REVIEWS } from './types';
import { API_KEY } from './API_KEY';

const getItemReviews = (type, id) => dispatch => {
	console.log('action fired getItemReviews')
	axios
		.get(
			`https://api.themoviedb.org/3/${type}/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
		)
		.then(res =>
			dispatch({
				type: ITEM_REVIEWS,
				payload: res.data.results
			})
		);
};

export default getItemReviews;
