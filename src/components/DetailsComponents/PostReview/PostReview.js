import React, { Component } from 'react';
import './PostReview.sass';
import profileImg from '../../../img/profile-placeholder.jpg';
import axios from 'axios';
import { connect } from 'react-redux';
import getSingleDetail from '../../../redux/actions/getSingleDetail';

class PostReview extends Component {
	state = {
		reviewContent: ''
	};

	postReview = async e => {
		e.preventDefault();
		const { id, title, type } = this.props;
		await axios.post('/api/review', {
			movie_id: id,
			user_id: this.props.user.user_id,
			review_content: this.state.reviewContent,
			movie_title: title,
			itemT_type: type
		});

		this.setState({ reviewContent: '' });
		this.props.getReviews();
	};

	handleChange = e => {
		this.setState({ reviewContent: e.target.value });
	};

	render() {
		// console.log('RESULT:', this.props.type);
		return (
			<div className='PostReview '>
				<h1 className='PostReview-title'>Popular Reviews</h1>
				<form onSubmit={e => this.postReview(e)} className='PostReview-content'>
					<img src={profileImg} alt='#' />
					<input
						onChange={e => this.handleChange(e)}
						name='review'
						type='text'
						value={this.state.reviewContent}
						placeholder='Write a comment...'
						required
					/>
					<button type='submit' className='btn-primary'>
						Post
					</button>
				</form>
			</div>
		);
	}
}

export default connect(null, getSingleDetail)(PostReview);
