/** @format */

import {
	View,
	Text,
	StyleSheet,
	FlatList,
	Image,
	ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { gql, useQuery } from "@apollo/client";
import { newQuery } from "./consts";

export default function Main() {
	const { data, loading, error, startPolling, stopPolling } =
		useQuery(newQuery, { pollInterval: 1000 });
	stopPolling();

	let Newdata  = data?.search?.edges;

	return (
		<ScrollView
			horizontal
			showsVerticalScrollIndicator={false}
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={{
				flexDirection: "row",
				flexWrap: "wrap",
			}}
		>
			<StatusBar style="auto" />
	
			<FlatList
				data={Newdata}
				numColumns={2}
				keyExtractor={(item) => item.node.name}
				renderItem={({ item }) => {
					return (
						<>
							<View style={styles.card}>
								<Image
									source={{ uri: item.node.openGraphImageUrl }}
									style={{ width: "100%", height: 150 }}
								/>
								<Text style={styles.text}>{item.node.name}</Text>
								<Text>{item.node.description}</Text>
								<Text> ⭐🔢 : {item.node.stargazers.totalCount}</Text>
								<Text> issues : {item.node.issues.totalCount}</Text>
							</View>
						</>
					);
				}}
			/>

			<StatusBar style="auto" />
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
	},
	card: {
		flex: 1,
		textAlign: "left",
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",

		width: "10rem",
		// height: "30%",
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,

		margin: 10,
		padding: 10,
	},
	text: {
		fontSize: 20,
		textAlign: "left",
	},
});
