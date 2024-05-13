import { TouchableOpacity, Text } from 'react-native';
import Theme from '../Theme';

const AppButton = ({onPress, title, disabled}) => {
	return (
		<TouchableOpacity
			onPress={!disabled ? onPress : null}
			style={{
				...Theme.button,
				...(!!disabled && {
					...Theme.button.disabled
				})
			}}
			activeOpacity={0.7}
		>
			<Text style={Theme.button.text}>{title}</Text>
		</TouchableOpacity>
	);
}

export default AppButton;
