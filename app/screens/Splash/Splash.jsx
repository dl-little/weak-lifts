import { Text, View } from 'react-native';
import Theme, { Logo, primary, secondary } from '../../Theme';

const Splash = () => {
	return (
		<View style={Theme.container}>
			<Logo
				width={200}
				height={200}
				primary={primary}
				secondary={secondary}
			/>
			<Text>Weak Lifts</Text>
		</View>
	);
}

export default Splash;