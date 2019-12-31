import React, { Component } from 'react';
// import '../PopularReviews/PopularReviews.sass';
import './UserReviews.sass';
import axios from 'axios';

class UserReviews extends Component {
	state = {
		reviews: []
	};
	componentDidMount() {
		this.getReviews();
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.reviews !== prevState) {
			this.getReviews();
		}
	}

	getReviews = () => {
		const movie_id = this.props.id;
		axios
			.get(`/api/review/${movie_id}`)
			.then(res => this.setState({ reviews: res.data }));
	};

	// deleteReview = (review_id) => {
		
	// 	axios.delete(`/api/review/${review_id}`).catch(err => console.log(err));
	// };
	render() {
		return (
			<div>
				{this.state.reviews.reverse().map(curr => (
					<div className='Review-container'>
						{/* <h1>Popular Reviews</h1> */}
						<div>
							<div className='Review'>
								<div className='Review-user-info'>
									<i className='User-icon fas fa-user-circle'></i>
									<p className='Review-author'>Kevin Montero{curr.user_id}</p>
								</div>
								<p className='Review-content'>{curr.review_content}</p>
								<div className='Review-btns'>
									<button className='edit-btn'>Edit</button>
									<button className='delete-btn' >
										Delete
									</button>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		);
	}
}

export default UserReviews;
