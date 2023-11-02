import {
	StyleSheet,
	Text,
	View,
	Image,
	Modal,
	TouchableWithoutFeedback,
	TextInput,
} from "react-native";
import React, { useState } from "react";
import colors from "../config/colors";
import Button from "./Button";
import ButtonPopup from "./ButtonPopup";

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
			<Modal
				visible={isModalVisible}
				animationType="slide"
				transparent={true}
				onRequestClose={toggleVisible}
			>
				<TouchableWithoutFeedback onPress={toggleVisible}>
					<View style={styles.centeredView}>
						<View style={styles.modalView}>
							<Text style={styles.modalText}>
								Login !
							</Text>
							<Text style={styles.modalText}>
								Access to purchased tickets
							</Text>
							<TextInput
								placeholder="Phone number"
								keyboardType="phone-pad"
							/>
							<Button text="Continue" />
						</View>
					</View>
				</TouchableWithoutFeedback>
			</Modal>
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
	centeredView: {
		flex: 1,
	},
	modalView: {
		backgroundColor: "#0c208080",
		padding: 35,
		alignItems: "center",
		elevation: 5,
		width: "100%",
		height: 200,
		position: "absolute",
		bottom: 0,
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center",
	},
});
