import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import colors from "../config/colors";
import { Image } from "react-native";

export default function ButtonPopup({ text, image }) {
	return (
		<TouchableWithoutFeedback>
			<View style={styles.container}>
				<Image source={image} />
				<Text style={styles.text}>{text}</Text>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: { flexDirection: "row", alignItems: "center" },
	text: {
		color: colors.white,
		marginLeft: 5,
	},
});
