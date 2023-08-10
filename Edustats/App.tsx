import React from 'react';
import Navigation from './programma/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
function App(): JSX.Element {
  
  return (
    <NavigationContainer>
    <Navigation />
    </NavigationContainer>
  );
}


export default App;