import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../config/colors";
import AppModal from "./AppModal";
import { languages } from "../../constants/data";
import SeparatorComponent from "../SeparatorComponent";

export default function LanguageModal({ isModalVisible, toggle }) {
	return (
		<AppModal isVisible={isModalVisible} toggle={toggle}>
			<FlatList
				data={languages}
				ItemSeparatorComponent={SeparatorComponent}
				renderItem={({ item }) => (
					<Text style={styles.item} key={item}>
						{item}
					</Text>
				)}
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
});
