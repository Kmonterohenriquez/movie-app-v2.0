import axios from 'axios';
import { TOP_RATED_SHOWS } from '../types';
import { API_KEY } from '../API_KEY';

const getTopRatedShows = () => dispatch => {
	axios
		.get(
			`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`
		)
		.then(res =>
			dispatch({
				type: TOP_RATED_SHOWS,
				payload: res.data.results
			})
		);
};

export default getTopRatedShows;
