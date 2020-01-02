import React, { Component } from 'react';
import './App.sass';
import router from './router';
import Nav from './components/Nav/Nav';
import { withRouter } from 'react-router-dom';
import WOW from 'wowjs';
// import axios from 'axios';
import { connect } from 'react-redux';
import getUser from './redux/actions/user/getUser';
class App extends Component {
	componentWillMount () {
		new WOW.WOW().init();
		// this.getUserInfo();
	}

	// getUserInfo() {
	// 	axios
	// 		.get('/auth/userData')
	// 		.then(res => console.log('CURRENT USER INFO: ', res));
	// }
	render() {
		const currLocation = this.props.location.pathname;
		return (
			<div className='App'>
				{currLocation === '/login' ||
				currLocation === '/register' ||
				true === currLocation.includes('/detail') ? (
					<>{router}</>
				) : (
					<>
						<Nav />
						{router}
					</>
				)}
			</div>
		);
	}
}

export default withRouter(connect(null, {getUser})(App));
