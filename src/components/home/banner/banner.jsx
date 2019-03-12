import React from 'react';

import injectSheet from 'react-jss';

import BackgroundImage from '../../../assets/images/overbusiness.jpg';

import styles from './banner_styles';

const Banner = ({ classes }) => (
	<div className={classes.container}>
		<img
			src={BackgroundImage}
			alt="Overbusiness"
		/>
		<Title {...{ classes }} />
		<SubTitle {...{ classes }} />
	</div>
);

const Title = ({ classes }) => (
	<span className={classes.title}>
		{'Gaad'}
	</span>
);

const SubTitle = ({ classes }) => (
	<span className={classes.subTitle}>
		{"Générateur Automatisé d'Approches Développeurs"}
	</span>
);

export default injectSheet(styles)(Banner);
