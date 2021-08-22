import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import BackIco from '../../assets/img/keyboardNext.svg';

interface Iprops {
  onPress: (item: string | number) => void;
}
export const NumberKeyboard = ({onPress}: Iprops) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, ''];
  const _renderItem = ({item}: {item: number | string}) => {
    return (
      <TouchableOpacity
        onPress={() => onPress(item)}
        style={{
          width: '33%',
          flex: 1,
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {item === 'next' ? (
          <BackIco />
        ) : (
          <Text style={{color: '#fff', fontSize: 48}}>{item}</Text>
        )}
      </TouchableOpacity>
    );
  };
  const _keyExtractor = (item: number | string) => item.toString();
  return (
    <View>
      <FlatList
        data={numbers}
        renderItem={_renderItem}
        keyExtractor={_keyExtractor}
        numColumns={3}
        // contentContainerStyle={{paddingVertical: 20}}
      />
    </View>
  );
};
