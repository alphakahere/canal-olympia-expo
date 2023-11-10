import {
	FlatList,
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React from "react";
import Screen from "../components/Screen";
import StatusBar from "../components/StatusBar";
import colors from "../config/colors";
import TagsList from "../components/tags/TagsList";
import Carousels from "../components/carousels/Carousel";
import { films } from "../constants/data";
import { ScrollView } from "react-native";
import FilmCardItem from "../components/home/FilmCardItem";

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
				<ScrollView>
					<TagsList tags={tags} />
					<Carousels />
					<View style={styles.dateContainer}>
						<Text style={styles.date}>
							Semaine du 06-12 Nov
						</Text>
						<Image
							source={require("../assets/images/Glyph.png")}
						/>
					</View>
					<FlatList
						data={films.slice(2, 6)}
						numColumns={2}
						renderItem={({ item, index }) => (
							<FilmCardItem
								item={item}
								key={index}
							/>
						)}
					/>
				</ScrollView>
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
	dateContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 15,
	},
	date: {
		color: colors.white,
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "700",
	},
});
