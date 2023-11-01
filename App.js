import {
	ImageBackground,
	StyleSheet,
	TouchableOpacity,
	View,
	Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "./app/config/colors";
import { useFonts } from "expo-font";

export default function App() {
	const [fontsLoaded] = useFonts({
		sora: require("./app/assets/fonts/Sora-Bold-700.ttf"),
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<View style={styles.container}>
			<ImageBackground
				source={require("./app/assets/images/splash.png")}
				style={styles.image}
				resizeMode="cover"
			>
				<LinearGradient
					colors={[
						"rgba(255, 255, 255, 0.00)",
						"rgba(10, 20, 69, 0.56)",
						"#0A1445",
					]}
					style={styles.gradient}
				>
					<TouchableOpacity style={styles.button}>
						<Text style={styles.text}>Commencez</Text>
					</TouchableOpacity>
				</LinearGradient>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	gradient: {
		flex: 1,
	},
	image: {
		flex: 1,
	},
	button: {
		backgroundColor: colors.primary,
		padding: 20,
		position: "absolute",
		width: "70%",
		bottom: 80,
		alignSelf: "center",
		borderRadius: 10,
	},
	text: {
		color: colors.white,
		fontSize: 20,
		textAlign: "center",
		fontFamily: "sora",
		fontWeight: "700",
	},
});
