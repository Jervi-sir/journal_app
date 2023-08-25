import { useEffect, useState } from "react";
import { Text, Image, View, TouchableOpacity, StyleSheet } from "react-native";
import { Routes } from "@constants/Routes";
import Colors from "@constants/Colors";
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { getToken, removeToken, storeToken } from "@functions/Auth";
import axios from "axios";
import Api from "@constants/Api";

export const SettingScreen = () => {
   const navigation = useNavigation();
   const isFocused = useIsFocused();
   const [isLogged, setIsLogged] = useState(false);
   const [token, setToken] = useState(null);

   const checkToken = async () => {
      const apiToken = await getToken();
      setIsLogged(!!apiToken);  // Sets to true if apiToken exists, otherwise false
      setToken(apiToken);
   };

   const handleRemoveToken = async () => {
      await removeToken();
   };

   const handleLogout = () => {
      if(!token) return 0;
      
      axios.post(Api.base + Api.logout, {}, {
         headers: {
            'Authorization': 'Bearer ' + token
         }
      })
      .then(response => {
         if (response.status === 200) {
            handleRemoveToken();
            navigation.reset({
               index: 0,
               routes: [{ name: Routes.App }],
            });
         }
      })
      .catch(error => {
         console.error('Failed to log out', error);
      });


      
   };

   useEffect(() => {
      // This will run every time the screen gains or loses focus
      if (isFocused) {
         checkToken();
      }
   }, [isFocused]);

   return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
         <View style={{ marginTop: -169 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 30 }}>
               <Image source={require('@assets/profile.png')} />
               <Text style={{ fontWeight: '700', marginTop: 10 }}>Jervi Sir</Text>
            </View>
            
            <View>
               {!isLogged &&
                  <TouchableOpacity onPress={() => { navigation.navigate(Routes.Login) }}>
                     <Text style={styles.tab}>Login</Text>
                     <View style={styles.line}></View>
                  </TouchableOpacity>
               }
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
                  {isLogged && (
                     <View style={styles.line}></View>
                  )}
               </TouchableOpacity>
               {isLogged && (
                  <TouchableOpacity onPress={() => handleLogout()}>
                     <Text style={[styles.tab, { color: Colors.red }]}>Log Out</Text>
                  </TouchableOpacity>
               )}
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