import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import BottomTabs from './src/router/BottomTabs';

function App() {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}

export default App;
