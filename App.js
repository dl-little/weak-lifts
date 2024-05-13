import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
	Splash,
	SignIn,
	InsideLayout
} from './screens/';
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';

const Stack = createNativeStackNavigator();

export default function App() {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		onAuthStateChanged( FIREBASE_AUTH, (user) => {
			setUser(user)
		});
		setLoading(false)
	}, [])

	return !!loading ? (
		<Splash />
	) : (
		<NavigationContainer>
			<Stack.Navigator>
				{
					user 
						? (
							<Stack.Screen
								name="InsideLayout"
								component={InsideLayout}
								options={{ headerShown: false }}
							/>
						)
						: (
							<Stack.Screen
								name="SignIn"
								component={SignIn}
								options={{ title: 'Sign In' }}
							/>
						)
				}
			</Stack.Navigator>
		</NavigationContainer>
	)
}
