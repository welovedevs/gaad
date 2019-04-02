import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import injectSheet from 'react-jss';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

import phrases from '../../../assets/content/loading_phrases.json';

import styles from './generating_dialog_styles';

const getRandomColor = () => {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i += 1) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
};
const getRandomPhrase = () =>
	phrases[Math.floor(Math.random() * phrases.length)];

const GeneratingDialog = ({
	open, history, classes, ...other
}) => {
	const [progress, setProgress] = useState(3);
	const [phrase, setPhrase] = useState(getRandomPhrase());

	useEffect(
		() => {
			if (!open) return;
			const tick = () => {
				const time = (Math.floor(Math.random() * 25) + 10) * 100;
				const newProgress = Math.min(
					100,
					progress + Math.floor(Math.random() * 40) + 1
				);
				if (newProgress === 100) {
					setProgress(100);
					setPhrase(' Nous avons trouvé votre approche parfaite !');
					return setTimeout(() => {
						history.push('/result/abc');
					}, 3000);
				}
				setTimeout(() => {
					setProgress(newProgress);
					setPhrase(getRandomPhrase());
				}, time);
			};
			tick();
		},
		[progress, open]
	);

	return (
		<Dialog
			classes={{
				paper: classes.paper
			}}
			{...{ open }}
			{...other}
			onClose={() => {
				setProgress(3);
				if (other.onClose) {
					other.onClose();
				}
			}}
		>
			<DialogTitle>
				{'Notre algolithme travaille, celà peut prendre un certain temps...'}
			</DialogTitle>
			<DialogContent className={classes.content}>
				<div className={classes.progressBarContainer}>
					<div
						className={classes.progressBar}
						style={{
							transform: `translate3d(calc(-100% + ${progress}%), 0, 0)`,
							backgroundColor: getRandomColor()
						}}
					/>
				</div>
				<DialogContentText className={classes.informationText}>
					{phrase}
				</DialogContentText>
			</DialogContent>
			<DialogActions />
		</Dialog>
	);
};

export default withRouter(injectSheet(styles)(GeneratingDialog));
