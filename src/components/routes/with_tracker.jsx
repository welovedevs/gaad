import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

ReactGA.initialize(process.env.REACT_APP_GA_KEY)

export const withTracker = (WrappedComponent, options = {}) => {
	const trackPage = (page) => {
		ReactGA.set({
			page,
			...options
		});
		ReactGA.pageview(`gaad${page}`);
	};

	const HOC = (props) => {
		useEffect(() => trackPage(props.location.pathname), [
			props.location.pathname
		]);

		return <WrappedComponent {...props} />;
	};

	return HOC;
};
