import { style } from "deprecated-react-native-prop-types/DeprecatedViewPropTypes";
import React from "react";
import { ImageBackground } from "react-native";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import colors from "../../config/colors";

export const SLIDER_WIDTH = Dimensions.get("window").width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const CarouselCardItem = ({ item, index }) => {
	const { image, name, tags } = item;
	return (
		<ImageBackground
			style={styles.container}
			key={index}
			resizeMode="cover"
			source={image}
		>
			<View style={styles.overlay}>
				<Text style={styles.name}>{name}</Text>
				<View style={styles.tagsContainer}>
					{tags.map((tag, i) => (
						<View key={i} style={styles.tagItem}>
							<Text style={styles.tagText}>
								{tag}
							</Text>
						</View>
					))}
				</View>
			</View>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	container: {
		borderRadius: 15,
		width: ITEM_WIDTH,
		height: 449,
		overflow: "hidden",
	},
	overlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: "rgba(0, 0, 0, .7)",
		justifyContent: "flex-end",
		alignItems: "flex-start",
		height: "100%",
		padding: 10,
	},
	name: {
		color: colors.lightGrey,
		fontSize: 24,
		fontWeight: "700",
	},
	tagsContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
	},
	tagItem: {
		backgroundColor: "rgba(255, 255, 255, 0.2)",
		borderRadius: 10,
		paddingHorizontal: 6,
		paddingVertical: 3,
	},
	tagText: {
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "600",
		color: colors.lightPurple,
	},
});

export default CarouselCardItem;
