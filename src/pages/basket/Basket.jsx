import {Text, View} from 'react-native';

import useStyleBasket from './useStyleBasket';

import Layout from '../../components/layout/Layout';
import FooterButton from '../../components/footerButton/FooterButton';
import EmptyBasket from '../emptyBasket/EmptyBasket';
import Container from '../../components/container/Container';
import BasketList from '../../components/basketList/BasketList';

import productsSlice from '../../store/productsSlice';

import { observer } from 'mobx-react-lite';

const Basket = ({route, navigation}) => {
  const styles = useStyleBasket();
  const {basketList, totalPrice} = productsSlice;
  if (true) {
    return (
      <Layout route={route}navigation={navigation}>
        <View style={styles.page}>
          <BasketList basketList={basketList}/>
        </View>
        <Container>
          <View style={styles.informWrap}>
            <Text style={styles.total}>Total</Text>
            <Text style={styles.sum}>{'$ ' + totalPrice}</Text>
          </View>
        </Container>
        <FooterButton
          onPress={() => navigation.push('Successful')}
          title={'Process to payment'}
        />
      </Layout>
    );
  } else {
    return <EmptyBasket />;
  }
};

export default observer(Basket);
