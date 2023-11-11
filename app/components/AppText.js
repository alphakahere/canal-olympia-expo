import { StyleSheet, Text } from "react-native";
import React from "react";
import colors from "../config/colors";

export default function AppText({ children, style, color }) {
	return (
		<Text
			style={[styles.text, style, { color: color ?? colors.white }]}
		>
			{children}
		</Text>
	);
}

const styles = StyleSheet.create({
	text: {
		fontSize: 20,
	},
});
