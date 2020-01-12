import React, { Component } from 'react';
// import '../PopularReviews/PopularReviews.sass';
import './UserReviews.sass';
import axios from 'axios';

class UserReviews extends Component {
	state = {
		editToggle: false,
		editingReview: 0
	};

	deleteReview = review_id => {
		axios.delete(`/api/review/${review_id}`).catch(err => console.log(err));
		this.props.getReviews();
	};
	editToggle = review_id => {
		this.setState({ editToggle: !this.state.editToggle });
		this.setState({ editingReview: review_id });
	};
	saveChange = review_id => {
		axios.put(`/api/review/${review_id}`).catch(err => console.log(err));
		this.setState({ editToggle: !this.state.editToggle });
		this.props.getReviews();
	};
	render() {
		console.clear();
		console.log('hola como estas:', this.props.reviews);
		return (
			<div>
				{this.props.reviews.reverse().map(curr => (
					<div key={curr.review_id}>
						{this.state.editToggle &&
						curr.review_id === this.state.editingReview ? (
							<>
								<div className='Review-container'>
									<div className='Review'>
										<div className='Review-user-info'>
											<div className="user-pic"><img src={curr.user_picture} alt=""/></div>
											<p className='Review-author'>{curr.username}</p>
										</div>
										<textarea cols='30' rows='10'>
											{curr.review_content}
										</textarea>
										<div className='Review-btns'>
											<button
												className='edit-btn'
												onClick={() => this.saveChange(curr.review_id)}
											>
												Save
											</button>
											<button className='delete-btn' onClick={this.editToggle}>
												Cancel
											</button>
										</div>
									</div>
								</div>
							</>
						) : (
							<div className='Review-container'>
								<div className='Review'>
									<div className='Review-user-info'>
										{/* <i className='User-icon fas fa-user-circle'></i> */}
										<div className='user-pic'>
											<img src={curr.user_picture} alt='' />
										</div>

										<p className='Review-author'>{curr.username}</p>
									</div>
									<p className='Review-content'>{curr.review_content}</p>
									{this.props.user.user_id === curr.user_id ? (
										<div className='Review-btns'>
											<button
												className='edit-btn'
												onClick={() => this.editToggle(curr.review_id)}
											>
												Edit
											</button>
											<button
												className='delete-btn'
												onClick={() => this.deleteReview(curr.review_id)}
											>
												Delete
											</button>
										</div>
									) : null}
								</div>
							</div>
						)}
					</div>
				))}
			</div>
		);
	}
}

export default UserReviews;
