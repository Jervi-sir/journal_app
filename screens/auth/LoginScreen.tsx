import { useState } from 'react';
import Colors from '@constants/Colors';
import { StyleSheet, Text, View } from 'react-native';
import PasswordStrengthMeter from '@components/PasswordStrengthMeter ';
import { Button, TextInput, Title } from 'react-native-paper';
import { TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const LoginScreen = () => {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Call API to login
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1, backgroundColor: Colors.white, paddingHorizontal: 20 }}>
        <View style={{marginTop: 40}}>
          <Text style={{fontSize: 29, fontWeight: '700'}}>Welcome!</Text>
          <Text style={{fontSize: 15, fontWeight: '400', marginVertical: 5}}>Login to your account to use the app at full capacity</Text>
        </View>
        <View style={{marginTop: 10, marginBottom: 30}}>

          <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 20 }}>
            <TouchableOpacity style={styles.socialButton}>
              <AuthIcon name="logo-facebook" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.socialButton, {marginHorizontal: 20}]}>
              <AuthIcon name="logo-google" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <AuthIcon name="logo-apple" />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.line}></View>
            <Text style={{fontWeight: '700', fontSize: 15, marginHorizontal: 20}}>or</Text>
            <View style={styles.line}></View>
          </View>
        </View>
        <TextInput
          label="Phone Number"
          style={{ backgroundColor: Colors.white }}
          value={email}
          onChangeText={text => setEmail(text)}
          theme={{
            colors: {
              primary: Colors.green,
              secondary: Colors.black,
              background: Colors.white
            },
          }}
        />
        <TextInput
          label="Password"
          style={{ backgroundColor: Colors.white }}
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
          theme={{
            colors: {
              primary: Colors.green,
              secondary: Colors.black,
              background: Colors.white
            },
          }}
        />

        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <Button mode="contained" onPress={handleLogin} style={{ backgroundColor: Colors.green }}>
            Login
          </Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
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

const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.white
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 169,
  },
  socialButton: {
    backgroundColor: Colors.green,
    paddingVertical: 10,
    alignItems: 'center',
    flex: 1,
    borderRadius: 100,
  },
  line: {
    backgroundColor: Colors.green,
    height: 2,
    flex: 1
  }
})