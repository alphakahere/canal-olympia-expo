import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import VideoPlayer from "../components/VideoPlayer";
import Button from "../components/Button";
import colors from "../config/colors";
import AppText from "../components/AppText";
import style from "../config/style";

const FilmDetailLine = ({ label, value }) => {
	return (
		<View
			style={{
				flexDirection: "row",
				alignItems: "flex-start",
				marginBottom: 5,
			}}
		>
			<AppText
				style={[style.normalText, { width: "30%" }]}
				color={colors.blueGray}
			>
				{label}
			</AppText>
			<AppText style={style.normalText} color={colors.blueGray}>
				{value}
			</AppText>
		</View>
	);
};

export default function AboutMovieScreen() {
	return (
		<>
			<ScrollView style={styles.content}>
				<VideoPlayer />
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						marginBottom: "",
					}}
				>
					<View style={{ marginBottom: 20 }}>
						<AppText style={style.boldText}>
							8.3
						</AppText>
						<AppText
							style={style.normalText}
							color={colors.blueGray}
						>
							IMDB
						</AppText>
					</View>
					<View>
						<AppText style={style.boldText}>
							7.3
						</AppText>
						<AppText
							style={style.normalText}
							color={colors.blueGray}
						>
							Kinopoisk
						</AppText>
					</View>
				</View>
				<View>
					<AppText
						style={[
							style.normalText,
							{ marginBottom: 12, lineHeight: 18 },
						]}
					>
						When the Riddler, a sadistic serial killer,
						begins murdering key political figures in
						Gotham, Batman is forced to investigate the
						city's hidden corruption and question his
						family's involvement.
					</AppText>
					<FilmDetailLine label="Certificate" value="16+" />
					<FilmDetailLine label="Runtime" value="02:56" />
					<FilmDetailLine label="Release" value="2023" />
					<FilmDetailLine label="Genre" value="" />
					<FilmDetailLine
						label="Director"
						value="Matt Reeves"
					/>
					<FilmDetailLine
						label="Cast"
						value="Robert Pattinson, Zoë Kravitz, Jeffrey Wright, Colin Farrell, Paul Dano, John Turturro, 	Andy Serkis, Peter Sarsgaard"
					/>
				</View>
			</ScrollView>
			<View style={styles.buttonContainer}>
				<Button text="Select Session" pv={16} />
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	content: {
		backgroundColor: colors.blueDark,
		paddingHorizontal: 10,
	},
	buttonContainer: {
		flex: 1,
		width: "100%",
		backgroundColor: "#rgba(12, 32, 128, 1)",
		paddingVertical: 18,
		position: "absolute",
		bottom: 0,
		paddingHorizontal: 10,
	},
});
