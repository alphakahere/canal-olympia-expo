import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import AppText from "../components/AppText";
import SeparatorComponent from "../components/SeparatorComponent";
import colors from "../config/colors";
import style from "../config/style";

function SessionItem({ item }) {
	const { time, type, price, place } = item;
	return (
		<View
			style={{
				flexDirection: "row",
				alignItems: "center",
				paddingVertical: 10,
			}}
		>
			<View
				style={{
					borderRightWidth: 2,
					borderRightColor: "rgba(109, 158, 255, 0.10)",
					paddingRight: 10,
					marginRight: 10,
				}}
			>
				<AppText style={[style.boldText, { marginBottom: 5 }]}>
					{time}
				</AppText>
				<AppText
					style={style.normalText}
					color={colors.blueGray}
				>
					{type}
				</AppText>
			</View>
			<View>
				<AppText
					style={{
						fontWeight: "400",
						fontSize: 16,
						marginBottom: 8,
					}}
				>
					{place}
				</AppText>
				<AppText style={style.normalText}>{price}</AppText>
			</View>
		</View>
	);
}

const data = [...Array(10)].map((item, i) => {
	return {
		id: i,
		time: "11:00",
		type: i % 2 !== 0 ? "VF" : "VOSTFR",
		price: "2000 FCFA",
		place: "CanalOlympia Teranga, Dakar, Sénégal",
	};
});

export default function SessionMovieScreen() {
	return (
		<View style={styles.content}>
			<View style={styles.header}>
				<AppText style={styles.headerTitle} color="#637394">
					Time
				</AppText>
				<View style={styles.headerRight}>
					<AppText
						style={styles.headerTitle}
						color="#637394"
					>
						Pre. first
					</AppText>
					<AppText
						style={styles.headerTitle}
						color="#637394"
					>
						Pre. first
					</AppText>
					<AppText
						style={styles.headerTitle}
						color="#637394"
					>
						Child
					</AppText>
				</View>
			</View>
			<FlatList
				data={data}
				renderItem={({ item, index }) => (
					<SessionItem item={item} key={index} />
				)}
				ItemSeparatorComponent={SeparatorComponent}
				style={{ paddingHorizontal: 10 }}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	content: {
		backgroundColor: colors.blueDark,
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		padding: 10,
		backgroundColor: "#253554",
	},
	headerRight: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
	},
	headerTitle: {
		fontSize: 12,
		fontWeight: "400",
	},
});
