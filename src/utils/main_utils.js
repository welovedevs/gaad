import queryString from 'query-string';

import bullshitNames from '../assets/content/bullshit_names.json';
import bullshitData from '../assets/content/bullshit_data.json';
import bullshitImages from '../assets/content/bullshit_images.json';

const getRandomImage = () => bullshitImages[Math.floor(Math.random() * bullshitImages.length)];

export const generateRandomHash = ({ name, technology }) => {
	const namesWithExcludedName = bullshitNames.filter(
		currentName => !name || currentName.toLowerCase() !== name.toLowerCase()
	);
	const randomName = namesWithExcludedName[
		Math.floor(Math.random() * namesWithExcludedName.length)
	];
	const scenariosKeys = Object.keys(bullshitData);
	const randomScenario = scenariosKeys[Math.floor(Math.random() * scenariosKeys.length)];
	const randomImages = [...new Array(3).fill()].reduce((acc) => {
		let randomImage = getRandomImage();
		while (acc.includes(randomImage)) {
			randomImage = getRandomImage();
		}
		return [...acc, randomImage]
	}, []);
	return btoa(
		queryString.stringify({
			name: randomName,
			scenarioId: randomScenario,
			technology,
			images: randomImages
		})
	);
};

export const generateScenarioWithValues = ({ scenarioId, name, technology }) => {
	console.log({ scenarioId, name, technology });
	const scenario = bullshitData[scenarioId];
	if (!scenario) {
		return null;
	}
	const { text } = scenario;
	console.log({ text });
	const replacements = {
		replaceName: name,
		tech: technology
	};
	const replacementsEntries = Object.entries(replacements);
	return text
		.map(line => replacementsEntries.reduce((str, [key, value]) => str.replace(new RegExp(`{${key}}`, 'g'), value), line));
}
