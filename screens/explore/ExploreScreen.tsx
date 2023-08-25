import { HeaderMenu } from "@components/HeaderMenu";
import { StatusBarSpacer } from "@components/StatusBarSpacer";
import { Text, View, StyleSheet } from "react-native";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Colors from "@constants/Colors";
import { CategoryScreen } from "./CategoryScreen";

const Tab = createMaterialTopTabNavigator();

export const ExploreScreen = () => {
	const lastTab = tabCollection[tabCollection.length - 1];

	return (
		<>
			<HeaderMenu />
			<View style={{ flex: 1, paddingHorizontal: 0 }}>
				<Tab.Navigator
					initialRouteName={lastTab.name}
					screenOptions={{
						lazy: true,
						tabBarScrollEnabled: true,
						tabBarContentContainerStyle: {
							//flexDirection: 'row-reverse',
						},
						tabBarStyle: {
							backgroundColor: 'transparent',
							elevation: 0,
						},
						tabBarLabelStyle: { padding: 0, margin: 0 },
						tabBarActiveTintColor: 'black',

						tabBarIndicatorStyle: {
							backgroundColor: Colors.greenMenu,
							flexDirection: 'row-reverse',
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
		name: 'مجتمع',
		category: 'Community',
	},{
		name: 'ثقافة',
		category: 'Culture',
	},{
		name: 'اقتصاد',
		category: 'Economy',
	},{
		name: 'سياسة',
		category: 'Politics',
	},{
		name: 'عاجل',
		category: 'Urgent',
	},
];