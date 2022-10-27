
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokedexScreen from './app/screens/pokedex-screen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="POKEMONS" component={PokedexScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;