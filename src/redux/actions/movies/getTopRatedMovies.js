import axios from 'axios';
import { TOP_RATED_MOVIES } from '../types';
import {API_KEY} from '../API_KEY'

const getTopRatedMovies = () => dispatch => {
	axios
		.get(
			`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
		)
		.then(res =>
			dispatch({
				type: TOP_RATED_MOVIES,
				payload: res.data.results
			})
		);
};

export default getTopRatedMovies;
