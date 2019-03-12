export default ({
	container: {
		padding: [15, 35],
		borderRadius: 100,
		color: '#fff',
		textTransform: 'uppercase',
		letterSpacing: '.8px',
		fontWeight: 600,
		fontSize: 14,
		boxShadow: '0 20px 67px 0 rgba(0,0,0,.3)',
		cursor: 'pointer',
		position: 'relative',
		overflow: 'hidden',
		textAlign: 'center',
		'&::after': {
			height: '100%',
			width: '100%',
			position: 'absolute',
			top: 0,
			left: 0,
			backgroundImage: 'linear-gradient(to right top, rgb(17, 90, 117), rgb(42, 115, 142), rgb(67, 140, 167), rgb(92, 165, 192), rgb(117, 190, 217))',
			content: "''"
		},
		'& > *': {
			zIndex: 1,
			position: 'relative'
		},
		'&, & > div': {
			transform: 'scale3d(1, 1, 1)',
			transition: 'transform 300ms',
			willChange: 'transform'
		},
		'&:hover': {
			transform: 'scale3d(1.05, 1.05, 1.05)',
			'& > div': {
				transform: 'scale3d(.95, .95, .95)'
			}
		}
	}
});
