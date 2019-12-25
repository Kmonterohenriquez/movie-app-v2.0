import React, { Component } from 'react';
import Header from '../components/DetailsComponents/Header/Header';
import Summary from '../components/DetailsComponents/Summary/Summary';
import PopularReviews from '../components/DetailsComponents/PopularReviews/PopularReviews';
import PostReview from '../components/DetailsComponents/PostReview/PostReview';
import Trailers from '../components/DetailsComponents/Trailers/Trailers';
import Casts from '../components/DetailsComponents/Casts/Casts'
// REDUX
import { connect } from 'react-redux';
import getSingleDetail from '../redux/actions/getSingleDetail';
import setItemType from '../redux/actions/setItemType';
import getItemReviews from '../redux/actions/getItemReviews';
import getItemTrailers from '../redux/actions/getItemTrailers';
import getItemCasts from '../redux/actions/getItemCasts';

class Details extends Component {
	state = {};

	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.getSingleDetail('movie', id);
		this.props.getItemReviews('movie', id);
		// this.props.setItemType('tv');
		this.props.getItemTrailers('movie', id);
		this.props.getItemCasts('movie', id);
	}
	render() {
		const { singleDetail } = this.props.singleDetail;
		const reviews = this.props.itemReviews.itemReviews;
		const trailers = this.props.itemTrailers.itemTrailers;
		const casts = this.props.itemCasts.itemCasts;

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
					<Casts cast={casts} />
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
	itemTrailers: state.itemTrailersReducer,
	itemCasts: state.itemCastsReducer
});

export default connect(mapStateToProps, {
	getSingleDetail,
	setItemType,
	getItemReviews,
	getItemTrailers,
	getItemCasts
})(Details);
