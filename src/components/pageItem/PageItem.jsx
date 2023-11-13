import {Text, View, TouchableOpacity} from 'react-native';

import useStylePageItem from './useStylePageItem';

const PageItem = ({title}) => {

const styles = useStylePageItem();
    return (
        <View style={styles.tabWrap}>
            <TouchableOpacity>
             <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PageItem;