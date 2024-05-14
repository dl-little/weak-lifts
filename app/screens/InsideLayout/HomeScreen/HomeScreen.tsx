import { Text } from 'react-native';
import Theme from '../../../Theme';
import { ViewHeader, Column } from '../../../components';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { IInsideLayout } from '../../interfaces';

const HomeScreen: React.FC<BottomTabScreenProps<IInsideLayout, 'HomeScreen'>> = ({route}) => {
	return (
		<>
			<ViewHeader route={route} />
			<Column style={Theme.container}>
				<Text style={Theme.text}>Home</Text>
			</Column>
		</>
	);
}

export default HomeScreen;
