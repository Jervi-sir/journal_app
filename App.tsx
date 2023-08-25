import React, { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from '@screens/AppNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ArticleScreen } from '@screens/article/ArticleScreen';
import { StatusBarSpacer } from '@components/StatusBarSpacer';
import { Routes } from '@constants/Routes';
import { LoginScreen } from '@screens/auth/LoginScreen';
import { RegisterScreen } from '@screens/auth/RegisterScreen';
import { Platform } from 'react-native';
import { initializeDB } from '@functions/SQLiteUtility';

const Stack = createNativeStackNavigator();
const currentPlatform = Platform.OS;

export default function App() {

	useEffect(() => {
		initializeDB();
	}, []);

	return (
		<SafeAreaProvider>
			<StatusBarSpacer />
				<NavigationContainer>
					<Stack.Navigator
						initialRouteName={Routes.App}
						screenOptions={{
							headerShown: false,
							gestureDirection: 'vertical',
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
							options={{
								presentation: currentPlatform == 'android' ? 'transparentModal' : 'modal',
								gestureEnabled: true,
							}}
						/>
						<Stack.Screen
							name={Routes.Register}
							component={RegisterScreen}
							options={{
								presentation: currentPlatform == 'android' ? 'transparentModal' : 'modal',
								gestureEnabled: true,
							}}
						/>
					</Stack.Navigator>
				</NavigationContainer>
		</SafeAreaProvider>
	);
}
