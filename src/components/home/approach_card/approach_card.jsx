import React, { useState } from 'react';

import injectSheet from 'react-jss';

import TextField from '@material-ui/core/TextField';

import { Link } from 'react-router-dom';
import GenericCard from '../../small_views/generic_card/generic_card';
import Button from '../../small_views/button/button';

import styles from './approach_card_styles';

const ApproachCard = ({ classes }) => {
	const [firstName, setFirstName] = useState('');
	const [technologies, setTechnologies] = useState('');
	return (
		<GenericCard className={classes.container}>
			<TextField
				fullWidth
				className={classes.textField}
				label="Prénom"
				value={firstName}
				onChange={event => setFirstName(event.target.value)}
			/>
			<TextField
				fullWidth
				className={classes.textField}
				label="Technologies"
				value={technologies}
				onChange={event => setTechnologies(event.target.value)}
			/>
			<Link to="/generate">
				<Button className={classes.button}>
					{'Générer mon approche'}
				</Button>
			</Link>
		</GenericCard>
	);
}

export default injectSheet(styles)(ApproachCard);
