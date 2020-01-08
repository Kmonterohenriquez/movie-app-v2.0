import React, { Component } from 'react';
// COMPONENTS
import Header from '../../components/DetailsComponents/Header/Header';
import Summary from '../../components/DetailsComponents/Summary/Summary';
import PopularReviews from '../../components/DetailsComponents/PopularReviews/PopularReviews';
import Trailers from '../../components/DetailsComponents/Trailers/Trailers';
import Casts from '../../components/DetailsComponents/Casts/Casts';
import UserReviews from '../../components/DetailsComponents/UserReviews/UserReviews';
import PostReview from '../../components/DetailsComponents/PostReview/PostReview';
// REDUX
import { connect } from 'react-redux';
import getSingleDetail from '../../redux/actions/getSingleDetail';
import setItemType from '../../redux/actions/setItemType';
import getItemReviews from '../../redux/actions/getItemReviews';
import getItemTrailers from '../../redux/actions/getItemTrailers';
import getItemCasts from '../../redux/actions/getItemCasts';
import getUser from '../../redux/actions/user/getUser';

import axios from 'axios';
import './Details.sass';
class Details extends Component {
	state = {
		type: this.props.itemType.itemType,
		reviews: []
	};

	componentDidMount() {
		const id = this.props.match.params.id;
		const itemType = this.props.itemType.itemType;
		// const type = this.state.type;
		this.props.getSingleDetail(itemType, id);
		this.props.getItemReviews(itemType, id);
		// this.props.setItem'movie'('tv');
		this.props.getItemTrailers(itemType, id);
		this.props.getItemCasts(itemType, id);
		// this.props.getUser()
		// this.getUserInfo();
		this.getReviews();
	}
	getReviews = () => {
		const movie_id = this.props.match.params.id;
		axios
			.get(`/api/review/${movie_id}`)
			.then(res => this.setState({ reviews: res.data }));
	};
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

		const user = this.props.user.user;
		const itemType = this.props.itemType.itemType;

		console.log('ITEM TYPE ', itemType);
		console.log('user from header: ', user);
		return (
			<div className='Details'>
				<Header
					singleDetail={singleDetail}
					user_id={user.user_id}
					type={itemType}
				/>
				<div className='container '>
					<Summary overview={singleDetail.overview} />
					<Casts cast={casts} />
					<Trailers trailers={trailers} />
					<PostReview
						user={user}
						getReviews={this.getReviews}
						type='movie'
						title={singleDetail.title}
						id={this.props.match.params.id}
					/>
					<UserReviews
						user={user}
						getReviews={this.getReviews}
						reviews={this.state.reviews}
						id={this.props.match.params.id}
					/>
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
	getUser
})(Details);
