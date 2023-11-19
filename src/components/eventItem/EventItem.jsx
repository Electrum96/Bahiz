import {Text, View, Image} from 'react-native';

import useStyleEventItem from './useStyleEventItem';

const EventItem = ({title, desc}) => {

const styles = useStyleEventItem();
    return (
        <View style={styles.wrapItem}>
            {/* <Image/> */}
            <Text>{title}</Text>
            <Text>{desc}</Text>
        </View>
    )
}

export default EventItem;