import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {mainColor} from '../../utils/styles';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';

import {test} from '../../redux/login/actions';
import {Sign} from '../../types';
import {StackScreenProps} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
export const SignIn: ({
  navigation,
  route,
}: StackScreenProps<Sign>) => JSX.Element = ({
  navigation,
}: StackScreenProps<Sign>) => {
  const store = useSelector((state: any) => state.login);
  const dispatch = useDispatch();
  // dispatch(test('hello'));
  console.log(store);
  const [passwordText, setPasswordText] = useState('');
  const onPressButton = () => {};
  return (
    <View style={s.container}>
      <Text style={s.name}>{'Welcome'}</Text>

      <Input
        value={passwordText}
        onChangeText={text => setPasswordText(text)}
        isPassword={true}
        label={'Email'}
      />
      <Input
        value={passwordText}
        onChangeText={text => setPasswordText(text)}
        isPassword={true}
        label={'Password'}
      />
      <TouchableOpacity>
        <Text
          style={[
            s.passwordText,
            {textAlign: 'right', marginTop: 15, marginBottom: 25},
          ]}>
          Forgot Password?
        </Text>
      </TouchableOpacity>

      <Button text={'Continue'} onClick={() => onPressButton()} />

      <View style={s.orContainer}>
        <View style={s.arrow} />
        <Text style={s.orText}>Or</Text>
        <View style={s.arrow} />
      </View>
      <View style={s.biometryContainer}>
        <TouchableOpacity
          style={s.biometryItem}
          onPress={() => navigation.navigate('SignUp')}>
          <View style={s.biometryTextContainer}>
            <Text style={s.biometryText}>Registration</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: mainColor,
    paddingHorizontal: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginTop: 70,
    borderRadius: 100,
  },
  name: {
    color: '#CECFE8',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 25,
    marginTop: '60%',
  },
  description: {
    color: '#61697D',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 40,
  },
  passwordText: {
    color: '#61697D',
    fontSize: 16,
    marginBottom: 12,
  },
  arrow: {
    width: 47,
    height: 1,
    backgroundColor: '#4C4D5C',
  },
  orContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  orText: {
    marginHorizontal: 11,
    color: '#fff',
    fontSize: 16,
  },
  biometryContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
  biometryItem: {
    borderColor: '#4c4d5c',
    borderWidth: 2,
    borderRadius: 5,
    width: '40%',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  biometryTextContainer: {
    flexDirection: 'row',
  },
  biometryText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
  },
});
