import { StyleSheet, View, Image } from "react-native";
import React, { useState } from "react";
import colors from "../config/colors";
import Button from "./Button";
import ButtonPopup from "./ButtonPopup";
import LoginModal from "./modals/LoginModal";
import CityModal from "./modals/CityModal";
import LanguageModal from "./modals/LanguageModal";
import { useShowModal } from "../utils/util";

export default function StatusBar() {
	const { isVisible, toggle } = useShowModal();
	const language = useShowModal();
	const city = useShowModal();

	return (
		<>
			<View style={styles.container}>
				<Image
					source={require("../assets/images/product-logo.png")}
				/>
				<ButtonPopup
					text="Dakar"
					image={require("../assets/images/location.png")}
					onPress={city.toggle}
				/>
				<ButtonPopup
					text="Eng"
					image={require("../assets/images/language.png")}
					onPress={language.toggle}
				/>
				<Button text="Login" onPress={toggle} />
			</View>
			<LoginModal isModalVisible={isVisible} toggle={toggle} />
			<CityModal
				isModalVisible={city.isVisible}
				toggle={city.toggle}
			/>
			<LanguageModal
				isModalVisible={language.isVisible}
				toggle={language.toggle}
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
