import React, { Fragment } from 'react';

import injectSheet from 'react-jss';
import { Emojione } from 'react-emoji-render';

import { HomeFill, ExperimentFill, SearchOutline } from '@ant-design/icons';
import AntdIcon from '@ant-design/icons-react';

import styles from './values_propositions_styles';

const columns = [
	{
		title: 'Made with ❤️ in Lille',
		description: 'Velit irure minim proident laboris cillum ex in dolor nostrud excepteur ea ad excepteur commodo. Duis reprehenderit irure nostrud veniam irure sint cillum labore ut est officia consequat laborum voluptate nostrud id laboris. Magna elit culpa proident nostrud nulla et consequat in ea enim aliquip do irure id deserunt nulla. Sunt nulla enim cupidatat exercitation eu duis culpa. Nisi reprehenderit quis ex minim veniam enim deserunt fugiat tempor ut aute in ullamco officia.',
		icon: <AntdIcon type={HomeFill} />
	},
	{
		title: 'Technically impressive',
		description: 'Duis cillum incididunt incididunt nulla ex quis esse eiusmod nisi fugiat. Nisi duis duis dolor eiusmod irure commodo ad. In laboris culpa consequat labore enim est laborum cupidatat irure nostrud mollit et irure. Ea mollit ullamco occaecat nostrud id enim incididunt eu commodo. Cupidatat excepteur et laboris sint excepteur sint nisi ut minim pariatur.',
		icon: <AntdIcon type={ExperimentFill} />
	},
	{
		title: 'Top-notch accuracy',
		description: 'Irure nisi consequat sit voluptate esse exercitation ea sunt esse anim dolor nulla incididunt amet veniam elit eiusmod. Veniam Lorem laborum deserunt sunt ipsum cupidatat fugiat cillum esse proident ullamco aute tempor laboris. Esse quis consectetur minim mollit esse eiusmod consequat aliqua sit eu dolor ea ut sunt ad. Voluptate tempor laborum pariatur adipisicing non nulla dolore pariatur ad aliquip amet officia deserunt amet. Duis sit labore proident non magna qui non dolore ut. Excepteur eu dolore ut et quis ex occaecat pariatur deserunt. In fugiat et veniam laborum eiusmod velit pariatur officia ad qui veniam proident Lorem dolor exercitation.',
		icon: <AntdIcon type={SearchOutline} />
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
