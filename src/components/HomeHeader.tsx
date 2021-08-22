import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import ArrowDown from '../../assets/img/arrowDown.svg';
import Notification from '../../assets/img/notification.svg';

interface Iprops {
  image: string;
}
export const HomeHeader = ({image}: Iprops) => {
  return (
    <View style={s.component}>
     <View style={s.logoContainer}>
       <Image source={{uri: image}} style={s.logo} />
     </View>
      <View>
        <ArrowDown />
        <Text>October</Text>
      </View>
      <Notification />
    </View>
  );
};

const s = StyleSheet.create({
  component: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 32,
    height: 32,
    borderRadius: 32,
    borderColor: 'red',
    borderWidth: 2
  },
});
