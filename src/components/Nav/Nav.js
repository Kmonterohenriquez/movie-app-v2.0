import React, { Component } from 'react';
import './Nav.sass';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import getUser from '../../redux/actions/user/getUser';
import axios from 'axios';


class Nav extends Component {
	logout = async () => {
		await axios.post('/auth/logout').catch(err => console.log(err));
	};
	handleSearch = (e) => {
        e.preventDefault();
        this.props.history.push('/search_result')
    };

	render() {
		return (
			<header className='Nav'>
				<Link to='/'>
					<div className='logo'>BestMovies</div>
				</Link>
				<form className='search-bar' onSubmit={(e)=>this.handleSearch(e)}>
					<input type='text' placeholder='Search...' />
					<button type='submit'><i className='fas fa-search'></i></button>
				</form>
				<nav>
					<ul>
						<Link to='/'>
							<li>
								<i className='fas fa-home'></i>
							</li>
						</Link>
						{this.props.user.user ? (
							<Link to='/'>
								<li>
									<i
										onClick={() => this.logout()}
										className='fas fa-sign-out-alt'
									></i>
								</li>
							</Link>
						) : (
							<Link to='/login'>
								<li>
									<i className='fas fa-user-circle'></i>
								</li>
							</Link>
						)}
						<Link to='/discover'>
							<li>
								<i className='fas fa-search'></i>
							</li>
						</Link>
					</ul>
				</nav>
			</header>
		);
	}
}
const mapStateToProps = state => ({
	user: state.userReducer
});

export default withRouter(connect(mapStateToProps, { getUser })(Nav));
