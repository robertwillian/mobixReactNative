import 'react-native-gesture-handler';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Authentication from './src/views/Authentication';
import PokemonList from './src/views/PokemonList';
import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Theme } from 'react-native-paper/lib/typescript/types';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from './src/store';
import PokemonDetails from './src/views/PokemonDetails';



const fontConfig = {
  android: {
    regular: {
      fontFamily: 'Spartan-Regular',
      fontWeight: '400'
    },
    medium: {
      fontFamily: 'Spartan-Medium',
      fontWeight: "500",
    },
    light: {
      fontFamily: 'Spartan-Light',
      fontWeight: "300",
    },
    thin: {
      fontFamily: 'Spartan-Thin',
      fontWeight: "100",
    },
  }
}

const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2E6EB5',
    background: '#FFFFFF',
    text: '#000'
  },
  fonts: configureFonts(fontConfig)
}

export type IRootStackInterface = {
  Authentication: undefined;
  PokemonList: undefined;
  PokemonDetails: {name: string;}
};

const Stack = createNativeStackNavigator<IRootStackInterface>();

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <Provider store={store}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name={"Authentication"} component={Authentication} />
              <Stack.Screen name={"PokemonList"} component={PokemonList} />
              <Stack.Screen name={"PokemonDetails"} component={PokemonDetails} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    </PaperProvider>
  );
};

export default App;
