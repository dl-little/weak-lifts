import { Text } from 'react-native';
import Theme from '../../../Theme';
import { ViewHeader, Column } from '../../../components';

const HomeScreen = () => {
	return (
		<Column>
			<ViewHeader />
			<Text style={Theme.text}>Home</Text>
		</Column>
	);
}

export default HomeScreen;
