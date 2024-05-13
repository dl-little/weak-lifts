import { View } from 'react-native';
import Theme from '../Theme';

const Group = (props) => {
	return (
		<View
			style={{
				...Theme.group,
				...(!!props.style && {
					...props.style
				}),
				...(!!props.justifyContent && {
					justifyContent: props.justifyContent
				}),
				...(!!props.gap && {
					gap: props.gap
				}),
				flexDirection: props.flexDirection,
				...(!!props.disabled && {
					opacity: .7
				}),
			}}
		>
			{props.children}
		</View>
	)
}

export default Group;