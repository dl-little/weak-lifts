import React, { useState } from 'react';
import { ActivityIndicator, Button, TextInput, View, KeyboardAvoidingView } from 'react-native';
import Theme from '../Theme'
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { Logo } from '../Theme';

const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const auth = FIREBASE_AUTH;

	const signIn = async () => {
		setLoading(true);
		try {
			await signInWithEmailAndPassword(auth, email, password);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	}

	const signUp = async () => {
		setLoading(true);
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			alert('check your emails');
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	}

	return (
		<View style={Theme.container}>
			<KeyboardAvoidingView behavior='padding'>
				<Logo
					height={40}
					width={40}
					primary={'#DCA315'}
					secondary={'#B5FF00'}
				/>
				<TextInput
					value={email}
					style={Theme.textInput}
					placeholder='Email'
					autoCapitalize='none'
					onChangeText={(text) => setEmail(text)}
				/>
				<TextInput
					secureTextEntry={true}
					value={password}
					style={Theme.textInput}
					placeholder='Password'
					autoCapitalize='none'
					onChangeText={(text) => setPassword(text)}
				/>
				{
					loading 
						? <ActivityIndicator size='large' color='#0000FF' />
						: (
							<>
								<Button title='Login' onPress={signIn} />
								<Button title='Sign Up' onPress={signUp} />
							</>
						)
				}
			</KeyboardAvoidingView>
		</View>
	);
}

export default SignIn;
