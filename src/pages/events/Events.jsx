import {Text, View, Image} from 'react-native';

import useStyleEvents from './useStyleEvents';
import Layout from '../../components/layout/Layout';
import FooterButton from '../../components/footerButton/FooterButton';

const Events = ({navigation}) => {

const styles = useStyleEvents();
    return (
      <Layout navigation={navigation}>
        <View style={styles.page}>
            <FooterButton title={'Go Main'} onPress={() => navigation.push('MenuApp')}/>
        </View>
      </Layout>
    )
}

export default Events;