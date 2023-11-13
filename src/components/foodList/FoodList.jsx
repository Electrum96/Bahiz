import {View, Text, ScrollView} from 'react-native';

import useStyleFoodList from './useStyleFoodList';

import FoodItem from '../foodItem/FoodItem';
import products from '../../data/foodList/products';

const FoodList = () => {
  const styles = useStyleFoodList();
  return (
    <ScrollView>
      <Text style={styles.title}>Name Category</Text>
      <View style={styles.listWrap}>
        {products.map(item => (
          <FoodItem
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        ))}
      </View>
      </ScrollView>
  );
};

export default FoodList;
