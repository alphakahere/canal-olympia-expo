import { StyleSheet, View, Image } from "react-native";
import React, { useState } from "react";
import colors from "../config/colors";
import Button from "./Button";
import ButtonPopup from "./ButtonPopup";
import LoginModal from "./LoginModal";

export default function StatusBar() {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const toggleVisible = () => {
		setIsModalVisible((isModalVisible) => !isModalVisible);
	};
	return (
		<>
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
				<Button text="Login" onPress={toggleVisible} />
			</View>
			<LoginModal
				isModalVisible={isModalVisible}
				toggle={toggleVisible}
			/>
		</>
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
