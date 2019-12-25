import axios from 'axios';
import { AIRING_TODAY_SHOWS } from '../types';
import { API_KEY } from '../API_KEY';

const getAiringTodayShows = () => dispatch => {
	axios
		.get(
			`https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`
		)
		.then(res =>
			dispatch({
				type: AIRING_TODAY_SHOWS,
				payload: res.data.results
			})
		);
};

export default getAiringTodayShows;
