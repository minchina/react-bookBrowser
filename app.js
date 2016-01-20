import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import Search from './js/search.js';
import SearchResult from './js/searchResult.js'

let routes = (
    (
        <Router history={browserHistory}>
            <Route path="/" name="main" component={Search} />
            <Route name="searchResult" path="searchResult/:searchPhrase" component={SearchResult}/>
        </Router>
    )
);

render(routes, document.getElementById('react'));