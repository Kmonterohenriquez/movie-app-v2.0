import React, { Component } from 'react';
import './Home.sass';
// COMPONENTS
import Section from '../../components/Section/Section.js';
// REDUX
import { connect } from 'react-redux';
// MOVIES
import getPopularMovies from '../../redux/actions/movies/getPopularMovies';
import getUpcomingMovies from '../../redux/actions/movies/getUpcomingMovies';
import getTopRatedMovies from '../../redux/actions/movies/getTopRatedMovies';
import getNowPlayingMovies from '../../redux/actions/movies/getNowPlayingMovies';
// TV SHOWS
import getAiringTodayShows from '../../redux/actions/Tv/getAiringTodayShows';
import getPopularShows from '../../redux/actions/Tv/getPopularShows';
import getOnTheAirShows from '../../redux/actions/Tv/getOnTheAirShows';
import getTopRatedShows from '../../redux/actions/Tv/getTopRatedShows';
// ITEM TYPE
import setItemType from '../../redux/actions/setItemType';
//SWIPER
import carousel from '../../components/carousel/carousel';
import Showcase from '../../components/Showcase/Showcase';
import Footer from '../../components/Footer/Footer';
// import Axios from 'axios';
// import setItemType from '../../redux/actions/setItemType';

class Home extends Component {
	// const [categoryToggle, setCategoryToggle] = useState(true);
	state = {
		categoryToggle: true,
		
	};

	componentDidMount() {
		this.handleMovies();
		this.handleTv();
		
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.categoryToggle !== prevState.categoryToggle) {
			// console.log('page updatedL category toggle');
		}

		if(this.props.itemType.itemType !== prevProps.itemType){
			// console.log('page updated: item type')
		}
	}

	categoryToggle = value => {
		if (value === true) {
			this.setState({ categoryToggle: true });
		} else if (value === false) {
			this.setState({ categoryToggle: false });
		}
	};
	handleMovies() {
		this.props.setItemType('tv');
		this.props.getPopularMovies();
		this.props.getUpcomingMovies();
		this.props.getNowPlayingMovies();
		this.props.getTopRatedMovies();
	}

	handleTv() {
		this.props.setItemType('movie');
		this.props.getAiringTodayShows();
		this.props.getOnTheAirShows();
		this.props.getPopularShows();
		this.props.getTopRatedShows();
	}
	render() {
		const popular = this.props.popularMovies.popularMovies,
			upcoming = this.props.upcomingMovies.upcomingMovies,
			topRated = this.props.topRatedMovies.topRatedMovies,
			nowPlaying = this.props.nowPlayingMovies.nowPlayingMovies,
			airingTodayShows = this.props.airingTodayShows.airingTodayShows,
			onTheAirShows = this.props.onTheAirShows.onTheAirShows,
			popularShows = this.props.popularShows.popularShows,
			topRatedShows = this.props.topRatedShows.topRatedShows;
			console.clear()
			console.log('API KEY.....', process.env.REACT_APP_API_KEY)
		// INVOKING CAROUSEL
		carousel();
		return (
			<div className='Home'>
				<Showcase />
				<div className='container'>
					<div className='Home-btn-container'>
						<button
							onClick={() => {
								this.categoryToggle(true);
								this.props.setItemType('movie');
							}}
						>
							movies
						</button>
						<button
							onClick={() => {
								this.categoryToggle(false);
								this.props.setItemType('tv');
							}}
						>
							Tv Shows
						</button>
					</div>
					<div className='Section-container'>
						{this.state.categoryToggle ? (
							<div className='movies'>
								<Section title='Upcoming' movieData={upcoming} type='movie' />
								<Section
									title='Now Playing'
									movieData={nowPlaying}
									type='movie'
								/>
								<Section title='Popular' movieData={popular} type='movie' />
								<Section title='Top Rated' movieData={topRated} type='movie' />
							</div>
						) : (
							<div className='tv'>
								<Section
									title='Airing Today'
									movieData={airingTodayShows}
									type='tv'
								/>
								<Section title='Popular' movieData={popularShows} type='tv' />
								<Section
									title='On the Air'
									movieData={onTheAirShows}
									type='tv'
								/>
								<Section
									title='Top Rated'
									movieData={topRatedShows}
									type='tv'
								/>
							</div>
						)}
					</div>
				</div>
			
				<Footer />
			</div>
		);
	}
}
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
	topRatedShows: state.getTopRatedShows,
	//OTHERS
	itemType: state.setItemTypeReducer
});

export default connect(mapStateToProps, {
	getPopularMovies,
	getUpcomingMovies,
	getTopRatedMovies,
	getNowPlayingMovies,
	getAiringTodayShows,
	getPopularShows,
	getOnTheAirShows,
	getTopRatedShows,
	setItemType
})(Home);
