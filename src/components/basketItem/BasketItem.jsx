import {Text, View, Image} from 'react-native';

import useStyleBasketItem from './useStyleBasketItem';

import Counter from '../counter/Counter';



const BasketItem = ({image, title, price, id, count}) => {
  
  const styles = useStyleBasketItem();
  return (
    <View style={styles.pages}>
      <Image
        style={styles.image}
        source={image}
      />

      <View style={styles.informWrap}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>€{price * count}</Text>
        </View>

        <View style={styles.counter}>
          <Counter id = {id} count={count}/>
        </View>
      </View>
      
    </View>
  );
};

export default BasketItem;
