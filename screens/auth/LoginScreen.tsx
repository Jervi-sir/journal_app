import { useState } from 'react';
import Colors from '@constants/Colors';
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView } from 'react-native';
import PasswordStrengthMeter from '@components/PasswordStrengthMeter ';
import { Title } from 'react-native-paper';
import { TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const LoginScreen = () => {
  const [text, setText] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Call API to login
  };

  return (
    <KeyboardAwareScrollView
      extraScrollHeight={20}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, backgroundColor: Colors.lightGrey, paddingHorizontal: 20, position: 'relative' }}>
          <View style={{ marginTop: 40 }}>
            <Text style={{ fontSize: 39, fontWeight: '700' }}>Welcome!</Text>
            <Text style={{ fontSize: 15, fontWeight: '400', marginVertical: 5 }}>Login to your account to use the app at full capacity</Text>
          </View>

          <SocialLogin />

          <View>
            <Text style={styles.label}>Phone Number</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Phone number"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
              />
            </View>
            <Text style={styles.label}>Password</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <Ionicons
                name={showPassword ? 'eye' : 'eye-off'}
                size={22}
                color="grey"
                onPress={() => setShowPassword(!showPassword)}
                style={{ paddingHorizontal: 20 }}
              />
            </View>
            <View>
              <TouchableOpacity style={{ justifyContent: 'flex-end', marginVertical: 10 }}>
                <Text style={{ textAlign: 'right', color: Colors.darkGrey, fontWeight: '500', textDecorationLine: 'underline' }}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 50 }}>
            <TouchableOpacity onPress={handleLogin} style={{ height: 40, justifyContent: 'center', backgroundColor: Colors.green, borderRadius: 100 }}>
              <Text style={{ textAlign: 'center', color: Colors.white, fontSize: 18, fontWeight: '600' }}>Login</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 20, marginBottom: 30 }}>
              <Text>Don't have an account? </Text>
              <TouchableOpacity>
                <Text style={{ color: Colors.black, fontWeight: '600', textDecorationLine: 'underline' }}>Sign Up</Text>
              </TouchableOpacity>
            </View>
            <View style={{ opacity: 0.5, flexDirection: 'column', alignItems: 'center' }}>
              <Text style={{ color: Colors.black }}>By Logging in, you agree to the </Text>
              <TouchableOpacity>
                <Text style={{ color: Colors.black, fontWeight: '600', textDecorationLine: 'underline' }}>Privacy Policy and Terms of Service</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  )
}

const AuthIcon = (props: any) => {
  return (
    <Ionicons
      name={props.name}
      size={props.size ? props.size : 24}
      color={Colors.white}
      style={{}}
    />
  );
};

const SocialLogin = () => {
  const styleSocial = StyleSheet.create({
    socialButton: {
      backgroundColor: Colors.green,
      paddingVertical: 10,
      alignItems: 'center',
      flex: 1,
      borderRadius: 100,
    },
  })
  return (
    <View style={{ marginTop: 0, marginBottom: 30 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 20 }}>
        <TouchableOpacity style={styleSocial.socialButton}>
          <AuthIcon name="logo-facebook" />
        </TouchableOpacity>
        <TouchableOpacity style={[styleSocial.socialButton, { marginHorizontal: 20 }]}>
          <AuthIcon name="logo-google" />
        </TouchableOpacity>
        <TouchableOpacity style={styleSocial.socialButton}>
          <AuthIcon name="logo-apple" />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.line}></View>
        <Text style={{ fontWeight: '700', fontSize: 15, marginHorizontal: 20 }}>or</Text>
        <View style={styles.line}></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    paddingLeft: 20,
    flex: 1
  },
  label: {
    fontSize: 17,
    fontWeight: '700',
    paddingVertical: 10
  },

  line: {
    backgroundColor: Colors.green,
    height: 2,
    flex: 1
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 100,
  }
})