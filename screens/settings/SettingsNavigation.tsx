
import { createStackNavigator } from '@react-navigation/stack';
import { SettingScreen } from './SettingScreen';
import { NotificationScreen } from './NotificationScreen';
import { AboutScreen } from './AboutScreen';
import { TermScreen } from './TermScreen';
import { SettingList } from './SettingList';
import { Routes } from '@constants/Routes';
import { AuthProvider } from '@wrapper/AuthProvider';

const Stack = createStackNavigator();

export const SettingsNaviation = () => {
  return (
    <AuthProvider>
      <Stack.Navigator
        initialRouteName={Routes.M4List}
        screenOptions={{
          headerShown: false,
          cardOverlayEnabled: true,
        }}
        detachInactiveScreens={true}

      >
        <Stack.Screen name={Routes.M4List} component={SettingScreen} />
        <Stack.Screen name={Routes.SettingList} component={SettingList} />
        <Stack.Screen name={Routes.Notifications} component={NotificationScreen} />
        <Stack.Screen name={Routes.About} component={AboutScreen} />
        <Stack.Screen name={Routes.Terms} component={TermScreen} />
      </Stack.Navigator>
    </AuthProvider>
  )
}
