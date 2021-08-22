import React, {useState} from 'react';
import {View, Text, StyleSheet, Animated, Easing} from 'react-native';
import {NumberKeyboard} from '../../components/NumberKeyboard';
import {StackScreenProps} from '@react-navigation/stack';
import {BottomTabParamList, RootStackParamList, SignTypes} from '../../types';
export const PinCode2 = ({
  navigation,
  route,
}: StackScreenProps<
  SignTypes & BottomTabParamList & RootStackParamList,
  'PinCode2'
>) => {
  const [animation] = useState(new Animated.Value(0));
  const startAnimation = () => {
    animation.setValue(0);
    Animated.timing(animation, {
      toValue: 1,
      duration: 700,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      animation.setValue(0);
    });
  };
  const animatedStyles = {
    transform: [
      {
        translateX: animation.interpolate({
          inputRange: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
          outputRange: [0, 10, -10, 10, -10, 0, 0, 0, 0, 0, 0],
        }),
      },
    ],
  };
  const [pinCodeText, setPinCodeText] = useState('');
  const onPressKey = (number: number | string) => {
    const concatPinCode = pinCodeText.concat(String(number));
    if (concatPinCode.length === 4 && route.params.pinCode !== concatPinCode) {
      startAnimation();
      setPinCodeText('');
      // navigation.navigate('PinCode2');
    } else if (
      concatPinCode.length === 4 &&
      route.params.pinCode === concatPinCode
    ) {
      navigation.navigate('SetupStart');
    } else {
      setPinCodeText(pinCodeText.concat(String(number)));
    }
  };
  let touchX: number; // detect start position then start swipe
  return (
    <View
      style={s.component}
      onTouchStart={e => (touchX = e.nativeEvent.pageX)}
      onTouchEnd={e => {
        if (touchX - e.nativeEvent.pageX > 20) {
          setPinCodeText(pinCodeText.slice(0, -1));
        }
      }}>
      <View>
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontWeight: '600',
            fontSize: 18,
          }}>
          Ok. Re type your PIN again.
        </Text>
        <Animated.View style={[s.pinCodeContainer, animatedStyles]}>
          {[1, 2, 3, 4].map((item, index) => (
            <View
              key={item}
              style={[
                s.onePinNumber,
                pinCodeText[index]
                  ? {backgroundColor: '#fff'}
                  : {borderColor: '#A284F7', borderWidth: 4},
              ]}
            />
          ))}
        </Animated.View>
      </View>
      <NumberKeyboard onPress={item => onPressKey(item)} />
    </View>
  );
};
const s = StyleSheet.create({
  component: {
    paddingTop: 100,
    width: '100%',
    height: '100%',
    backgroundColor: '#7F3DFF',
    justifyContent: 'space-between',
  },
  onePinNumber: {
    width: 32,
    height: 32,
    borderRadius: 32,

    marginHorizontal: 8,
  },
  pinCodeContainer: {
    flexDirection: 'row',
    marginTop: 100,
    justifyContent: 'center',
  },
});
