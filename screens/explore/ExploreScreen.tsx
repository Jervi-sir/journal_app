import { HeaderMenu } from "@components/HeaderMenu";
import { StatusBarSpacer } from "@components/StatusBarSpacer";
import { Text, View, StyleSheet } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Colors from "@constants/Colors";
import { CategoryScreen } from "./CategoryScreen";

const Tab = createMaterialTopTabNavigator();

function HomeScreen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Home!</Text>
		</View>
	);
}

export const ExploreScreen = () => {
	return (
		<>
			<HeaderMenu />
			<View style={{ flex: 1, paddingHorizontal: 0 }}>
				<Tab.Navigator
					screenOptions={{
						lazy: true,
						tabBarScrollEnabled: true,
						tabBarStyle: {
							backgroundColor: 'transparent',
							elevation: 0,
						},
						tabBarLabelStyle: { padding: 0, margin: 0 },
						tabBarActiveTintColor: 'black',

						tabBarIndicatorStyle: {
							backgroundColor: Colors.greenMenu,
							borderRadius: 100, height: 4,
						},
						animationEnabled: true,
						swipeEnabled: true,

					}}
				>
					{tabCollection.map(tab => (
						<Tab.Screen
							key={tab.name}
							name={tab.name}
							component={CategoryScreen} // reuse same component
							initialParams={{ category: tab.category }}
							options={{
								tabBarActiveTintColor: Colors.greenMenu,
								tabBarInactiveTintColor: Colors.darkGrey
							}}

						/>
					))}
				</Tab.Navigator>
			</View>
		</>
	);
}


const styles = StyleSheet.create({
	tabBarItemStyle: {
		backgroundColor: '#DDD', borderRadius: 20, padding: 5, margin: 5
	}
})


const tabCollection = [
	{
		name: 'General',
		category: 'general',
	},
	{
		name: 'General2',
		category: 'general2',
	},
	{
		name: 'General3',
		category: 'general3',
	},
	{
		name: 'General4',
		category: 'general4',
	},
	{
		name: 'General5',
		category: 'general5',
	},
	{
		name: 'General6',
		category: 'general6',
	},
];