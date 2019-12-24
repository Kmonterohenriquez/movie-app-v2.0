import React from 'react';
import { Switch, Route } from 'react-router-dom'
// PAGES
import Home from './Pages/Home'
import Login from './Pages/Login'

export default(
    <Switch>
        <Route component={Home} exact path='/'/>
        <Route component={Login} exact path='/login'/>
    </Switch>
)