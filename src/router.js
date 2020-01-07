import React from 'react';
import { Switch, Route } from 'react-router-dom';

// PAGES
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Details from './Pages/Details/Details';
import Signup from './Pages/Register/Register';
import Discover from './Pages/Discover/Discover';
import SearchResult from './components/SearchResult/SearchResult';
import Profile from './components/Profile/Profile'

export default (
	<Switch>
		<Route component={Home} exact path='/' />
		<Route component={Login} exact path='/login' />
		<Route component={Signup} exact path='/register' />
		<Route component={Discover} exact path='/discover' />
		<Route component={Details} path='/details/:id' />
		<Route component={SearchResult} path='/search_result' />
		<Route component={Profile} path='/profile' />
	</Switch>
);
