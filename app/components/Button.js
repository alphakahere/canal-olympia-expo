import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../config/colors";

export default function Button({ text, onPress }) {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.primary,
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 8,
		shadowColor: "rgba(255, 128, 54, 0.25)",
		shadowOffset: 4,
		shadowRadius: 16,
	},
	text: {
		color: colors.white,
		fontSize: 14,
		fontWeight: "700",
	},
});
