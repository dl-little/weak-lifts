import { StyleSheet } from 'react-native';

const Theme = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#E8E8E8',
		justifyContent: 'center',
		padding: 20,
	},
	text: {
		color: '#1E1E1E',
	},
	textInput: {
		marginVertical: 4,
		height: 50,
		borderWidth: 1,
		borderRadius: 4,
		padding: 10,
		backgroundColor: '#FFFFFF'
	}
});

export default Theme;
