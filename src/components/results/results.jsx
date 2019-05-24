import React, { useCallback, useRef } from 'react';
import { withRouter } from 'react-router-dom';

import injectSheet from 'react-jss';
import queryString from 'query-string';

import { TwitterOutline, FacebookFill, LinkedinFill } from '@ant-design/icons';
import AntdIcon from '@ant-design/icons-react';

import Button from '@material-ui/core/Button';

import Banner from '../home/banner/banner';
import GenericCard from '../small_views/generic_card/generic_card';

import { generateScenarioWithValues, getImagesLinks } from '../../utils/main_utils';

import styles from './results_styles';

const ROOT_URL = 'https://gaad.welovedevs.com';

const getSocialLink = (type, hash) => {
	switch (type) {
	case 'twitter':
		return `https://www.twitter.com/home?${queryString.stringify({ status: `Je viens de créer ma meilleur approche développeur ! ${ROOT_URL}/results/${hash}` })}`;
	case 'facebook':
		return `https://www.facebook.com/sharer.php?s=100&p[url]=${ROOT_URL}/results/${hash}&p[title]=${encodeURIComponent('Je viens de créer ma meilleur approche développeur !')}`;
	case 'linkedin':
		return `https://www.linkedin.com/sharing/share-offsite/?${queryString.stringify({ url: `${ROOT_URL}/results/${hash}` })}`;
	}
}

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
			const parsed = queryString.parse(atob(hash), { arrayFormat: 'comma' });
			return parsed && parsed.images && getImagesLinks({ imagesArray: parsed.images });
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
					<ShareIcons
						text={text.current}
						hash={match && match.params && match.params.hash}
						{...{ classes }}
					/>
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

const ShareIcons = ({ text, hash, classes }) => {
	if (!text || !hash || !classes) {
		return null;
	}
	return (
		<div className={classes.shareIcons}>
			<a href={getSocialLink('twitter', hash)}>
				<Button
					color="primary"
					variant="outlined"
				>
					<AntdIcon
						className={classes.socialIcon}
						type={TwitterOutline}
					/>
					{'Twitter'}
				</Button>
			</a>
			<a href={getSocialLink('facebook', hash)}>
				<Button
					color="primary"
					variant="outlined"
				>
					<AntdIcon
						className={classes.socialIcon}
						type={FacebookFill}
					/>
					{'Facebook'}
				</Button>
			</a>
			<a href={getSocialLink('linkedin', hash)}>
				<Button
					color="primary"
					variant="outlined"
				>
					<AntdIcon
						className={classes.socialIcon}
						type={LinkedinFill}
					/>
					{'LinkedIn'}
				</Button>
			</a>
		</div>
	);
}

export const Results = withRouter(injectSheet(styles)(ResultsComponent));
