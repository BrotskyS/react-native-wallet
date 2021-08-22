import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

interface Iprops {
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'number-pad'
    | 'decimal-pad';
  isPassword: boolean;
  placeholder: string;
  error: {
    field: string;
    value: string;
  };
}
export const Input = ({
  value,
  onChangeText,
  keyboardType,
  isPassword,
  placeholder,
  error,
}: Iprops) => {
  const isError = placeholder.toLowerCase() === error.field;
  return (
    <TextInput
      style={[s.input, {borderColor: isError ? '#dc5555' : '#F1F1FA'}]}
      placeholder={isError ? error.value : placeholder}
      value={value}
      placeholderTextColor={isError ? '#dc5555' : '#ccc'}
      secureTextEntry={isPassword}
      onChangeText={onChangeText}
      keyboardType={keyboardType ? keyboardType : 'default'}
    />
  );
};
const s = StyleSheet.create({
  input: {
    marginBottom: 24,
    borderWidth: 1,
    borderRadius: 16,
    width: '100%',
    height: 56,
    paddingLeft: 15,
  },
});
