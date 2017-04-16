import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Main from './components/main.component.jsx'
import Home from './components/home.component.jsx'
import User from './components/user.component.jsx'

render(
    <Router history={browserHistory}>
        <Route component={Main}>
            <Route path="/" component={Home}/>
            <Route path="/users" component={User}/>
        </Route>
    </Router>,
    document.getElementById('container')
);
