import { useState } from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Routes } from "@constants/Routes";

export const SettingScreen = () => {
   const navigation = useNavigation();

   return (
      <>
         <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('@assets/profile.png')} />
            <Text style={{fontWeight: '700'}}>Jervi Sir</Text>
         </View>
         <View>
            <TouchableOpacity onPress={() => { navigation.navigate(Routes.SettingList) }}>
               <Text>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate(Routes.Notifications) }}>
               <Text>Notifications</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate(Routes.About) }}>
               <Text>About</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate(Routes.Terms) }}>
               <Text>Terms of Usage</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }}>
               <Text>Log Out</Text>
            </TouchableOpacity>
         </View>
            
      </>
   );
}