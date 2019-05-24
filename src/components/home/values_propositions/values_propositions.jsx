import React, { Fragment } from 'react';

import injectSheet from 'react-jss';
import { Emojione } from 'react-emoji-render';

import { HomeFill, ExperimentFill, SearchOutline } from '@ant-design/icons';
import AntdIcon from '@ant-design/icons-react';

import styles from './values_propositions_styles';

const columns = [
	{
		title: 'Faite bonne impression',
		description: 'Les chercheurs américains sont formels : Ils est extrèmement important de faire une bonne première impression pour recruter. Nous avons étudié les développeurs plusieurs années pour concevoir ce générateur basé sur du machine learning.',
		icon: <AntdIcon type={SearchOutline} />
	},
	{
		title: 'Précision maximale',
		description: "Quoi de pire qu\'un mauvais prénom sur un message d'approche ? Avec GAAD c'est fini, les textes sont précis, éfficaces et surtout sans langue de bois ! Les développeurs n'attendent plus que vous !",
		icon: <AntdIcon type={HomeFill} />
	},
	{
		title: 'Générateur d\'image',
		description: 'Comme le dit Confucius: Une image vaut mille mots. C\'est pourquoi nous avons sélectionné des images libres de droits parfaites pour aider vos futurs candidats à se projeter dans votre entreprise !',
		icon: <AntdIcon type={ExperimentFill} />
	}
]

const ValuesPropositions = ({ classes }) => (
	<div className={classes.container}>
		{columns.map((values, index) => (
			<Fragment key={`fragment_column_${index}`}>
				<Column
					{...values}
					{...{ index, classes }}
				/>
				{index < columns.length - 1 && <Separator {...{ classes }} />}
			</Fragment>
		))}
	</div>
);

const Column = ({
	title,
	description,
	icon,
	index,
	classes
}) => (
	<div
		className={classes.column}
		style={{ animationDelay: `${index * 250}ms` }}
	>
		<div className={classes.iconContainer}>
			{icon}
		</div>
		<div className={classes.title}>
			<Emojione
				svg
				text={title}
			/>
		</div>
		<div className={classes.description}>
			<Emojione
				svg
				text={description}
			/>
		</div>
	</div>
);

const Separator = ({ classes }) => (
	<div className={classes.separator} />
);

export default injectSheet(styles)(ValuesPropositions);
