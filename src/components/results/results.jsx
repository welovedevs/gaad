import React from 'react';
import injectSheet from 'react-jss';
import { withRouter } from 'react-router-dom';
import styles from './results_styles'
import Banner from '../home/banner/banner'

const getParamsFromHash = (hash) => {
	try {
		return JSON.parse(btoa(hash || 'e30='));
	} catch (e) {
		return {};
	}
}
const ResultsComponent = ({ classes, match }) => {
	const { scenario, name } = getParamsFromHash(match)

	return (
		<div className={classes.container}>
			<Banner small />
			<div className={classes} />
		</div>
	);
};

export const Results = withRouter(injectSheet(styles)(ResultsComponent));
