import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
	SignIn,
	InsideLayout
} from './app/screens';
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';

const Stack = createNativeStackNavigator();

export default function App() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		onAuthStateChanged( FIREBASE_AUTH, (user) => {
			setUser(user)
		});
	}, [])

	return (
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
						) : (
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
