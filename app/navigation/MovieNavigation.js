import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import AboutMovieScreen from "../screens/AboutMovieScreen";
import SessionMovieScreen from "../screens/SessionMovieScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Screen from "../components/Screen";
import {
	Image,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import style from "../config/style";
import colors from "../config/colors";

const Tab = createMaterialTopTabNavigator();

const BackButton = () => {
	const navigation = useNavigation();
	const goBack = () => {
		navigation.navigate("Main");
	};

	return (
		<TouchableWithoutFeedback onPress={goBack}>
			<Image
				source={require("../assets/images/chevron.png")}
				alt="button-back-icon"
			/>
		</TouchableWithoutFeedback>
	);
};

export default function MovieNavigation() {
	return (
		<Screen style={styles.container}>
			<NavigationContainer>
				<View style={styles.headeaContainer}>
					<BackButton />
					<Text style={style.textStyle}>Expendables</Text>
				</View>
				<Tab.Navigator
					screenOptions={{
						tabBarActiveTintColor: colors.primary,
						tabBarInactiveTintColor: colors.blueGray,
						tabBarLabelStyle: {
							fontSize: 16,
							fontWeight: "700",
						},
						tabStyle: { width: 150 },
						tabBarIndicatorContainerStyle: {
							backgroundColor:
								"rgba(12, 32, 128, 1)",
						},
						tabBarIndicatorStyle: {
							backgroundColor: colors.primary,
							height: 4,
						},
					}}
				>
					<Tab.Screen
						name="about"
						component={AboutMovieScreen}
					/>
					<Tab.Screen
						name="sessions"
						component={SessionMovieScreen}
					/>
				</Tab.Navigator>
			</NavigationContainer>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#rgba(12, 32, 128, 1)",
		margin: 0,
	},
	headeaContainer: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 20,
		margin: 0,
	},
});
