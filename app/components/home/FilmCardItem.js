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
			<View>
				<Text>{item.time}</Text>
			</View>
			<Text style={styles.name}>{item.name}</Text>
			<Text style={styles.type}>{item.type}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "50%",
		marginRight: 10,
		borderRadius: 8,
		marginBottom: 15,
	},
	image: {
		borderRadius: 8,
		width: "100%",
		objectFit: "cover",
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
});
