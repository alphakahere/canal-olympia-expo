import {
	ImageBackground,
	StyleSheet,
	TouchableOpacity,
	View,
	Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";

const MainScreen = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<ImageBackground
				source={require("../assets/images/splash.png")}
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
					<TouchableOpacity
						style={styles.button}
						onPress={() => {
							navigation.navigate("Home", {
								screen: "HomeScreen",
							});
							console.log("Hello");
						}}
					>
						<Text style={styles.text}>Commencez</Text>
					</TouchableOpacity>
				</LinearGradient>
			</ImageBackground>
		</View>
	);
};

export default MainScreen;

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
		fontWeight: "700",
	},
});
