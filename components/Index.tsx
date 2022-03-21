/** @format */

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Main from "./Main";
import Profile from "./Profile";
import React from "react";
import {
	Text,
	StyleSheet,
	View,
	Button,
	TouchableOpacity,
	Image,
	ScrollView,
} from "react-native";

const HomeScreen = ({ navigation }: any) => {
	return (
		<View>
			<Text style={styles.text}>
				{" "}
				Welcome to this simple app where you can see the most stared
				Github repos{" "}
			</Text>

			<View style={styles.box}>
				<TouchableOpacity
					onPress={() => navigation.navigate("Components")}
				>
					<Image
						source={{
							uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Star_empty.svg/1200px-Star_empty.svg.png",
						}}
						style={{ width: 150, height: 150 }}
					/>
					<Text>View Most stard Repos</Text>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => navigation.navigate("Profile")}
				>
					<Image
						source={{
							uri: "https://about.me/s3/h/z/social.2ec36ec3.png",
						}}
						style={{ width: 150, height: 150 }}
					/>

					<Text>Aboutme </Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};
const navigator = createStackNavigator(
	{
		Home: HomeScreen,
		Components: Main,
		Profile: Profile,
	},
	{
		initialRouteName: "Home",
		defaultNavigationOptions: {
			title: "Most stared Repos",
		},
	},
);

export default createAppContainer(navigator);

const styles = StyleSheet.create({
	text: {
		fontSize: 20,
	},
	box: {
		flex: 1,
		padding: 10,
		backgroundColor: "#fff",
		width: 200,
		height: 200,
		margin: 10,
		flexDirection: "column",
		flexWrap: "nowrap",
		justifyContent: "space-around",
		alignItems: "center",
	},
});
