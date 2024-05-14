import { Text, View } from 'react-native';
import Theme from '../../../Theme';
import { ViewHeader, Column } from '../../../components';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { IInsideLayout } from '../../interfaces';

const Profile: React.FC<BottomTabScreenProps<IInsideLayout, 'Profile'>> = ({route}) => {
	return (
		<>
			<ViewHeader route={route} />
			<Column style={Theme.container}>
				<Text style={Theme.text}>Profile</Text>
			</Column>
		</>
	);
}

export default Profile;
