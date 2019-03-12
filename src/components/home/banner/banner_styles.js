export default ({
	container: {
		height: 450,
		width: '100%',
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: [70, 50, 50],
		'& > img': {
			height: '100%',
			width: '100%',
			position: 'absolute',
			top: 0,
			left: 0,
			objectFit: 'cover'
		},
		'&::after': {
			height: '100%',
			width: '100%',
			position: 'absolute',
			top: 0,
			left: 0,
			backgroundImage: 'linear-gradient(to right top, rgb(17, 90, 117), rgb(42, 115, 142), rgb(67, 140, 167), rgb(92, 165, 192), rgb(117, 190, 217))',
			opacity: 0.8,
			content: "''"
		},
		'& > *:not(img)': {
			zIndex: 1
		}
	},
	title: {
		fontSize: 120,
		fontWeight: 900,
		color: '#fff',
		letterSpacing: '55px',
		textTransform: 'uppercase',
		textShadow: `0 1px 0 #ccc,
               0 2px 0 #c9c9c9,
               0 3px 0 #bbb,
               0 4px 0 #b9b9b9,
               0 5px 0 #aaa,
               0 6px 1px rgba(0,0,0,.1),
               0 0 5px rgba(0,0,0,.1),
               0 1px 3px rgba(0,0,0,.3),
               0 3px 5px rgba(0,0,0,.2),
               0 5px 10px rgba(0,0,0,.25),
               0 10px 10px rgba(0,0,0,.2),
               0 20px 20px rgba(0,0,0,.15);`,
		margin: [0, -55, 20, 0]
	},
	subTitle: {
		fontSize: 24,
		fontWeight: 600,
		color: '#fff',
		letterSpacing: '2px',
		textShadow: '0px 2px 2px #606060',
		textAlign: 'center',
		lineHeight: 1.6
	},
	'@media screen and (max-width: 610px)': {
		title: {
			fontSize: 80
		},
		subTitle: {
			fontSize: 20
		}
	},
	'@media screen and (max-width: 470px)': {
		title: {
			fontSize: 50
		},
		subTitle: {
			fontSize: 16
		}
	}
});
