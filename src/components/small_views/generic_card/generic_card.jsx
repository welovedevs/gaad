import React from 'react';

import cs from 'classnames';
import injectSheet from 'react-jss';

import styles from './generic_card_styles';

const GenericCard = ({ className, classes, ...other }) => {
	if (!classes) {
		return null;
	}
	return (
		<div
			className={
				cs(className,
					classes.container)
			}
			{...other}
		/>
	);
}

export default injectSheet(styles)(GenericCard);
