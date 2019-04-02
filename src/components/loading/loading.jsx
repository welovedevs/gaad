import injectSheets from 'react-jss';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './loading_styles';
import phrases from '../../assets/content/loading_phrases.json';
import Banner from '../home/banner/banner';

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
const LoadingComponent = ({ classes, history }) => {
	const [progress, setProgress] = useState(3);
	const [phrase, setPhrase] = useState(getRandomPhrase());

	useEffect(
		() => {
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
						// history.push('/result/abc');
					}, 3000);
				}
				setTimeout(() => {
					setProgress(newProgress);
					setPhrase(getRandomPhrase());
				}, time);
			};
			tick();
		},
		[progress]
	);
	return (
		<div>
			<Banner small />
			<div className={classes.progressContainer}>
				<div className={classes.progress}>
					<div
						className={classes.progressBar}
						style={{ width: `${progress}%`, backgroundColor: getRandomColor() }}
					/>
				</div>
				<div className={classes.progressPhrase}>{phrase}</div>
			</div>
		</div>
	);
};

export const Loading = withRouter(injectSheets(styles)(LoadingComponent));
