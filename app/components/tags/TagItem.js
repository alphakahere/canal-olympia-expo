import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../config/colors";

export default function TagItem({ tag, active }) {
	return (
		<View
			style={[
				styles.container,
				{ backgroundColor: active ? colors.white : "#1e2754" },
			]}
		>
			<Text
				style={[
					styles.text,
					{ color: active ? colors.dark : colors.white },
				]}
			>
				{tag}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 20,
		paddingVertical: 7,
		paddingHorizontal: 15,
		height: 35,
		marginRight: 8,
	},
	text: {
		fontSize: 14,
		fontWeight: 400,
	},
});
