import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Home from '../home/home';
import { Results } from '../results/results';
import { withTracker } from './with_tracker';


export default () => (
	<div>
		<Switch>
			<Route exact path="/result/:hash" component={withTracker(Results)} />
			<Route exact path="/" component={withTracker(Home)} />
			<Redirect from="*" to="/" />
		</Switch>
	</div>
);
