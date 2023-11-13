import {Text, View, Image} from 'react-native';

import useStyleMenuApp from './useStyleMenuApp';

const MenuApp = () => {

const styles = useStyleMenuApp();
    return (
        <View>
            <Text>MenuApp</Text>
        </View>
    )
}

export default MenuApp;