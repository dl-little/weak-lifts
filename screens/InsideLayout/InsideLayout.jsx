import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen/HomeScreen';
import Profile from './Profile/Profile';
import Ionicons from '@expo/vector-icons/Ionicons';
import {primary, gray} from '../Theme'

const InsideTab = createBottomTabNavigator();

const InsideLayout = () => {
	return (
		<InsideTab.Navigator
			screenOptions={({route}) => ({
				tabBarIcon: ({color, size}) => {
					let iconName;
					switch(route.name) {
						case 'Profile':
							iconName = 'person';
							break;
						default:
							iconName = 'home';
					}
					return <Ionicons name={iconName} size={size} color={color} />;
				},
				tabBarActiveTintColor: primary,
				tabBarInactiveTintColor: gray,
			})}
		>
			<InsideTab.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{ title: 'Home' }}
			/>
			<InsideTab.Screen name="Profile" component={Profile} />
		</InsideTab.Navigator>
	);
}

export default InsideLayout;
