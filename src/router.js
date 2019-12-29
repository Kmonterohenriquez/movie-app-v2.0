import React from 'react';
import { Switch, Route } from 'react-router-dom';

// PAGES
import Home from './Pages/Home';
import Login from './Pages/Login/Login';
import Details from './Pages/Details';
import Signup from './Pages/Register/Register';
import Discover from './Pages/Discover'

export default (
	<Switch>
		<Route component={Home} exact path='/' />
		<Route component={Login} exact path='/login' />
		<Route component={Signup} exact path='/register' />
		<Route component={Discover} exact path='/discover' />
		<Route component={Details} path='/details/:id' />
	</Switch>
);
