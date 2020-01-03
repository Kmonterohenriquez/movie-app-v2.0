import axios from 'axios';
import { SEARCH_TV } from '../types';
import { API_KEY } from '../API_KEY';

const getTvSearch = (str, page) => dispatch => {
	axios
		.get(
			`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&query=${str}&page=${page}&include_adult=false`
		)
		.then(res =>
			dispatch({
				type: SEARCH_TV,
				payload: res.data.results
			})
		);
};

export default getTvSearch;