import {Text, View, Image, TouchableOpacity} from 'react-native';

import useStyleFooterButton from './useStyleFooterButton';

const FooterButton = ({onPress, title}) => {

const styles = useStyleFooterButton();
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.buttonWrap}>
                <Text style={styles.buttonTitle}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default FooterButton;