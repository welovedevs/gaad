import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Home from '../home/home';
import { Results } from '../results/results';
import { Loading } from '../loading/loading';

export default () => (
	<div>
		<Switch>
			<Route exact path="/result/:hash" component={Results} />
			<Route exact path="/" component={Home} />
			<Redirect from="*" to="/" />
		</Switch>
	</div>
);
