import {Text, View, Image} from 'react-native';

import useStyleBasket from './useStyleBasket';

const Basket = () => {

const styles = useStyleBasket();
    return (
        <View>
            <Text>Basket</Text>
        </View>
    )
}

export default Basket;