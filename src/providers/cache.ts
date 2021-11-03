import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadCache = async <T extends unknown> (key: string): Promise<T|undefined> => {
    try {
        const stringfied = await AsyncStorage.getItem(key)

        return stringfied != null ? JSON.parse(stringfied) : undefined;

      } catch(error) {
        console.log(`Error loading cache: ${error}`);
      }
}

export const saveCache = async (key: string, object: any) => {
    const stringifyed = JSON.stringify(object);

    try {
        await AsyncStorage.setItem(key, stringifyed);
    }
    catch(error) {
        console.log(`Error saving cache ${key}: ${error}`);
    }
}