import React, { Component } from 'react';
import './Nav.sass';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import getUser from '../../redux/actions/user/getUser';
import axios from 'axios';
import getMovieSearch from '../../redux/actions/getSearchItem/getMovieSearch';
import getTvSearch from '../../redux/actions/getSearchItem/getTvSearch';
import WOW from 'wowjs';
import logo from '../../img/theater_logo.png';
class Nav extends Component {
	state = {
		search: ''
	};
	componentDidMount() {
		new WOW.WOW().init();
	}
	componentDidUpdate(prevProps, prevState) {
		if (this.state.search !== prevState.search) {
			this.props.getMovieSearch(this.state.search);
		} 
		// else if (this.state.search === '') {
		// }

		if (this.props.user.user !== prevProps.user.user ) {
			console.clear()
			console.log('nav icons updated');
			
		}
	}
	
	handleChange = e => {
		this.setState({ search: e.target.value });
	};

	handleSearch = e => {
		e.preventDefault();
		this.props.history.push('/search_result');
	};

	logout = async () => {
		await axios.post('/auth/logout').catch(err => console.log(err));
		console.log('logged out');
	};
	render() {
		// console.clear();
		// let result = this.props.user.user.email === 'no body' ? true: false
		console.log('User result:', this.props.user.user);
		console.log('User result:', this.props.user.user === undefined? true : false);
		return (
			<header className='Nav '>
				<div className='Nav-container container'>
					<Link to='/'>
						<div className='logo wow fadeIn' data-wow-delay='.5s'>
							<img src={logo} alt='iFLIX' />
						</div>
					</Link>
					<form
						className='search-bar wow fadeIn'
						data-wow-delay='.5s'
						onSubmit={e => this.handleSearch(e)}
					>
						<input
							type='text'
							placeholder='Search...'
							onChange={e => this.handleChange(e)}
						/>
						<button type='submit'>
							<i className='fas fa-search'></i>
						</button>
					</form>
					<nav className='wow fadeIn' data-wow-delay='.5s'>
						<ul>
							<Link to='/'>
								<i className='fas fa-home'></i>
							</Link>
							{this.props.user.user === undefined || this.props.user.user.email === 'no body' ? (
								<Link to='/login'>
									<i className='fas fa-user-circle'></i>
								</Link>
							) : (
								<Link to='/'>
									<i
										onClick={() => this.logout()}
										className='fas fa-sign-out-alt'
									></i>
								</Link>
							)}
							<Link to='/discover'>
								<i className='fas fa-search'></i>
							</Link>
						</ul>
					</nav>
				</div>
			</header>
		);
	}
}
const mapStateToProps = state => ({
	user: state.userReducer,
	moviesAndShows: [
		...state.searchResultReducer.movieSearch
		// ...state.searchResultReducer.tvSearch
	]
});

export default withRouter(
	connect(mapStateToProps, { getUser, getMovieSearch, getTvSearch })(Nav)
);
