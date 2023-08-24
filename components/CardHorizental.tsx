import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '@constants/Routes';

export const CardHorizental = ({ item }) => {
   const navigation = useNavigation();

   const goToArticle = (slug) => {
      navigation.navigate(Routes.Article, { slug });
   };

   return (
      <TouchableOpacity
         style={{ flexDirection: 'row', }}
         onPress={() => goToArticle(item.slug)}
      >
         <Image source={{ uri: item.thumbnail }} style={{ marginRight: 10, width: 100, height: 100, borderRadius: 10 }} />
         <View style={{ flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
            <View>
               <Text style={{ fontSize: 10, color: '#9c9c9c', paddingVertical: 5 }}>{ item.category }</Text>
               <Text style={{ fontSize: 17, fontWeight: '800', paddingBottom: 10 }}>{ item.title }</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingRight: 15, paddingVertical: 5, justifyContent: 'space-between' }}>
               <Text style={{ fontSize: 12, fontWeight: '300' }}>{ item.uploaded_since }</Text>
               <Text style={{ fontSize: 12, fontWeight: '300' }}>{ item.nb_seen } vue</Text>
            </View>
         </View>
      </TouchableOpacity>
   );
}