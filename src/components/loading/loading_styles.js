export default {
	progress: {
		marginTop: 40,
		height: 80,
		width: '80%',
		border: '1px solid lightgray',
		borderRadius: 5
	},
	progressBar: {
		height: '100%',
		backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.05))',
		transition: '0.4s linear',
		transitionProperty: 'width, background-color'
	},
	container: {
		width: '100%'
	},
	progressPhrase: {
		padding: 40
	},
	progressContainer: {
		backgroundColor: '#f5f5f5',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	}
}
