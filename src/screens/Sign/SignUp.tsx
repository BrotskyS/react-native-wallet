import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {Sign} from '../../types';
import {mainColor} from '../../utils/styles';
import Avatar from '../../../assets/img/newAvatar.svg';
import {Input} from '../../components/Input';
import {PickerWithSearch} from '../../components/PickerWithSearch';
import {Button} from '../../components/Button';

interface IError {
  field: string;
  text: string;
}
export const SignUp = ({navigation}: StackScreenProps<Sign>) => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [password, setPassword] = useState('');
  const [isEnableAvoidingView, setEnableAvoidingView] = useState(false);
  // const [password2, setPassword2] = useState('')
  const [email, setEmail] = useState('');
  const [error, setError] = useState<IError | object>({});

  function validateEmail(email: string) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const onPressButton = () => {
    if (password.length < 6) {
      return setError({field: 'Password', text: '6 characters long'});
    }
    if (!validateEmail(email)) {
      return setError({field: 'Email', text: 'Email is not valid email'});
    }
    navigation.navigate('Home');
  };
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={s.container}
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <KeyboardAvoidingView
        enabled={isEnableAvoidingView}
        behavior={Platform.OS === 'ios' ? 'position' : 'height'}>
        <Text style={s.mainText}>Registration</Text>
        <TouchableOpacity style={s.avatar}>
          <Avatar />
        </TouchableOpacity>
        <Input
          value={name}
          onChangeText={text => {
            setName(text);
            setError({});
          }}
          label={'Name'}
          typeKeyboard={'username'}
          onFocus={() => setEnableAvoidingView(false)}
          error={error}
        />
        <PickerWithSearch
          onSelect={item => setCountry(item)}
          value={country}
          isCountry={true}
          label={'Currency'}
          onFocus={() => setEnableAvoidingView(false)}
        />
        <Input
          value={password}
          onChangeText={text => {
            setPassword(text);
            setError({});
          }}
          label={'Password'}
          isPassword={true}
          typeKeyboard={'password'}
          onFocus={() => setEnableAvoidingView(false)}
          error={error}
        />

        {/*<Input*/}
        {/*  value={password2}*/}
        {/*  onChangeText={text => setPassword2(text)}*/}
        {/*  isPassword={true}*/}
        {/*  label={'Email'}*/}
        {/*/>*/}
        <Input
          value={email}
          onChangeText={text => {
            setEmail(text);
            setError({});
          }}
          label={'Email'}
          typeKeyboard={'email'}
          onFocus={() => setEnableAvoidingView(false)}
          error={error}
        />
        {/*<View style={{position: 'absolute', left: 0, right: 0, bottom: 0, width: '100%'}}>*/}
        {/*</View>*/}
        <Button
          text={'Continue'}
          onClick={() => onPressButton()}
          // style={{position: 'absolute', top: _height - 90, zIndex: 0}}
          style={{marginTop: 100}}
        />
      </KeyboardAvoidingView>
    </TouchableOpacity>
  );
};
const s = StyleSheet.create({
  container: {
    height: '100%',
    // flex: 1,
    width: '100%',
    backgroundColor: mainColor,
    paddingHorizontal: 20,
  },
  mainText: {
    textAlign: 'center',
    marginTop: 60,
    color: '#CECFE8',
    fontSize: 20,
    fontWeight: '600',
  },
  avatar: {
    alignItems: 'center',
    marginTop: 25,
  },
});
