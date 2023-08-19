import { StatusBarSpacer } from "@components/StatusBarSpacer";
import Colors from "@constants/Colors";
import { icons } from "@constants/Icons";
import { Image, View, Text, TouchableOpacity, Dimensions, ScrollView, RefreshControl } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRef, useState } from "react";
import { FlatList } from 'react-native';
import LottieView from 'lottie-react-native';
import arrowDownAnimation from '@assets/lottieFiles/arrowDown.json';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const { width } = Dimensions.get('window');

export const ArticleScreen = () => {
   const navigation = useNavigation();
   const [hideHeader, setHideHeader] = useState(false);

   const [isRefreshing, setIsRefreshing] = useState(false);

   const onRefresh = () => {
      setIsRefreshing(true)
      navigation.goBack();
   }


   return (
      <View style={{ minHeight: '100%', backgroundColor: Colors.white }}>
         <ActionTools />
         <FlatList
            data={[0]}
            progressViewOffset={10}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
               <ArticleDetails />
            )}
            ListFooterComponent={() => (
               <View style={{ width: '100%', backgroundColor: Colors.white }}>
                  <Text style={{ textAlign: 'center' }}>Elwa3y</Text>
                  <View style={{height: 123, }}>
                  </View>
               </View>
            )}
            ListHeaderComponent={() => (
               <View style={{ width, height: width, position: 'relative' }}>
                  <View style={{ position: 'absolute', top: 15, left: 0, zIndex: 99, flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 20}}>
                     <TouchableOpacity
                        style={{  backgroundColor: Colors.darkOverlayColor, borderRadius: 100, padding: 5, transform: [{ rotate: '-90deg' }] }}
                        onPress={() => {
                           navigation.goBack();
                        }}
                     >
                        <Image source={require('@assets/icons/backArrow.png')} style={{ width: 30, height: 30 }} />
                     </TouchableOpacity>
                     <TouchableOpacity
                        style={{ backgroundColor: Colors.darkOverlayColor, borderRadius: 100, padding: 5}}
                        onPress={() => {}}
                     >
                        <Icon name='share' size={ 30 } color={Colors.black} />
                     </TouchableOpacity>
                  </View>
                  
                  <Image source={require('@assets/previews/preview4.png')} style={{ width: '100%', height: '100%' }} />
               </View>
            )}
            refreshControl={
               <RefreshControl
                  refreshing={false}
                  colors={['transparent', 'transparent']}
                  progressBackgroundColor="transparent"
                  tintColor="transparent"
                  titleColor="transparent"

                  onRefresh={onRefresh}
               />
            }

         />
      </View>
   );
}

const ArticleDetails = () => {
   return (
      <View style={{ backgroundColor: Colors.white, flex: 1, marginTop: -25, padding: 20 }}>
         <View>
            <Text style={{ color: Colors.black, fontSize: 22, fontWeight: '600' }}>Title of the article</Text>
            <Text style={{ color: Colors.black, fontSize: 15, fontWeight: '400' }}>Category</Text>
         </View>
         <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10 }}>
            <View>
               <Text style={{ color: Colors.darkGrey }}>15min read</Text>
            </View>
            <View>
               <Text style={{ color: Colors.darkGrey }}>13 hours ago</Text>
            </View>
         </View>
         <View style={{ flex: 1 }}>
            <Text>
               content Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, dolore vitae! Aspernatur, doloremque ad voluptas at id iste quas facere commodi reprehenderit, odio labore molestiae. Officia quisquam fugit eum provident.
               content Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, dolore vitae! Aspernatur, doloremque ad voluptas at id iste quas facere commodi reprehenderit, odio labore molestiae. Officia quisquam fugit eum provident.
               content Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, dolore vitae! Aspernatur, doloremque ad voluptas at id iste quas facere commodi reprehenderit, odio labore molestiae. Officia quisquam fugit eum provident.
               content Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, dolore vitae! Aspernatur, doloremque ad voluptas at id iste quas facere commodi reprehenderit, odio labore molestiae. Officia quisquam fugit eum provident.
               content Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, dolore vitae! Aspernatur, doloremque ad voluptas at id iste quas facere commodi reprehenderit, odio labore molestiae. Officia quisquam fugit eum provident.
               content Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, dolore vitae! Aspernatur, doloremque ad voluptas at id iste quas facere commodi reprehenderit, odio labore molestiae. Officia quisquam fugit eum provident.
            </Text>
         </View>
      </View>
   );
}

const ActionTools = () => {
   return (
      <View style={{
         position: 'absolute', bottom: 50, width: '100%', zIndex: 99,
         justifyContent: 'center', alignItems: 'center',
      }}>
         <View style={{
            flexDirection: 'row', justifyContent: 'space-between', 
            paddingHorizontal: 20, paddingVertical: 10, width: '80%',
            backgroundColor: Colors.white,
            borderRadius: 100
         }}
         >
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
               <Icon name="heart" size={25} color={Colors.black} />
               <Text >1.3k</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
               <Icon name="comment" size={25} color={Colors.black} />
               <Text >1.3k</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
               <Icon name="headphones" size={25} color={Colors.black} />
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
               <Icon name="bookmark-outline" size={25} color={Colors.black} />
            </TouchableOpacity>
         </View>
      </View>

   );
}