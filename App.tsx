/** @format */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AppRegistry } from "react-native";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	gql,
	useQuery,
} from "@apollo/client";

import { REACT_APP_GitHubToken } from "@env";

 import Main from "./components/Main";
import Profile from "./components/Profile";
import Index from "./components/Index";
const client = new ApolloClient({
	uri: "https://api.github.com/graphql",
	headers: {
		Authorization: `Bearer ${REACT_APP_GitHubToken}`,
	},
	cache: new InMemoryCache(),
});

export default function App() {
	return (
		<ApolloProvider client={client}>
			<Index />
		</ApolloProvider>
	);
}

AppRegistry.registerComponent("MyApplication", () => App);
