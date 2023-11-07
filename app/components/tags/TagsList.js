import { ScrollView } from "react-native";
import React from "react";
import TagItem from "./TagItem";

export default function TagsList({ tags }) {
	return (
		<ScrollView horizontal>
			{tags?.map((item, index) => (
				<TagItem
					key={item + index}
					tag={item}
					active={index === 0}
				/>
			))}
		</ScrollView>
	);
}
