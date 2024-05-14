import { Text } from 'react-native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { Button } from 'react-native-elements';
import Row from './Row';
import Ionicons from '@expo/vector-icons/Ionicons';
import { primary } from '../Theme';
import { RouteProp } from '@react-navigation/native';
import { IInsideLayout } from '../screens/interfaces';

interface IViewHeader {
	route: RouteProp<IInsideLayout, keyof IInsideLayout>
}

const ViewHeader: React.FC<IViewHeader> = ({route}) => {
	const details = route.params?.details ?? 'Default';
	
	return (
		<Row
			style={{
				justifyContent: 'space-between',
				alignItems: 'center',
				backgroundColor: primary
			}}
		>
			<Text>{details}</Text>
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
