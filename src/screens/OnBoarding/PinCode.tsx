import React, {useState} from 'react';
import {View, Text, StyleSheet, Animated, Easing} from 'react-native';
import {NumberKeyboard} from '../../components/NumberKeyboard';
import {StackScreenProps} from '@react-navigation/stack';
import {BottomTabParamList, RootStackParamList, SignTypes} from '../../types';
export const PinCode = ({
  navigation,
}: StackScreenProps<
  SignTypes & BottomTabParamList & RootStackParamList,
  'PinCode'
>) => {

  const [pinCodeText, setPinCodeText] = useState('');
  const onPressKey = (number: number | string) => {
    console.log('[pinCodeText', pinCodeText);
    const concatPinCode = pinCodeText.concat(String(number));
   if (concatPinCode.length === 4) {
      navigation.navigate('PinCode2', {
        pinCode: concatPinCode,
      });
      setPinCodeText('');
    } else {
      setPinCodeText(concatPinCode);
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
        } else if (e.nativeEvent.pageX - touchX > 100) {
          setPinCodeText('');
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
          Let’s setup your PIN
        </Text>
        <View style={[s.pinCodeContainer]}>
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
        </View>
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
