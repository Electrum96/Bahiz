import {Text, View, TouchableOpacity} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import useStyleRoundButton from './useStyleRoundButton';

const RoundButton = ({navigation,size}) => {

const styles = useStyleRoundButton();
    return (
            <TouchableOpacity onPress={() => navigation.push('Basket')}>
                <View style={styles.button}>
                <FontAwesomeIcon icon={'shopping-cart'} color={'white'} size={size}/>
                </View>
            </TouchableOpacity>   
    
    )
}

export default RoundButton;