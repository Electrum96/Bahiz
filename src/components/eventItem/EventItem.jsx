import {Text, View, Image} from 'react-native';

import useStyleEventItem from './useStyleEventItem';

const EventItem = ({image, title, desc}) => {

const styles = useStyleEventItem();
    return (
        <View style={styles.wrapItem}>
            <Image source={image}/>
            <Text>{title}</Text>
            <Text>{desc}</Text>
        </View>
    )
}

export default EventItem;