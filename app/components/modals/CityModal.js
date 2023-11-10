import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../config/colors";
import AppModal from "./AppModal";
import SeparatorComponent from "../SeparatorComponent";
import { cities } from "../../constants/data";
import AppTextInput from "../AppTextInput";

export default function CityModal({ isModalVisible, toggle }) {
	return (
		<AppModal isVisible={isModalVisible} toggle={toggle}>
			<View style={styles.searchContainer}>
				<Image
					source={require("../../assets/images/Glyph.png")}
					style={styles.searchIcon}
				/>
				<AppTextInput
					placeholder="Search"
					style={styles.textInput}
					placeholderTextColor="#637394"
				/>
			</View>
			<FlatList
				data={cities}
				ItemSeparatorComponent={SeparatorComponent}
				renderItem={({ item, index }) => (
					<Text style={styles.item} key={index}>
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
	searchContainer: { position: "relative" },
	searchIcon: {
		position: "absolute",
		top: 20,
		right: 0,
	},
});
