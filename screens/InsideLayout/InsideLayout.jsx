import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen/HomeScreen';
import Profile from './Profile/Profile';

const InsideStack = createNativeStackNavigator();

const InsideLayout = () => {
	return (
		<InsideStack.Navigator>
			<InsideStack.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{ title: 'Home' }}
			/>
			<InsideStack.Screen name="Profile" component={Profile} />
		</InsideStack.Navigator>
	);
}

export default InsideLayout;
