import {Text, View, Image, TouchableOpacity} from 'react-native';

import useStyleFooterButton from './useStyleFooterButton';

const FooterButton = ({title}) => {

const styles = useStyleFooterButton();
    return (
        <TouchableOpacity>
            <View style={styles.buttonWrap}>
                <Text>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default FooterButton;