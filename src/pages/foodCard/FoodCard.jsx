import {Text, View, Image, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import useStyleFoodCard from './useStyleFoodCard';

import Layout from '../../components/layout/Layout';
import Counter from '../../components/counter/Counter';

import productsSlice from '../../store/productsSlice';

import {observer} from 'mobx-react-lite';
import React from 'react'

const FoodCard = ({route, navigation}) => {
  const styles = useStyleFoodCard();
  const {id} = route.params;

  const {addBasket, productListAll, increment, decrement} = productsSlice;

  const foodData = productListAll.find(el => el.id === id);
  const {image, title, desc, count, price, inBasket} = foodData;




  return (
    <Layout navigation={navigation}>
      <View style={styles.page}>
        <View style={styles.main}>
          <Image style={styles.image} source={image} />
          <View style={styles.blockInfo}>
            <View style={styles.description}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.desc}>{desc}</Text>
            </View>
            <Counter id={id} count={count} />
          </View>
        </View>

        <View style={styles.footer}>
          <View style={styles.priceWrap}>
            <Text style={styles.price}>{'$ ' + (price * count)}</Text>
          </View>

          <TouchableOpacity
            style={styles.buttonWrap}
            onPress={() => addBasket(id)}>
            <Text style={styles.titleButton}>{foodData.inBasket ? 'da' : 'net'}</Text>
            <View style={styles.iconWrap}>
              <FontAwesomeIcon icon={'shopping-cart'} color="red" size={15} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

export default observer(FoodCard);
