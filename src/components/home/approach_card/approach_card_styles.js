export default ({
	container: {
		width: '90%',
		maxWidth: 450,
		padding: [30, 40],
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	textField: {
		'&:not(:last-child)': {
			marginBottom: 25
		}
	},
	button: {
		marginTop: 40
	}
});
