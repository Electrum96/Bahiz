import {Text, View, Image} from 'react-native';

import useStyleBasketList from './useStyleBasketList';
import BasketItem from '../basketItem/BasketItem';

const BasketList = ({basketList}) => {

const styles = useStyleBasketList();
    return (
        <View style={styles.list}>
           {basketList.map((item) => <BasketItem key={item.id} {...item} />) }
        </View>
    )
}

export default BasketList;