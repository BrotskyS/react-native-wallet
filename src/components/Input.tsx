import React from 'react';
import {View, TextInput, StyleProp, StyleSheet, Text} from 'react-native';
interface Iprop {
  value: string;
  onChangeText: (text: string) => void;
  customStyle?: StyleProp<TextInput>;
  isPassword?: boolean;
  label?: string;
  onFocus?: () => void;
  typeKeyboard?:
    | 'cc-csc'
    | 'cc-exp'
    | 'cc-exp-month'
    | 'cc-exp-year'
    | 'cc-number'
    | 'email'
    | 'name'
    | 'password'
    | 'postal-code'
    | 'street-address'
    | 'tel'
    | 'username'
    | 'off'
    | undefined;
  error: IError | object;
}
interface IError {
  field: string;
  text: string;
}
export const Input = ({
  value,
  onChangeText,
  isPassword = false,
  label,
  onFocus,
  typeKeyboard,
  error,
}: Iprop): JSX.Element => {
  return (
    <View>
      {label && <Text style={[s.lable, {marginTop: 20}]}>{label}</Text>}
      <TextInput
        onFocus={onFocus}
        value={value}
        autoCompleteType={typeKeyboard}
        onChangeText={onChangeText}
        placeholder={label}
        placeholderTextColor={'#636363'}
        secureTextEntry={isPassword}
        style={[
          s.input,
          error &&
            error.field === label && {borderWidth: 1, borderColor: 'red'},
        ]}
      />
      {error && error.field === label && (
        <Text style={[s.lable, {marginTop: 20, color: 'red'}]}>{error.text}</Text>
      )}
    </View>
  );
};
const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    backgroundColor: '#323348',
    width: '100%',
    height: 60,
    color: '#fff',
    fontSize: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  lable: {
    color: '#61697D',
    fontSize: 16,
    marginBottom: 12,
  },
});
