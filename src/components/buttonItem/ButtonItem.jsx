import {Text, View, TouchableOpacity} from 'react-native';

import useStyleButtonItem from './useStyleButtonItem';

import productsSlice from '../../store/productsSlice';

import {observer} from 'mobx-react-lite';

const ButtonItem = ({title, classTab}) => {
  const {filterProduct, filter} = productsSlice;

  const isActive = classTab === filter;

  const styles = useStyleButtonItem(isActive);
  return (
    <View style={styles.itemWrap}>
      <TouchableOpacity onPress={() => filterProduct(classTab)}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default observer(ButtonItem);
