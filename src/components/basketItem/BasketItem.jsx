import {Text, View, Image} from 'react-native';

import useStyleBasketItem from './useStyleBasketItem';

import Counter from '../counter/Counter';

const BasketItem = () => {
  const styles = useStyleBasketItem();
  return (
    <View style={styles.pages}>
      <Image
        style={styles.image}
        source={require('../../image/Pizza/Mexica.png')}
      />

      <View style={styles.informWrap}>
        <View>
          <Text style={styles.title}>BasketItem</Text>
          <Text style={styles.price}>price</Text>
        </View>

        <View style={styles.counter}>
          <Counter />
        </View>
      </View>
      
    </View>
  );
};

export default BasketItem;
