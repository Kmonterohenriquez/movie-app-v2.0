import axios from 'axios';
import { ITEM_TRAILERS } from './types';
import { API_KEY } from './API_KEY';

const getItemReviews = (type, id) => dispatch=>{
	axios
		.get(
			`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${API_KEY}&language=en-US`
		)
		.then(res =>
			dispatch({
				type: ITEM_TRAILERS,
				payload: res.data.results
			})
		);
};

export default getItemReviews;
