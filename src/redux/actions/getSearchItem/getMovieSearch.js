import axios from 'axios';
import { SEARCH_MOVIE } from '../types';
import { API_KEY } from '../API_KEY';

const getMovieSearch = (str, page) => dispatch => {
	axios
		.get(
			`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${str}&page=${page}&include_adult=false`
		)
		.then(res =>
			dispatch({
				type: SEARCH_MOVIE,
				payload: res.data.results
			})
		);
};

export default getMovieSearch;
