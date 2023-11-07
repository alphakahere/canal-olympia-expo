import { StyleSheet, View } from "react-native";
import React from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselCardItem";
import colors from "../../config/colors";
import { films } from "../../constants/data";

export default function Carousels() {
	const [index, setIndex] = React.useState(0);
	const isCarousel = React.useRef(null);
	return (
		<View style={styles.container}>
			<Carousel
				layout="default"
				layoutCardOffset={9}
				ref={isCarousel}
				data={films}
				renderItem={CarouselCardItem}
				sliderWidth={SLIDER_WIDTH}
				itemWidth={ITEM_WIDTH}
				onSnapToItem={(index) => setIndex(index)}
				useScrollView={true}
			/>
			<Pagination
				dotsLength={films.length}
				activeDotIndex={index}
				carouselRef={isCarousel}
				dotStyle={{
					width: 10,
					height: 10,
					borderRadius: 5,
					marginHorizontal: 0,
					backgroundColor: colors.white,
					opacity: 0.2,
				}}
				inactiveDotOpacity={0.4}
				inactiveDotScale={1}
				tappableDots={true}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 50,
		position: "absolute",
		top: 80,
		left: -100,
	},
});
