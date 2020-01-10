import axios from 'axios';
import { ITEM_CASTS } from './types';
import { API_KEY } from './API_KEY';

const getItemCasts = (type, id) => dispatch => {
	//  axios.get(`http://api.themoviedb.org/3/${type}/${id}/casts?api_key=${API_KEY}`)
	axios
		.get(
			`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${API_KEY}&language=en-US`
		).then(res =>
			dispatch({
				type: ITEM_CASTS,
				payload: res.data.cast
			})
		);
};

export default getItemCasts;