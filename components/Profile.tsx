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
import { Myqurey } from "./consts";
export default function Profile() {
	const { data, loading, error, startPolling, stopPolling } =
		useQuery(Myqurey, { pollInterval: 1000 });
	stopPolling();

	let Newdata = data?.viewer?.name;
	let img = data?.viewer?.avatarUrl;
	let totalCount = data?.viewer?.repositories?.totalCount;

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Text>About me</Text>
			<View style={styles.card}>
				<Image
					source={{ uri: img }}
					style={{ width: 100, height: 100 }}
				/>
				<Text style={styles.text}>{Newdata}</Text>
				<Text> Repositories count: {totalCount}</Text>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		height: "100px",
	},
	card: {
		flex: 1,
		textAlign: "left",
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		width: "50vw",
		height: "100px",
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
	},
	text: {
		fontSize: 20,
		textAlign: "left",
	},
});
