import {Text, View, Image, TouchableOpacity} from 'react-native';

import useStyleCounter from './useStyleCounter';

import productsSlice from '../../store/productsSlice';

const Counter = ({id, count}) => {
  const {decrement, increment} = productsSlice;

  const styles = useStyleCounter();
  return (
    <View style={styles.counter}>
      <TouchableOpacity onPress={() => decrement(id)}>
      <View style={styles.minusWrapper}>
        <Image
          style={styles.minus}
          source={require('../../image/icon/minus-square.png')}
        />
        </View>
      </TouchableOpacity>
      <Text style={styles.num}>{count}</Text>
      <TouchableOpacity onPress={() => increment(id)}>
        <View style={styles.plusWrapper}>
          <Image
            style={styles.plus}
            source={require('../../image/icon/plus-square.png')}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
