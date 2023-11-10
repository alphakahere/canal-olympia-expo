import { StyleSheet, View } from "react-native";
import React from "react";

export default function SeparatorComponent() {
	return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
	separator: {
		width: "100%",
		backgroundColor: "rgba(109, 158, 255, 0.10)",
		height: 1,
	},
});
