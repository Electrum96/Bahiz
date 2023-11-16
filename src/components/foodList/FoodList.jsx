import {View, Text, ScrollView} from 'react-native';

import useStyleFoodList from './useStyleFoodList';

import FoodItem from '../foodItem/FoodItem';
import productsSlice from '../../store/productsSlice';

const FoodList = ({navigation, route}) => {
  const styles = useStyleFoodList();
  const products = productsSlice.productListAll;
  return (
    <ScrollView>
      <Text style={styles.title}>Name Category</Text>
      <View style={styles.listWrap}>
        {products.map((item) => (
          <FoodItem
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            desc={item.desc}
            id = {item.id}
            navigation={navigation}
            route={route}
          />
        ))}
      </View>
      </ScrollView>
  );
};

export default FoodList;
