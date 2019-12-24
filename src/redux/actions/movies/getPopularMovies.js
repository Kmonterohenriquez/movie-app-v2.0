import axios from 'axios';
import { POPULAR_MOVIES, API_KEY } from '../types';

const getPopularMovies = () => dispatch => {
	axios
		.get(
			`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
		)
		.then(res =>
			dispatch({
				type: POPULAR_MOVIES,
				payload: res.data.results
			})
		);
};

export default getPopularMovies;
