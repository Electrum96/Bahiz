import {Text, View, Image} from 'react-native';

import useStyleFoods from './useStyleFoods';

const Foods = () => {

const styles = useStyleFoods();
    return (
        <View>
            <Text>Foods</Text>
        </View>
    )
}

export default Foods;