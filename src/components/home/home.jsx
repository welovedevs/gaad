import React from 'react';

import injectSheet from 'react-jss';

import Banner from './banner/banner';
import ApproachCard from './approach_card/approach_card';
import ValuesPropositions from './values_propositions/values_propositions';

import styles from './home_styles';

const Home = ({ classes }) => (
	<div className={classes.container}>
		<Banner />
		<div className={classes.approachCardContainer}>
			<ApproachCard />
		</div>
		<ValuesPropositions />
	</div>
);

export default injectSheet(styles)(Home);
