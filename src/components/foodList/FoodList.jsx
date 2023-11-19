import {View, Text, ScrollView} from 'react-native';

import useStyleFoodList from './useStyleFoodList';

import FoodItem from '../foodItem/FoodItem';
import productsSlice from '../../store/productsSlice';

import {observer} from 'mobx-react-lite';

const FoodList = ({navigation}) => {
  const styles = useStyleFoodList();
  const {productForFilter, filter} = productsSlice;
  return (
    <ScrollView>
      <Text style={styles.title}>{filter.title}</Text>
      <View style={styles.listWrap}>
        {productForFilter.map(item => (
          <FoodItem key={item.id} {...item} navigation={navigation} />
        ))}
      </View>
    </ScrollView>
  );
};

export default observer(FoodList);
