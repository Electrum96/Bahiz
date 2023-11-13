import {Text, View, Image} from 'react-native';

import useStyleEvents from './useStyleEvents';

const Events = () => {

const styles = useStyleEvents();
    return (
        <View>
            <Text>Events</Text>
        </View>
    )
}

export default Events;