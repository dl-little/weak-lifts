import { Text, View } from 'react-native';
import Theme from '../Theme'

export default function HomeScreen( props ) {
	const { navigation } = props;
	return (
		<View style={Theme.container}>
		  <Text>Open up App.js to start working on your app!</Text>
		</View>
	);
}
