import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Home from '../home/home';

export default () => (
	<Switch>
		<Route
			exact
			path="/"
			component={Home}
		/>
		<Redirect
			from="*"
			to="/"
		/>
	</Switch>
);
