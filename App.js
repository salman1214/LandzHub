import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './Components/navigations/StackNavigation';

const App = () => {

  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;