import { TextInput } from 'react-native-paper';
import { useState } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import PasswordStrengthMeter from '@components/PasswordStrengthMeter ';

export const RegisterScreen = () => {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <TextInput
        label="Phone Number"
        right={<TextInput.Icon icon="eye" />}
      />
      <TextInput
        label="Password"
        secureTextEntry
        right={<TextInput.Icon icon="eye" />}
      />
      <PasswordStrengthMeter 
        password={password} 
      />
    </>
  )
}
