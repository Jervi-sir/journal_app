import { Text, View, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native"
import { useNavigation } from '@react-navigation/native';
import Colors from "@constants/Colors";

export const AboutScreen = () => {
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
        <Text style={{fontSize: 20, fontWeight: '800', textAlign: 'center'}}>About us</Text>
      </View>
      <ScrollView style={styles.container}>
      <View>
        <View />
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: Colors.accent, fontWeight: '800', fontSize: 25 }}>Elwa3y</Text>
          <Text style={{ color: Colors.green2, fontWeight: '800', fontSize: 25 }}>News</Text>
        </View>
        <Text style={styles.text}>
          Welcome to our News Journal mobile app! We are a trusted source of
          news, analysis, and commentary, delivering high-quality journalism to
          our readers. Our mission is to inform, engage, and inspire through
          comprehensive and accurate reporting.
        </Text>
        <Text style={styles.text}>
          Our team of experienced journalists and editors work tirelessly to
          bring you the latest news from around the world. We cover a wide
          range of topics, including politics, business, technology, culture,
          and more. Our aim is to provide you with relevant and insightful
          information to stay informed and make informed decisions.
        </Text>
        <Text style={styles.text}>
          We value transparency, objectivity, and ethical reporting. We are
          committed to holding ourselves accountable to our readers and
          upholding the highest standards of journalistic integrity.
        </Text>
        <Text style={styles.text}>
          Thank you for choosing us as your trusted news source. We appreciate
          your support and look forward to serving you with reliable and
          compelling journalism.
        </Text>
      </View>
    </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 150,
    width: 150,
    alignSelf: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'justify',
    marginTop: 20,
    marginBottom: 10,
  },
});
