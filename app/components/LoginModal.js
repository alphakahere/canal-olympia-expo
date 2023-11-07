import {
	Modal,
	StyleSheet,
	Text,
	TextInput,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import React from "react";
import colors from "../config/colors";
import Button from "./Button";

export default function LoginModal({ isModalVisible, toggle }) {
	return (
		<Modal
			visible={isModalVisible}
			animationType="slide"
			transparent={true}
			onRequestClose={toggle}
		>
			<TouchableWithoutFeedback onPress={toggle}>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Text style={styles.title}>Login !</Text>
						<Text style={styles.subTitle}>
							Access to purchased tickets
						</Text>
						<TextInput
							placeholder="Phone number"
							keyboardType="phone-pad"
							style={styles.textInput}
							placeholderTextColor="#637394"
						/>
						<Button text="Login" />
					</View>
				</View>
			</TouchableWithoutFeedback>
		</Modal>
	);
}

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
	},
	modalView: {
		backgroundColor: "#0c208080",
		padding: 35,
		alignItems: "center",
		elevation: 5,
		width: "100%",
		height: 250,
		position: "absolute",
		bottom: 0,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
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
