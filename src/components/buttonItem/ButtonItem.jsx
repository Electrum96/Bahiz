import {Text, View, TouchableOpacity} from 'react-native';

import useStyleButtonItem from './useStyleButtonItem';

import productsSlice from '../../store/productsSlice';

import {observer} from 'mobx-react-lite';

const ButtonItem = tab => {
  const {title, classTab} = tab;
  const {filterProduct, filter} = productsSlice;

  const isActive = classTab === filter;

  const styles = useStyleButtonItem(isActive);
  return (
    <TouchableOpacity onPress={() => filterProduct(tab)}>
      <View style={styles.itemWrap}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default observer(ButtonItem);
