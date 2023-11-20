import {Text, View, Image} from 'react-native';

import useStyleEventItem from './useStyleEventItem';

const EventItem = ({image, title, desc}) => {

const styles = useStyleEventItem();
    return (
        <View style={styles.wrapItem}>
            <Image style={styles.image} source={image}/>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.descWrap}>
            <Text styles={styles.desc}>{desc}</Text>
            </View>
        </View>
    )
}

export default EventItem;