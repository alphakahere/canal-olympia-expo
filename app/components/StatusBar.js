import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import colors from "../config/colors";
import Button from "./Button";
import ButtonPopup from "./ButtonPopup";

export default function StatusBar() {
	return (
		<View style={styles.container}>
			<Image
				source={require("../assets/images/product-logo.png")}
			/>
			<ButtonPopup
				text="Dakar"
				image={require("../assets/images/location.png")}
			/>
			<ButtonPopup
				text="Eng"
				image={require("../assets/images/language.png")}
			/>
			<Button text="Login" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 10,
		backgroundColor: colors.blueLight,
	},
});
