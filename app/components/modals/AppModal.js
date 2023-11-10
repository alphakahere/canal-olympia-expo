import {
	Modal,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import React from "react";

export default function AppModal({ children, isVisible, toggle }) {
	return (
		<Modal
			visible={isVisible}
			animationType="slide"
			transparent={true}
			onRequestClose={toggle}
		>
			<TouchableWithoutFeedback onPress={toggle}>
				<View style={styles.centeredView}>
					<View
						style={[
							styles.modalView,
							{ height: "auto" },
						]}
					>
						{children}
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
		backgroundColor: "rgba(12, 32, 128, 1)",
		padding: 35,
		alignItems: "center",
		elevation: 10,
		width: "100%",
		position: "absolute",
		bottom: 0,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
});
