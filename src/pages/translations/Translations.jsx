import {Text, View, Image} from 'react-native';

import useStyleTranslations from './useStyleTranslations';

const Translations = () => {

const styles = useStyleTranslations();
    return (
        <View>
            <Text>Translations</Text>
        </View>
    )
}

export default Translations;