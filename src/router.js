import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'

export default(
    <Switch>
        <Route component={Home} path='/'/>
    </Switch>
)