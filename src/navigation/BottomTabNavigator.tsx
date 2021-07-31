import React  from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const BottomTab = createBottomTabNavigator();
import {Login} from '../screens/Login';
export const BottomTabNavigator: React.FC = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarVisible: false,
          tabBarButton: () => null,
        }}
      />
    </BottomTab.Navigator>
  );
};
