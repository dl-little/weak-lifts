import { View } from 'react-native';
import Theme from '../Theme';
import { IGroup } from './interfaces';

const Row: React.FC<IGroup> = (props) => {
	return (
		<View
			style={[
				props.style,
				Theme.group,
				Theme.row,
				{
					opacity: !!props.disabled ? 0.7 : 1
				}
			]}
		>
			{props.children}
		</View>
	)
}

export default Row;
