import React, { useState } from 'react';
import { ActivityIndicator, TextInput, View, KeyboardAvoidingView } from 'react-native';
import Theme, { Logo, AppButton, Group, primary, secondary } from '../Theme'
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

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
			console.log('Sign in Error', error);
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
			console.log('Sign up Error', error);
		} finally {
			setLoading(false);
		}
	}

	return (
		<View style={Theme.container}>
			<KeyboardAvoidingView behavior='padding'>
				<Logo
					height={250}
					width={250}
					primary={primary}
					secondary={secondary}
				/>
				<Group
					flexDirection={'column'}
					gap={10}
					disabled={!!loading}
				>
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
					<Group
						flexDirection={'row'}
						justifyContent={'center'}
						gap={20}
					>
						<AppButton title='Login' onPress={signIn} disabled={!!loading} />
						<AppButton title='Sign Up' onPress={signUp} disabled={!!loading} />
					</Group>
					{ !!loading && (
						<ActivityIndicator
							size='large'
							color={primary}
							style={{
								position:'absolute',
								left:0,
								right:0,
								bottom:0,
								top:0,
							}}
						/>
					)}
				</Group>
			</KeyboardAvoidingView>
		</View>
	);
}

export default SignIn;
