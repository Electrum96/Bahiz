import {Text, View, Image} from 'react-native';

import useStyleSuccessful from './useStyleSuccessful';
import Layout from '../../components/layout/Layout';
import FooterButton from '../../components/footerButton/FooterButton';

const Successful = ({route, navigation}) => {
  const styles = useStyleSuccessful();
  return (
    <Layout route={route} navigation={navigation}>
      <View style={styles.page}>
        <Image
          style={styles.image}
          source={require('../../image/background/suc.png')}
          resizeMode="contain"
        />
       
        <Text style={styles.text}>Your order has been successfully placed</Text>
        <Image
          style={styles.code}
          source={require('../../image/icon/square.png')}
        />
     

        <View style={styles.buttonWrap}>
        <FooterButton title={'Go back to home'} onPress={() => navigation.push('MenuApp')} />
        </View>
      </View>
    </Layout>
  );
};

export default Successful;
