import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import Layout from '../components/layout/layout';
import Home from '../components/ui/home';
import List from '../components/containers/list' 



export default (
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Home} />
			<Route path="list" component={List}/>
			<Route path="post/:id" />
		</Route>
	</Router>
)