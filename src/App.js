import React, { Component } from 'react';
import './App.sass';
import router from './router';
import Nav from './components/Nav/Nav';
import { withRouter } from 'react-router-dom';
import WOW from 'wowjs';

import { connect } from 'react-redux';
import getUser from './redux/actions/user/getUser';
class App extends Component {

	componentDidMount () {
		new WOW.WOW().init();
	}

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
