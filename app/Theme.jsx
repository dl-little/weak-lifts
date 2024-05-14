import { StyleSheet, DynamicColorIOS } from 'react-native';

export const primary = '#DCA315';
export const secondary = '#B5FF00';
export const contrast = '#1E1E1E';
export const lightgray = '#E8E8E8';
export const gray = '#747474';
export const darkgray = '#3A3A3A';

const Theme = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: DynamicColorIOS({
			dark: '#1E1E1E',
			light: '#E8E8E8',
		}),
		paddingHorizontal: 20
	},
	group: {
		width: '100%',
		display: 'flex',
	},
	column: {
		flexDirection: 'column',
	},
	row: {
		flexDirection: 'row',
		marginVertical: 10
	},
	viewHeader: {
		marginVertical: 0
	},
	text: {
		color: DynamicColorIOS({
			dark: '#E8E8E8',
			light: '#1E1E1E',
		}),
	},
	textInput: {
		height: 50,
		borderWidth: 1,
		borderRadius: 4,
		padding: 10,
		backgroundColor: '#FFFFFF'
	},
	button: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 40,
		borderWidth: 1,
		backgroundColor: DynamicColorIOS({
			dark: secondary,
			light: secondary,
		}),
		text: {
			color: contrast,
			fontWeight: 700
		},
		disabled: {
			pointerEvents: 'none',
		}
	},
	errorMessage: {
		color: 'red',
		textAlign: 'right',
	},
});

export default Theme;
