import {Text, View, Image} from 'react-native';

import useStyleEmptyBasket from './useStyleEmptyBasket';

const EmptyBasket = () => {

const styles = useStyleEmptyBasket();
    return (
        <View>
            <Text>EmptyBasket</Text>
        </View>
    )
}

export default EmptyBasket;