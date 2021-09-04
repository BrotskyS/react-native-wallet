import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './src/navigation/RootNavigator';
import {BottomTabNavigator} from './src/navigation/BottomTabNavigator';
import auth from '@react-native-firebase/auth';

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return null;
  }
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <BottomTabNavigator isAuth={Boolean(user)} />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
