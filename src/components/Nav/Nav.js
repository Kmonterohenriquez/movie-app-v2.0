import React, { Component } from 'react';
import './Nav.sass';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import getUser from '../../redux/actions/user/getUser';
import axios from 'axios';
import getMovieSearch from '../../redux/actions/getSearchItem/getMovieSearch'
import getTvSearch from '../../redux/actions/getSearchItem/getTvSearch'
class Nav extends Component {
	state = {
		search: ''
	};
	componentDidMount() {
		this.props.getMovieSearch('avenger')
		this.props.getTvSearch('avenger')
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
	};
	render() {
		// console.log(this.props);
		return (
			<header className='Nav'>
				<Link to='/'>
					<div className='logo'>BestMovies</div>
				</Link>
				<form className='search-bar' onSubmit={e => this.handleSearch(e)}>
					<input
						type='text'
						placeholder='Search...'
						onChange={e => this.handleChange(e)}
					/>
					<button type='submit'>
						<i className='fas fa-search'></i>
					</button>
				</form>
				<nav>
					<ul>
						<Link to='/'><i className='fas fa-home'></i></Link>
						{this.props.user.user ? (
							<Link to='/'><i onClick={() => this.logout()} className='fas fa-sign-out-alt'></i></Link>
						) : (
                        <Link to='/login'><i className='fas fa-user-circle'></i></Link>
                        )}
						<Link to='/discover'><i className='fas fa-search'></i></Link>
					</ul>
				</nav>
			</header>
		);
	}
}
const mapStateToProps = state => ({
	user: state.userReducer,
	moviesAndShows: 
	[
		...state.searchResultReducer.movieSearch,
		...state.searchResultReducer.tvSearch
	]
});

export default withRouter(connect(mapStateToProps, { getUser, getMovieSearch,getTvSearch })(Nav));
