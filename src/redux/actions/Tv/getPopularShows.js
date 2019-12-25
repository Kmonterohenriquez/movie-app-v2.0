import axios from 'axios';
import { POPULAR_SHOWS } from '../types';
import { API_KEY } from '../API_KEY';

const getPopularShows = () => dispatch => {
	axios
		.get(
			`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
		)
		.then(res =>
			dispatch({
				type: POPULAR_SHOWS,
				payload: res.data.results
			})
		);
};

export default getPopularShows;
