import {Text, View, Image} from 'react-native';

import useStyleSuccessful from './useStyleSuccessful';
import Layout from '../../components/layout/Layout';
import FooterButton from '../../components/footerButton/FooterButton';

const Successful = ({navigation}) => {
  const styles = useStyleSuccessful();
  return (
    <Layout navigation={navigation}>
      <View style={styles.page}>
        <Image
          style={styles.image}
          source={require('../../image/background/suc.png')}
          resizeMode="contain"
        />
        <Text>Your order has been successfully placed</Text>
        <Image
          style={styles.code}
          source={require('../../image/icon/square.png')}
        />

        <FooterButton title={'Go back to home'} />
      </View>
    </Layout>
  );
};

export default Successful;
