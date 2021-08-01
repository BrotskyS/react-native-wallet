import React, {useState, useRef} from 'react';
import {
  View,
  TextInput,
  ScrollView,
  StyleSheet,
  Animated,
  Text,
  TouchableOpacity,
} from 'react-native';
import Arrow from '../../assets/img/downArrow.svg';
import {currency} from '../../assets/countries';
interface Iprop {
  value: string;
  isCountry: boolean;
  label?: string;
  onSelect: (value: string) => void;
  onFocus: () => void;
}

interface ICountry {
  countryCode: string;
  countryName: string;
  currencyCode: string;
  population: string;
  capital: string;
  continentName: string;
}
export const PickerWithSearch = ({
  isCountry,
  value,
  onSelect,
  label,
  onFocus,
}: Iprop): JSX.Element => {
  const [isOpen, setOpen] = useState(false);
  const fadeList = useRef(new Animated.Value(0)).current;
  const fadeArrow = useRef(new Animated.Value(0)).current;
  const spin = fadeArrow.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });
  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    setOpen(true);
    Animated.timing(fadeArrow, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
    Animated.timing(fadeList, {
      toValue: 500,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const fadeOut = () => {
    setOpen(false);
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeArrow, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
    Animated.timing(fadeList, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = (text: string) => {
    setSearchTerm(text);
  };
  React.useEffect(() => {
    const data = Object.values(currency)
    const results = data.filter(person =>
      person.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setSearchResults(results);
  }, [searchTerm]);
  return (
    <View>
      {label && <Text style={[s.lable, {marginTop: 20}]}>{label}</Text>}
      <TouchableOpacity
        activeOpacity={1}
        style={[s.button, ]}
        onPress={() => (isOpen ? fadeOut() : fadeIn())}>
        <Text style={[s.selected, !value && {color: '#636363FF'}]}>{value ? value : label}</Text>
        <Animated.View style={{transform: [{rotate: spin}]}}>
          <Arrow />
        </Animated.View>
      </TouchableOpacity>
      <Animated.View style={[s.listContainer, {height: fadeList}]}>
        <TextInput
          style={s.search}
          onChangeText={text => handleChange(text)}
          placeholder={'Search'}
          value={searchTerm}
          onFocus={onFocus}
          placeholderTextColor={'#a8a5a5'}
        />
        <ScrollView>
          {searchResults.map(el => (
            <TouchableOpacity key={el.countryName} onPress={() => onSelect(el)}>
              <Text style={s.itemText}>{el}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Animated.View>
    </View>
  );
};
const s = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 100,
  },
  button: {
    backgroundColor: '#323348',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    color: '#fff',
    fontSize: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  lable: {
    color: '#61697D',
    fontSize: 16,
    marginBottom: 12,
  },
  selected: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  listContainer: {
    backgroundColor: '#323348',
    // position: 'absolute',
    width: '100%',
    marginTop: -10,
    overflow: 'hidden',
    bottom: 0,
  },
  search: {
    backgroundColor: '#5f6076',
    paddingHorizontal: 20,
    height: 40,
    borderRadius: 5,
    width: '90%',
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
    alignSelf: 'center',
    marginTop: 20,
  },
  itemText: {
    color: '#fff',
    marginLeft: 20,
    fontWeight: '600',
    marginVertical: 15,
    fontSize: 16,
  },
});
