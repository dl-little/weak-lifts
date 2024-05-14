import { View } from 'react-native';
import Theme from '../Theme';

const Row = (props) => {
	return (
		<View
			style={{
				...Theme.group,
				...Theme.row,
				...(!!props.style && {
					...props.style
				}),
				...(!!props.justifyContent && {
					justifyContent: props.justifyContent
				}),
				...(!!props.gap && {
					gap: props.gap
				}),
				...(!!props.disabled && {
					opacity: .7
				}),
			}}
		>
			{props.children}
		</View>
	)
}

export default Row;
