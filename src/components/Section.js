import React, { Component } from 'react';
class Section extends Component {
	state = {};
	render() {
		return (
			<div className='Section'>
				<h1>{this.props.title}</h1>
				{this.props.movieData.map((curr, i) => (
					<div className='single-movie' key={curr.id}>
						<p>{curr.title || curr.original_name}</p>
					</div>
				))}
			</div>
		);
	}
}

export default Section;
