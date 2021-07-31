import React from 'react';
import {View, TextInput, StyleProp, StyleSheet} from 'react-native';
interface Iprop {
  value: string;
  onChangeText: (text: string) => void;
  customStyle?: StyleProp<TextInput>;
  isPassword?: boolean;
}
export const Input = ({
  value,
  onChangeText,
  isPassword = false,
}: Iprop): JSX.Element => {
  return (
    <View>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isPassword}
        style={s.input}
      />
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
});
