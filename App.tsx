import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './src/navigation/RootNavigator'
import {BottomTabNavigator} from './src/navigation/BottomTabNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <BottomTabNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
