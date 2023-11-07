import { StyleSheet, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import StatusBar from "../components/StatusBar";
import colors from "../config/colors";
import TagsList from "../components/tags/TagsList";
import Carousels from "../components/carousels/Carousel";

const tags = [
	"News",
	"Populars",
	"Trendings",
	"Top Picks for You",
	"Recently Added",
	"Action & Adventure",
	"Comedies",
	"Dramas",
	"Horror Movies",
	"Documentaries",
];

export default function HomeScreen() {
	return (
		<Screen>
			<StatusBar />
			<View style={styles.main}>
				<TagsList tags={tags} />
				<Carousels />
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: colors.blueDark,
		padding: 10,
	},
});
