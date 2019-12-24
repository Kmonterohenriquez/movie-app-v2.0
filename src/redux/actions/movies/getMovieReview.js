import axios from 'axios';
import { ITEM_REVIEW, API_KEY } from '../types';

const getMovieReview = () => dispatch => {
	axios
		.get(
			`https://api.themoviedb.org/3/movie/512200/reviews?api_key=${API_KEY}&language=en-US&page=1`
		)
		.then(res =>
			dispatch({
				type: ITEM_REVIEW,
				payload: res.data.results
			})
		);
};

export default getMovieReview;
