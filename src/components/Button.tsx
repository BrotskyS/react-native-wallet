import React from 'react';
import {
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  TextStyle,
  ActivityIndicator,
} from 'react-native';

interface Iprops {
  text: string;
  isMainColor: boolean;
  styles?: StyleProp<ViewStyle>;
  onPress: () => void;
  textStyle?: StyleProp<TextStyle>;
  image?: JSX.Element; // SVG ELEMENT: <svgImage/>
  isLoading?: boolean;
}
export const Button = ({
  text,
  isMainColor,
  styles,
  onPress,
  textStyle,
  image,
  isLoading,
}: Iprops) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={isLoading}
      style={[
        s.container,
        {backgroundColor: isMainColor ? '#7F3DFF' : '#EEE5FF'},
        styles,
      ]}>
      {image}
      {isLoading ? (
        <ActivityIndicator color={'#fff'} />
      ) : (
        <Text
          style={[
            s.text,
            {
              color: isMainColor ? '#fff' : '#7F3DFF',
              marginLeft: image ? 10 : 0,
            },
            textStyle,
          ]}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};
const s = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
  },
});
