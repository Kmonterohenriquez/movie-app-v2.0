import React, { Component } from 'react';
// COMPONENTS
import Section from './Section.js';
// REDUX
import { connect } from 'react-redux';
// MOVIES
import getPopularMovies from '../redux/actions/movies/getPopularMovies';
import getUpcomingMovies from '../redux/actions/movies/getUpcomingMovies';
import getTopRatedMovies from '../redux/actions/movies/getTopRatedMovies';
import getNowPlayingMovies from '../redux/actions/movies/getNowPlayingMovies';
// TV SHOWS
import getAiringTodayShows from '../redux/actions/Tv/getAiringTodayShows';
import getPopularShows from '../redux/actions/Tv/getPopularShows';
import getOnTheAirShows from '../redux/actions/Tv/getOnTheAirShows';
import getTopRatedShows from '../redux/actions/Tv/getTopRatedShows';

class Home extends Component {
	// const [categoryToggle, setCategoryToggle] = useState(true);
	state={
		categoryToggle: true
	}
	componentDidMount() {	
		this.handleMovies();
		this.handleTv();
	}
	
	handleCategoryToggle = value => {
		if (value === true) {
			this.setState({ categoryToggle: true });
		} else if (value === false) {
			this.setState({ categoryToggle: false });
		}
	};
	 handleMovies() {
		this.props.getPopularMovies();
		this.props.getUpcomingMovies();
		this.props.getNowPlayingMovies();
		this.props.getTopRatedMovies();
	}

	 handleTv() {
		this.props.getAiringTodayShows();
		this.props.getOnTheAirShows();
		this.props.getPopularShows();
		this.props.getTopRatedShows();
	}
	render(){
	const popular = this.props.popularMovies.popularMovies,
		upcoming = this.props.upcomingMovies.upcomingMovies,
		topRated = this.props.topRatedMovies.topRatedMovies,
		nowPlaying = this.props.nowPlayingMovies.nowPlayingMovies,
		airingTodayShows = this.props.airingTodayShows.airingTodayShows,
		onTheAirShows = this.props.onTheAirShows.onTheAirShows,
		popularShows = this.props.popularShows.popularShows,
		topRatedShows = this.props.topRatedShows.topRatedShows;

	return (
		<div>
			<button onClick={()=>this.handleCategoryToggle(true)}>movies</button>
			<button onClick={()=>this.handleCategoryToggle(false)}>Tv Shows</button>
			{this.state.categoryToggle ? (
				<div className='movies'>
					<Section title='Upcoming' movieData={upcoming} />
					<Section title='Now Playing' movieData={nowPlaying} />
					<Section title='Popular' movieData={popular} />
					<Section title='Top Rated' movieData={topRated} />
				</div>
			) : (
				<div className='movies'>
					<Section title='Airing Today' movieData={airingTodayShows} />
					<Section title='Popular' movieData={popularShows} />
					<Section title='On the Air' movieData={onTheAirShows} />
					<Section title='Top Rated' movieData={topRatedShows} />
				</div>
			)}
		</div>
	);
			}
};
const mapStateToProps = state => ({
	// MOVIES
	popularMovies: state.getPopularMovies,
	upcomingMovies: state.getUpcomingMovies,
	topRatedMovies: state.getTopRatedMovies,
	nowPlayingMovies: state.getNowPlayingMovies,
	// TV SHOWS
	airingTodayShows: state.getAiringTodayShows,
	onTheAirShows: state.getOnTheAirShows,
	popularShows: state.getPopularShows,
	topRatedShows: state.getTopRatedShows
});

// const mapDispatcherToProps = dispatch => ({
// 	getPopularMovies: url => dispatch(getPopularMovies(url)),
// 	getUpcomingMovies: url => dispatch(getUpcomingMovies(url)),
// 	getTopRatedMovies: url => dispatch(getTopRatedMovies(url)),
// 	getNowPlayingMovies: url => dispatch(getNowPlayingMovies(url))
// });
export default connect(mapStateToProps, {
	getPopularMovies,
	getUpcomingMovies,
	getTopRatedMovies,
	getNowPlayingMovies,
	getAiringTodayShows,
	getPopularShows,
	getOnTheAirShows,
	getTopRatedShows
})(Home);
