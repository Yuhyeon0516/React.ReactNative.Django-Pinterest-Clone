import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getToken() {
    const token = await AsyncStorage.getItem('Token');

    return token;
}

export async function setToken(token: string) {
    await AsyncStorage.setItem('Token', token);
}
