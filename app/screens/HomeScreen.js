import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import StatusBar from "../components/StatusBar";
import colors from "../config/colors";
import TagsList from "../components/tags/TagsList";
import Carousels from "../components/carousels/Carousel";
import { films } from "../constants/data";
import { ScrollView } from "react-native";

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
					<View>
						<Text>Semaine du 06-12 Nov</Text>
						<Image
							source={require("../assets/images/Glyph.png")}
						/>
					</View>
					<FlatList
						data={films}
						numColumns={2}
						renderItem={({ item, index }) => (
							<View key={index}>
								<Image
									source={item.image}
									style={{
										height: 100,
										width: "100%",
									}}
								/>
								<View>
									<Text>{item.time}</Text>
								</View>
								<Text>{item.name}</Text>
								<Text>{item.type}</Text>
							</View>
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
});
