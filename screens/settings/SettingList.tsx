import Colors from "@constants/Colors";
import { Text, View, Image, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native';

export const SettingList = () => {
  const navigation = useNavigation();
  return (
    <>
      <View>
        <View style={{ position: 'absolute', top: 15, left: 0, zIndex: 99, flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 20 }}>
          <TouchableOpacity
            style={{ backgroundColor: Colors.darkOverlayColor, borderRadius: 100, padding: 5}}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image source={require('@assets/icons/backArrow.png')} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}