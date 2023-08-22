import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from '@screens/AppNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ArticleScreen } from '@screens/article/ArticleScreen';
import { StatusBarSpacer } from '@components/StatusBarSpacer';
import { Routes } from '@constants/Routes';
import { LoginScreen } from '@screens/auth/LoginScreen';
import { RegisterScreen } from '@screens/auth/RegisterScreen';

const Stack = createNativeStackNavigator();

export default function App() {

	return (
		<SafeAreaProvider>
			<StatusBarSpacer />
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName={Routes.Register}
					screenOptions={{
						headerShown: false,
						gestureDirection: 'vertical'
					}}
				>
					<Stack.Screen
						name={Routes.App}
						component={AppNavigation}
					/>
					<Stack.Screen
						name={Routes.Article}
						component={ArticleScreen}
					/>
					<Stack.Screen
						name={Routes.Login}
						component={LoginScreen}
					/>
					<Stack.Screen
						name={Routes.Register}
						component={RegisterScreen}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	);
}
/*

*/