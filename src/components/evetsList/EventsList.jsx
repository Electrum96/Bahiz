import {Text, View, Image} from 'react-native';

import useStyleEventsList from './useStyleEventsList';

import events from '../../data/events/events';
import EventItem from '../eventItem/EventItem';

const EventsList = () => {

const styles = useStyleEventsList();
    return (
        <View style={styles.listWrap}>
            {events.map((event) => <EventItem key={event.id} {...event}/>)}
        </View>
    )
}

export default EventsList;