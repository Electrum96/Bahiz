import {Text, View, Image, TouchableOpacity} from 'react-native';

import useStyleFoodItem from './useStyleFoodItem';

const FoodItem = ({navigation,image, title, price, descr, id}) => {
  const styles = useStyleFoodItem();
  return (
    <TouchableOpacity onPress={() => navigation.push('FoodCard', {image, title, price, descr,id})}>
    <View style={styles.itemWrap}>
      <Image style={styles.image} source={image} />
      <View style={styles.infoWrap}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.descr}>{descr}</Text>
      <Text style={styles.price}>{price}</Text>
      </View>
    </View>
    </TouchableOpacity>
  );
};

export default FoodItem;
