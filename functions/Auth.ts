import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeToken = async (value) => {
  try {
    await AsyncStorage.setItem('@token', value)
  } catch (e) {
    // saving error
  }
}
