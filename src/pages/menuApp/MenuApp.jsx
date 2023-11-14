import {Text, View, Image} from 'react-native';

import useStyleMenuApp from './useStyleMenuApp';

import RoundButton from '../../components/roundButton/RoundButton';
import PagesList from '../../components/pagesList/PagesList';

const MenuApp = ({navigation}) => {
  const styles = useStyleMenuApp();
  return (
    <View style={styles.menuWrapper}>
      <View>
        <Image style={styles.image} source={require('../../image/Brand.png')} />
      </View>

      <View>
        <PagesList navigation={navigation}/>
      </View>

      <View>
        <RoundButton navigation={navigation} size={40} />
      </View>
    </View>
  );
};

export default MenuApp;
