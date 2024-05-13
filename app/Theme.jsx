import { StyleSheet, DynamicColorIOS, TouchableOpacity, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

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
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
	group: {
		marginVertical: 10,
		width: '100%'
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
	}
});

export default Theme;

export const Group = (props) => {
	return (
		<View
			style={{
				...Theme.group,
				...(!!props.justifyContent && {
					justifyContent: props.justifyContent
				}),
				...(!!props.gap && {
					gap: props.gap
				}),
				flexDirection: props.flexDirection,
				...(!!props.disabled && {
					opacity: .7
				}),
			}}
		>
			{props.children}
		</View>
	)
}

export const Logo = (props) => {
	const xml = `
	<svg
		id="sw-js-blob-svg"
		viewBox="0 0 100 100"
		xmlns="http://www.w3.org/2000/svg"
		version="1.1"
		width="${props.width}"
		height="${props.height}"
	>
		<defs>
			<linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
				<stop id="stop1" stop-color="${props.secondary}" offset="0%"></stop>
				<stop id="stop2" stop-color="${props.primary}" offset="100%"></stop>
			</linearGradient>
		</defs>
		<path
			fill="url(#sw-gradient)"
			d="M20,10.6C14.8,20.4,-8,19.1,-14.3,8.6C-20.5,-1.8,-10.3,-21.4,1.1,-20.8C12.5,-20.1,25.1,0.8,20,10.6Z"
			width="100%"
			height="100%"
			transform="translate(50 50)"
			stroke-width="0"
			style="transition: all 0.3s ease 0s;"
			stroke="url(#sw-gradient)">
		</path>
	</svg>`;

    return <SvgXml style={{ alignSelf: 'center' }} xml={xml} />
}

export const AppButton = ({onPress, title, disabled}) => {
	return (
		<TouchableOpacity
			onPress={!disabled ? onPress : null}
			style={{
				...Theme.button,
				...(!!disabled && {
					...Theme.button.disabled
				})
			}}
			activeOpacity={0.7}
		>
			<Text style={Theme.button.text}>{title}</Text>
		</TouchableOpacity>
	);
}
