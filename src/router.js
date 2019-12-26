import React from 'react';
import { Switch, Route } from 'react-router-dom';

// PAGES
import Home from './Pages/Home';
import Login from './Pages/Login/Login';
import Details from './Pages/Details';
import Signup from './Pages/Signup';


export default (
	<Switch>
		<Route component={Home} exact path='/' />
		<Route component={Login} exact path='/login' />
		<Route component={Signup} exact path='/signup' />
		<Route component={Details} path='/details/:id' />
	</Switch>
);
