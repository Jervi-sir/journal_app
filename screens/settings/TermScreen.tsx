import { Text, View, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native"
import { useNavigation } from '@react-navigation/native';
import Colors from "@constants/Colors";

export const TermScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={{ height: 69, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ position: 'absolute', top: 15, left: 0, zIndex: 99, flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 20 }}>
          <TouchableOpacity
            style={{ backgroundColor: Colors.darkOverlayColor, borderRadius: 100, padding: 5 }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image source={require('@assets/icons/backArrow.png')} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 20, fontWeight: '800', textAlign: 'center' }}>Terms of Usage</Text>
      </View>
      <ScrollView style={styles.container}>
        <Text style={styles.text}>
          By using our mobile app ("App"), you agree to comply with and be bound by the following terms and conditions of use. Please review these terms carefully. If you do not agree to these terms, you should not use this App.
        </Text>
        <Text style={styles.sectionTitle}>1. Acceptance of Agreement</Text>
        <Text style={styles.text}>
          You agree to the terms and conditions outlined in this Terms of Use Agreement ("Agreement") concerning our App. This Agreement constitutes the entire and only agreement between us and you, and supersedes all prior or contemporaneous agreements, representations, warranties, and understandings concerning the App and the subject matter of this Agreement.
        </Text>
        <Text style={styles.sectionTitle}>2. Content Ownership</Text>
        <Text style={styles.text}>
          All content included on our App, such as text, graphics, logos, images, and software, is the property of our organization or its content suppliers and protected by international copyright laws.
        </Text>
        <Text style={styles.sectionTitle}>3. Restrictions on Use</Text>
        <Text style={styles.text}>
          You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our App without our prior written consent.
        </Text>
        <Text style={styles.sectionTitle}>4. Limitation of Liability</Text>
        <Text style={styles.text}>
          In no event will we be liable for any direct, indirect, special, incidental, or consequential damages related to your use of or inability to use our App, including but not limited to lost profits, data loss, or business interruption.
        </Text>
        <Text style={styles.sectionTitle}>5. Changes to Terms</Text>
        <Text style={styles.text}>
          We may revise and update these terms of use from time to time at our sole discretion. All changes are effective immediately when we post them. Your continued use of the App following the posting of revised terms means that you accept and agree to the changes.
        </Text>
        <View style={{height: 140}}></View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingHorizontal: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 10,
  },
});