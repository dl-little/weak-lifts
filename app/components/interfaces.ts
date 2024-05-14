import { View } from "react-native";

export interface IGroup extends React.ComponentProps<typeof View> {
	justifyContent?: string;
	gap?: number;
	disabled?: boolean;
}

export interface ISVGImage {
	width: number;
	height: number;
	secondary: string;
	primary: string;
}
