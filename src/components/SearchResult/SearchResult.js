import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SearchResult.sass';
import { Link } from 'react-router-dom';
import WOW from 'wowjs';

class SearchResult extends Component {
	state = {};
	componentDidMount() {
		new WOW.WOW().init();
	}
	render() {
<<<<<<< HEAD
		const {newValue}=this.props.searchValue
=======
		console.log('from search result', this.props.moviesAndShows);
>>>>>>> 662d577d9cfadc60a90cc5bf40ecf6c4dbad2043
		let { moviesAndShows } = this.props;
		return (
			<div className='SearchResult '>
				<div className='container'>
					<div className='main-title'>
						<h1 className='wow zoomInUp'>
<<<<<<< HEAD
		Search result for <span>{newValue? newValue: '...'}</span>
=======
							Search result for <span>Avenger</span>
>>>>>>> 662d577d9cfadc60a90cc5bf40ecf6c4dbad2043
						</h1>
					</div>
					{!moviesAndShows.length ? (
						<h1 className='no_movie_found wow fadeInUp' data-wow-delay='.8s'>
							{' '}
							No movie found
						</h1>
					) : (
						<div className='grid-result wow fadeIn ' data-wow-delay='.5s'>
							{moviesAndShows.map(curr =>
								curr.poster_path ? (
									<Link
										to={`/details/${curr.id}`}
										className='search-item'
										key={curr.id}
									>
										<img
											src={`http://image.tmdb.org/t/p/w185/${curr.poster_path}`}
											alt={curr.title || curr.original_name}
										/>
										<h1 className='search-item-title'>
											{curr.title || curr.name}
										</h1>
										<p className='rating'>
											<i className='fas fa-star'></i>
											{curr.vote_average}
										</p>
									</Link>
								) : null
							)}z
						</div>
					)}
				</div>
			</div>
		);
	}
}
const mapStateToProps = state => ({
	moviesAndShows: [
		...state.searchResultReducer.movieSearch
		// ...state.searchResultReducer.tvSearch
<<<<<<< HEAD
	],
	searchValue: state.getSearchValueReducer
=======
	]
>>>>>>> 662d577d9cfadc60a90cc5bf40ecf6c4dbad2043
});
export default connect(mapStateToProps)(SearchResult);
