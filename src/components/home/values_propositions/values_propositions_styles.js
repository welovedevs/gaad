import { flexUtils } from '../../../utils/styles_utils';

const { center } = flexUtils;

export default ({
	container: {
		padding: [0, 50],
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap'
	},
	column: {
		width: '90%',
		maxWidth: 375,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		opacity: 0,
		animation: 'fade-in-translate 1.5s',
		animationFillMode: 'forwards'
	},
	iconContainer: {
		height: 140,
		width: 140,
		borderRadius: 100,
		marginBottom: 50,
		backgroundImage: 'linear-gradient(to right top, rgb(17, 90, 117), rgb(42, 115, 142), rgb(67, 140, 167), rgb(92, 165, 192), rgb(117, 190, 217))',
		'& > svg': {
			height: 45,
			width: 'auto',
			fill: '#fff'
		},
		...center
	},
	title: {
		fontSize: 26,
		color: '#232323',
		fontWeight: 700,
		marginBottom: 30,
		textAlign: 'center'
	},
	description: {
		fontSize: 16,
		color: '#444',
		textAlign: 'justify',
		lineHeight: 1.4
	},
	separator: {
		margin: [0, 50],
		width: 1,
		height: 140,
		backgroundColor: '#d6d6d6',
		transform: 'rotate(30deg)'
	},
	'@media screen and (max-width: 1000px)': {
		container: {
			flexDirection: 'column',
			alignItems: 'center'
		},
		separator: {
			height: 1,
			width: 140,
			transform: 'none',
			margin: [50, 0]
		}
	},
	'@media screen and (max-width: 500px)': {
		container: {
			padding: [0, 25]
		}
	}
});
