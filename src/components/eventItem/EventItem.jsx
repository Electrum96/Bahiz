import {Text, View, Image} from 'react-native';

import useStyleEventItem from './useStyleEventItem';

const EventItem = () => {

const styles = useStyleEventItem();
    return (
        <View>
            <Text>EventItem</Text>
        </View>
    )
}

export default EventItem;