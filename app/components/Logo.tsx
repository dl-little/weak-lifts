import { SvgXml } from 'react-native-svg';
import { ISVGImage } from './interfaces';

const Logo: React.FC<ISVGImage> = (props) => {
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

export default Logo;
