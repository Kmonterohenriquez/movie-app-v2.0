import React, { Component } from 'react';
import Header from '../components/DetailsComponents/Header/Header';
import Summary from '../components/DetailsComponents/Summary/Summary';
import PopularReviews from '../components/DetailsComponents/PopularReviews/PopularReviews'
// REDUX
import { connect } from 'react-redux';
import getSingleDetail from '../redux/actions/getSingleDetail';
import setItemType from '../redux/actions/setItemType';
import getMovieReview from '../redux/actions/movies/getMovieReview';

class Details extends Component {
	state = {};
	componentDidMount() {
		this.props.getSingleDetail('movie', this.props.match.params.id);
		this.props.getMovieReview();
		// this.props.setItemType('tv');
	}
	render() {
		const { singleDetail } = this.props.singleDetail;
		// const {reviews} = this.props.movieReview
		console.log('reviews', this.props);
		return (
			<div className='Details'>
				<Header
					title={singleDetail.title}
					backdrop_path={singleDetail.backdrop_path}
					poster_path={singleDetail.poster_path}
					vote_average={singleDetail.vote_average}
					original_language={singleDetail.original_language}
					genres={singleDetail.genres}
				/>
				<div className='container'>
					<Summary overview={singleDetail.overview} />
					{/* <Cast cast={this.state.cast} />
					<Trailers trailers={this.state.trailers} />
					<PostReview/> */}
					{/* <PopularReviews reviews={reviews.reviews} /> */}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	singleDetail: state.getSingleDetail,
	itemType: state.setItemType,
	movieReview: state.getMovieReview
});

export default connect(mapStateToProps, {
	getSingleDetail,
	setItemType,
	getMovieReview
})(Details);
