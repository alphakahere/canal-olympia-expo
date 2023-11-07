import { StyleSheet, View } from "react-native";
import React from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselCardItem";
import colors from "../../config/colors";

const data = [
	{
		title: "Aenean leo",
		body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
		imgUrl: "https://picsum.photos/id/11/200/300",
	},
	{
		title: "In turpis",
		body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
		imgUrl: "https://picsum.photos/id/10/200/300",
	},
	{
		title: "Lorem Ipsum",
		body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
		imgUrl: "https://picsum.photos/id/12/200/300",
	},
];

export default function Carousels() {
	const [index, setIndex] = React.useState(0);
	const isCarousel = React.useRef(null);
	return (
		<View style={styles.container}>
			<Carousel
				layout="tinder"
				layoutCardOffset={9}
				ref={isCarousel}
				data={data}
				renderItem={CarouselCardItem}
				sliderWidth={SLIDER_WIDTH}
				itemWidth={ITEM_WIDTH}
				onSnapToItem={(index) => setIndex(index)}
				useScrollView={true}
			/>
			<Pagination
				dotsLength={data.length}
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
		padding: 50,
	},
});
