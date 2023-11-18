import {Text, View, TouchableOpacity} from 'react-native';

import useStyleButtonItem from './useStyleButtonItem';

import productsSlice from '../../store/productsSlice';

const ButtonItem = ({title, classTab}) => {

  const {filterProduct} = productsSlice;

  const styles = useStyleButtonItem();
  return (
    <View style={styles.itemWrap}>
      <TouchableOpacity onPress={() => filterProduct(classTab)}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonItem;
