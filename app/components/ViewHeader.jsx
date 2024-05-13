import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { Button } from 'react-native-elements';
import Group from './Group'
import Ionicons from '@expo/vector-icons/Ionicons';

const ViewHeader = (props) => {
	return (
		<Group
			flexDirection='row'
			justifyContent='flex-start'
			style={{
				paddingLeft: 20,
				paddingRight: 20,
			}}
		>
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
		</Group>
	);
}

export default ViewHeader;
