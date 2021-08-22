import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Input} from '../../components/Input';
import Tick from '../../../assets/img/tick.svg';
import Google from '../../../assets/img/google.svg';
import {Button} from '../../components/Button';
import {StackScreenProps} from '@react-navigation/stack';
import {BottomTabParamList, RootStackParamList, SignTypes} from '../../types';
import {useDispatch, useSelector} from 'react-redux';
import {registerRequest} from '../../redux/login/actions';
import {IRootReducer} from '../../redux/rootReducer';
import {navigate} from '../../navigation/RootNavigator';
export const SignUp = ({
  navigation,
}: StackScreenProps<
  SignTypes & BottomTabParamList & RootStackParamList,
  'onBoarding'
>) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isTermAgree, setTermAgree] = useState(false);
  const [error, setError] = useState<{field: string; value: string}>({
    field: '',
    value: '',
  });
  const dispatch = useDispatch();
  const store = useSelector((state: IRootReducer) => state.login);

  const validateData = () => {
    function validateEmail(email: string) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
    if (name.length < 2) {
      return setError({field: 'name', value: 'Name is not valid'});
    } else if (!validateEmail(email)) {
      return setError({field: 'email', value: 'email is not valid email'});
    } else if (password.length < 6) {
      return setError({field: 'password', value: 'password is too short'});
    } else {
      dispatch(registerRequest({email, name, password}));
    }
  };
  return (
    <View style={s.component}>
      <View style={{marginTop: 50}}>
        <Text
          style={{
            color: 'red',
            fontWeight: '500',
            marginBottom: 5,
            textAlign: 'center',
          }}>
          {store.error_message}
        </Text>
        <Input
          value={name}
          placeholder={'Name'}
          onChangeText={text => {
            setName(text);
            setError({
              field: '',
              value: '',
            });
          }}
          isPassword={false}
          error={error}
        />
        <Input
          value={email}
          placeholder={'Email'}
          onChangeText={text => {
            setEmail(text);
            setError({
              field: '',
              value: '',
            });
          }}
          isPassword={false}
          keyboardType={'email-address'}
          error={error}
        />
        <Input
          value={password}
          placeholder={'Password'}
          onChangeText={text => {
            setPassword(text);
            setError({
              field: '',
              value: '',
            });
          }}
          isPassword={true}
          error={error}
        />
      </View>

      <View style={s.termsContainer}>
        <TouchableOpacity
          onPress={() => setTermAgree(!isTermAgree)}
          activeOpacity={1}
          style={[s.tick, {backgroundColor: isTermAgree ? '#7F3DFF' : '#fff'}]}>
          <Tick />
        </TouchableOpacity>
        <Text style={s.terms}>
          By signing up, you agree to the{' '}
          <Text style={s.termsLink}>
            {'Terms of\nService and Privacy Policy'}
          </Text>
        </Text>
      </View>

      <Button
        text={'SignUp'}
        isMainColor={true}
        onPress={() => validateData()}
        styles={{marginTop: 27}}
        isLoading={store.login_loading}
      />
      <Text style={s.or}>Or with</Text>
      <Button
        text={'Sign Up with Google'}
        isMainColor={true}
        onPress={() => navigation.navigate('Sign')}
        styles={{
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: '#F1F1FA',
        }}
        textStyle={{color: '#000'}}
        image={<Google />}
      />
      <Text style={s.haveAccount}>
        Already have an account? <Text style={s.haveAccountLink}>Login</Text>
      </Text>
    </View>
  );
};
const s = StyleSheet.create({
  component: {
    paddingHorizontal: 16,
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
  termsContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  tick: {
    width: 32,
    height: 32,
    borderColor: '#7F3DFF',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginRight: 14,
  },
  terms: {
    fontWeight: '500',
  },
  termsLink: {
    color: '#7F3DFF',
  },
  or: {
    textAlign: 'center',
    color: '#91919F',
    fontWeight: '700',
    marginVertical: 12,
  },
  haveAccount: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 16,
    marginTop: 19,
    color: '#91919F',
  },
  haveAccountLink: {
    color: '#7F3DFF',
    textDecorationLine: 'underline',
  },
});
