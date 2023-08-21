import SearchIcon from '@assets/svg/SearchIcon'
import Colors from '@constants/Colors'
import { Icons } from '@constants/Icons'
import { View, Text, TouchableOpacity, Image } from 'react-native'

export const HeaderMenu = () => {
   return (
      <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, justifyContent: 'space-between', paddingTop: 15 }}>
         <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
            <View style={{ flexDirection: 'row' }}>
               <Text style={{ color: Colors.accent, fontWeight: '800', fontSize: 25 }}>Elwa3y</Text>
               <Text style={{ color: Colors.green2, fontWeight: '800', fontSize: 25 }}>News</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
               <TouchableOpacity style={{ backgroundColor: Colors.lightGrey, borderRadius: 100, padding: 7, marginRight: 15 }}>
                  <Image source={Icons.SEARCH} style={{ width: 20, height: 20 }} />
               </TouchableOpacity>
               <TouchableOpacity style={{ backgroundColor: Colors.lightGrey, borderRadius: 100, padding: 7 }}>
                  <Image source={Icons.NOTIFICATION} style={{ width: 20, height: 20 }} />
               </TouchableOpacity>
            </View>
         </View>
      </View>
   );
}