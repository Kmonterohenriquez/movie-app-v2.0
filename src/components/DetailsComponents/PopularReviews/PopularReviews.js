import React, { Component } from 'react';
import './PopularReviews.sass';
class PopularReviews extends Component {
	render() {
		// console.log("test: ", this.props.reviews)
		return (
			<div className='Review-container'>
				<h1>Popular Reviews</h1>
				{this.props.reviews.length !== 0 ? (
					<div>
						{this.props.reviews.map((review, key) => (
							<div className='Review' key={key}>
								<div className='Review-user-info'>
									<i className='User-icon fas fa-user-circle'></i>
									<p className='Review-author'>{review.author}</p>
								</div>
								<p className='Review-content'>{review.content}</p>
								<a href={review.url} className='Review-full-review'>
									See full review <i className='fas fa-angle-right'></i>
								</a>
							</div>
						))}
					</div>
				) : (
					<div className='Review'>
						<p className='Review-content'>There is no review.</p>
					</div>
				)}
			</div>
		);
	}
}

export default PopularReviews;
