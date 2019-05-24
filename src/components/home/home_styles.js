import { flexUtils } from '../../utils/styles_utils';

const { center } = flexUtils;

export default ({
	container: {
		width: '100%',
		padding: [0, 0, 100],
		overflowX: 'hidden'
	},
	approachCardContainer: {
		marginTop: -120,
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		zIndex: 1,
		position: 'relative',
		animation: 'fade-in-translate 1.5s',
		marginBottom: 90
	}
});
