/** @format */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AppRegistry } from "react-native";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
} from "@apollo/client";

// Initialize Apollo Client
const client = new ApolloClient({
	uri: "localhost:19002/graphql",
	cache: new InMemoryCache(),
});

const App = () => (
	<ApolloProvider client={client}>
		<View style={styles.container}>
			<Text>sucss</Text>
			<StatusBar style="auto" />
		</View>
	</ApolloProvider>
);

export default App;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
AppRegistry.registerComponent("MyApplication", () => App);
