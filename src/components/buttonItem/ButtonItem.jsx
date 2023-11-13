import {Text, View, TouchableOpacity} from 'react-native';

import useStyleButtonItem from './useStyleButtonItem';

const ButtonItem = ({title}) => {

const styles = useStyleButtonItem();
    return (
        
        <View style={styles.itemWrap}>
            <TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
  
    )
}

export default ButtonItem;