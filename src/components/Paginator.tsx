import React from 'react';
import {View, StyleSheet, Dimensions, Animated} from 'react-native';
import {ISignSlider} from '../mockData/mockData';
interface Iprops {
  data: ISignSlider[];
  scrollX: any; // TODO: fix it!!!
}
export const Paginator = ({data, scrollX}: Iprops) => {
  const WIDTH = Dimensions.get('window').width;
  return (
    <View style={s.container}>
      {data.map((el, index) => {
        const inputRange = [
          (index - 1) * WIDTH,
          index * WIDTH,
          (index + 1) * WIDTH,
        ];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            style={[s.dot, {width: dotWidth, opacity}]}
            key={el.id}
          />
        );
      })}
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 64,
    marginTop: 35
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#7F3DFF',
    marginHorizontal: 8,
  },
});
