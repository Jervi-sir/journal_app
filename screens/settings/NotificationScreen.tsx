import { FlatList, View, Image, TouchableOpacity, Text } from "react-native"
import { useNavigation } from '@react-navigation/native';
import Colors from "@constants/Colors";

export const NotificationScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={{ height: 69, alignItems: 'center', justifyContent: 'center'}}>
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
        <Text style={{fontSize: 20, fontWeight: '800', textAlign: 'center'}}>Notifications</Text>
      </View>

      <View style={{marginHorizontal: 20, marginTop: 30}}>
        <FlatList
          data={[0, 2, 3, 4, 5]}
          progressViewOffset={10}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <NotificationCard />
          )}
          ItemSeparatorComponent={() => <View style={{ height: 2, backgroundColor: Colors.gray, marginVertical: 10, width: "100%" }} />}

        />
      </View>
    </>
  )
}

const NotificationCard = () => {
  return (
    <View style={{flexDirection: 'row', marginBottom: 10}}>
      <View>
        <Image source={require('@assets/previews/preview2.png')} style={{ marginRight: 10, width: 69, height: 69 }} />
      </View>
      <View style={{justifyContent: 'space-between', paddingVertical: 5}}>
        <Text style={{fontSize: 20, fontWeight: '700'}}>Title</Text>
        <Text style={{fontWeight: '400',}}>time</Text>
      </View>
    </View>
  )
}