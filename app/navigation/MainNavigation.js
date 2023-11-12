import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/MainScreen";
import AnimatedScreen from "../screens/AnimatedScreen";
import HomeScreen from "../screens/HomeScreen";
import MovieNavigation from "./MovieNavigation";

const Stack = createStackNavigator();

export default function MainNavigation() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Intro">
				{/* <Stack.Screen
					name="Intro"
					component={AnimatedScreen}
					initialParams={{
						nextScreen: "Main",
					}}
					options={{ headerShown: false }}
				/> */}
				<Stack.Screeng
					name="Main"
					component={MainScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="MovieNavigation"
					component={MovieNavigation}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
