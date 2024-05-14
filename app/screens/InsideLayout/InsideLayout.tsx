import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen/HomeScreen';
import Profile from './Profile/Profile';
import Ionicons from '@expo/vector-icons/Ionicons';
import {primary, gray} from '../../Theme'
import { IInsideLayout } from '../interfaces';

const InsideTab = createBottomTabNavigator<IInsideLayout>();

const InsideLayout = () => {
	return (
		<InsideTab.Navigator
			screenOptions={({route}) => ({
				tabBarIcon: ({color, size}) => {
					let iconName: 'person' | 'home';
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
				options={{
					title: 'Home'
				}}
				initialParams={{
					details: 'Overview'
				}}
			/>
			<InsideTab.Screen
				name="Profile"
				component={Profile}
				options={{
					title: 'Profile'
				}}
				initialParams={{
					details: 'Details about usage'
				}}
			/>
		</InsideTab.Navigator>
	);
}

export default InsideLayout;
