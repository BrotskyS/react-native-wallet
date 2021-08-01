import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomTabParamList, Sign, HomeTypes} from '../types';
import {Login} from '../screens/Sign/Login';
import {SignIn} from '../screens/Sign/SignIn';
import {SignUp} from '../screens/Sign/SignUp';
import {Home} from '../screens/Home/Home';
const BottomTab = createBottomTabNavigator<BottomTabParamList>();
export const BottomTabNavigator: React.FC = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name={'Sign'}
        component={SignNavigator}
        options={{
          tabBarVisible: false,
          tabBarButton: () => null,
        }}
      />
      <BottomTab.Screen name={'Home'} component={HomeNavigator} />
    </BottomTab.Navigator>
  );
};

const HomeStack = createStackNavigator<HomeTypes>();
function HomeNavigator() {
  return (
    <SignStack.Navigator screenOptions={{header: () => null}}>
      <HomeStack.Screen name={'Home'} component={Home} />
    </SignStack.Navigator>
  );
}

const SignStack = createStackNavigator<Sign>();
function SignNavigator() {
  return (
    <SignStack.Navigator screenOptions={{header: () => null}}>
      <SignStack.Screen name={'SignIn'} component={SignIn} />
      <SignStack.Screen name="Login" component={Login} />
      <SignStack.Screen name="SignUp" component={SignUp} />
    </SignStack.Navigator>
  );
}
