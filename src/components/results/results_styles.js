export default {
	resultCardContainer: {
		marginTop: -120,
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		zIndex: 1,
		position: 'relative',
		animation: 'fade-in-translate 1.5s',
		marginBottom: 120
	},
	resultCard: {
		minHeight: 400,
		width: '90%',
		maxWidth: 800,
		padding: [30, 40],
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexWrap: 'wrap'
	},
	result: {
		textAlign: 'justify',
		color: '#2f2f2f'
	},
	resultTitle: {
		fontSize: 28,
		fontWeight: 700,
		marginBottom: 60,
		color: '#4f4f4f',
		position: 'relative',
		'&::after': {
			position: 'absolute',
			top: 'calc(100% + 15px)',
			left: 0,
			height: 1,
			width: '90%',
			backgroundColor: '#dfdfdf',
			content: "''"
		}
	},
	images: {
		marginTop: 30,
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap'
	},
	image: {
		height: 200,
		width: 200,
		margin: [10, 15],
		borderRadius: 5,
		objectFit: 'cover',
		opacity: 0,
		boxShadow: '0 20px 67px 0 rgba(0,0,0,.3)',
		animation: 'fade-in-translate-low 1500ms',
		animationFillMode: 'forwards'
	},
	shareIcons: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		marginTop: 30,
		'& > *': {
			margin: 10
		}
	},
	socialIcon: {
		marginRight: 10
	}
};
