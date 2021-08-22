import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Animated,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {BottomTabParamList, RootStackParamList, SignTypes} from '../../types';
import Sign1 from '../../../assets/img/sign1.svg';
import Sign2 from '../../../assets/img/sign2.svg';
import Sign3 from '../../../assets/img/sign3.svg';
import {signSlider, ISignSlider} from '../../mockData/mockData';
import {Paginator} from '../../components/Paginator';
import {Button} from '../../components/Button';

const SliderItem = ({item}: {item: ISignSlider}) => {
  const WIDTH = Dimensions.get('window').width;
  return (
    <View style={{width: WIDTH}}>
      <View style={{marginHorizontal: 25}}>
        {item.id === 1 ? <Sign1 /> : item.id === 2 ? <Sign2 /> : <Sign3 />}
      </View>
      <Text style={s.title}>{item.title}</Text>
      <Text style={s.description}>{item.description}</Text>
    </View>
  );
};

export const Sign = ({
  navigation,
}: StackScreenProps<
  SignTypes & BottomTabParamList & RootStackParamList,
  'onBoarding'
>) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const sliderRef = useRef(null);
  const viewableItemChange = useRef(({viewableItems}: any) => {
    // TODO: fix it
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  console.log('currentIndex', currentIndex);
  return (
    <View style={s.container}>
      <FlatList
        data={signSlider}
        renderItem={({item}) => <SliderItem item={item} />}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        horizontal
        // keyExtractor={item => item.id}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemChange}
        viewabilityConfig={viewConfig}
        ref={sliderRef}
      />
      <Paginator data={signSlider} scrollX={scrollX} />
      <View style={{paddingHorizontal: 12, width: '100%'}}>
        <Button
          text={'Sign Up'}
          isMainColor={true}
          styles={{marginBottom: 15}}
          onPress={() => navigation.navigate('SignUp')}
        />
        <Button
          text={'Login'}
          isMainColor={false}
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};
const s = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: '25%',
    // height: '100%',
    backgroundColor: '#fff',
    marginBottom: 100,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    marginHorizontal: 49,
    textAlign: 'center',
  },
  description: {
    marginTop: 17,
    fontSize: 16,
    fontWeight: '500',
    color: '#91919F',
    textAlign: 'center',
    marginHorizontal: 49,
  },
});
