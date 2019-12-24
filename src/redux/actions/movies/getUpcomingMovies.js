import axios from 'axios';
import { UPCOMING_MOVIES, API_KEY } from '../types';

const getUpcomingMovies = url => dispatch => {
	axios
		.get(
			`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
		)
		.then(res =>
			dispatch({
				type: UPCOMING_MOVIES,
				payload: res.data.results
			})
		);
};

export default getUpcomingMovies;
