import axios from 'axios';
import { SINGLE_DETAIL, API_KEY } from './types';

const getSingleDetail = (type, id) => dispatch => {
	axios
		.get(
			`https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}&language=en-US`
		)
		.then(res =>
			dispatch({
				type: SINGLE_DETAIL,
				payload: res.data
			})
		);
};

export default getSingleDetail;
