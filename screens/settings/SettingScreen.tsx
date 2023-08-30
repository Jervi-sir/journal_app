import { useEffect, useState } from "react";
import { Text, Image, View, TouchableOpacity, StyleSheet } from "react-native";
import { Routes } from "@constants/Routes";
import Colors from "@constants/Colors";
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { getToken, removeToken, storeToken } from "@functions/Auth";
import axios from "axios";
import Api from "@constants/Api";
import { Switch } from 'react-native';
import { Vibration } from 'react-native';
import * as Haptics from 'expo-haptics';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const SettingScreen = () => {
   const navigation = useNavigation();
   const isFocused = useIsFocused();
   const [isLogged, setIsLogged] = useState(false);
   const [token, setToken] = useState(null);
   const [isEnabled, setIsEnabled] = useState(false);

   const toggleSwitch = () => {
      setIsEnabled(!isEnabled);
   }

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
      <View >
         <View style={{position: 'absolute', top: 0, backgroundColor: Colors.green, width: '100%', height: '30%',}}></View>
         <View style={{ backgroundColor: Colors.white, borderRadius: 20, marginTop: 100, marginHorizontal: 20, paddingVertical: 20}}>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 30 }}>
               <Image source={require('@assets/profile.png')} />
               <Text style={{ fontWeight: '700', marginTop: 10 }}>Jervi Sir</Text>
            </View>
            
            <View>
               {!isLogged &&
                  <TouchableOpacity onPress={() => { navigation.navigate(Routes.Login) }}>
                     <View style={{flexDirection: 'row-reverse', justifyContent: 'space-between', paddingRight: 20, alignItems: 'center'}}>
                        <Text style={styles.tab}>تسجيل الدخول</Text>
                        <MaterialIcons name="arrow-back-ios" size={20} color={Colors.gray} />
                     </View>
                     <View style={styles.line}></View>
                  </TouchableOpacity>
               }
               <TouchableOpacity 
                  onPress={() => {
                     toggleSwitch();
                     Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
                  }}
               >
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, alignItems: 'center'}}>
                     <Switch
                        trackColor={{ false: "#767577", true: Colors.green }}
                        thumbColor={isEnabled ? Colors.lightOverlayColor : "#f4f3f4"}  
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                     />
                     <Text style={styles.tab}>خلفية مظلمة</Text>
                  </View>
                  <View style={styles.line}></View>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => { navigation.navigate(Routes.SettingList) }}>
                  <View style={{flexDirection: 'row-reverse', justifyContent: 'space-between', paddingRight: 20, alignItems: 'center'}}>
                     <Text style={styles.tab}>إعدادات</Text>
                     <MaterialIcons name="arrow-back-ios" size={20} color={Colors.gray} />
                  </View>
                  <View style={styles.line}></View>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => { navigation.navigate(Routes.Notifications) }}>
                  <View style={{flexDirection: 'row-reverse', justifyContent: 'space-between', paddingRight: 20, alignItems: 'center'}}>
                     <Text style={styles.tab}>إشعارات</Text>
                     <MaterialIcons name="arrow-back-ios" size={20} color={Colors.gray} />
                  </View>
                  <View style={styles.line}></View>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => { navigation.navigate(Routes.About) }}>
                  <View style={{flexDirection: 'row-reverse', justifyContent: 'space-between', paddingRight: 20, alignItems: 'center'}}>
                     <Text style={styles.tab}>معلومات عنا</Text>
                     <MaterialIcons name="arrow-back-ios" size={20} color={Colors.gray} />
                  </View>
                  <View style={styles.line}></View>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => { navigation.navigate(Routes.Terms) }}>
                  <View style={{flexDirection: 'row-reverse', justifyContent: 'space-between', paddingRight: 20, alignItems: 'center'}}>
                     <Text style={styles.tab}>شروط الاستخدام</Text>
                     <MaterialIcons name="arrow-back-ios" size={20} color={Colors.gray} />
                  </View>
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
      textAlign: 'right'
   },
   line: {
      height: 2,
      backgroundColor: Colors.gray,
      margin: 20,
      marginVertical: 10,
   }
})