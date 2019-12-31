import React, { Component } from 'react';
// COMPONENTS
import Header from '../components/DetailsComponents/Header/Header';
import Summary from '../components/DetailsComponents/Summary/Summary';
import PopularReviews from '../components/DetailsComponents/PopularReviews/PopularReviews';
import Trailers from '../components/DetailsComponents/Trailers/Trailers';
import Casts from '../components/DetailsComponents/Casts/Casts';
import UserReviews from '../components/DetailsComponents/UserReviews/UserReviews';
import PostReview from '../components/DetailsComponents/PostReview/PostReview';
// REDUX
import { connect } from 'react-redux';
import getSingleDetail from '../redux/actions/getSingleDetail';
import setItemType from '../redux/actions/setItemType';
import getItemReviews from '../redux/actions/getItemReviews';
import getItemTrailers from '../redux/actions/getItemTrailers';
import getItemCasts from '../redux/actions/getItemCasts';
import getUser from '../redux/actions/user/getUser';

import axios from 'axios';
class Details extends Component {
	state = {
		type: this.props.itemType.itemType
	};

	componentDidMount() {
		const id = this.props.match.params.id;
		// const type = this.state.type;
		this.props.getSingleDetail('movie', id);
		this.props.getItemReviews('movie', id);
		// this.props.setItem'movie'('tv');
		this.props.getItemTrailers('movie', id);
		this.props.getItemCasts('movie', id);
		// this.props.getUser()
		this.getUserInfo();
	}
	getUserInfo() {
		axios.get('/auth/userData').then(res => {
			this.props.getUser(res.data.user);
		});
	}
	render() {
		const { singleDetail } = this.props.singleDetail;
		const reviews = this.props.itemReviews.itemReviews;
		const trailers = this.props.itemTrailers.itemTrailers;
		const casts = this.props.itemCasts.itemCasts;
		// const type = this.props.itemType.itemType;
		
		// const user = this.props.getUser.user
		

		return (
			<div className='Details' style={{ background: '#2D132C', paddingBottom: '50px' }}>
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
					<PostReview type='movie' title={singleDetail.title} id={this.props.match.params.id} />
					<UserReviews id={this.props.match.params.id} />
					<PopularReviews reviews={reviews} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		singleDetail: state.getSingleDetail,
		// itemType: state.setItemType,
		itemReviews: state.itemReviewReducer,
		itemTrailers: state.itemTrailersReducer,
		itemCasts: state.itemCastsReducer,
		user: state.userReducer,
		itemType: state.setItemTypeReducer
	};
};

export default connect(mapStateToProps, {
	getSingleDetail,
	setItemType,
	getItemReviews,
	getItemTrailers,
	getItemCasts,
	getUser,
})(Details);
