import {Text, View, Image} from 'react-native';

import useStyleSuccessful from './useStyleSuccessful';

const Successful = () => {

const styles = useStyleSuccessful();
    return (
        <View>
            <Text>Successful</Text>
        </View>
    )
}

export default Successful;