import React, { useCallback, useRef } from 'react';
import { withRouter } from 'react-router-dom';

import injectSheet from 'react-jss';
import queryString from 'query-string';

import Banner from '../home/banner/banner';
import GenericCard from '../small_views/generic_card/generic_card';

import { generateScenarioWithValues } from '../../utils/main_utils';

import styles from './results_styles';

const ResultsComponent = ({ classes, match }) => {
	const getText = useCallback(
		() => {
			const {
				params: { hash }
			} = match;
			return generateScenarioWithValues(queryString.parse(atob(hash)));
		},
		[match && match.params && match.params.hash]
	);
	const getImages = useCallback(
		() => {
			const {
				params: { hash }
			} = match;
			const parsed = queryString.parse(atob(hash));
			return parsed && parsed.images;
		},
		[match && match.params && match.params.hash]
	);
	const text = useRef(getText());
	const images = useRef(getImages());
	return (
		<div className={classes.container}>
			<Banner />
			<div className={classes.resultCardContainer}>
				<GenericCard className={classes.resultCard}>
					<ResultText text={text.current} {...{ classes }} />
					<ResultImages images={images.current} {...{ classes }} />
				</GenericCard>
			</div>
		</div>
	);
};

const ResultText = ({ text, classes }) => {
	if (!text || !classes) {
		return 'Notre super algolithme semble avoir cessé de fonctionner : peut-être est-ce un bon présage ?';
	}
	return (
		<div className={classes.result}>
			<div className={classes.resultTitle}>
				{"Découvrez votre meilleur message d'approche..."}
			</div>
			{text.map(line =>
				(!line
					? <br />
					: <div className={classes.line}>{line}</div>))
			}
		</div>
	);
};

const ResultImages = ({ images, classes }) => {
	if (!images || images.length < 1 || !classes) {
		return null;
	}
	return (
		<div className={classes.images}>
			{images.map((url, index) => (
				<img
					className={classes.image}
					src={url}
					alt=""
					style={{
						animationDelay: `${index * 200}ms`
					}}
				/>
			))}
		</div>
	);
}

export const Results = withRouter(injectSheet(styles)(ResultsComponent));
