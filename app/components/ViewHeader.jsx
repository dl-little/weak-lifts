import { Text } from 'react-native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { Button } from 'react-native-elements';
import Row from './Row';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRoute } from '@react-navigation/native';
import Theme from '../Theme';

const ViewHeader = () => {
	const route = useRoute().name;
	
	return (
		<Row
			justifyContent='space-between'
			style={{
				...Theme.viewHeader,
				alignItems: 'center',
				backgroundColor: 'red',
			}}
		>
			<Text>{route}</Text>
			<Button
				onPress={() => FIREBASE_AUTH.signOut()}
				icon={
					<Ionicons
						name='log-out'
						style={{ fontSize: 32 }}
					/>
				}
				titleStyle={{
					opacity: 0,
					width: 0
				}}
				title="Sign Out"
				type="clear"
			/>
		</Row>
	);
}

export default ViewHeader;
