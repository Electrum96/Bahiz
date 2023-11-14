import {Text, View, Image} from 'react-native';

import useStyleBasketList from './useStyleBasketList';
import BasketItem from '../basketItem/BasketItem';

const BasketList = () => {

const styles = useStyleBasketList();
    return (
        <View style={styles.list}>
            <BasketItem/>
        </View>
    )
}

export default BasketList;