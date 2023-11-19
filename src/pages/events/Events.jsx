import {Text, View, Image} from 'react-native';

import useStyleEvents from './useStyleEvents';
import Layout from '../../components/layout/Layout';
import FooterButton from '../../components/footerButton/FooterButton';
import EventsList from '../../components/evetsList/EventsList';

const Events = ({route, navigation}) => {
  const styles = useStyleEvents();
  return (
    <Layout route={route} navigation={navigation}>
      <View style={styles.page}>
        <EventsList />
        <FooterButton
          title={'Go Main'}
          onPress={() => navigation.push('MenuApp')}
        />
      </View>
    </Layout>
  );
};

export default Events;
