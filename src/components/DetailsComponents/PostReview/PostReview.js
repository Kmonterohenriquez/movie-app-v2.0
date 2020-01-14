import React, { Component } from 'react';
import './PostReview.sass';
import profileImg from '../../../img/profile-placeholder.jpg';
import axios from 'axios';
import { connect } from 'react-redux';
import getSingleDetail from '../../../redux/actions/getSingleDetail';
import WOW from 'wowjs';

class PostReview extends Component {
	componentDidMount(){
		new WOW.WOW().init();
	}
	state = {
		reviewContent: '',
		showMsg: false
	};
	componentDidUpdate(prevProps) {
		if (this.props.user !== prevProps.user) {
			this.setState({ showMsg: false });
			console.log('ternary Updated');
		}
	}
	postReview = async e => {
		e.preventDefault();
		const { user, id, title, type } = this.props;
		if (user) {
			await axios.post('/api/review', {
				movie_id: id,
				user_id: user.user_id,
				review_content: this.state.reviewContent,
				movie_title: title,
				itemT_type: type
			});

			this.setState({ reviewContent: '' });
			this.props.getReviews();
		} else {
<<<<<<< HEAD
			console.log('There is no user logged in');
=======
			console.log('There is no user logged');
>>>>>>> 662d577d9cfadc60a90cc5bf40ecf6c4dbad2043
		}
	};

	handleChange = e => {
		this.setState({ reviewContent: e.target.value });
	};
	showMsg = () => {
		this.setState({ showMsg: true });
	};
	render() {
		const { user } = this.props;
		console.log('user: ', user);
		return (
			<div className='PostReview '>
				<h1 className='PostReview-title'>Popular Reviews</h1>
				<form onSubmit={e => this.postReview(e)} className='PostReview-content'>
					<img src={profileImg} alt='#' />
					<div className='input-container'>
						<div>
							<input
								onChange={e => this.handleChange(e)}
								name='review'
								type='text'
								value={this.state.reviewContent}
								placeholder='Write a comment...'
								required
							/>
							{user === undefined && this.state.showMsg === true ? (
								<p className='alert-error wow bounceIn' data-wow-delay='.5s'>No user is logged in.</p>
							) : null}
						</div>
					</div>
					<button type='submit' className='btn-primary' onClick={this.showMsg}>
						Post
					</button>
				</form>
			</div>
		);
	}
}

export default connect(null, getSingleDetail)(PostReview);
