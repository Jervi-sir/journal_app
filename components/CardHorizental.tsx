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
         style={{ flexDirection: 'row-reverse', }}
         onPress={() => goToArticle(item.slug)}
      >
         <Image source={{ uri: item.thumbnail }} style={{ marginLeft: 11, width: 100, height: 100, borderRadius: 10 }} />
         <View style={{ flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
            <View>
               <Text style={{ textAlign: 'right', fontSize: 10, color: '#9c9c9c', paddingVertical: 5 }}>{ item.category }</Text>
               <Text style={{ textAlign: 'right', fontSize: 17, fontWeight: '800', paddingBottom: 10 }}>{ item.title }</Text>
            </View>
            <View style={{ flexDirection: 'row-reverse', paddingRight: 15, paddingVertical: 5, justifyContent: 'space-between' }}>
               <Text style={{ textAlign: 'right', fontSize: 12, fontWeight: '300' }}>{ item.uploaded_since }</Text>
               <Text style={{ textAlign: 'right', fontSize: 12, fontWeight: '300' }}>{ item.nb_seen } vue</Text>
            </View>
         </View>
      </TouchableOpacity>
   );
}