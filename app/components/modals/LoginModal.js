import { StyleSheet, Text } from "react-native";
import React from "react";
import colors from "../../config/colors";
import Button from "../Button";
import AppModal from "./AppModal";
import AppTextInput from "../AppTextInput";

export default function LoginModal({ isModalVisible, toggle }) {
	return (
		<AppModal isVisible={isModalVisible} toggle={toggle}>
			<Text style={styles.title}>Login !</Text>
			<Text style={styles.subTitle}>
				Access to purchased tickets
			</Text>
			<AppTextInput
				placeholder="Phone number"
				keyboardType="phone-pad"
				style={styles.textInput}
				placeholderTextColor="#637394"
			/>
			<Button text="Login" />
		</AppModal>
	);
}

const styles = StyleSheet.create({
	title: {
		marginBottom: 10,
		textAlign: "center",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "700",
		color: colors.white,
	},
	subTitle: {
		textAlign: "center",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "400",
		color: colors.blueGray,
	},
});
