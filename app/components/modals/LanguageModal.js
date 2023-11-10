import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../config/colors";
import AppModal from "./AppModal";
import { languages } from "../../constants/data";

export default function LanguageModal({ isModalVisible, toggle }) {
	return (
		<AppModal isVisible={isModalVisible} toggle={toggle}>
			<FlatList
				data={languages}
				ItemSeparatorComponent={
					<View style={styles.separator} />
				}
				renderItem={({ item }) => (
					<Text style={styles.item} key={item}>
						{item}
					</Text>
				)}
				style={{ width: "100%" }}
			/>
		</AppModal>
	);
}

const styles = StyleSheet.create({
	item: {
		textAlign: "center",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "400",
		color: colors.white,
		paddingVertical: 14,
	},
	separator: {
		width: "100%",
		backgroundColor: "rgba(109, 158, 255, 0.10)",
		height: 1,
	},
});
