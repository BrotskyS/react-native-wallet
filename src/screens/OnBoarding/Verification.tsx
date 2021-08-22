import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Verification = () => {
  return (
    <View style={s.component}>
      <Text style={s.title}>Enter your Verification Code</Text>
      {/*{[1,2,3,4,5,6].map((el, index) => (*/}
      {/*  <View></View>*/}
      {/*))}*/}
    </View>
  );
};
const s = StyleSheet.create({
  component: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 16
  },
  title: {
    fontWeight: '500',
    fontSize: 36,
  },
});
