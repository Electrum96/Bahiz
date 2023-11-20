import {Text, View, Image, ScrollView} from 'react-native';

import useStyleEvents from './useStyleEvents';
import Layout from '../../components/layout/Layout';
import FooterButton from '../../components/footerButton/FooterButton';
import EventsList from '../../components/evetsList/EventsList';

const Events = ({route, navigation}) => {
  const styles = useStyleEvents();
  return (
    <Layout route={route} navigation={navigation}>
      <View style={styles.page}>
        <ScrollView>
        <EventsList />
        </ScrollView>
        <FooterButton
          title={'Ir a principal'}
          onPress={() => navigation.push('MenuApp')}
        />
      </View>
    </Layout>
  );
};

export default Events;
