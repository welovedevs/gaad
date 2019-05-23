import React from 'react';
import { Link } from 'react-router-dom';

import injectSheet from 'react-jss';
import cs from 'classnames';

import BackgroundImage from '../../../assets/images/overbusiness.jpg';

import styles from './banner_styles';

const Banner = ({ classes, small }) => (
	<div className={cs(small ? classes.small : null, classes.container)} key="banner">
		<img
			src={BackgroundImage}
			alt="Overbusiness"
		/>
		<Title {...{ classes }} />
		<SubTitle {...{ classes }} />
	</div>
);

const Title = ({ classes }) => (
	<Link to="/">
		<span className={classes.title}>
			{'Gaad'}
		</span>
	</Link>
);

const SubTitle = ({ classes }) => (
	<span className={classes.subTitle}>
		{"Générateur Automatisé d'Approches Développeurs"}
	</span>
);

export default injectSheet(styles)(Banner);
