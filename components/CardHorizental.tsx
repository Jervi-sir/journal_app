import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '@constants/Routes';

export const CardHorizental = () => {
   const navigation = useNavigation();

   return (
      <TouchableOpacity
         style={{ flexDirection: 'row', }}
         onPress={() => {
            navigation.navigate(Routes.Article);
         }}
      >
         <Image source={require('@assets/previews/preview2.png')} style={{ marginRight: 10 }} />
         <View style={{ flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
            <View>
               <Text style={{ fontSize: 10, color: '#9c9c9c', paddingVertical: 5 }}>Category</Text>
               <Text style={{ fontSize: 17, fontWeight: '800', paddingBottom: 10 }}>title</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 5, justifyContent: 'space-between' }}>
               <Text style={{ fontSize: 12, fontWeight: '300' }}>Date</Text>
               <Text style={{ fontSize: 12, fontWeight: '300' }}>nb vue</Text>
            </View>
         </View>
      </TouchableOpacity>
   );
}