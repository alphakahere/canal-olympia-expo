import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import colors from "../../config/colors";

export default function FilmCardItem({ item }) {
	return (
		<View style={styles.container}>
			<Image
				source={item.image}
				style={styles.image}
				alt="film image"
			/>
			<View style={styles.timeContainer}>
				<Text style={styles.time}>{item.time}</Text>
			</View>
			<Text style={styles.name}>{item.name}</Text>
			<Text style={styles.type}>{item.type}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderRadius: 8,
		position: "relative",
		margin: 10,
	},
	image: {
		borderRadius: 8,
		width: "100%",
		height: 230,
		objectFit: "cover",
		marginBottom: 10,
	},
	name: {
		color: colors.white,
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "700",
	},
	type: {
		color: "#637394",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "400",
	},
	timeContainer: {
		backgroundColor: colors.primary,
		borderRadius: 4,
		paddingVertical: 4,
		paddingHorizontal: 8,
		position: "absolute",
		top: 10,
		right: 10,
	},
	time: {
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "700",
		color: colors.white,
	},
});
