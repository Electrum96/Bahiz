import {Text, View, Image} from 'react-native';

import useStyleFoodItem from './useStyleFoodItem';

const FoodItem = ({image, title, price}) => {
  const styles = useStyleFoodItem();
  return (
    <View style={styles.itemWrap}>
      <Image style={styles.image} source={image} />
      <View style={styles.infoWrap}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.descr}>descr</Text>
      <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
};

export default FoodItem;
