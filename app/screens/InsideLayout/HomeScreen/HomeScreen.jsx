import { Text } from 'react-native';
import Theme from '../../../Theme';
import { ViewHeader, Group } from '../../../components';

const HomeScreen = () => {
	return (
		<Group
			flexDirection='column'
			style={{
				backgroundColor: 'green'
			}}
		>
			<ViewHeader />
			<Text style={Theme.text}>Home</Text>
		</Group>
	);
}

export default HomeScreen;
