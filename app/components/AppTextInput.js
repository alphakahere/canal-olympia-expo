import { StyleSheet, TextInput } from "react-native";
import React from "react";
import colors from "../config/colors";

export default function AppTextInput({ ...rest }) {
	return <TextInput {...rest} style={styles.textInput} />;
}

const styles = StyleSheet.create({
	textInput: {
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "#6d9eff1a",
		borderRadius: 8,
		width: "100%",
		padding: 10,
		marginVertical: 15,
		color: colors.white,
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "200",
	},
});
