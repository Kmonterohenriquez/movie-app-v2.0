import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SearchResult.sass';
import { Link } from 'react-router-dom';
class SearchResult extends Component {
	state = {};
	render() {
		console.log('from search result', this.props.moviesAndShows);
		return (
			<div className='SearchResult '>
				<div className='container'>
					<div className='main-title'>
						<h1>Search result for <span>Avenger</span></h1>
					</div>
					<div className='grid-result '>
						{this.props.moviesAndShows.map(curr =>
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
						)}
					</div>
				</div>
			</div>
		);
	}
}
const mapStateToProps = state => ({
	moviesAndShows: [
		...state.searchResultReducer.movieSearch
		// ...state.searchResultReducer.tvSearch
	]
});
export default connect(mapStateToProps)(SearchResult);
