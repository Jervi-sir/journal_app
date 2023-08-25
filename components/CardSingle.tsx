import { Icons } from "@constants/Icons";
import { View, Image, Text, TouchableOpacity, Dimensions, Animated } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Colors from "@constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { useRef } from 'react'
import { Routes } from '@constants/Routes';

const { width } = Dimensions.get('window');


export const CardSingle = ({ item }) => {
   const navigation = useNavigation();
   const animatedValue = useRef(new Animated.Value(1)).current;

   const goToArticle = (slug) => {
      navigation.navigate(Routes.Article, { slug });
   };
   
   const handlePress = () => {
      Animated.timing(animatedValue, {
         toValue: 0,
         duration: 500,
         useNativeDriver: true,
      }).start(() => {
         navigation.navigate(Routes.Article);
      });
   };
   const transformStyle = {
      transform: [
         {
            scale: animatedValue.interpolate({
               inputRange: [0, 1],
               outputRange: [0.8, 1],
            }),
         },
         {
            translateY: animatedValue.interpolate({
               inputRange: [0, 1],
               outputRange: [-100, 0],
            }),
         },
      ],
   };

   return (
      <>
         <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => goToArticle(item.slug)}
            style={{ width, height: width, position: 'relative', borderTopRightRadius: 20, borderTopLeftRadius: 20, overflow: 'hidden' }}
         >
            <Animated.View style={[transformStyle]}>
               <Image source={{ uri: item.thumbnail }} style={{ marginRight: 10, width: '100%', height: '100%' , borderRadius: 10 }} />
               <LinearGradient
                  colors={['#3B3631', 'rgba(59, 54, 49, 0.00)']}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 0, y: 0 }}
                  style={{ position: 'absolute', bottom: 0, backgroundColor: Colors.darkOverlayColor, width: '100%', paddingVertical: 15, paddingHorizontal: 20, paddingBottom: 25 }}
               >
                  <Text style={{ fontSize: 20, fontWeight: '800', color: Colors.white, textAlign: 'right' }}>{ item.title }</Text>
               </LinearGradient>
            </Animated.View>
         </TouchableOpacity>
         <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15, paddingHorizontal: 20, alignItems: 'center' }}>
            <Text style={{ color: Colors.darkGrey }}>{ item.uploaded_since }</Text>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
               <Image source={Icons.COMMENT} style={{ width: 20, height: 20, marginRight: 5 }} />
               <Text >{ item.nb_comments }</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
               <TouchableOpacity style={{ marginRight: 10 }}>
                  <Image source={Icons.ARROWUP} style={{ width: 20, height: 20, }} />
               </TouchableOpacity>
               <Text style={{ marginRight: 10 }}>{ item.likes }</Text>
               <TouchableOpacity>
                  <Image source={Icons.ARROWDOWN} style={{ width: 20, height: 20, }} />
               </TouchableOpacity>
            </View>
         </View>
      </>
   );
}