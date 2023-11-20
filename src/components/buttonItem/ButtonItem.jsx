import {Text, View, TouchableOpacity, Image} from 'react-native';

import useStyleButtonItem from './useStyleButtonItem';

import productsSlice from '../../store/productsSlice';

import {observer} from 'mobx-react-lite';


const ButtonItem = tab => {
  const {image, title, classTab} = tab;
  const {filterProduct, filter} = productsSlice;

  const isActive = classTab === filter.classTab;

  const styles = useStyleButtonItem(isActive);
  return (
    <TouchableOpacity onPress={() => filterProduct(tab)}>
      <View style={styles.itemWrap}>
        <Text style={styles.title}>{title}</Text>
        <Image style={styles.image} source={image}/>
      </View>
    </TouchableOpacity>
  );
};

export default observer(ButtonItem);
