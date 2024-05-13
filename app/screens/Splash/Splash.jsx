import { Text, View } from 'react-native';
import Theme, { primary, secondary } from '../../Theme';
import { Logo } from '../../components';

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