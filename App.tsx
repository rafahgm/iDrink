import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import Tabs from './src/components/Tabs';

const App = () => {
  
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

export default App;
