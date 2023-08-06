import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './screens/home/HomeScreen';
import { BookmarkScreen } from './screens/bookmark/BookmarkScreen';
import { NavigationContainer } from '@react-navigation/native';
import { WriteScreen } from './screens/write/WriteScreen';
import { ExploreScreen } from './screens/explore/ExploreScreen';
import { icons } from "@constants/icons";
import AnimatedTabBar, {
  TabsConfig,
  BubbleTabBarItemConfig,
} from '@gorhom/animated-tabbar';
import HomeIcon from '@assets/icons/svg/menu/HomeIcon';
import ExploreIcon from '@assets/icons/svg/menu/ExploreIcon';
import BookmarkIcon from '@assets/icons/svg/menu/BookmarkIcon';
import WriteIcon from '@assets/icons/svg/menu/WriteIcon';

const Tab = createBottomTabNavigator();
const tabs = {
  Home: {
    labelStyle: {
      color: '#5B37B7',
    },
    icon: {
      component: HomeIcon,
      activeColor: 'rgba(91,55,183,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(223,215,243,1)',
      inactiveColor: 'rgba(223,215,243,0)',
    },
  },
  Explore: {
    labelStyle: {
      color: '#C9379D',
    },
    icon: {
      component: ExploreIcon,
      activeColor: 'rgba(201,55,157,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(247,215,243,1)',
      inactiveColor: 'rgba(247,215,243,0)',
    },
  },
  Bookmark: {
    labelStyle: {
      color: '#E6A919',
    },
    icon: {
      component: BookmarkIcon,
      activeColor: 'rgba(230,169,25,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(251,239,211,1)',
      inactiveColor: 'rgba(251,239,211,0)',
    },
  },
  Write: {
    labelStyle: {
      color: '#1194AA',
    },
    icon: {
      component: WriteIcon,
      activeColor: 'rgba(17,148,170,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(207,235,239,1)',
      inactiveColor: 'rgba(207,235,239,0)',
    },
  },
};


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBar={props => <AnimatedTabBar iconSize={20} tabs={tabs} {...props} />}
      >
        <Tab.Screen
          name="Home"
          initialParams={{
            backgroundColor: tabs.Home.labelStyle.color,
            nextScreen: 'Explore',
          }}
          component={HomeScreen}
        />
        <Tab.Screen
          name="Explore"
          initialParams={{
            backgroundColor: tabs.Explore.labelStyle.color,
            nextScreen: 'Bookmark',
          }}
          component={ExploreScreen}
        />
        <Tab.Screen
          name="Bookmark"
          initialParams={{
            backgroundColor: tabs.Bookmark.labelStyle.color,
            nextScreen: 'Write',
          }}
          component={BookmarkScreen}
        />
        <Tab.Screen
          name="Write"
          initialParams={{
            backgroundColor: tabs.Write.labelStyle.color,
            nextScreen: 'Home',
          }}
          component={WriteScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
