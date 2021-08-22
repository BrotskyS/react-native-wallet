import {useNavigation, useNavigationState} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import BackIco from '../../assets/img/back.svg';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface IHeaderTitles {
  [key: string]: string;
}
const headerTitles: IHeaderTitles = {
  SignUp: 'Sign Up',
  Verification: 'Verification',
};

export function BackButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={{padding: 15}} onPress={() => navigation.goBack()}>
      <BackIco />
    </TouchableOpacity>
  );
}

const BottomTabList = [
  // 'Onboarding',
  'SignUp',
  'Calendar',
  'onBoarding',
  'CalendarScreen',
  'Clients',
  'ClientsScreen',
  'Notifications',
  'NotificationsScreen',
  'Settings',
  'SettingsScreen',
];
const OnboardingList = [
  'Onboarding',
  'SignUp',
  'PinCode',
  'HomeScreen',
  'onBoarding',
  'StepOneInstagramScreen',
  'StepTwoScreen',
  'StepThreeScreen',
  'PagePreloaderScreen',
  'LastScreen',
  'WebViewScreen',
  'GetPremium',
];

export const HeaderComponent = ({
  scene: {
    descriptor: {options},
    route,
  },
  navigation,
}: any) => {
  const HeaderTitle = options?.headerTitle || headerTitles[route.name];
  const HeaderLeft = BackButton;
  const HeaderRight = options?.headerRight || null;
  const safeAreaInsets = useSafeAreaInsets();
  const nextStateName = useNavigationState(s => s.routeNames[s.index]);
  useLayoutEffect(() => {
    if (!OnboardingList.concat(BottomTabList).includes(route.name)) {
      let parent = navigation;
      while (parent.dangerouslyGetParent()?.dangerouslyGetParent()) {
        parent = parent.dangerouslyGetParent();
      }
      parent?.setOptions({tabBarVisible: false});
      return () =>
        parent?.setOptions({
          tabBarVisible: BottomTabList.includes(nextStateName),
        });
    }
    return () => navigation.setOptions({tabBarVisible: true});
  }, [navigation, nextStateName, route]);
  console.log('headerTitles[route.name]', headerTitles[route.name], route.name);
  if (!headerTitles[route.name]) {
    return <View />;
  }
  return (
    <View
      style={[
        {
          display: 'flex',
          backgroundColor: '#fff',
          paddingTop: safeAreaInsets.top,
          // paddingBottom: safeAreaInsets.top,
          height: 105,
          width: '100%',
          paddingLeft: 0,
          paddingRight: 0,
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS

          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
      ]}>
      {HeaderLeft && (
        <View style={{zIndex: 1}}>
          <HeaderLeft />
        </View>
      )}

      <View
        style={
          HeaderLeft &&
          {
            // position: 'absolute',
            // top: 0,
            // left: 0,
            // right: 0,
            // bottom: 0,
            // justifyContent: 'center',
            // alignItems: 'center',
            // zIndex: 0,
          }
        }>
        <Text
          style={{
            padding: 3,
            textAlign: 'center',
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          {HeaderTitle}
        </Text>
      </View>

      {HeaderRight ? (
        <View style={{zIndex: 2}}>
          <HeaderRight />
        </View>
      ) : (
        <View style={{width: '15%'}} />
      )}
    </View>
  );
};
