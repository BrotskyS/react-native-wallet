import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {BottomTabParamList, HomeTypes, SignTypes} from '../types';
import {Sign} from '../screens/OnBoarding/Sign';
import {SignUp} from '../screens/OnBoarding/SignUp';
import {Verification} from '../screens/OnBoarding/Verification';
import {PinCode} from '../screens/OnBoarding/PinCode';
import {PinCode2} from '../screens/OnBoarding/PinCode2';
import {SetupStart} from '../screens/OnBoarding/SetupStart';
import {Home} from '../screens/Home/Home';
import HomeIco from '../../assets/img/Home.svg';
import Transaction from '../../assets/img/Transaction.svg';
import Budget from '../../assets/img/budget.svg';
import Profile from '../../assets/img/profile.svg';
const BottomTab = createBottomTabNavigator<BottomTabParamList>();
import {HeaderComponent} from './HeaderNavigator';
const screenOptions: StackNavigationOptions = {
  header(props) {
    return <HeaderComponent {...props} />;
  },
};

interface Iprops {
  isAuth: boolean;
}
export const BottomTabNavigator = ({isAuth}: Iprops) => {
  const icons: any = {
    onBoarding: null,
    Home: HomeIco,
    Transaction: Transaction,
    Add: HomeIco,
    Budget: Budget,
    Profile: Profile,
  };
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        activeTintColor: '#7F3DFF',
        inactiveTintColor: 'gray',

        style: {backgroundColor: '#fff'},
      }}
      initialRouteName={isAuth ? 'Home' : 'onBoarding'}
      screenOptions={({route}) => {
        const Icon = icons[route.name];
        return {
          ...screenOptions,
          cardStyle: {backgroundColor: '#fff'},
          textColor: 'red',
          tabBarIcon: p => (
            <Icon size={36} fill={p.focused ? '#7F3DFF' : '#C6C6C6'} />
          ),
        };
      }}>
      <BottomTab.Screen
        name={'Home'}
        component={HomeNavigator}
        options={
          {
            // tabBarVisible: false,
            // tabBarButton: () => null,
          }
        }
      />
      <BottomTab.Screen
        name={'Transaction'}
        component={HomeNavigator}
        options={
          {
            // tabBarVisible: false,
            // tabBarButton: () => null,
          }
        }
      />
      <BottomTab.Screen
        name={'onBoarding'}
        component={OnBoardingNavigator}
        options={{
          tabBarVisible: false,
          tabBarButton: () => null,
        }}
      />
      <BottomTab.Screen
        name={'Add'}
        component={HomeNavigator}
        options={
          {
            // tabBarVisible: false,
            // tabBarButton: () => null,
          }
        }
      />
      <BottomTab.Screen
        name={'Budget'}
        component={HomeNavigator}
        options={
          {
            // tabBarVisible: false,
            // tabBarButton: () => null,
          }
        }
      />
      <BottomTab.Screen
        name={'Profile'}
        component={HomeNavigator}
        options={
          {
            // tabBarVisible: false,
            // tabBarButton: () => null,
          }
        }
      />
    </BottomTab.Navigator>
  );
};

const OnBoardingStack = createStackNavigator<SignTypes>();
function OnBoardingNavigator() {
  return (
    <OnBoardingStack.Navigator
    // screenOptions={{header: () => null}}
    // screenOptions={screenOptions}
    >
      <OnBoardingStack.Screen
        name={'Sign'}
        component={Sign}
        options={{header: () => null}}
      />
      <OnBoardingStack.Screen name={'SignUp'} component={SignUp} />
      <OnBoardingStack.Screen name={'Verification'} component={Verification} />
      <OnBoardingStack.Screen
        name={'PinCode'}
        component={PinCode}
        options={{header: () => null, gestureEnabled: false}}
      />
      <OnBoardingStack.Screen
        name={'PinCode2'}
        component={PinCode2}
        options={{header: () => null}}
      />
      <OnBoardingStack.Screen
        name={'SetupStart'}
        component={SetupStart}
        options={{header: () => null, gestureEnabled: false}}
      />
    </OnBoardingStack.Navigator>
  );
}

const HomeStack = createStackNavigator<HomeTypes>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={'Home'}
        component={Home}
        options={{header: () => null}}
      />
    </HomeStack.Navigator>
  );
}
