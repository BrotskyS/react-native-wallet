import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';

interface Iprops {
  text: string;
  onClick: () => void;
  style?: StyleProp<ViewStyle>;
}
export const Button = ({text, onClick, style}: Iprops) => {
  return (
    <TouchableOpacity onPress={() => onClick()} style={[s.container, style]}>
      <Text style={s.text}>{text}</Text>
    </TouchableOpacity>
  );
};
const s = StyleSheet.create({
  container: {
    width: '100%',
    height: 63,
    backgroundColor: '#3FDEAE',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    color: '#fff',
  },
});
