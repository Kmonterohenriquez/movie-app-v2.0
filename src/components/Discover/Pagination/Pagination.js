import React, { Component } from 'react';
import './Pagination.sass';

class Pagination extends Component {
	clickHandle = button => {
		if (button === 'prev') {
			this.props.handlePagination('-');
		} else if (button === 'next') {
			this.props.handlePagination('+');
		}
	};
	render() {
		return (
			<div className='Pagination container'>
				<button onClick={() => this.clickHandle('prev')} className='prev-btn'>
					<i className='fas fa-caret-left'></i>Prev
				</button>
				<p className='currentPage'> {this.props.page}</p>
				<button onClick={() => this.clickHandle('next')} className='next-btn'>
					Next<i className='fas fa-caret-right'></i>
				</button>
			</div>
		);
	}
}

export default Pagination;
