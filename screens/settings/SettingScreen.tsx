import { useEffect, useState } from "react";
import { Text, Image, View, TouchableOpacity, StyleSheet } from "react-native";
import { Routes } from "@constants/Routes";
import Colors from "@constants/Colors";
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useAuth } from "@wrapper/AuthProvider";
 
export const SettingScreen = () => {
   const { isLoggedIn } = useAuth();
   const navigation = useNavigation();
   const isFocused = useIsFocused();
 
   useEffect(() => {
     if (isFocused && !isLoggedIn) {
       navigation.navigate(Routes.Login);
     }
   }, [isFocused, isLoggedIn]);

   return (
      <View style={{flex:1, justifyContent:'center'}}>
         <View style={{marginTop: -169}}>
            <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 30}}>
               <Image source={require('@assets/profile.png')} />
               <Text style={{fontWeight: '700', marginTop: 10}}>Jervi Sir</Text>
            </View>
            <View>
               <TouchableOpacity onPress={() => { navigation.navigate(Routes.SettingList) }}>
                  <Text style={styles.tab}>Settings</Text>
                  <View style={styles.line}></View>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => { navigation.navigate(Routes.Notifications) }}>
                  <Text style={styles.tab}>Notifications</Text>
                  <View style={styles.line}></View>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => { navigation.navigate(Routes.About) }}>
                  <Text style={styles.tab}>About</Text>
                  <View style={styles.line}></View>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => { navigation.navigate(Routes.Terms) }}>
                  <Text style={styles.tab}>Terms of Usage</Text>
                  <View style={styles.line}></View>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => { }}>
                  <Text style={[styles.tab, {color: Colors.red}]}>Log Out</Text>
               </TouchableOpacity>
            </View>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   tab: {
      fontSize: 17,
      color: Colors.black,
      fontWeight: '700',
      padding: 10,
      margin: 20,
      marginVertical: 0,
      borderRadius: 10,
   },
   line: {
      height: 2,
      backgroundColor: Colors.gray,
      margin: 20,
      marginVertical: 10,
   }
})