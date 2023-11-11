import React, { useRef } from "react";
import { Video } from "expo-av";
import { View, StyleSheet } from "react-native";

const VideoPlayer = () => {
	const videoRef = useRef(null);
	return (
		<View style={styles.container}>
			<Video
				ref={videoRef}
				source={require("../assets/videos/EXPEND4BLES_Trailer.mp4")}
				style={styles.video}
				useNativeControls
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 10,
	},
	video: {
		width: "100%",
		height: 200,
		borderRadius: 16,
	},
	button: {
		marginTop: 10,
	},
});

export default VideoPlayer;
