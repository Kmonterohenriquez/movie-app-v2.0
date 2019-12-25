import React, { Component } from 'react';
import Header from '../components/DetailsComponents/Header/Header';
import Summary from '../components/DetailsComponents/Summary/Summary';
import PopularReviews from '../components/DetailsComponents/PopularReviews/PopularReviews'
import PostReview from '../components/DetailsComponents/PostReview/PostReview'
// REDUX
import { connect } from 'react-redux';
import getSingleDetail from '../redux/actions/getSingleDetail';
import setItemType from '../redux/actions/setItemType';
import getItemReviews from '../redux/actions/getItemReviews';
class Details extends Component {
	state = {};
	componentDidMount() {
		this.props.getSingleDetail('movie', this.props.match.params.id);
		this.props.getItemReviews('movie', this.props.match.params.id)
		// this.props.setItemType('tv');
	}
	render() {
		const { singleDetail } = this.props.singleDetail;
		const reviews= this.props.itemReviews.itemReviews;
		return (
			<div className='Details' style={{ background:'#2D132C'}}>
				<Header
					title={singleDetail.title}
					backdrop_path={singleDetail.backdrop_path}
					poster_path={singleDetail.poster_path}
					vote_average={singleDetail.vote_average}
					original_language={singleDetail.original_language}
					genres={singleDetail.genres}
				/>
				<div className='container' >
					<Summary overview={singleDetail.overview} />
					{/* <Cast cast={this.state.cast} />
					<Trailers trailers={this.state.trailers} /> */}
					<PostReview/> 
					<PopularReviews reviews={reviews} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	singleDetail: state.getSingleDetail,
	itemType: state.setItemType,
	itemReviews: state.itemReviewReducer
});

export default connect(mapStateToProps, {
	getSingleDetail,
	setItemType,
	getItemReviews
})(Details);
