import axios from 'axios';
import { ON_THE_AIR_SHOWS, API_KEY } from '../types';

const getOnTheAirShows = () => dispatch => {
	axios
		.get(
			`https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`
		)
		.then(res =>
			dispatch({
				type: ON_THE_AIR_SHOWS,
				payload: res.data.results
			})
		);
};

export default getOnTheAirShows;
