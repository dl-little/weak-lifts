import React, { useState, useRef, useEffect } from 'react';
import { ActivityIndicator, TextInput, View, KeyboardAvoidingView, Text } from 'react-native';
import Theme, { primary, secondary } from '../../Theme'
import { AppButton, Logo, Row, Column } from '../../components'
import { FIREBASE_AUTH } from '../../../FirebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const auth = FIREBASE_AUTH;
	const inputRef = useRef();

	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	const getErrorMessage = (code) => {
		switch(code) {
			case 'auth/invalid-email':
				return 'Invalid email.';
			case 'auth/missing-password':
				return 'Missing password.';
			case 'auth/invalid-credential':
				return 'No profile found with those credentials.';
			default:
				return 'Something went wrong. Please try again.';
		}
	}

	const signIn = async () => {
		setLoading(true);
		try {
			await signInWithEmailAndPassword(auth, email, password);
		} catch (error) {
			setErrorMessage(getErrorMessage(error.code));
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
			setErrorMessage(getErrorMessage(error.code))
		} finally {
			setLoading(false);
		}
	}

	return (
		<Column style={Theme.container}>
			<KeyboardAvoidingView behavior='padding'>
				<Logo
					height={200}
					width={200}
					primary={primary}
					secondary={secondary}
				/>
				<Column
					gap={10}
					disabled={!!loading}
				>
					<TextInput
						ref={inputRef}
						value={email}
						style={Theme.textInput}
						placeholder='Email'
						autoCapitalize='none'
						autoComplete='email'
						inputMode='email'
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
				</Column>
				<Row
					justifyContent='flex-end'
					gap={20}
				>
					<AppButton title='Login' onPress={signIn} disabled={!!loading} />
					<AppButton title='Sign Up' onPress={signUp} disabled={!!loading} />
				</Row>
				<Text aria-live='polite'
					style={{
						...Theme.errorMessage,
						opacity: !!errorMessage.length ? 1 : 0
					}}>
					{!!errorMessage.length ? errorMessage : '0'}
				</Text>
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
			</KeyboardAvoidingView>
		</Column>
	);
}

export default SignIn;
