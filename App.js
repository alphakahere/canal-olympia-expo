import AnimatedScreen from "./app/screens/AnimatedScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./app/screens/MainScreen";

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Intro">
				<Stack.Screen
					name="Intro"
					component={AnimatedScreen}
					initialParams={{
						nextScreen: "Main",
					}}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Main"
					component={MainScreen}
					options={{ headerShown: false }}
				/>
				{/* Add more screens here as needed */}
			</Stack.Navigator>
		</NavigationContainer>
	);
}
