export default {
	paper: {
		maxWidth: 'none'
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	progressBarContainer: {
		height: 40,
		width: '100%',
		maxWidth: 600,
		position: 'relative',
		overflow: 'hidden',
		borderRadius: 5,
		backgroundColor: '#f0f0f0',
		marginBottom: 25
	},
	progressBar: {
		position: 'absolute',
		top: 0,
		left: 0,
		height: '100%',
		width: '100%',
		transform: 'translate3d(0, 0, 0)',
		willChange: 'transform, background-color',
		transition: ' transform 300ms, background-color 300ms',
		borderRadius: 5
	},
	informationText: {
		fontStyle: 'italic'
	}
};
