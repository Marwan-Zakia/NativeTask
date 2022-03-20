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
// import dot env to get the environment variables
require("dotenv").config();
// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";

// Initialize Apollo Client
const client = new ApolloClient({
	uri: "https://api.github.com/graphql",
	headers: {
		authorization: `Bearer ${process.env.REACT_APP_GitHubToken}`,
	},
	cache: new InMemoryCache(),
});
console.log(process.env.REACT_APP_GitHubToken);

const App = () => (
	<ApolloProvider client={client}>
		<View style={styles.container}>
		
			<Content />

			<StatusBar style="auto" />
		</View>
	</ApolloProvider>
);
export default App;

// const navigator = createStackNavigator(
// 	{

// 		Home: Content,
// 	},
// 	{
// 		initialRouteName: "Home",
// 		defaultNavigationOptions: {
// 			title: "App",
// 		},
// 	},
// );

// export default createAppContainer(navigator);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
AppRegistry.registerComponent("MyApplication", () => App);
