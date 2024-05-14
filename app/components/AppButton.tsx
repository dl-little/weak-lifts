import { TouchableOpacity, Text } from 'react-native';
import Theme, { contrast } from '../Theme';

interface IAppButton {
	onPress: () => Promise<void>;
	title: string;
	disabled: boolean;
}

const AppButton: React.FC<IAppButton> = ({onPress, title, disabled}) => {
	return (
		<TouchableOpacity
			onPress={!disabled ? onPress : undefined}
			style={Theme.button}
			activeOpacity={0.7}
			disabled={disabled}
		>
			<Text
				style={{
					color: contrast,
					fontWeight: "700"
				}}
			>
				{title}
			</Text>
		</TouchableOpacity>
	);
}

export default AppButton;
