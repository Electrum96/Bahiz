import {Text, View, Image} from 'react-native';

import useStyleThanks from './useStyleThanks';
import FooterButton from '../../components/footerButton/FooterButton';
import Layout from '../../components/layout/Layout';

const Thanks = ({route, navigation}) => {
  const styles = useStyleThanks();
  return (
    <Layout route={route} navigation={navigation}>
      <View style={styles.page}>
        <Image
          style={styles.image}
          source={require('../../image/background/suc.png')}
          resizeMode="contain"
        />
       
        <Text style={styles.text}>Gracias! Mesa Reservada</Text>
         <View style={styles.buttonWrap}>
        <FooterButton
          style={styles.button}
          title={'Vuelve a casa'}
          onPress={() => navigation.push('MenuApp')}
        />
        </View>
      
      </View>
    </Layout>
  );
};

export default Thanks;
