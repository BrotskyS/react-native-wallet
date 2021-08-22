import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {HomeHeader} from '../../components/HomeHeader';

export const Home = () => {
  return (
    <SafeAreaView style={s.component}>
      <HomeHeader
        image={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_lB0zHrt60hoQLrfN_6yRD38TDrxrhgsw1Q&usqp=CAU'
        }
      />
    </SafeAreaView>
  );
};

const s = StyleSheet.create({
  component: {
    width: '100%',
    height: '100%',
  },
});
