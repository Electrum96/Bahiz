import {Text, View, Image} from 'react-native';

import useStyleThanks from './useStyleThanks';
import FooterButton from '../../components/footerButton/FooterButton';
import Layout from '../../components/layout/Layout';

const Thanks = ({navigation}) => {
  const styles = useStyleThanks();
  return (
    <Layout navigation={navigation}>
      <View style={styles.page}>
        <Image
          style={styles.image}
          source={require('../../image/background/suc.png')}
          resizeMode="contain"
        />
       
        <Text style={styles.text}>Thank You! Table Reserved</Text>
         <View style={styles.buttonWrap}>
        <FooterButton
          style={styles.button}
          title={'Go back to home'}
          onPress={() => navigation.push('MenuApp')}
        />
        </View>
      
      </View>
    </Layout>
  );
};

export default Thanks;
