export default ({
	container: {
		width: '90%',
		maxWidth: 450,
		padding: [30, 40],
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	error: {
		fontSize: 14,
		textAlign: 'center',
		color: 'red',
		lineHeight: 1.4,
		marginBottom: 20
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
