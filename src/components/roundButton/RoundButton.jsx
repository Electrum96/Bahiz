import {Text, View, TouchableOpacity} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import useStyleRoundButton from './useStyleRoundButton';

const RoundButton = ({size}) => {

const styles = useStyleRoundButton();
    return (
        <View style={styles.button}>
            <TouchableOpacity>
                <FontAwesomeIcon icon={'shopping-cart'} color={'white'} size={size}/>
            </TouchableOpacity>   
        </View>
    )
}

export default RoundButton;