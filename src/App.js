import React, { Component } from 'react';
import './App.sass';
import router from './router';
import Nav from './components/Nav/Nav';
import { withRouter } from 'react-router-dom';
import WOW from 'wowjs';

import { connect } from 'react-redux';
import getUser from './redux/actions/user/getUser';
class App extends Component {
<<<<<<< HEAD
	
=======
>>>>>>> 662d577d9cfadc60a90cc5bf40ecf6c4dbad2043
	componentWillMount () {
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
