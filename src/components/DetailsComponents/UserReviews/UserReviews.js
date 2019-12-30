import React, { Component } from 'react';
import '../PopularReviews/PopularReviews.sass';

class UserReviews extends Component {
	render() {
		return (
			<div className='Review-container'>
				{/* <h1>Popular Reviews</h1> */}
				<div>
					<div className='Review'>
						<div className='Review-user-info'>
							<i className='User-icon fas fa-user-circle'></i>
							<p className='Review-author'>Kevin Montero</p>
						</div>
						<p className='Review-content'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde hic voluptate praesentium, explicabo quos fugiat itaque molestias vero quasi. Velit labore similique doloribus itaque incidunt at aperiam quod laboriosam officia?</p>
						
					</div>
					
				</div>
			</div>
		);
	}
}

export default UserReviews;
