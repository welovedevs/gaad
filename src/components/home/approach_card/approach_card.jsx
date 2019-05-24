import React, { useCallback, useState } from 'react';

import injectSheet from 'react-jss';

import TextField from '@material-ui/core/TextField';

import GenericCard from '../../small_views/generic_card/generic_card';
import Button from '../../small_views/button/button';
import GeneratingDialog from '../../small_views/generating_dialog/generating_dialog';

import styles from './approach_card_styles';

const ApproachCard = ({ classes }) => {
	const [name, setName] = useState('');
	const [technology, setTechnology] = useState('');
	const [error, setError] = useState(null);
	const [openGeneratingDialog, setGeneratingDialogOpenState] = useState(false);
	const handleButtonClick = useCallback(() => {
		if (!name && !technology) {
			return setError('Vous devez indiquer un nom et la technologie qui vous intéresse !');
		}
		if (!name) {
			return setError('Vous devez indiquer un nom !');
		}
		if (!technology) {
			return setError('Vous devez indiquer la technologie qui vous intéresse !');
		}
		return setGeneratingDialogOpenState(true);
	}, [name, technology]);
	return (
		<>
			<GeneratingDialog
				open={openGeneratingDialog}
				onClose={() => setGeneratingDialogOpenState(false)}
				{...{
					name,
					technology
				}}
			/>
			<GenericCard className={classes.container}>
				{error && (
					<span className={classes.error}>
						{error}
					</span>
				)}
				<TextField
					fullWidth
					className={classes.textField}
					label="Prénom de votre futur talent"
					value={name}
					onChange={event => setName(event.target.value)}
				/>
				<TextField
					fullWidth
					className={classes.textField}
					label="Technologie à mentionner"
					value={technology}
					onChange={event => setTechnology(event.target.value)}
				/>
				<Button
					className={classes.button}
					onClick={handleButtonClick}
				>
					{'Générer mon approche'}
				</Button>
			</GenericCard>
		</>
	);
};

export default injectSheet(styles)(ApproachCard);
