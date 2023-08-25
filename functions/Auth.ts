import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeToken = async (value) => {
  try {
    await AsyncStorage.setItem('@api_token', value);
  } catch (e) {
    // Handle error
    console.error("Error storing token:", e);
  }
};

export const getToken = async () => {
  try {
    return await AsyncStorage.getItem('@api_token');
  } catch (e) {
    // Handle error
    console.error("Error fetching token:", e);
    return null;
  }
};

export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('@api_token');
  } catch (e) {
    // Handle error
    console.error("Error removing token:", e);
  }
};
