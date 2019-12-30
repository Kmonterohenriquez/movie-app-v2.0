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
	componentDidMount() {
		// this.postReview()
	}
	postReview =  e => {
		e.preventDefault();
		const { id, title, type } = this.props;
		 axios
			.post('/review/create', {
				movie_id: id,
				user_id: 8,
				review_content: this.state.reviewContent,
				movie_title: title,
				itemT_type: type
			})
			.then(console.log('Review Posted'))
			.catch(err => console.log(err));
	};

	handleChange = e => {
		this.setState({ reviewContent: e.target.value });
	};

	render() {
		console.log('RESULT:', this.props.type);
		return (
			<div className='PostReview '>
				<h1 className='PostReview-title'>Popular Reviews</h1>
				<form onSubmit={ e => this.postReview(e)} className='PostReview-content'>
					<img src={profileImg} alt='#' />
					<input
						onChange={ e => this.handleChange(e)}
						name='review'
						type='text'
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
