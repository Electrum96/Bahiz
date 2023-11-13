import {Text, View, Image} from 'react-native';

import useStyleFoodCard from './useStyleFoodCard';

const FoodCard = () => {

const styles = useStyleFoodCard();
    return (
        <View>
            <Text>FoodCard</Text>
        </View>
    )
}

export default FoodCard;