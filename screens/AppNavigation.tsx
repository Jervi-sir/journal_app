import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {
  AnimatedTabBarNavigator,
  DotSize,
  TabElementDisplayOptions,
} from 'react-native-animated-nav-tab-bar';
import Icon from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { HomeScreen } from './home/HomeScreen';
import { ExploreScreen } from './explore/ExploreScreen';
import { BookmarkScreen } from './bookmark/BookmarkScreen';
import { WriteScreen } from './write/WriteScreen';
import Colors from '@constants/Colors';

const Tabs = AnimatedTabBarNavigator();

const Screen = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
`;

const TabBarIcon = (props: any) => {
  return (
    <Icon
      name={props.name}
      size={props.size ? props.size : 24}
      color={props.tintColor}
    />
  );
};

const TabMaterialIcons = (props: any) => {
  return (
    <MaterialIcons
      name={props.name}
      size={props.size ? props.size : 24}
      color={props.tintColor}
    />
  );
};

export default () => (
  <Tabs.Navigator
    initialRouteName="Discover"
    tabBarOptions={{
      activeTintColor: '#ffffff',
      inactiveTintColor: '#878787',
      activeBackgroundColor: Colors.greenMenu,
    }}
    appearance={{
      shadow: true,
      floating: true,
      whenActiveShow: TabElementDisplayOptions.ICON_ONLY,
      dotSize: DotSize.SMALL,
    }}
  >
    <Tabs.Screen
      name="Home"
      component={HomeScreen}
      options={{
        label: 'Home',
        tabBarIcon: ({focused, color}) => (
          <>
            <TabBarIcon focused={focused} tintColor={color} name="home" />
          </>
        ),
      }}
    />
    <Tabs.Screen
      name="Discover"
      component={ExploreScreen}
      options={{
        label: 'Explore',
        tabBarIcon: ({focused, color}) => (
          <>
            <TabMaterialIcons name="explore" tintColor={color} />
          </>
        ),
      }}
    />
    <Tabs.Screen
      name="Images"
      component={BookmarkScreen}
      options={{
        label: 'Saved',
        tabBarIcon: ({focused, color}) => (
        <>
          <TabBarIcon focused={focused} tintColor={color} name="bookmark" />
        </>
        ),
      }}
    />
    <Tabs.Screen
      name="Profile"
      component={WriteScreen}
      options={{
        label: 'Settings',
        tabBarIcon: ({focused, color}) => (
        <>
          <TabBarIcon focused={focused} tintColor={color} name="user" />
        </>
        ),
      }}
    />
  </Tabs.Navigator>
);