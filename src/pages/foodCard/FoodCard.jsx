import {Text, View, Image, TouchableOpacity, Alert} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import useStyleFoodCard from './useStyleFoodCard';

import Layout from '../../components/layout/Layout';
import Counter from '../../components/counter/Counter';

import productsSlice from '../../store/productsSlice';

import {observer} from 'mobx-react-lite';
import React, {useState} from 'react';
import Button from '../button/Button';

const FoodCard = ({route, navigation}) => {
  const styles = useStyleFoodCard();
  const {id} = route.params;

  const {addBasket, removeBasket, productListAll} = productsSlice;

  const foodData = productListAll.find(el => el.id === id);
  const {image, title, desc, count, price, inBasket} = foodData;

  return (
    <Layout route={route} navigation={navigation}>
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
            <Text style={styles.price}>{'$ ' + price * count}</Text>
          </View>

          <Button isActive={inBasket} onPress={() => addBasket(id)} />
        </View>
      </View>
    </Layout>
  );
};

export default observer(FoodCard);
