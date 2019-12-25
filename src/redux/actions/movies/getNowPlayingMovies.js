import axios from 'axios';
import { NOW_PLAYING_MOVIES } from '../types';
import {API_KEY} from '../API_KEY'

const getNowPlayingMovies = () => dispatch => {
	axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`).then(res =>
		dispatch({
			type: NOW_PLAYING_MOVIES,
			payload: res.data.results
		})
	);
};

export default getNowPlayingMovies;
