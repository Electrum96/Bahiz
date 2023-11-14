import {Text, View, Image, TouchableOpacity} from 'react-native';

import useStyleCounter from './useStyleCounter';

const Counter = () => {

const styles = useStyleCounter();
    return (
        <View style={styles.counter}>
        <TouchableOpacity>
        <Image style={styles.minus} source={require('../../image/icon/minus-square.png')}/>
        </TouchableOpacity>
        <Text style={styles.num}>count</Text>
        <TouchableOpacity>
        <Image style={styles.plus} source={require('../../image/icon/plus-square.png')}/>
        </TouchableOpacity>
        </View>
    )
}

export default Counter;