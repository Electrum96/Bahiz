import {View, Text, ScrollView} from 'react-native';

import useStyleFoodList from './useStyleFoodList';

import FoodItem from '../foodItem/FoodItem';
import productsSlice from '../../store/productsSlice';

const FoodList = ({navigation, route}) => {
  const styles = useStyleFoodList();
  const {productListAll} = productsSlice;
  return (
    <ScrollView>
      <Text style={styles.title}>Name Category</Text>
      <View style={styles.listWrap}>
        {productListAll.map((item) => (
          <FoodItem
            key={item.id}
            {...item}
            navigation={navigation}
          />
        ))}
      </View>
      </ScrollView>
  );
};

export default FoodList;
