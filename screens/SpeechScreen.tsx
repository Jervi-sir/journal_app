import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import * as Speech from 'expo-speech';

export const SpeechScreen = () => {

  const speak = () => {
    const thingToSay = '1';
    const options = {
      language: 'ar', // Set language to Arabic
    };
    Speech.speak(thingToSay, options);
  };

  return (
    <View style={styles.container}>
      <Button title="Press to hear some words" onPress={speak} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});