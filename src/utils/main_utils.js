import queryString from 'query-string';

import bullshitNames from '../assets/content/bullshit_names.json';
import bullshitData from '../assets/content/bullshit_data.json';
import bullshitImages from '../assets/content/bullshit_images.json';

const getRandomImageIndex = () => Math.floor(Math.random() * bullshitImages.length);

export const generateRandomHash = ({ name, technology }) => {
	const namesWithExcludedName = bullshitNames.filter(
		currentName => !name || currentName.toLowerCase() !== name.toLowerCase()
	);
	const randomName = namesWithExcludedName[
		Math.floor(Math.random() * namesWithExcludedName.length)
	];
	const scenariosKeys = Object.keys(bullshitData);
	const randomScenario = scenariosKeys[Math.floor(Math.random() * scenariosKeys.length)];
	const randomImagesIndexes = [...new Array(3).fill()].reduce((acc) => {
		let randomImageIndex = getRandomImageIndex();
		while (acc.includes(randomImageIndex)) {
			randomImageIndex = getRandomImageIndex();
		}
		return [...acc, randomImageIndex]
	}, []);
	return btoa(
		queryString.stringify({
			name: randomName,
			scenarioId: randomScenario,
			technology,
			images: randomImagesIndexes
		}, { arrayFormat: 'comma' })
	);
};

export const generateScenarioWithValues = ({ scenarioId, name, technology }) => {
	const scenario = bullshitData[scenarioId];
	if (!scenario) {
		return null;
	}
	const { text } = scenario;
	const replacements = {
		replaceName: name,
		tech: technology
	};
	const replacementsEntries = Object.entries(replacements);
	return text
		.map(line => replacementsEntries.reduce((str, [key, value]) => str.replace(new RegExp(`{${key}}`, 'g'), value), line));
}

export const getImagesLinks = ({ imagesArray }) => imagesArray && imagesArray.map(imageIndex => bullshitImages[imageIndex]);
