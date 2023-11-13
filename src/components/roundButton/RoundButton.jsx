import {Text, View, TouchableOpacity} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import useStyleRoundButton from './useStyleRoundButton';

const RoundButton = ({size}) => {

const styles = useStyleRoundButton();
    return (
            <TouchableOpacity>
                <View style={styles.button}>
                <FontAwesomeIcon icon={'shopping-cart'} color={'white'} size={size}/>
                </View>
            </TouchableOpacity>   
    
    )
}

export default RoundButton;