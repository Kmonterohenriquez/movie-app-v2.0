import React, { Component } from 'react';
import Header from '../components/DetailsComponents/Header/Header';
import Summary from '../components/DetailsComponents/Summary/Summary';
import PopularReviews from '../components/DetailsComponents/PopularReviews/PopularReviews';
import PostReview from '../components/DetailsComponents/PostReview/PostReview';
import Trailers from '../components/DetailsComponents/Trailers/Trailers';
// REDUX
import { connect } from 'react-redux';
import getSingleDetail from '../redux/actions/getSingleDetail';
import setItemType from '../redux/actions/setItemType';
import getItemReviews from '../redux/actions/getItemReviews';
import getItemTrailers from '../redux/actions/getItemTrailers';

class Details extends Component {
	state = {};

	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.getSingleDetail('movie', id);
		this.props.getItemReviews('movie', id);
		// this.props.setItemType('tv');
		this.props.getItemTrailers('movie', id);
	}
	render() {
		const { singleDetail } = this.props.singleDetail;
		const reviews = this.props.itemReviews.itemReviews;
		const trailers = this.props.itemTrailers.itemTrailers
		return (
			<div className='Details' style={{ background: '#2D132C' }}>
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
					{/* <Cast cast={this.state.cast} />*/}
					<Trailers trailers={trailers} />
					<PostReview />
					<PopularReviews reviews={reviews} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	singleDetail: state.getSingleDetail,
	itemType: state.setItemType,
	itemReviews: state.itemReviewReducer,
	itemTrailers: state.itemTrailersReducer
});

export default connect(mapStateToProps, {
	getSingleDetail,
	setItemType,
	getItemReviews,
	getItemTrailers
})(Details);
