import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './Components/navigations/StackNavigation';
import LandState from './Components/context/land/LandState';

const App = () => {

  return (
    <LandState>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </LandState>
  );
};

export default App;