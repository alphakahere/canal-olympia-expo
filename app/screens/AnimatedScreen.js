import React, { useEffect, useRef } from "react";
import { View, Text, Animated, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../config/colors";

const AnimatedScreen = ({ route }) => {
	const navigation = useNavigation();
	const fadeAnim = useRef(new Animated.Value(0)).current;
	const slideAnim = useRef(new Animated.Value(100)).current;
	const backgroundColor = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Animated.sequence([
			Animated.timing(backgroundColor, {
				toValue: 1,
				duration: 1000,
				useNativeDriver: false,
			}),
			Animated.parallel([
				Animated.timing(fadeAnim, {
					toValue: 1,
					duration: 1000,
					useNativeDriver: true,
				}),
				Animated.timing(slideAnim, {
					toValue: 0,
					duration: 1000,
					useNativeDriver: true,
				}),
			]),
		]).start();
		setTimeout(() => {
			navigation.navigate(route.params.nextScreen);
		}, 3000);
	}, [
		backgroundColor,
		fadeAnim,
		navigation,
		route.params.nextScreen,
		slideAnim,
	]);

	const animatedBackgroundColor = backgroundColor.interpolate({
		inputRange: [0, 1],
		outputRange: [colors.white, colors.primary],
	});

	return (
		<Animated.View
			style={[
				styles.container,
				{ backgroundColor: animatedBackgroundColor },
			]}
		>
			<View style={styles.content}>
				<Animated.Image
					source={require("../assets/images/logo.png")}
					style={[
						{
							opacity: fadeAnim,
							transform: [
								{ translateX: slideAnim },
							],
						},
					]}
				/>
			</View>
		</Animated.View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default AnimatedScreen;
