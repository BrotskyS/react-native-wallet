import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from '../../components/Button';
import {StackScreenProps} from '@react-navigation/stack';
import {BottomTabParamList, RootStackParamList, SignTypes} from '../../types';

export const SetupStart = ({
  navigation,
}: StackScreenProps<
  SignTypes & BottomTabParamList & RootStackParamList,
  'Verification'
>) => {
  return (
    <View style={s.container}>
      <View>
        <Text style={s.title}>Let’s setup your account!</Text>
        <Text style={s.description}>
          {'Account can be your bank, credit card or\nyour wallet.'}
        </Text>
      </View>
      <Button
        text={'Let’s go'}
        isMainColor={true}
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};
const s = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 100,
    paddingHorizontal: 16,
    paddingBottom: 25,
    width: '100%',
    justifyContent: 'space-between',
    height: '100%',
  },
  title: {
    fontWeight: '500',
    fontSize: 36,
    marginBottom: 37,
  },
  description: {
    fontWeight: '500',
  },
});
