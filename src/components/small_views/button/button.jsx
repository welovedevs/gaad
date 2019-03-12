import React from 'react';

import cn from 'classnames';
import injectSheet from 'react-jss';

import styles from './button_styles';

const Button = ({
	className,
	children,
	classes,
	...other
}) => (
	<div
		className={cn(className, classes.container)}
		{...other}
	>
		<div>
			{children}
		</div>
	</div>
);

export default injectSheet(styles)(Button);
