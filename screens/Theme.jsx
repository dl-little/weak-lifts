import { StyleSheet, DynamicColorIOS } from 'react-native';
import { SvgXml } from 'react-native-svg';

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
				<stop id="stop1" stop-color="${props.primary}" offset="0%"></stop>
				<stop id="stop2" stop-color="${props.secondary}" offset="100%"></stop>
			</linearGradient>
		</defs>
		<path
			fill="none"
			d="M15.4,-13.1C22.3,-3.6,31.9,2.9,30.8,6.7C29.7,10.5,17.8,11.4,7.4,17.1C-3,22.8,-12,33.2,-20,32.7C-28.1,32.3,-35.1,20.9,-35.2,10.8C-35.3,0.7,-28.4,-8.2,-21.4,-17.7C-14.3,-27.2,-7.2,-37.3,-1.5,-36.1C4.2,-34.9,8.5,-22.5,15.4,-13.1Z"
			width="100%"
			height="100%"
			transform="translate(50 50)"
			stroke-width="1"
			style="transition: all 0.3s ease 0s;"
			stroke="url(#sw-gradient)">
		</path>
	</svg>`;

    return <SvgXml xml={xml} />
}

const Theme = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: DynamicColorIOS({
			dark: '#1E1E1E',
			light: '#E8E8E8',
		}),
		justifyContent: 'center',
		padding: 20,
	},
	text: {
		color: DynamicColorIOS({
			dark: '#E8E8E8',
			light: '#1E1E1E',
		}),
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
