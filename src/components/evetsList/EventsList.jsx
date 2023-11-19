import {Text, View, Image} from 'react-native';

import useStyleEventsList from './useStyleEventsList';

import events from '../../data/events/events';
import EventItem from '../eventItem/EventItem';

const EventsList = () => {

const styles = useStyleEventsList();
    return (
        <View>
            {events.map((event) => <EventItem key={event.id} {...event}/>)}
            <Text>EventsList</Text>
        </View>
    )
}

export default EventsList;