import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";

export default function Screen({ children, style }) {
	return (
		<SafeAreaView style={[styles.screen, style]}>
			<ExpoStatusBar style="light" />
			{children}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		paddingTop: Constants.statusBarHeight,
	},
});
