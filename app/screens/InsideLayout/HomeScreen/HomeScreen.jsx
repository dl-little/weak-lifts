import { Text, View, Button } from 'react-native';
import Theme from '../../../Theme';
import { FIREBASE_AUTH } from '../../../../FirebaseConfig';

const HomeScreen = (props) => {
	const { navigation } = props;
	return (
		<View style={Theme.container}>
		  <Text style={Theme.text}>Open up App.js to start working on your app!</Text>
		  <Button
		  	title="Profile"
			onPress={() => navigation.navigate('Profile')}
		  />
		  <Button
		  	title="Sign Out"
			onPress={() => FIREBASE_AUTH.signOut()}
		  />
		</View>
	);
}

export default HomeScreen;
