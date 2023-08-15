import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from '@screens/AppNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ArticleScreen } from '@screens/article/ArticleScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false}}>
          <Stack.Screen 
            name="App" 
            component={AppNavigation} 
          />
          <Stack.Screen 
            name="Article"
            component={ArticleScreen} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
/*
 
*/